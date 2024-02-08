import { Roboto } from "next/font/google";
import "./globals.scss";
import ThemeProvider from "../component/darkMode-Next/ThemeContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

<meta name="viewport" content="width=device-width, initial-scale=1" />

export const metadata = {
  title: "tamer-portfolio",
  description: "tamer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
