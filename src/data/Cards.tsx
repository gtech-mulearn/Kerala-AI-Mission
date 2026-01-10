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
    title: "Learn",
    description: "Explore new skills and grow step by step.",
    status: "open",
  },
  {
    id: 2,
    title: "Build",
    description: "Work on real projects with the community.",
    status: "open",
  },
  {
    id: 3,
    title: "Connect",
    description: "Meet like-minded learners and mentors.",
    status: "closed",
  },
];
