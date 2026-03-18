import SmoothScroll from "./components/SmoothScroll";
import "./tailwind.css";
import "./globals.css";

export const metadata = {
  title: "Forge",
  description: "Growth Systems Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
