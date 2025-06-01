
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import MultiomicsDashboard from '@/components/MultiomicsDashboard';
import MedicalImagingVisuals from '@/components/MedicalImagingVisuals';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  HeartPulse, 
  Image as ImageIcon, 
  Dna, 
  Database, 
  LineChart,
  TestTube,
  Building2,
  GraduationCap,
  Users,
  HardDrive,
  FileText,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-genmi-50 text-genmi-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              Pioneering Generative Models for Medical Intelligence
            </h1>
            <p className="text-muted-foreground text-lg">
              The GenMI Lab is at the forefront of developing next-generation AI solutions that transform healthcare through innovative generative models and multimodal learning approaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="research">Research Areas</TabsTrigger>
              <TabsTrigger value="impact">Healthcare Impact</TabsTrigger>
              <TabsTrigger value="datasets">Datasets</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionTitle
                    subtext="Our Purpose"
                    title="Mission & Vision"
                    alignment="left"
                  />
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To revolutionize healthcare through advanced AI techniques that transform medical data into actionable insights, enabling personalized treatments and improved patient outcomes.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        A world where AI-powered healthcare innovations lead to earlier disease detection, more precise treatments, and enhanced quality of life for all individuals regardless of their background or location.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <MultiomicsDashboard />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-8">
              {/* Research Areas */}
              <div className="bg-genmi-50/50 p-8 rounded-2xl">
                <SectionTitle
                  subtext="Areas of Focus"
                  title="Core Research Areas"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Medical Imaging */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-genmi-100 flex items-center justify-center mb-6">
                      <ImageIcon className="w-6 h-6 text-genmi-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Medical Imaging</h3>
                    <p className="text-muted-foreground">
                      Developing advanced deep learning models for medical image analysis, segmentation, and disease detection across modalities including MRI, CT, and histopathology.
                    </p>
                  </motion.div>
                  
                  {/* Multiomics Integration */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-genmi-100 flex items-center justify-center mb-6">
                      <Dna className="w-6 h-6 text-genmi-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Multiomics Integration</h3>
                    <p className="text-muted-foreground">
                      Combining genomics, transcriptomics, proteomics, and metabolomics data with deep learning to uncover biomarkers and disease mechanisms for precision medicine.
                    </p>
                  </motion.div>
                  
                  {/* Neuroscience AI */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-genmi-100 flex items-center justify-center mb-6">
                      <Brain className="w-6 h-6 text-genmi-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Neuroscience AI</h3>
                    <p className="text-muted-foreground">
                      Applying deep learning to neuroimaging and electrophysiological data to understand brain function, diagnose neurological disorders, and develop brain-computer interfaces.
                    </p>
                  </motion.div>
                  
                  {/* Clinical Decision Support */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-genmi-100 flex items-center justify-center mb-6">
                      <HeartPulse className="w-6 h-6 text-genmi-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Clinical Decision Support</h3>
                    <p className="text-muted-foreground">
                      Creating AI systems that synthesize medical data to provide actionable insights for clinicians, improving diagnostic accuracy and treatment planning.
                    </p>
                  </motion.div>
                  
                  {/* Large-scale Biomedical Data */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-genmi-100 flex items-center justify-center mb-6">
                      <Database className="w-6 h-6 text-genmi-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Large-scale Biomedical Data</h3>
                    <p className="text-muted-foreground">
                      Developing methods to effectively process and analyze massive healthcare datasets while ensuring privacy, security, and ethical use of sensitive medical information.
                    </p>
                  </motion.div>
                  
                  {/* Biomedical Foundation Models */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-genmi-100 flex items-center justify-center mb-6">
                      <TestTube className="w-6 h-6 text-genmi-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Biomedical Foundation Models</h3>
                    <p className="text-muted-foreground">
                      Creating large-scale foundation models pre-trained on diverse biomedical data that can be fine-tuned for specific healthcare applications and tasks.
                    </p>
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="mt-8">
              {/* Medical Imaging Visuals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1"
                >
                  <MedicalImagingVisuals />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="order-1 md:order-2"
                >
                  <SectionTitle
                    subtext="Healthcare Impact"
                    title="Transforming Patient Care"
                    alignment="left"
                  />
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Early Disease Detection</h3>
                      <p className="text-muted-foreground">
                        Our AI models can identify subtle patterns in medical data that may indicate early-stage diseases, enabling intervention before symptoms become severe.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Personalized Treatment</h3>
                      <p className="text-muted-foreground">
                        By analyzing a patient's unique genetic makeup and medical history, our systems help clinicians develop truly personalized treatment plans with improved efficacy.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Healthcare Accessibility</h3>
                      <p className="text-muted-foreground">
                        We're developing AI solutions that can bring advanced diagnostic capabilities to underserved regions, bridging healthcare gaps worldwide.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="datasets" className="mt-8">
              {/* Datasets Section */}
              <div className="space-y-8">
                <SectionTitle
                  subtext="Research Resources"
                  title="Medical Datasets & Resources"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Medical Imaging Datasets */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <ImageIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Medical Imaging Datasets</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Curated collections of MRI, CT, X-ray, and histopathology images for AI research.
                    </p>
                    <div className="text-xs text-genmi-600 bg-genmi-50 px-2 py-1 rounded">Multi-modal</div>
                  </motion.div>

                  {/* Genomics Data */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Dna className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Genomics & Omics</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Large-scale genomic, transcriptomic, and proteomic datasets for precision medicine research.
                    </p>
                    <div className="text-xs text-genmi-600 bg-genmi-50 px-2 py-1 rounded">High-throughput</div>
                  </motion.div>

                  {/* Clinical Records */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <FileText className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Clinical Records</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Anonymized electronic health records and clinical trial data for healthcare AI development.
                    </p>
                    <div className="text-xs text-genmi-600 bg-genmi-50 px-2 py-1 rounded">Privacy-preserved</div>
                  </motion.div>

                  {/* Retinal Images */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                      <Eye className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Retinal Disease Dataset</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Comprehensive fundus images and OCT scans for early retinal disease detection research.
                    </p>
                    <div className="text-xs text-genmi-600 bg-genmi-50 px-2 py-1 rounded">Ophthalmology</div>
                  </motion.div>

                  {/* Federated Learning Data */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <HardDrive className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Federated Health Data</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Distributed healthcare datasets for federated learning and privacy-preserving AI research.
                    </p>
                    <div className="text-xs text-genmi-600 bg-genmi-50 px-2 py-1 rounded">Distributed</div>
                  </motion.div>

                  {/* Knowledge Graphs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                      <LineChart className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Medical Knowledge Graphs</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Structured biomedical knowledge bases for LLM integration and reasoning applications.
                    </p>
                    <div className="text-xs text-genmi-600 bg-genmi-50 px-2 py-1 rounded">Structured</div>
                  </motion.div>
                </div>

                <div className="bg-genmi-50/50 p-8 rounded-2xl">
                  <h3 className="text-xl font-medium mb-4">Dataset Access & Collaboration</h3>
                  <p className="text-muted-foreground mb-6">
                    Our datasets are made available to the research community through secure, privacy-preserving platforms. 
                    We actively collaborate with healthcare institutions and research organizations to expand our data resources 
                    while maintaining the highest standards of patient privacy and data security.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white px-4 py-2 rounded-lg border">
                      <span className="text-sm font-medium">HIPAA Compliant</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border">
                      <span className="text-sm font-medium">IRB Approved</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border">
                      <span className="text-sm font-medium">Open Source Tools</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border">
                      <span className="text-sm font-medium">Collaborative Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-white border border-border rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                Interested in Collaborating?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for partners in healthcare, research institutions, and industry to advance our mission of AI-powered healthcare innovation.
              </p>
              <Link
                to="/contact"
                className="bg-genmi-600 text-white rounded-full px-8 py-3 font-medium hover:bg-genmi-700 transition-colors inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
