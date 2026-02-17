import { motion, useMotionValue, useTransform } from 'motion/react';
import type { ReactNode, MouseEvent } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  className?: string;
  index?: number;
}

export default function AnimatedCard({ children, href, className = '', index = 0 }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  function handleMouse(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.a
      href={href}
      className={`block ${className}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(33,41,52,0.15)' }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.a>
  );
}
