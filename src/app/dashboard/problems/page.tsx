import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Problems() {
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
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="/problem/1"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      Two Sum
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
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      Reverse Integer
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">Medium</td>
                  <td className="px-4 py-3 text-sm font-medium">
                    <Badge
                      variant="outline"
                      className="bg-yellow-100 text-yellow-800"
                    >
                      Attempted
                    </Badge>
                  </td>
                </tr>
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      Longest Palindromic Substring
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">Medium</td>
                  <td className="px-4 py-3 text-sm font-medium">
                    <Badge
                      variant="outline"
                      className="bg-red-100 text-red-800"
                    >
                      Unsolved
                    </Badge>
                  </td>
                </tr>
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      Merge Two Sorted Lists
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
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      Reverse Linked List
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
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      Valid Parentheses
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
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      Merge k Sorted Lists
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">Hard</td>
                  <td className="px-4 py-3 text-sm font-medium">
                    <Badge
                      variant="outline"
                      className="bg-red-100 text-red-800"
                    >
                      Unsolved
                    </Badge>
                  </td>
                </tr>
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      Longest Substring Without Repeating Characters
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">Medium</td>
                  <td className="px-4 py-3 text-sm font-medium">
                    <Badge
                      variant="outline"
                      className="bg-yellow-100 text-yellow-800"
                    >
                      Attempted
                    </Badge>
                  </td>
                </tr>
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      Container With Most Water
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">Medium</td>
                  <td className="px-4 py-3 text-sm font-medium">
                    <Badge
                      variant="outline"
                      className="bg-red-100 text-red-800"
                    >
                      Unsolved
                    </Badge>
                  </td>
                </tr>
                <tr className="hover:bg-muted transition-colors duration-300">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      3Sum
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">Medium</td>
                  <td className="px-4 py-3 text-sm font-medium">
                    <Badge
                      variant="outline"
                      className="bg-yellow-100 text-yellow-800"
                    >
                      Attempted
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
