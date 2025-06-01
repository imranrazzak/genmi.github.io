import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Database, 
  Download, 
  FileText, 
  Image, 
  Users, 
  Calendar, 
  Globe,
  Brain,
  Zap,
  Star,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Shield,
  Heart,
  Tv,
  Eye,
  Scan
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
              Explore Our Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              Datasets
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our diverse collection of datasets, designed to drive innovation and discovery in multimodal AI research.
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
            className="bg-white rounded-2xl border border-gray-200 p-8 mb-16 overflow-hidden"
          >
            <div className="mb-6">
              <img 
                src="/lovable-uploads/cdfeb34f-618a-41c9-896c-13ae6ed3c4ff.png" 
                alt="OphNet-3D Dataset" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">OphNet-3D Dataset</h3>
                <p className="text-cyan-600 font-medium">First Extensive RGB-D Dynamic 3D Reconstruction Dataset for Ophthalmic Surgery</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                <Eye className="w-5 h-5 text-cyan-600" />
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              In this work, we introduce OphNet-3D, the first extensive RGB-D dynamic 3D reconstruction dataset for ophthalmic surgery, comprising 41 sequences from 40 surgeons and totaling 7.1 million frames, with fine-grained annotations of 12 surgical phases, 10 instrument categories, dense MANO hand meshes, and full 6-DoF instrument poses. To scalably produce high-fidelity labels, we design a multi-stage automatic annotation pipeline that integrates multi-view data observation, data-driven motion prior with cross-view geometric consistency and biomechanical constraints, along with a combination of collision-aware interaction constraints for instrument interactions. Building upon OphNet-3D, we establish two challenging benchmarks-bimanual hand pose estimation and hand-instrument interaction reconstruction-and propose two dedicated architectures: H-Net for dual-hand mesh recovery and OH-Net for joint reconstruction of two-hand-two-instrument interactions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-cyan-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan-600">41</div>
                <div className="text-sm text-gray-600">Sequences</div>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan-600">40</div>
                <div className="text-sm text-gray-600">Surgeons</div>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan-600">7.1M</div>
                <div className="text-sm text-gray-600">Frames</div>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan-600">12</div>
                <div className="text-sm text-gray-600">Surgical Phases</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                <FileText className="w-4 h-4 mr-2" />
                Coming Soon
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dataset - MSWAL */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Featured Dataset"
            title="MSWAL"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 mb-16 overflow-hidden"
          >
            <div className="mb-6">
              <img 
                src="/lovable-uploads/2ce0e1cf-ea35-484b-b626-b6a40f10fa4a.png" 
                alt="MSWAL Dataset - Whole Abdominal Lesions Segmentation" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Whole Abdominal Lesions Segmentation (MSWAL)</h3>
                <p className="text-orange-600 font-medium">First 3D Multi-class Segmentation of the Whole Abdominal Lesions Dataset</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Scan className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We introduce MSWAL, the first 3D Multi-class Segmentation of the Whole Abdominal Lesions dataset, which broadens the coverage of various common lesion types, such as gallstones, kidney stones, liver tumors, kidney tumors, pancreatic cancer, liver cysts, and kidney cysts. With CT scans collected from 694 patients (191,417 slices) of different genders across various scanning phases, MSWAL demonstrates strong robustness and generalizability. The transfer learning experiment from MSWAL to two public datasets, LiTS and KiTS, effectively demonstrates consistent improvements, with Dice Similarity Coefficient (DSC) increase of 3.00% for liver tumors and 0.89% for kidney tumors, demonstrating that the comprehensive annotations and diverse lesion types in MSWAL facilitate effective learning across different domains and data distributions. Furthermore, we propose Inception nnU-Net, a novel segmentation framework that effectively integrates an Inception module with the nnU-Net architecture to extract information from different receptive fields, achieving significant enhancement in both voxel-level DSC and region-level F1 compared to the cutting-edge public algorithms on MSWAL.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">694</div>
                <div className="text-sm text-gray-600">Patients</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">191,417</div>
                <div className="text-sm text-gray-600">CT Slices</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">7</div>
                <div className="text-sm text-gray-600">Lesion Types</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">3.00%</div>
                <div className="text-sm text-gray-600">DSC Improvement</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                <FileText className="w-4 h-4 mr-2" />
                Coming Soon
              </button>
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
            className="bg-white rounded-2xl border border-gray-200 p-8 mb-16"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MMRC Dataset</h3>
                <p className="text-blue-600 font-medium">A Large-Scale Benchmark for Understanding Multimodal Large Language Model in Real-World Conversation</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              This paper presents MMRC, a comprehensive large-scale benchmark designed to evaluate multimodal large language models in real-world conversational scenarios, addressing the gap between laboratory testing and practical deployment.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">23</div>
                <div className="text-sm text-gray-600">Participants</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">166K</div>
                <div className="text-sm text-gray-600">QA-Pairs</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">500K</div>
                <div className="text-sm text-gray-600">Judgments</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://arxiv.org/pdf/2410.22648" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Read Paper
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
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
            className="bg-white rounded-2xl border border-gray-200 p-8 mb-16"
          >
            <div className="mb-6">
              <img 
                src="/lovable-uploads/f97827e1-8222-4671-aa75-364351277825.png" 
                alt="MMHealth Dataset" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MMHealth Dataset</h3>
                <p className="text-emerald-600 font-medium">Multimodal Multi-Task Dataset for Benchmarking Health Misinformation</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We present MMHealth, a large scale multimodal misinformation dataset in the health domain consisting of 34,746 news article encompassing both textual and visual information. MM-Health includes human-generated multimodal information (5,776 articles) and AI-generated multimodal information (28,880 articles) from various SOTA generative AI models. Additionally, We benchmarked our dataset against three tasks—reliability checks, originality checks, and fine-grained AI detection—demonstrating that existing SOTA models struggle to accurately distinguish the reliability and origin of information. Our dataset aims to support the development of misinformation detection across various health scenarios, facilitating the detection of human and machine-generated content at multimodal levels.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-emerald-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-emerald-600">34,746</div>
                <div className="text-sm text-gray-600">News Articles</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-emerald-600">5,776</div>
                <div className="text-sm text-gray-600">Human-Generated</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-emerald-600">28,880</div>
                <div className="text-sm text-gray-600">AI-Generated</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-emerald-600">3</div>
                <div className="text-sm text-gray-600">Benchmark Tasks</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://arxiv.org/pdf/2505.18685" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Read Paper
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dataset - MERCI */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Featured Dataset"
            title="MERCI"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 mb-16"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MERCI Dataset</h3>
                <p className="text-purple-600 font-medium">A Multimodal Dataset for Personalised and Emotionally-Aware Dialogues</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We introduce MERCI (Multimodal dataset for Emotionally-aware peRsonalised Conversational Interactions), a dataset derived from user-robot dialogues involving thirty participants who completed user profile questionnaires covering ten personal topics (e.g., hobbies, music). A conversational system called PERCY then engaged with each participant in open-domain conversations, leveraging GPT-4, real-time facial-expression and sentiment analysis to generate contextually appropriate, empathetic responses. MERCI contains 1860 utterances, equating to about 12.5 hours of aligned audio, three-view video, transcripts with timestamps, emotion labels, and sentiment scores. This dataset serves as a reproducible test-bed for tasks such as emotion-grounded response generation, multimodal affect recognition, and personalised policy learning.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">30</div>
                <div className="text-sm text-gray-600">Participants</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">1,860</div>
                <div className="text-sm text-gray-600">Utterances</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">12.5</div>
                <div className="text-sm text-gray-600">Hours</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">10</div>
                <div className="text-sm text-gray-600">Personal Topics</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dataset - SimpsonsVQA */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Featured Dataset"
            title="SimpsonsVQA"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 mb-16"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">SimpsonsVQA Dataset</h3>
                <p className="text-yellow-600 font-medium">Enhancing Inquiry-Based Learning with a Tailored Dataset</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <Tv className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              In this paper, we present "SimpsonsVQA", a novel dataset for VQA derived from The Simpsons TV show, designed to promote inquiry-based learning. Our dataset is specifically designed to address not only the traditional VQA task but also to identify irrelevant questions related to images, as well as the reverse scenario where a user provides an answer to a question that the system must evaluate (e.g., as correct, incorrect, or ambiguous). It aims to cater to various visual applications, harnessing the visual content of "The Simpsons" to create engaging and informative interactive systems. SimpsonsVQA contains approximately 23K images, 166K QA pairs, and 500K judgments.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600">23K</div>
                <div className="text-sm text-gray-600">Images</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600">166K</div>
                <div className="text-sm text-gray-600">QA Pairs</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600">500K</div>
                <div className="text-sm text-gray-600">Judgments</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://arxiv.org/pdf/2410.22648" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Read Paper
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Datasets Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Explore More"
            title="Overview of Datasets"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dataset Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium">Medical Imaging Dataset</h3>
                  <Database className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  A comprehensive collection of medical images for AI research.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Image className="w-4 h-4 mr-2" />
                    10,000 Images
                  </div>
                  <a href="#" className="inline-flex items-center text-genmi-600 hover:text-genmi-800 transition-colors">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Dataset Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium">Genomic Sequence Dataset</h3>
                  <BarChart3 className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Extensive genomic data for bioinformatics and AI applications.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Zap className="w-4 h-4 mr-2" />
                    5,000 Sequences
                  </div>
                  <a href="#" className="inline-flex items-center text-genmi-600 hover:text-genmi-800 transition-colors">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Dataset Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium">Social Media Sentiment Dataset</h3>
                  <Users className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Real-time sentiment analysis data from diverse social platforms.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Globe className="w-4 h-4 mr-2" />
                    1 Million Posts
                  </div>
                  <a href="#" className="inline-flex items-center text-genmi-600 hover:text-genmi-800 transition-colors">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access and Download */}
      <section className="py-16 px-6 bg-genmi-50">
        <div className="container mx-auto text-center">
          <SectionTitle
            title="Access Our Datasets"
            alignment="center"
            className="mb-8"
          />
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Our datasets are available for academic and research purposes. 
            Please review the terms of use and download the datasets to advance your work.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-genmi-600 text-white rounded-lg hover:bg-genmi-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Datasets
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-genmi-600 text-genmi-600 rounded-lg hover:bg-genmi-50 hover:text-genmi-800 transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Terms of Use
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datasets;
