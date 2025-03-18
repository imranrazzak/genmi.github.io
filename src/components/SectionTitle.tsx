import React from 'react';
import { motion } from 'framer-motion';
export interface SectionTitleProps {
  subtext: string;
  title: string;
  alignment?: 'left' | 'center';
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  subtext,
  title,
  alignment = 'center'
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5
  }} className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="inline-block bg-genmi-50 text-genmi-600 py-1 rounded-full text-sm font-medium mb-3 text-left px-0">
        {subtext}
      </span>
      
    </motion.div>;
};
export default SectionTitle;