import { useRef } from "react";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import "./index.css";
import axios from "axios";

export function App() {
  const user1 = useRef<HTMLInputElement>(null);
  const user2 = useRef<HTMLInputElement>(null);

  function compare() {
    const u1 = user1.current?.value.trim();
    const u2 = user2.current?.value.trim();

    if (!u1 || !u2) {
      console.log("empty");
      return;
    }
    console.log("2");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-neutral-300 rounded-md px-7 py-4">
        <h1 className="text-2xl">Compare GitHub Users</h1>
        <p className="text-sm text-neutral-400">
          Enter two GitHub usernames to see a detailed side-by-side comparison
        </p>
        <div className="flex gap-4 my-5">
          <div>
            <h2>User 1</h2>
            <InputBox user={user1} />
          </div>
          <div>
            <h2>User 2</h2>
            <InputBox user={user2} />
          </div>
        </div>
        <Button onClick={compare} />
      </div>
    </div>
  );
}

export default App;
