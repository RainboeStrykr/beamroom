import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemedToaster, ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ThemeToggle";

const mona = Mona_Sans({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Beamroom - Real-time screen-sharing, one room at a time",
  metadataBase: new URL("https://beamroom.vercel.app"),
  description:
    "Create a room, send a code, and share your screen in real time — instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          mona.className,
          "min-h-screen bg-gradient-to-b from-background to-muted/80 p-2 py-10 flex flex-col justify-between"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <ModeToggle />
          <footer className="w-full max-w-7xl px-4 mx-auto">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 Beamroom. Made by{" "}
              <a
                href="http://abhirajb.netlify.app"
                target="_blank"
                className="text-primary"
                rel="noopener noreferrer"
              >
                Abhiraj{" "}
              </a>
              ❤️
            </p>
          </footer>
          <ThemedToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
