import React from "react";
import StatsBar from "./StatsBar";

export type GithubCardType = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  created_at: string;
};

export default function GithubCard(props: GithubCardType) {
  const createdData = new Date(props.created_at).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border border-neutral-400 p-4 mt-4 rounded-md ">
      <div className="flex gap-2 items-center">
        <img
          src={props.avatar_url}
          alt={props.name}
          className="h-18 rounded-full"
        />
        <div>
          <h2>{props.name}</h2>
          <p className="text-sm text-neutral-500">@{props.login}</p>
          <p className="text-sm text-neutral-500">{createdData}</p>
        </div>
      </div>
      <p className="mt-4">{props.bio}</p>
      <div className="flex gap-3 mt-4">
        <StatsBar stats={props.followers} text="followers" />
        <StatsBar stats={props.following} text="following" />
      </div>
    </div>
  );
}
