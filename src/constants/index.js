import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "git", icon: git },
  { title: "React JS", icon: reactjs },
  { title: "Node JS", icon: nodejs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Data Scientist",
    company_name: "Coursera | IBM",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2020 - Nov 2020",
    points: [
      "Adquired a strong foundation in Data Science, covering topics like data analysis, visualization, and machine learning.",
      "Completed hands-on projects to gain practical experience in data analysis and machine learning.",
      "Also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
];

export const projects = [
  {
    name: "Study with Pytorch",
    description:
    "Classification Study with PyTorch and Visualization with Seaborn",
    tags: [
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "Seaborn", color: "green-text-gradient" },
      { name: "Jupyter", color: "pink-text-gradient" },
      { name: "Python", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/rochinh-a/pytorch-seaborn-visualization",
  },
  
];