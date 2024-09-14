import ContestCard from "@/components/contestCard";
import OldContestCard from "@/components/oldcontest";


export default function Contests() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Contests
          </h1>
          <p className="mt-2 text-muted-foreground">
            Check out our previous and upcoming contests.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Upcoming Contests
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              <ContestCard/>
              <ContestCard/>
              <ContestCard/>
              <ContestCard/>
              <ContestCard/>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Previous Contests
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              <OldContestCard/>
              <OldContestCard/>
              <OldContestCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
