import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OldContestCard() {
  return (
    <div className="bg-card rounded-lg border border-input p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">
        Photography Contest
      </h3>
      <p className="mt-2 text-muted-foreground">
        Participants submitted their best nature photography.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        Held on: April 15, 2023
      </p>
      <Button className=" w-16 h-9 mt-4 bg-gray-950 text-white">View</Button>
    </div>
  );
}
