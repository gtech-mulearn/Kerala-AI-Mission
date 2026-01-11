"use client";

import { Button } from "@/components/ui/button";
import { Challenge } from "@/data/challenge";
import {Card,CardContent,CardDescription,CardHeader,CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CardsSection({
  cards,
}: {
  cards: Challenge[];
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12 mb-20">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            className="relative bg-brand-blue flex flex-col"
          >
            {/* Background AI text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-9xl font-extrabold text-white/10 select-none">
                AI
              </p>
            </div>

            <CardHeader>
              <Badge className="bg-blue-500 text-white">
                {card.status}
              </Badge>

              <CardTitle className="pt-4 text-2xl text-white font-bold">
                {card.title}
              </CardTitle>

              <CardDescription className="pt-3 text-white/90">
                {card.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="mt-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="card-white"
                    className="w-full text-brand-blue flex items-center justify-between"
                  >
                    <span>View details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="bg-white text-black rounded-2xl max-w-lg">
                  <DialogHeader>
                    <DialogTitle>{card.title}</DialogTitle>
                  </DialogHeader>

                  <DialogDescription className="mt-4 text-sm text-gray-600 whitespace-pre-line">
                    {card.details}
                  </DialogDescription>

                  {card.link && (
                    <Button asChild className="w-full mt-6 gap-2">
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between"
                      >
                        Visit
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}

  
