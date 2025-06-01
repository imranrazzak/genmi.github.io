
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JoinTeamSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="bg-white border border-border rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Join Our Team</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented researchers and students who are passionate about using AI to transform healthcare. Check our openings or reach out directly.
            </p>
            <Link
              to="/open-positions"
              className="bg-genmi-600 text-white rounded-full px-8 py-3 font-medium hover:bg-genmi-700 transition-colors inline-block"
            >
              View Open Positions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
