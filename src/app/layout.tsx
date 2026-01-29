import type { Metadata } from "next";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Democrats for 2029",
  description:
    "A governing agenda for working families — prepared, staffed, and ready to govern on Day One.",
  metadataBase: new URL("https://democratsfor2029.com"),
  openGraph: {
    title: "Democrats for 2029",
    description: "Prepared. Staffed. Ready to govern on Day One.",
    url: "https://democratsfor2029.com",
    siteName: "Democrats for 2029",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
