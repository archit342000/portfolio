export const projects = [
  {
    id: 'llm-chatbot',
    title: 'Contextual LLM Chatbot',
    description: 'An intelligent conversational agent built with RAG architecture to answer questions based on custom document knowledge bases.',
    longDescription: 'This project implements a Retrieval-Augmented Generation (RAG) system using LangChain and OpenAI. It allows users to upload PDF documents, which are then vectorised and stored in Pinecone. The chatbot can then answer questions specifically related to the uploaded content, providing citations and context.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2000',
    techStack: ['Python', 'LangChain', 'React', 'FastAPI', 'Pinecone'],
    link: '#'
  },
  {
    id: 'vision-dashboard',
    title: 'Computer Vision Analytics',
    description: 'Real-time object detection and analytics dashboard for manufacturing lines to defect anomalies.',
    longDescription: 'A comprehensive solution for quality control in manufacturing. Using YOLOv8 for object detection, this system analyzes video feeds in real-time to identify defects. The dashboard, built with React and D3.js, visualizes defect rates and operational efficiency.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2000',
    techStack: ['Python', 'YOLOv8', 'React', 'TensorFlow', 'WebSocket'],
    link: '#'
  },
  {
    id: 'sentiment-analyzer',
    title: 'Financial Sentiment Analyzer',
    description: 'NLP pipeline to analyze financial news and predict market trends using transformer models.',
    longDescription: 'Leveraging BERT models fine-tuned on financial texts, this tool aggregates news from multiple sources and determines the sentiment (bullish/bearish). It provides an API for trading algorithms to factor in market sentiment.',
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=2000',
    techStack: ['Python', 'Hugging Face', 'Transformers', 'Flask', 'Pandas'],
    link: '#'
  },
    {
    id: 'ai-image-gen',
    title: 'Generative AI Art Tool',
    description: 'A web-based tool allowing users to generate and edit images using Stable Diffusion with custom LoRA models.',
    longDescription: 'This application wraps Stable Diffusion in an intuitive UI. It supports in-painting, out-painting, and custom style training via LoRA. The backend is optimized for inference on consumer GPUs.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000',
    techStack: ['Python', 'PyTorch', 'React', 'Stable Diffusion', 'FastAPI'],
    link: '#'
  }
];
