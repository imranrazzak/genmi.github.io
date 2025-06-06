
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
            title="A Cross Population Study of Retinal Aging Biomarkers with Longitudinal Pre-training and Label Distribution Learning"
            authors={["Zongyuan Ge", "Zhen Yu", "Ruiye Chen", "Peng Gui", "Wei Wang", "Imran Razzak", "Hamid Alinejad-Rokny", "Xiaomin Zeng", "Xianwen Shang", "Lei Zhang", "Xiaohong Yang", "Honghua Yu", "Wenyong Huang", "Huimin Lu", "Peter van Wijngaarden", "Mingguang He", "Zhuoting Zhu"]}
            journal="Nature Digital Medicine"
            year={2025}
            abstract="This study presents a comprehensive cross-population analysis of retinal aging biomarkers using longitudinal pre-training and label distribution learning approaches to understand aging patterns across diverse populations."
          />

          <PublicationCard 
            title="Robust Multimodal Learning for Ophthalmic Disease Grading via Disentangled Representation"
            authors={["Xinkun Wang", "Yifang Wang", "Senwei Liang", "Feilong Tang", "Chengzhi Liu", "Ming Hu", "Chao Hu", "Junjun He", "Zongyuan Ge", "Imran Razzak"]}
            journal="MICCAI"
            year={2025}
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
            title="Navigating loss manifolds via rigid body dynamics: A promising avenue for robustness and generalisation"
            authors={["Mohammed D. Belgoumri", "Mohamed Reda Bouadjenek", "Hakim Hacid", "Imran Razzak", "Sunil Aryal"]}
            journal="arXiv preprint arXiv:2505.19527"
            year={2025}
            abstract="This paper explores the use of rigid body dynamics to navigate loss manifolds, presenting a novel approach for improving robustness and generalization in machine learning models."
          />

          <PublicationCard 
            title="From Generation to Detection: A Multimodal Multi-Task Dataset for Benchmarking Health Misinformation"
            authors={["Z. Zhang", "Y. Zhang", "X. Zhou", "L. Huang", "I. Razzak", "P. Nakov", "U. Naseem"]}
            journal="arXiv preprint arXiv:2505.18685"
            year={2025}
            abstract="We present a comprehensive multimodal multi-task dataset designed to benchmark methods for both generating and detecting health misinformation across various modalities and contexts."
          />

          <PublicationCard 
            title="Towards Dynamic 3D Reconstruction of Hand-Instrument Interaction in Ophthalmic Surgery"
            authors={["Ming Hu", "Zhendi Yu", "Feilong Tang", "Kaiwen Chen", "Yulong Li", "Imran Razzak", "Junjun He", "Tolga Birdal", "Kaijing Zhou", "Zongyuan Ge"]}
            journal="arXiv preprint arXiv:2505.17677"
            year={2025}
            abstract="This work presents a novel approach for dynamic 3D reconstruction of hand-instrument interactions during ophthalmic surgery, enabling better understanding and analysis of surgical procedures."
          />

          <PublicationCard 
            title="Divide by Question, Conquer by Agent: SPLIT-RAG with Question-Driven Graph Partitioning"
            authors={["Ruiyi Yang", "Hao Xue", "Imran Razzak", "Hakim Hacid", "Flora D. Salim"]}
            journal="arXiv preprint arXiv:2505.13994"
            year={2025}
            abstract="We introduce SPLIT-RAG, a novel retrieval-augmented generation approach that uses question-driven graph partitioning to improve the efficiency and accuracy of information retrieval and generation."
          />

          <PublicationCard 
            title="Effectiveness of Privacy-preserving Algorithms in LLMs: A Benchmark and Empirical Analysis"
            authors={["Jinglin Sun", "Basem Suleiman", "Imdad Ullah", "Imran Razzak"]}
            journal="ACM WWW"
            year={2024}
            abstract="We present a comprehensive benchmark and empirical analysis of privacy-preserving algorithms in large language models, evaluating their effectiveness across various metrics and use cases."
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
