import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
interface SectionTitleProps {
  subtext?: string;
  title: string;
  center?: boolean;
  className?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  subtext,
  title,
  center = false,
  className
}) => {
  return <div className={cn("mb-12 space-y-2", center && "text-center", className)}>
      {subtext && <motion.span initial={{
      opacity: 0,
      y: 10
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5,
      delay: 0.1
    }} className="inline-block text-sm font-medium bg-genmi-50 text-genmi-600 px-3 py-1 rounded-full">
          {subtext}
        </motion.span>}
      
    </div>;
};
export default SectionTitle;