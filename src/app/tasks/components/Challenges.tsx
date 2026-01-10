"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardsSection from "./CardsSection";
import { cardsData } from "@/data/Cards";
import { useState } from "react";


export const Challenges = () => {
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");
  const [search, setSearch] = useState("");
   

  const filteredCards = cardsData.filter(card => {
    const matchesStatus =
      filter === "all" || card.status === filter;

    const matchesSearch =
      card.title.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <section>
      <div className="pt-20 md:pt-28 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-2 h-20 flex items-center justify-between p-4">
            
            <Input
              
              placeholder="Search "
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="max-w-sm bg-brand-greyish border-2 border-brand-border-grey"
            />

            <div className="flex gap-4">
              <Button
    onClick={() => setFilter("all")}
    className={
      filter === "all"
        ? "bg-brand-blue text-white hover:bg-brand-blue"
        : "bg-white text-black border hover:bg-gray-100"
    }
  >
    ALL
             </Button>
              <Button
    onClick={() => setFilter("open")}
    className={
      filter === "open"
        ? "bg-brand-blue text-white hover:bg-brand-blue"
        : "bg-white text-black border hover:bg-gray-100"
    }
  >
    OPENED
  </Button>
             <Button
    onClick={() => setFilter("closed")}
    className={
      filter === "closed"
        ? "bg-brand-blue text-white hover:bg-brand-blue"
        : "bg-white text-black border hover:bg-gray-100"
    }
  >
    CLOSED
  </Button>
            </div>
          </div>
        </div>
      </div>

      <CardsSection cards={filteredCards} />
    </section>
  );
};

