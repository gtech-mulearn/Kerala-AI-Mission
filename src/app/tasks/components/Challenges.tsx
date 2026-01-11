"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardsSection from "./CardsSection";
import { challenges } from "@/data/challenge";
import { useState } from "react";
import { motion } from "framer-motion";

export const Challenges = () => {
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");
  const [search, setSearch] = useState("");

  const filteredCards = challenges.filter((card) => {
    const matchesStatus =
      filter === "all" || card.status === filter;

    const matchesSearch =
      card.title.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div className="pt-20 md:pt-28 w-full">
    <div className="max-w-7xl mx-auto px-4">
      <div
        className="
          border-2 p-4
          flex flex-col gap-4
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* Search */}
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full md:max-w-sm
            bg-brand-greyish
            border-2 border-brand-border-grey
          "
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4">
          {(["all", "open", "closed"] as const).map((key) => (
            <Button
              key={key}
              onClick={() => setFilter(key)}
              className={`
                px-4 py-2 text-sm md:text-base
                ${
                  filter === key
                    ? "bg-brand-blue text-white hover:bg-brand-blue"
                    : "bg-white text-black border hover:bg-gray-100"
                }
              `}
            >
              {key.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
    </div>
  </div>

  <CardsSection cards={filteredCards} />
</motion.section>

  );
};
