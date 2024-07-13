import { useEffect } from 'react';
import { useState } from 'react';

interface Props {
  title: string;
  isActive: boolean;
  interval?: number;
}

const useTypingText = ({ title, isActive, interval = 100 }: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!isActive) {
      setText('');
      return;
    }
    let idx = 0;
    let word = '';

    const timer = setInterval(() => {
      word += title.charAt(idx++).toUpperCase();
      setText(word);
      if (idx === title.length) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [title, interval, isActive]);

  return text;
};

export default useTypingText;
