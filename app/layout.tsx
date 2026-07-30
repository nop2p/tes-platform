import type { Metadata } from "next";

import { AppShell } from "@/components/layout";
import { APP_CONFIG } from "@/config";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: APP_CONFIG.shortName,
    template: `%s | ${APP_CONFIG.shortName}`,
  },

  description: APP_CONFIG.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}