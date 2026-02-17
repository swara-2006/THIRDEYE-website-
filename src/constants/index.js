import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Features",
    url: "#features",
  },
  {
    id: "3",
    title: "Journey",
    url: "#journey",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = ["James Dyson", "NextGen", "INSPIRE Awards MANAK"];

export const brainwaveServices = [
  "Vision Intelligence System",
  "Safety & Alert Protocol",
  "Smart Navigation Control",
  "Real-Time Tracking Network",
  "Braille Instruction Manual",
  "Cost-Effective Innovation",
];


export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Empathy & Ideation",
    description: "Understanding needs and fast prototyping",
    features: [
      "Talked to visually impaired users to understand real needs",
      "Built first working stick with fused ultrasonic + IR + IMU data",
      "Achieved reliable obstacle detection through rapid iteration",
    ],
  },
  {
    id: "1",
    title: "Add Intelligence",
    description: "Embedding advanced AI capabilities",
    features: [
      "Embedded on-device computer vision and edge AI",
      "Intelligent detection of stairs, doors, and vehicles",
      "Optimized for real-time performance and accuracy",
    ],
  },
  {
    id: "2",
    title: "Field Validation & Productize",
    description: "Testing, refinement, and launch",
    features: [
      "Iterative user trials and feedback-informed redesign",
      "Incorporated inputs from PurpleFest community",
      "Focused on ergonomics, low-power hardware, and modular add-ons with app support",
    ],
  },
];



export const benefits = [
  {
    id: "0",
    title: "Front & Overhead Obstacle Detection",
    text: "Detects both ground-level and overhead obstacles, providing complete environmental awareness for safer movement.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Multi-Mode User Feedback",
    text: "Delivers voice, vibration, and audio feedback to ensure clear and reliable communication in any situation.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Integrated Voice Navigation",
    text: "Built-in step-by-step voice navigation powered by smart mapping for independent and confident travel.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Lost Device Finder",
    text: "Quickly locate your stick using smart band activation with instant audio alerts for easy recovery.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Emergency Alert System",
    text: "Instant SOS alerts and real-time location sharing ensure rapid assistance during critical situations.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Affordable & Long-Lasting",
    text: "Cost-effective design with extended battery life, built to be accessible, reliable, and aligned with user needs.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },

  // ✅ Newly Added Data

  {
    id: "6",
    title: "Vision Intelligence System",
    text: "AI-powered object recognition enhances spatial awareness by identifying surroundings in real time.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Braille Instruction Manual",
    text: "Comes with a fully accessible Braille manual, ensuring independent setup and operation without external assistance.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "8",
    title: "Foldable Seat Support",
    text: "Transforms into a sturdy foldable seat, providing comfort and rest during long journeys.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
];




export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const teamMembers = [
  {
    id: "0",
    name: "Rishi Sawant",
    degree: "Bachelor of Technology in Information Technology",
    contribution: "Led the AI and machine learning implementation for obstacle detection",
  },
  {
    id: "1",
    name: "Soham Sawant",
    degree: "Bachelor of Engineering in Electronics",
    contribution: "Developed the hardware integration and sensor systems",
  },
];
