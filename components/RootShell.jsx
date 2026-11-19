import { JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

// Shared <html>/<body> for both root layouts: app/(es)/layout.jsx and app/(en)/layout.jsx
export default function RootShell({ lang, children }) {
  return (
    <html lang={lang}>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
