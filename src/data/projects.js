import AIDocument1 from "../assets/images/AIDocument1.png";
import AIDocument2 from "../assets/images/AIDocument2.png";
import AIDocument3 from "../assets/images/AIDocument3.png";
import AIDocument4 from "../assets/images/AIDocument4.png";
import RetinaProject from "../assets/images/Retina1.png";

const projects = [
  {
    title: "RetinaVision – Multiple Disease Classification App",
    image: RetinaProject,
    alt: "RetinaVision Project Screenshot",
    descriptions: [
      <>
        Developed an AI-based web app for automated classification of multiple retinal
        diseases using <b>EfficientNetB0</b>.
      </>,
      <>
        Built with <b>Flask</b> and <b>TensorFlow</b>, featuring retina image validation,
        intuitive UI, and detailed prediction with confidence score.
      </>,
    ],
    techTags: ["Flask,", "TensorFlow,", "Python,", "AI/ML"],
  },
  {
    title: "AI Document – Intelligent Document Q&A and Summarization",
    image: AIDocument1,
    alt: "AI Document Project Screenshot",
    galleryImages: [
      { src: AIDocument1, alt: "AI Document screenshot 1" },
      { src: AIDocument2, alt: "AI Document screenshot 2" },
      { src: AIDocument3, alt: "AI Document screenshot 3" },
      { src: AIDocument4, alt: "AI Document screenshot 4" },
    ],
    descriptions: [
      <>
        Developed an AI-based application that allows users to upload PDF or TXT documents and automatically generate summaries and answers to user queries.
      </>,
      <>
        Implemented a Retrieval-Augmented Generation (RAG) pipeline using <b>LangChain</b>, <b>HuggingFace embeddings</b>, vector database, and <b>Ollama LLM</b>, along with a responsive <b>Streamlit</b> interface for interactive document chat.
      </>,
    ],
    techTags: ["LangChain,", "HuggingFace,", "Vector DB,", "Ollama,", "Streamlit"],
  },
];

export default projects;
