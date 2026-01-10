"use client";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type CardType = {
  id: number;
  title: string;
  description: string;
  status: "open" | "closed";
};

export default function CardsSection({ cards }: { cards: CardType[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map(card => (
          <Card
            key={card.id}
            variant="hoverable"
            className="bg-brand-blue flex flex-col"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <p className="text-7xl md:text-8xl font-extrabold text-white/10 select-none">
      AI
    </p>
  </div>
            
            <CardHeader>
              <Badge className="bg-blue-500 text-brand-whitish">{card.status}</Badge>
              

              <CardTitle className="pt-4">{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button variant="card-white" className="w-full">
                View details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

  
