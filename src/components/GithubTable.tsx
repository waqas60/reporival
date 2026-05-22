import type { GithubCardType } from "./GithubCard";

type GithubComparisonTableProps = {
  user1: GithubCardType;
  user2: GithubCardType;
};

export default function GithubComparisonTable({
  user1,
  user2,
}: GithubComparisonTableProps) {
  const createdData1 = new Date(user1.created_at).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const createdData2 = new Date(user2.created_at).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border border-neutral-300 mt-5 w-160 rounded-md px-7 py-4">
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="text-left py-2">Metric</th>
            <th className="text-left py-2">{user1.login}</th>
            <th className="text-left py-2">{user2.login}</th>
          </tr>
        </thead>

        <tbody>
          <tr className="">
            <td className="py-2">Repositories</td>
            <td className="py-2">{user1.public_repos}</td>
            <td className="py-2">{user2.public_repos}</td>
          </tr>

          <tr className="">
            <td className="py-2">Account Age</td>
            <td className="py-2">{createdData1}</td>
            <td className="py-2">{createdData2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
