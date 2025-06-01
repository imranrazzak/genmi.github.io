
import React from 'react';
import { motion } from 'framer-motion';

const TeamHero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block bg-genmi-50 text-genmi-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
            Meet the Minds Behind GenMI
          </h1>
          <p className="text-muted-foreground text-lg">
            Our diverse team of researchers, scientists, and students is dedicated to pushing the boundaries of what's possible with generative AI in healthcare.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHero;
