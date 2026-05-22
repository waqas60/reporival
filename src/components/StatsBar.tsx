import React from "react";

type StatsBarType = {
  stats: number;
  text: string;
};

export default function StatsBar({ stats, text }: StatsBarType) {
  return (
    <div className="flex gap-1 bg-neutral-700 text-white p-1 rounded-md text-sm">
      <p>{stats}</p>
      <p>{text}</p>
    </div>
  );
}
