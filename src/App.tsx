import { useRef, useState } from "react";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import "./index.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
import GithubCard, { type GithubCardType } from "./components/GithubCard";

export function App() {
  const user1 = useRef<HTMLInputElement>(null);
  const user2 = useRef<HTMLInputElement>(null);
  const [user1Data, setUser1Data] = useState<GithubCardType | null>();
  const [user2Data, setUser2Data] = useState<GithubCardType>();

  async function compare() {
    const u1 = user1.current?.value.trim();
    const u2 = user2.current?.value.trim();

    if (!u1 || !u2) {
      toast.error("Both input feilds are required");
      return;
    }

    try {
      const response = await axios.get(`https://api.github.com/users/${u1}`);
      console.log(response.data);
      setUser1Data(response.data);
    } catch (error) {
      toast.error("user not found");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Toaster />
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

      <div className="w-70">
        {user1Data && (
          <GithubCard
            avatar_url={user1Data.avatar_url}
            name={user1Data.name}
            login={user1Data.login}
            created_at={user1Data.created_at}
            bio={user1Data.bio}
            followers={user1Data.followers}
            following={user1Data.following}
          />
        )}
      </div>
    </div>
  );
}

export default App;
