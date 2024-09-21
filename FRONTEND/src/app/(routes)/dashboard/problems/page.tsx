import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import allProblems from "@/app/problems.json"

export default async function Problems() {
  const problems = allProblems;
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Problem set</h1>
          </div>
          <p className="text-muted-foreground">
            Explore a curated collection of challenging programming problems to
            hone your algorithmic skills.
          </p>
          <div className="overflow-hidden rounded-lg border shadow-lg">
            <table className="w-full table-auto">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Problem
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Difficulty
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted">
                {problems.map((problem) => (
                  <tr key={`${problem.id}`} className="hover:bg-muted transition-colors duration-300">
                    <td className="px-4 py-3 text-sm font-medium">
                      <Link
                        href={`/problem/${problem.id}`}
                        className="hover:text-primary"
                        prefetch={false}
                      >
                        {problem.question}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">Easy</td>
                    <td className="px-4 py-3 text-sm font-medium">
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800"
                      >
                        Solved
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
