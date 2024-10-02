import { ReactNode } from "react";

export const metadata = {
  title: "Holidays",
  description: "Holidays",
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
