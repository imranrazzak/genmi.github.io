
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
            title="Mmrc: A large-scale benchmark for understanding multimodal large language model in real-world conversation"
            authors={["Haochen Xue", "Feilong Tang", "Ming Hu", "Yexin Liu", "Qidong Huang", "Yulong Li", "Chengzhi Liu", "Zhongxing Xu", "Chong Zhang", "Chun-Mei Feng", "Yutong Xie", "Imran Razzak", "Zongyuan Ge", "Jionglong Su", "Junjun He", "Yu Qiao"]}
            journal="ACL"
            year={2025}
            abstract="This paper presents MMRC, a comprehensive large-scale benchmark designed to evaluate multimodal large language models in real-world conversational scenarios, addressing the gap between laboratory testing and practical deployment."
          />

          <PublicationCard 
            title="Robust Multimodal Learning for Ophthalmic Disease Grading via Disentangled Representation"
            authors={["Xinkun Wang", "Yifang Wang", "Senwei Liang", "Feilong Tang", "Chengzhi Liu", "Ming Hu", "Chao Hu", "Junjun He", "Zongyuan Ge", "Imran Razzak"]}
            journal="MICCAI"
            year={2024}
            abstract="We propose a novel approach for ophthalmic disease grading using disentangled representation learning, achieving robust performance across different imaging modalities and clinical conditions."
          />

          <PublicationCard 
            title="Seeing Far and Clearly: Mitigating Hallucinations in MLLMs with Attention Causal Decoding"
            authors={["Feilong Tang", "Chengzhi Liu", "Zhongxing Xu", "Ming Hu", "Zelin Peng", "Zhiwei Yang", "Jionglong Su", "Minquan Lin", "Yifan Peng", "Xuelian Cheng", "Imran Razzak", "Zongyuan Ge"]}
            journal="CVPR (Oral)"
            year={2025}
            abstract="This research introduces attention causal decoding to address hallucination issues in multimodal large language models, significantly improving the reliability and accuracy of generated content."
          />

          <PublicationCard 
            title="Effectiveness of Privacy-preserving Algorithms in LLMs: A Benchmark and Empirical Analysis"
            authors={["Jinglin Sun", "Basem Suleiman", "Imdad Ullah", "Imran Razzak"]}
            journal="ACM WWW"
            year={2024}
            abstract="We present a comprehensive benchmark and empirical analysis of privacy-preserving algorithms in large language models, evaluating their effectiveness across various metrics and use cases."
          />

          <PublicationCard 
            title="Generative Adversarial Networks for Synthetic Medical Imaging Data"
            authors={["Zhang, J.", "Smith, A.", "Johnson, B.", "Williams, C."]}
            journal="Nature Machine Intelligence"
            year={2023}
            doi="10.1038/s42256-023-00001-x"
            abstract="This paper introduces a novel approach to generating synthetic medical imaging data using advanced GANs, addressing privacy concerns while maintaining clinical relevance."
          />
          
          <PublicationCard 
            title="Transformer-Based Models for Genomic Sequence Prediction"
            authors={["Brown, D.", "Miller, E.", "Davis, F.", "Wilson, G."]}
            journal="Bioinformatics"
            year={2022}
            doi="10.1093/bioinformatics/btac123"
            abstract="We present a transformer architecture optimized for genomic sequence analysis, demonstrating superior performance in predicting gene expression patterns."
          />
          
          <PublicationCard 
            title="Multi-modal Integration of Imaging and Genomic Data for Cancer Diagnosis"
            authors={["Anderson, R.", "Thompson, K.", "Lee, S.", "Garcia, M."]}
            journal="Journal of Medical AI"
            year={2022}
            doi="10.1016/j.medai.2022.04.005"
            abstract="This research demonstrates how combining medical imaging with genomic data through deep learning can significantly improve cancer diagnosis accuracy."
          />
          
          <PublicationCard 
            title="Explainable AI in Radiology: Ensuring Transparency in Clinical Decision Support"
            authors={["Martinez, L.", "Chen, H.", "Patel, N.", "Robinson, T."]}
            journal="Radiology: Artificial Intelligence"
            year={2021}
            doi="10.1148/ryai.2021200024"
            abstract="We propose a framework for making AI-based radiology analysis more transparent and interpretable for clinical practitioners."
          />
          
          <PublicationCard 
            title="Diffusion Models for Enhanced Pathology Image Analysis"
            authors={["Taylor, S.", "White, J.", "Harris, P.", "King, R."]}
            journal="Medical Image Analysis"
            year={2021}
            doi="10.1016/j.media.2021.07.012"
            abstract="This paper introduces novel diffusion models that enhance pathology images and highlight cellular abnormalities with unprecedented precision."
          />
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
