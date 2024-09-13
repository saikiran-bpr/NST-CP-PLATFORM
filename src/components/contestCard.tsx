import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon } from "@/icons/index"

export default function ContestCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium">April 15, 2024</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium">7:00 PM - 10:00 PM</span>
        </div>
        <h3 className="text-xl font-bold">Hackathon: Build the Future</h3>
        <p className="text-muted-foreground">
          Join our 24-hour hackathon and build the next big thing.
        </p>
        <Button size="sm">Register</Button>
      </CardContent>
    </Card>
  );
}
