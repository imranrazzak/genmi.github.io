
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, UserPlus, Send, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const OpenPositions = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-genmi-50 text-genmi-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              Join Our Research Team
            </h1>
            <p className="text-muted-foreground text-lg">
              We're looking for talented researchers and students passionate about advancing AI in healthcare to join the GenMI research group.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <Tabs defaultValue="postdoc" className="space-y-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full mb-8">
              <TabsTrigger value="postdoc" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                <span className="hidden md:inline">Postdoc</span>
                <span className="md:hidden">Postdoc</span>
              </TabsTrigger>
              <TabsTrigger value="visiting" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <span className="hidden md:inline">Visiting Researchers</span>
                <span className="md:hidden">Visiting</span>
              </TabsTrigger>
              <TabsTrigger value="research-associate" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden md:inline">Research Associate</span>
                <span className="md:hidden">Associate</span>
              </TabsTrigger>
              <TabsTrigger value="student" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden md:inline">PhD/Master Students</span>
                <span className="md:hidden">Students</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="postdoc" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-display font-medium mb-4">Postdoctoral Researcher Positions</h2>
                <p className="text-muted-foreground mb-6">
                  We're looking for exceptional postdoctoral researchers with expertise in AI for healthcare, particularly in the areas of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Generative AI models for medical imaging and multimodal data</li>
                  <li>Machine learning for genomics and multiomics integration</li>
                  <li>Natural language processing for clinical text and medical literature</li>
                  <li>Reinforcement learning for treatment optimization</li>
                </ul>
                <h3 className="text-lg font-medium mb-2">Requirements:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>PhD in Computer Science, Biomedical Engineering, Computational Biology, or related fields</li>
                  <li>Strong publication record in top-tier venues (NeurIPS, ICML, ICLR, CVPR, etc.)</li>
                  <li>Experience with deep learning frameworks (PyTorch, TensorFlow)</li>
                  <li>Excellent programming and research skills</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="flex items-center gap-2 bg-genmi-600 hover:bg-genmi-700">
                    <Send className="h-4 w-4" />
                    Apply Now
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    View Details
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="visiting" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-display font-medium mb-4">Visiting Researcher Program</h2>
                <p className="text-muted-foreground mb-6">
                  GenMI welcomes visiting researchers from academic institutions and industry who wish to collaborate on projects related to AI in healthcare for periods ranging from 3-12 months.
                </p>
                <h3 className="text-lg font-medium mb-2">Areas of Interest:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Cross-institutional collaborations on healthcare AI projects</li>
                  <li>Knowledge exchange between academic and industry researchers</li>
                  <li>Joint publications in high-impact venues</li>
                </ul>
                <h3 className="text-lg font-medium mb-2">Eligibility:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Current faculty members or industry researchers</li>
                  <li>Researchers with a strong background in AI and healthcare</li>
                  <li>Commitment to specific collaborative projects</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="flex items-center gap-2 bg-genmi-600 hover:bg-genmi-700">
                    <Send className="h-4 w-4" />
                    Express Interest
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    Program Details
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="research-associate" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-display font-medium mb-4">Research Associate Positions</h2>
                <p className="text-muted-foreground mb-6">
                  We're seeking Research Associates to support our ongoing projects and help bridge the gap between theoretical research and practical implementation.
                </p>
                <h3 className="text-lg font-medium mb-2">Responsibilities:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Design and implement AI algorithms for healthcare applications</li>
                  <li>Collaborate with clinical partners to translate research into practice</li>
                  <li>Support data collection, preprocessing, and analysis</li>
                  <li>Contribute to publications and grant proposals</li>
                </ul>
                <h3 className="text-lg font-medium mb-2">Requirements:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Master's or PhD in Computer Science, Data Science, or related fields</li>
                  <li>Strong programming skills (Python, R, etc.)</li>
                  <li>Experience with machine learning and data analysis</li>
                  <li>Interest in healthcare applications</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="flex items-center gap-2 bg-genmi-600 hover:bg-genmi-700">
                    <Send className="h-4 w-4" />
                    Apply Now
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    View Details
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="student" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-display font-medium mb-4">PhD and Master's Student Opportunities</h2>
                <p className="text-muted-foreground mb-6">
                  We offer opportunities for graduate students interested in conducting research at the intersection of AI and healthcare.
                </p>
                <h3 className="text-lg font-medium mb-2">PhD Program:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Full-time funded positions for exceptional candidates</li>
                  <li>Opportunity to work on cutting-edge research problems</li>
                  <li>Access to computing resources and healthcare datasets</li>
                  <li>Mentorship from leading researchers in the field</li>
                </ul>
                <h3 className="text-lg font-medium mb-2">Master's Program:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Thesis and non-thesis options available</li>
                  <li>Research assistantships for qualified students</li>
                  <li>Industry-relevant projects with real-world impact</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="flex items-center gap-2 bg-genmi-600 hover:bg-genmi-700">
                    <Send className="h-4 w-4" />
                    Apply to Graduate Program
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    Student Resources
                  </Button>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-6 bg-genmi-50/50">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle
            subtext="Application Process"
            title="How to Apply"
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-genmi-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-genmi-600 font-medium">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Submit Application</h3>
              <p className="text-muted-foreground text-sm">
                Prepare your CV, research statement, and contact information for 2-3 references.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-genmi-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-genmi-600 font-medium">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Initial Review</h3>
              <p className="text-muted-foreground text-sm">
                Applications are reviewed by our team. Shortlisted candidates will be contacted for interviews.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-genmi-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-genmi-600 font-medium">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Interview & Decision</h3>
              <p className="text-muted-foreground text-sm">
                Candidates will present their research and meet with team members. Final decisions are made shortly after.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-white border border-border rounded-3xl p-10 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-6">Have Questions?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                If you have any questions about our open positions or the application process, please don't hesitate to contact us.
              </p>
              <Button className="bg-genmi-600 hover:bg-genmi-700">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OpenPositions;
