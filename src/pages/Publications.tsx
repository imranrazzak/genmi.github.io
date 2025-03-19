
import React from 'react';
import Layout from '@/components/Layout';
import PublicationCard from '@/components/PublicationCard';
import SectionTitle from '@/components/SectionTitle';

const Publications = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <SectionTitle title="Our Publications" alignment="center" />
        
        <div className="grid grid-cols-1 gap-6 mt-12">
          <PublicationCard 
            title="Generative Adversarial Networks for Synthetic Medical Imaging Data"
            authors={["Zhang, J.", "Smith, A.", "Johnson, B.", "Williams, C."]}
            journal="Nature Machine Intelligence"
            year={2023}
            doi="10.1038/s42256-023-00001-x"
            abstract="This paper introduces a novel approach to generating synthetic medical imaging data using advanced GANs, addressing privacy concerns while maintaining clinical relevance."
            link="https://example.com/publication1"
          />
          
          <PublicationCard 
            title="Transformer-Based Models for Genomic Sequence Prediction"
            authors={["Brown, D.", "Miller, E.", "Davis, F.", "Wilson, G."]}
            journal="Bioinformatics"
            year={2022}
            doi="10.1093/bioinformatics/btac123"
            abstract="We present a transformer architecture optimized for genomic sequence analysis, demonstrating superior performance in predicting gene expression patterns."
            link="https://example.com/publication2"
          />
          
          <PublicationCard 
            title="Multi-modal Integration of Imaging and Genomic Data for Cancer Diagnosis"
            authors={["Anderson, R.", "Thompson, K.", "Lee, S.", "Garcia, M."]}
            journal="Journal of Medical AI"
            year={2022}
            doi="10.1016/j.medai.2022.04.005"
            abstract="This research demonstrates how combining medical imaging with genomic data through deep learning can significantly improve cancer diagnosis accuracy."
            link="https://example.com/publication3"
          />
          
          <PublicationCard 
            title="Explainable AI in Radiology: Ensuring Transparency in Clinical Decision Support"
            authors={["Martinez, L.", "Chen, H.", "Patel, N.", "Robinson, T."]}
            journal="Radiology: Artificial Intelligence"
            year={2021}
            doi="10.1148/ryai.2021200024"
            abstract="We propose a framework for making AI-based radiology analysis more transparent and interpretable for clinical practitioners."
            link="https://example.com/publication4"
          />
          
          <PublicationCard 
            title="Diffusion Models for Enhanced Pathology Image Analysis"
            authors={["Taylor, S.", "White, J.", "Harris, P.", "King, R."]}
            journal="Medical Image Analysis"
            year={2021}
            doi="10.1016/j.media.2021.07.012"
            abstract="This paper introduces novel diffusion models that enhance pathology images and highlight cellular abnormalities with unprecedented precision."
            link="https://example.com/publication5"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
