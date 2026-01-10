export type CardStatus = "open" | "closed";

export type CardType = {
  id: number;
  title: string;
  description: string;
  status: CardStatus;
};

export const cardsData: CardType[] = [
  {
    id: 1,
    title: "AI-Powered Traffic Management System",
    description: "Develop an AI solution to optimize traffic flow in urban areas by analyzing real-time traffic data and predicting congestion patterns.",
    status: "open",
  },
  {
    id: 2,
    title: "Automated Crop Disease Detection",
    description: "Create a machine learning model that can identify crop diseases from leaf images to help farmers take preventive",
    status: "open",
  },
  {
    id: 3,
    title: "Smart Waste Management System",
    description: "Design an intelligent waste segregation and collection system using computer vision and IoT sensors",
    status: "open",
  },
  {
    id: 4,
    title: "AI-Based Healthcare Triage",
    description: "Build a system that can prioritize patient cases in emergency rooms based on symptom analysis and severity prediction.",
    status: "open",
  },
  {
    id: 5,
    title: "Flood Prediction and Alert System",
    description: "Develop a predictive model for flood forecasting using historical weather data and real-time monitoring",
    status: "open",
  },
  {
    id: 6,
    title: "Education Resource Optimization",
    description: "Create an AI system to optimize resource allocation in schools based on student needs and learning patterns.",
    status: "open",
  },

];
