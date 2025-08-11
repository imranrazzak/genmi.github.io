import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AcceptedPapersCard = () => {
  const acceptedPapers = [
    {
      venue: "ACL + IEEE SMC",
      count: "1+1",
      description: "Association for Computational Linguistics and IEEE Systems, Man, and Cybernetics",
      color: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      venue: "ACM MM and CIKM",
      count: "1+1",
      description: "ACM Multimedia and Conference on Information and Knowledge Management",
      color: "bg-orange-100 text-orange-700",
      borderColor: "border-orange-200"
    },
    {
      venue: "MICCAI",
      count: 2,
      description: "Medical Image Computing and Computer Assisted Intervention",
      color: "bg-green-100 text-green-700",
      borderColor: "border-green-200"
    },
    {
      venue: "Nature Digital Medicine",
      count: 1,
      description: "Nature Digital Medicine Journal",
      color: "bg-purple-100 text-purple-700",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <Card className="border-genmi-200 bg-gradient-to-r from-genmi-50 to-blue-50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-genmi-100 flex items-center justify-center">
              <Award className="w-5 h-5 text-genmi-600" />
            </div>
            <div>
              <CardTitle className="text-xl text-gray-900">Recent Paper Acceptances</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <Calendar className="w-4 h-4 mr-2" />
                Latest Achievements
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-700 mb-6">
            We're excited to announce our recent paper acceptances at top-tier venues in AI, medical imaging, and digital health.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {acceptedPapers.map((paper, index) => (
              <motion.div
                key={paper.venue}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white p-4 rounded-lg border-2 ${paper.borderColor} hover:shadow-md transition-all duration-300`}
              >
                <div className="text-center">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${paper.color}`}>
                    {paper.venue}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {paper.count}
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    {paper.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center text-sm text-genmi-600 hover:text-genmi-800 transition-colors cursor-pointer">
              View all publications
              <ExternalLink className="w-4 h-4 ml-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AcceptedPapersCard;
