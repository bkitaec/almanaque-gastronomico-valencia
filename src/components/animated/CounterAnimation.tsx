import { useInView, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

interface Props {
  target: number;
  suffix?: string;
  className?: string;
}

export default function CounterAnimation({ target, suffix = '', className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, target, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = Math.round(v) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}
