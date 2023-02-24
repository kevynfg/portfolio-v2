import AnalyticsWrapper from "@/components/analytics"
import { Metadata } from "next";
import clsx from 'clsx';
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Kevyn Gonçalves',
    template: '%s | Kevyn Gonçalves',
  },
  description: 'Developer, writer, and creator.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx("text-black bg-gray-900 dark:text-white")}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="antialiased">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
