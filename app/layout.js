import "./globals.css";

export const metadata = {
  title: "Integrated Biosciences Clone",
  description: "Next.js recreation with local assets"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
