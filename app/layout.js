import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "Forge",
  description: "Growth Systems Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
