
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Image as ImageIcon, 
  Dna, 
  FileText,
  Eye,
  HardDrive,
  LineChart,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Shield
} from 'lucide-react';

const Datasets = () => {
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
              Medical Datasets
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              Research Datasets & Resources
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our comprehensive collection of medical datasets that power AI research and innovation in healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Dataset - OphNet-3D */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Featured Dataset"
            title="OphNet-3D"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/1938174f-8d3c-49db-a7c9-e70ba045d4a8.png" 
                alt="OphNet-3D Dataset Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">OphNet-3D Dataset</h3>
                  <p className="text-blue-600 font-medium">RGB-D Dynamic 3D Reconstruction for Ophthalmic Surgery</p>
                </div>
                <a
                  href="https://arxiv.org/abs/2505.17677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  View Paper
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                OphNet-3D, the first extensive RGB-D dynamic 3D reconstruction dataset for ophthalmic surgery, comprising 41 sequences from 40 surgeons and totaling 7.1 million frames, with fine-grained annotations of 12 surgical phases, 10 instrument categories, dense MANO hand meshes, and full 6-DoF instrument poses.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">41</div>
                  <div className="text-sm text-gray-600">Sequences</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">40</div>
                  <div className="text-sm text-gray-600">Surgeons</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">7.1M</div>
                  <div className="text-sm text-gray-600">Frames</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Surgical Phases</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dataset - MMRC */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Featured Dataset"
            title="MMRC"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-15">
              <img 
                src="/lovable-uploads/46aac854-7992-4390-b660-552f4ff5f8e9.png" 
                alt="MMRC Dataset Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">MMRC Dataset</h3>
                  <p className="text-green-600 font-medium">A Large-Scale Benchmark for LLM in Real-World Conversation</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                With data collected from real-world scenarios, MMRC comprises 5,120 conversations and 28,720 corresponding manually labeled questions, posing a significant challenge to existing MLLMs. Evaluations on 20 MLLMs in MMRC indicate an accuracy drop during open-ended interactions. We identify four common failure patterns: long-term memory degradation, inadequacies in updating factual knowledge, accumulated assumption of error propagation, and reluctance to "say no." To mitigate these issues, we propose a simple yet effective NOTE-TAKING strategy, which can record key information from the conversation and remind the model during its responses, enhancing conversational capabilities. Experiments across six MLLMs demonstrate significant performance improvements.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">5,120</div>
                  <div className="text-sm text-gray-600">Conversations</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">28,720</div>
                  <div className="text-sm text-gray-600">Questions</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">20</div>
                  <div className="text-sm text-gray-600">MLLMs Evaluated</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">6</div>
                  <div className="text-sm text-gray-600">Models Improved</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dataset - MMHealth */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Featured Dataset"
            title="MMHealth"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-16 relative overflow-hidden"
            style={{
              backgroundImage: `url('/lovable-uploads/f97827e1-8222-4671-aa75-364351277825.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50/90 to-red-50/90 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">MMHealth Dataset</h3>
                  <p className="text-orange-600 font-medium">Multimodal Multi-Task Dataset for Benchmarking Health Misinformation</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://arxiv.org/pdf/2505.18685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors inline-flex items-center gap-2"
                  >
                    View Paper
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We present MMHealth, a large scale multimodal misinformation dataset in the health domain consisting of 34,746 news articles encompassing both textual and visual information. MM-Health includes human-generated multimodal information (5,776 articles) and AI-generated multimodal information (28,880 articles) from various SOTA generative AI models. Additionally, we benchmarked our dataset against three tasks—reliability checks, originality checks, and fine-grained AI detection—demonstrating that existing SOTA models struggle to accurately distinguish the reliability and origin of information. Our dataset aims to support the development of misinformation detection across various health scenarios, facilitating the detection of human and machine-generated content at multimodal levels.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">34,746</div>
                  <div className="text-sm text-gray-600">News Articles</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">5,776</div>
                  <div className="text-sm text-gray-600">Human Articles</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">28,880</div>
                  <div className="text-sm text-gray-600">AI Articles</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">3</div>
                  <div className="text-sm text-gray-600">Benchmark Tasks</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Datasets Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Available Resources"
            title="Medical Datasets Collection"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

          {/* Access Information */}
          <div className="bg-genmi-50/50 p-8 rounded-2xl mb-12">
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

          {/* Link to About Page */}
          <div className="text-center">
            <Link
              to="/about#datasets"
              className="inline-flex items-center gap-2 bg-genmi-600 text-white rounded-full px-6 py-3 font-medium hover:bg-genmi-700 transition-colors"
            >
              View Complete Dataset Information
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                Need Access to Our Datasets?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Contact our research team to discuss collaboration opportunities and dataset access for your research projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/about"
                  className="bg-genmi-600 text-white rounded-full px-8 py-3 font-medium hover:bg-genmi-700 transition-colors inline-flex items-center gap-2"
                >
                  Learn More About Us
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <button className="border border-genmi-600 text-genmi-600 rounded-full px-8 py-3 font-medium hover:bg-genmi-50 transition-colors">
                  Request Dataset Access
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datasets;
