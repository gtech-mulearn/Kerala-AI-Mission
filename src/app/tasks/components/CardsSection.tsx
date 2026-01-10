"use client";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type CardType = {
  id: number;
  title: string;
  description: string;
  status: "open" | "closed";
};

export default function CardsSection({ cards }: { cards: CardType[] }) {
const headingVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12 mb-20">
      <motion.div 
       initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map(card => (
          <Card
            key={card.id}
            variant="hoverable"
           className="relative bg-brand-blue flex flex-col"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <p className="text-9xl md:text-8xl font-extrabold text-white/10 select-none">
      AI
    </p>
  </div>
            
            <CardHeader>
              <Badge className="bg-blue-500 text-brand-whitish">{card.status}</Badge>
              

              <CardTitle className="pt-4 text-2xl text-brand-whitish font-bold">{card.title}</CardTitle>
              <CardDescription className="pt-3 text-brand-whitish ">{card.description}  </CardDescription>
            </CardHeader>

            <CardContent>
             <Button variant="card-white"
  className=" w-full text-brand-blue flex items-center justify-between border-0 rounded-xs">
  <span>View details</span>
  <ArrowRight className="h-4 w-4" />
</Button>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}

  
