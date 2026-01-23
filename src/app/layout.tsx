import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="flex justify-between">
            <img src="/printforge-logo 1.png" />
            <ul className="flex gap-3">
              <li>3D MODELS</li>
              <li>ABOUT</li>
            </ul>

          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
