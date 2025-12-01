import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Monitor, Users } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 border-l bg-gradient-to-r rounded-2xl">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-10 lg:mb-0">
          <h1 className="text-4xl max-w-2xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.2]">
            <span className="whitespace-nowrap text-transparent bg-gradient-to-br from-foreground to-muted-foreground/70 bg-clip-text inline-block pb-1">
              Real-time screen sharing
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-br from-foreground to-muted-foreground/70 bg-clip-text inline-block pb-1">
              <span className="text-primary">One room</span> at a time
            </span>
          </h1>
          <p className="md:text-xl mb-8 opacity-80">
            Beamroom lets you share your screen in seconds. Create a private room, share a unique join code, and instantly beam your screen to anyone — no accounts, no setup, no delays.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-6 w-6" />
                Start Sharing
              </CardTitle>
              <CardDescription>
                Create a room and share your screen with others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/host">
                <Button className="w-full">Create Room</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Join a Room
              </CardTitle>
              <CardDescription>
                Enter a room code to view someone's screen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/join">
                <Button variant="outline" className="w-full">
                  Join Room
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
