
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import MultiomicsDashboard from '@/components/MultiomicsDashboard';
import MedicalImagingVisuals from '@/components/MedicalImagingVisuals';
import { 
  Brain, 
  HeartPulse, 
  Microscope, 
  Dna, 
  Database, 
  LineChart,
  TestTube,
  Building2,
  GraduationCap,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-genmi-50 text-genmi-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              Pioneering the Future of
              <span className="text-gradient"> Healthcare AI</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-10">
              At GenMI, we're at the forefront of developing generative AI solutions that transform genomics and medical imaging, 
              creating a new paradigm for personalized healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-6 bg-genmi-50/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-medium">Our Mission</h2>
              <p className="text-muted-foreground">
                The GenMI laboratory focuses on human-centered AI, combining multiomics, biomedical imaging, 
                visualization, and information technologies to develop innovative clinical applications that advance 
                patient health and well-being.
              </p>
              <p className="text-muted-foreground">
                Our research addresses critical healthcare challenges by developing foundational theories in 
                information technologies and computer science to advance Personalized, Preventive, and Predictive Medicine. 
              </p>
              <div className="pt-4">
                <Link to="/team" className="text-genmi-600 font-medium hover:text-genmi-700 transition-colors">
                  Meet our team →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-medium">Our Vision</h2>
              <p className="text-muted-foreground">
                We envision a healthcare future where AI-driven tools enable precise, personalized treatments 
                based on a comprehensive understanding of an individual's genome, proteome, and medical imaging data.
              </p>
              <p className="text-muted-foreground">
                Through partnerships with leading industry players—such as major hospitals and healthcare companies—we 
                translate cutting-edge research into real-world applications, spanning algorithm development, prototype creation, 
                and commercialization.
              </p>
              <div className="pt-4">
                <Link to="/publications" className="text-genmi-600 font-medium hover:text-genmi-700 transition-colors">
                  Explore our research →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Research Areas */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle 
            title="Core Research Areas" 
            description="Our research spans multiple disciplines, combining expertise in AI, genomics, and medical imaging to develop novel healthcare solutions."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow"
            >
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Dna className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Genomics & Multiomics</h3>
              <p className="text-muted-foreground">
                Developing generative models for genomic data analysis, integrating multi-layered data including single-cell RNA 
                sequencing and methylomics to gain comprehensive insights into disease entities.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow"
            >
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Image className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Medical Imaging</h3>
              <p className="text-muted-foreground">
                Creating AI models for automated annotation of radiological images, enhancing diagnostic accuracy, 
                and developing novel visualization tools for medical professionals to better interpret complex imaging data.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow"
            >
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Leveraging expertise in machine learning, computer vision, and artificial intelligence to develop clinical 
                decision support systems for cancer treatment and solutions for routine clinical tasks.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-shadow"
            >
              <div className="bg-genmi-100 text-genmi-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Precision Medicine</h3>
              <p className="text-muted-foreground">
                Translating research breakthroughs into significant advancements in precision and personalized medicine, 
                improving patient care through AI-driven treatment planning and telehealth solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multiomics Visualization */}
      <section className="py-16 px-6 bg-genmi-50/50">
        <div className="container mx-auto">
          <SectionTitle 
            subtext="Data Visualization"
            title="Multiomics Research" 
            description="Our cutting-edge multiomics research integrates genomic, transcriptomic, and proteomic data for comprehensive disease understanding."
            center={true}
          />

          <div className="mt-12">
            <MultiomicsDashboard />
          </div>
        </div>
      </section>

      {/* Medical Imaging Visualization */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle 
            subtext="AI Applications"
            title="Medical Imaging Innovation" 
            description="Our AI models enhance the diagnostic value of medical images, improving accuracy and enabling earlier disease detection."
            center={true}
          />

          <div className="mt-12">
            <MedicalImagingVisuals />
          </div>
        </div>
      </section>

      {/* Healthcare Impact */}
      <section className="py-16 px-6 bg-gradient-to-r from-genmi-600 to-genmi-500 text-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Healthcare Impact" 
            description="We're transforming healthcare through AI-powered solutions that enhance patient care, clinical decision-making, and treatment outcomes."
            center={true}
            className="text-white [&_.text-muted-foreground]:text-white/80"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="bg-white/20 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Clinical Partnerships</h3>
              <p className="text-white/80">
                Collaborating with leading hospitals and healthcare providers to validate and implement our AI technologies in real clinical settings.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="bg-white/20 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Education & Training</h3>
              <p className="text-white/80">
                Developing educational programs to prepare the next generation of healthcare professionals for the AI-driven future of medicine.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="bg-white/20 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Flask className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Research Translation</h3>
              <p className="text-white/80">
                Converting breakthrough research into practical applications through prototype development and clinical validation studies.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="bg-white/20 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">Patient Engagement</h3>
              <p className="text-white/80">
                Designing patient-centered solutions that improve healthcare accessibility, patient monitoring, and treatment adherence.
              </p>
            </motion.div>
          </div>
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
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Join Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Whether you're a researcher, healthcare professional, industry partner, or student, we invite you to be part of 
                our journey to revolutionize healthcare through AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@genmi-lab.org"
                  className="bg-genmi-600 text-white rounded-full px-8 py-3 font-medium hover:bg-genmi-700 transition-colors inline-block"
                >
                  Contact Us
                </a>
                <Link
                  to="/team"
                  className="text-foreground rounded-full px-8 py-3 font-medium border border-border hover:bg-background/80 transition-colors inline-block"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
