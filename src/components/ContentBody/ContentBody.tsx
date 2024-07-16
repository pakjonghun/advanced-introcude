import { FC, ReactNode, useEffect, useRef } from 'react';
import { VerticalOffset } from '../../App/App';
import styles from './ContentBody.module.css';

interface Props {
  index: number;
  setVertical: (index: number, vertical: VerticalOffset) => void;
  children: ReactNode;
  pageIndex: number;
}

const ContentBody: FC<Props> = ({ pageIndex, setVertical, index, children }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const target = elementRef.current;

    setVertical(index, {
      start: target.offsetTop,
      end: target.offsetTop + target.clientHeight,
    });
  }, []);

  useEffect(() => {
    const isEnd = pageIndex >= 1;
    if (!canvasRef.current || !sectionRef.current) return;

    const height = sectionRef.current.clientHeight;
    const width = sectionRef.current.clientWidth;
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
    const offset = 60;
    let x = 0;
    let y = isEnd ? offset : height - offset; // Start from the bottom of the canvas
    let dx = 2;
    const amplitude = 40;
    const frequency = 0.009;
    const initialRadius = 30;
    const initialOpacity = 1.0;
    const image = new Image();
    image.src = '/fly2.svg';
    image.onload = () => {
      const draw = () => {
        if (ctx) {
          ctx.clearRect(0, 0, width, height);

          // Update position
          x += dx;
          y = isEnd
            ? offset + (amplitude * Math.sin(frequency * x) + initialRadius)
            : height - (amplitude * Math.sin(frequency * x) + initialRadius);

          // Calculate current radius and opacity
          const progress = (x / width) * 2;
          const radius = initialRadius * (1 - progress);
          let opacity = initialOpacity * (1 - progress);
          opacity = opacity <= 0 ? 0 : opacity;

          if (y <= 0 || radius <= 0 || opacity <= 0) {
            return;
          }

          ctx.globalAlpha = opacity;
          ctx.drawImage(image, x, y, radius, radius);
          ctx.globalAlpha = 1.0;

          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(33, 33, 33, ${opacity})`;
          ctx.fill();
          ctx.closePath();
        }
      };

      const animate = () => {
        draw();
        if (pageIndex !== index) return;
        if (x - initialRadius <= width) {
          requestAnimationFrame(animate);
        } else {
          ctx.clearRect(0, 0, width, height);
        }
      };

      animate();
    };
  }, [pageIndex]);

  const isDark = false;
  // const isDark = index % 2 !== 0;

  return (
    <section ref={elementRef} className={`${styles.container} ${isDark && styles.dark}`}>
      <div ref={sectionRef} className={`${styles.children} ${isDark && styles.dark}`}>
        {children}
      </div>
      <canvas className={styles.canvas} ref={canvasRef} />
    </section>
  );
};

export default ContentBody;
