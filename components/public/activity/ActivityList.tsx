"use client";

import { useState } from "react";
import { Activity } from "@/types/activity";
import ActivityCard from "./ActivityCard";
import ActivityModal from "./ActivityModal";

export default function ActivityList({ data }: { data: Activity[] }) {
  const [selected, setSelected] = useState<Activity | null>(null);

  return (
    <>
      <section className="py-16 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.map((item) => (
            <ActivityCard
              key={item.id}
              item={item}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>
      </section>

      {selected && (
        <ActivityModal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}