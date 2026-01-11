export type ChallengeStatus = "open" | "closed";

export type Challenge = {
  id: number;
  title: string;
  description: string;   // shown on card
  details: string;       // shown inside dialog
  status: ChallengeStatus;
  link?: string;
};

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "AI-Powered Traffic Management System",
    description:
      "Develop an AI solution to optimize traffic flow in urban areas by analyzing real-time traffic data.",
    details: `
Design and implement an AI-powered traffic management system that analyzes
real-time traffic data to predict congestion and optimize traffic signal timings.

🔹 Use data from cameras, sensors, or public datasets
🔹 Apply ML / DL models for congestion prediction
🔹 Provide actionable insights for city planners

This challenge focuses on improving urban mobility and reducing traffic congestion.
    `,
    status: "open",
    link: "https://airtable.com/appopz4GXqkTszuJ7/pag1ocMjMQgLVGrjn/form",
  },
  {
    id: 2,
    title: "Automated Crop Disease Detection",
    description:
      "Create a machine learning model that identifies crop diseases from leaf images.",
    details: `
Build a computer vision-based system that detects crop diseases using images
of plant leaves to assist farmers in early diagnosis and prevention.

🔹 Image classification using CNNs
🔹 Support multiple crop types
🔹 Improve agricultural productivity

This solution should be scalable and usable in real-world farming conditions.
    `,
    status: "open",
    link: "https://airtable.com/appopz4GXqkTszuJ7/pag1ocMjMQgLVGrjn/form",
  },
  {
    id: 3,
    title: "Smart Waste Management System",
    description:
      "Design an intelligent waste segregation and collection system using AI and IoT.",
    details: `
Create a smart waste management system that uses AI-powered image recognition
and IoT sensors to segregate and optimize waste collection.

🔹 Waste classification (plastic, organic, metal, etc.)
🔹 Route optimization for waste collection
🔹 Reduce environmental impact

Focus on sustainability and smart city applications.
    `,
    status: "open",
    link:"https://airtable.com/appopz4GXqkTszuJ7/pag1ocMjMQgLVGrjn/form"
  },
  {
    id: 4,
    title: "AI-Based Healthcare Triage",
    description:
      "Build a system that prioritizes emergency cases using AI-based symptom analysis.",
    details: `
Develop an AI-driven triage system to assist emergency rooms by prioritizing
patients based on symptom severity and medical history.

🔹 NLP for symptom extraction
🔹 Risk prediction models
🔹 Improve emergency response times

The system should support medical professionals, not replace them.
    `,
    status: "open",
    link:"https://airtable.com/appopz4GXqkTszuJ7/pag1ocMjMQgLVGrjn/form"
  },
  {
    id: 5,
    title: "Flood Prediction and Alert System",
    description:
      "Develop a predictive model for flood forecasting using real-time data.",
    details: `
Design a flood prediction and early warning system using historical weather data,
river levels, and real-time monitoring sensors.

🔹 Time-series forecasting models
🔹 Real-time alert mechanisms
🔹 Disaster preparedness focus

Aim to reduce loss of life and property during floods.
    `,
    status: "open",
    link:"https://airtable.com/appopz4GXqkTszuJ7/pag1ocMjMQgLVGrjn/form"
  },
  {
    id: 6,
    title: "Education Resource Optimization",
    description:
      "Create an AI system to optimize educational resource allocation.",
    details: `
Build an AI-based system to optimize allocation of educational resources such
as teachers, content, and infrastructure based on student needs.

🔹 Learning analytics
🔹 Personalized education insights
🔹 Data-driven decision making

The goal is to improve educational outcomes at scale.
    `,
    status: "open",
    link:"https://airtable.com/appopz4GXqkTszuJ7/pag1ocMjMQgLVGrjn/form"
  },
];
