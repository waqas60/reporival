import React, { type Ref } from "react";

type InputType = {
  user: Ref<HTMLInputElement>;
};

export default function InputBox({ user }: InputType) {
  return (
    <div>
      <input
        type="text"
        ref={user}
        className="w-70 outline-none border border-neutral-300 rounded-sm text-sm p-1 placeholder:text-neutral-400 placeholder:text-xs  "
        placeholder="write github username"
      />
    </div>
  );
}
