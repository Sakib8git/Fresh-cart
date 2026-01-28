import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { CartProvider } from "@/components/context/CartProvider";
import { OrderProvider } from "@/components/context/OrderContext";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "FreshCart - Fresh Groceries Online",
  description: "Buy fresh fruits, vegetables, and groceries online",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <OrderProvider>
          <CartProvider>{children}</CartProvider>
        </OrderProvider>
      </body>
    </html>
  );
}
