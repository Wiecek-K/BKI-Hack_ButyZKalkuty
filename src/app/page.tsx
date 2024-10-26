'use client';
import { ListItem } from '@/components/ui/ListItem';
import React, { useState } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';


type Item = {
  id: number;
  nazwa: string;
  telefon: string;
};

const zasoby: Item[] = [
  {
    id: 1,
    nazwa: 'Apteczka pierwszej pomocy',
    telefon: '600 123 456',
  },
  { id: 2, nazwa: 'Koc termiczny', telefon: '600 789 101' },
  { id: 3, nazwa: 'Apteczka pierwszej pomocy', telefon: '600 112 131' },
  { id: 4, nazwa: 'Woda butelkowana', telefon: '600 123 456' },
  { id: 5, nazwa: 'Koc termiczny', telefon: '600 789 101' },
  { id: 6, nazwa: 'Apteczka pierwszej pomocy', telefon: '600 112 131' },
  { id: 7, nazwa: 'Woda butelkowana', telefon: '600 123 456' },
  { id: 8, nazwa: 'Koc termiczny', telefon: '600 789 101' },
  { id: 9, nazwa: 'Apteczka pierwszej pomocy', telefon: '600 112 131' },
  { id: 10, nazwa: 'Woda butelkowana', telefon: '600 123 456' },
  { id: 11, nazwa: 'Koc termiczny', telefon: '600 789 101' },
  { id: 12, nazwa: 'Apteczka pierwszej pomocy', telefon: '600 112 131' },
];

const potrzeby: Item[] = [
  { id: 1, nazwa: 'Koce ratunkowe', telefon: '601 111 111' },
  { id: 2, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 3, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 4, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 5, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 6, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 7, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 8, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 9, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 10, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 11, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
  { id: 12, nazwa: 'Środki opatrunkowe', telefon: '602 222 222' },
];

export default function Home() {
  const [selectedZasoby, setSelectedZasoby] = useState<Set<number>>(new Set());
  const [selectedPotrzeby, setSelectedPotrzeby] = useState<Set<number>>(new Set());

  const handleZasobToggle = (id: number) => {
    setSelectedZasoby((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handlePotrzebaToggle = (id: number) => {
    setSelectedPotrzeby((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <UserButton afterSwitchSessionUrl="/" />
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
