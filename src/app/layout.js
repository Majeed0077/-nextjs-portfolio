import "./globals.css";

export const metadata = {
  title: "Majeed Abro - Portfolio",
  description: "Portfolio of a front-end developer & Upwork freelancer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">{/* default dark */}
      <body>{children}</body>
    </html>
  );
}
