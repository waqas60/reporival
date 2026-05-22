import React from "react";

type ButtonType = {
  onClick: () => void;
};

export default function Button({ onClick }: ButtonType) {
  return (
    <button
      className="bg-neutral-700 text-white text-sm rounded-md w-full py-2  hover:bg-neutral-600 cursor-pointer"
      onClick={() => onClick()}
    >
      Compare Users
    </button>
  );
}
