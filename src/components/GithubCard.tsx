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
  public_repos: string;
};

export default function GithubCard(props: GithubCardType) {
  return (
    <div className="border border-neutral-400 p-4 mt-4 rounded-md w-77">
      <div className="flex gap-2 items-center">
        <img
          src={props.avatar_url}
          alt={props.name}
          className="h-18 rounded-full"
        />
        <div>
          <h2>{props.name}</h2>
          <p className="text-xs text-neutral-500">@{props.login}</p>
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
