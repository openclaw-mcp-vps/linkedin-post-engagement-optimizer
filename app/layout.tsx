import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkedIn Post Engagement Optimizer",
  description: "Optimize LinkedIn posts for maximum engagement. AI-powered suggestions for posting times, hashtags, and content formats for B2B marketers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f29aa04a-c94f-4dfa-bcbf-e9a7cd6d83d3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
