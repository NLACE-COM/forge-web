import "./globals.css";

export const metadata = {
  title: "Forge",
  description: "Forge web foundation prepared for new branding, content, typography and color."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <meta name="theme-color" content="#c9cbbe" />
        <link rel="icon" href="/wp-content/uploads/2025/09/cropped-512x512-1-32x32.png" sizes="32x32" />
        <link rel="icon" href="/wp-content/uploads/2025/09/cropped-512x512-1-192x192.png" sizes="192x192" />
        <link
          rel="apple-touch-icon"
          href="/wp-content/uploads/2025/09/cropped-512x512-1-180x180.png"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
