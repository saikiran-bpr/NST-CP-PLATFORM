import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link";
import ContestCard from "@/components/contestCard";

export default function Dashboard() {
  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-gray-700">
                Upcoming Contests
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Join the Coding Challenge
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Compete with other developers and showcase your skills in our
                upcoming coding contests.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <ContestCard/>
            <ContestCard/>
            <ContestCard/>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-gray-700">Problems</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Solve Challenging Problems</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Improve your coding skills by solving a variety of problems across different domains.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Two sum</h3>
                  <p className="text-muted-foreground">
                    Solve problems related to arrays, linked lists, trees, and more.
                  </p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    View Problem
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Binary search</h3>
                  <p className="text-muted-foreground">
                    Implement classic algorithms like sorting, searching, and dynamic programming.
                  </p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    View Problem
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">N Queens</h3>
                  <p className="text-muted-foreground">Solve problems related to SQL, NoSQL, and database design.</p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    View Problem
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Discussions</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Conversation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Engage with the community and discuss the latest trends, technologies, and best practices.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">How to learn dynamic programming</h3>
                  <p className="text-muted-foreground">
                    Discuss how to learn dynamic progamming and help each other
                  </p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    Join Discussion
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Back-end Development</h3>
                  <p className="text-muted-foreground">
                    Explore the world of server-side technologies and architectures.
                  </p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    Join Discussion
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">DevOps</h3>
                  <p className="text-muted-foreground">
                    Discuss the tools and practices that enable continuous integration and deployment.
                  </p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    Join Discussion
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Resources</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Expand Your Knowledge</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a wide range of resources to help you improve your coding skills and stay up-to-date with the
                  latest technologies.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Tutorials</h3>
                  <p className="text-muted-foreground">
                    Learn new technologies and techniques through our step-by-step tutorials.
                  </p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    Explore Tutorials
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Articles</h3>
                  <p className="text-muted-foreground">Stay informed with the latest industry news and insights.</p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    Read Articles
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Videos</h3>
                  <p className="text-muted-foreground">Watch video tutorials and talks from industry experts.</p>
                  <Link href="#" className="text-primary" prefetch={false}>
                    Explore Videos
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    </main>
  );
}
  
