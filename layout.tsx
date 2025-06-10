export const metadata = {
  title: "Euro SMM Panel",
  description: "Fastest & Cheapest SMM Panel with INR, USD, EUR support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
