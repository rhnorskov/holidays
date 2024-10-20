import "./globals.css";

import { ReactNode } from "react";

export const metadata = {
  title: "Danish Holidays iCal API",
  description:
    "Easily integrate Danish holidays into your calendar. Simple, reliable, and always up-to-date.",
};

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
