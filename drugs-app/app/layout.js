// This root layout wraps every page in the app
import "./globals.css";

export const metadata = {
  title: "Drugs App",
  description: "Assignment 4 Drugs Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}