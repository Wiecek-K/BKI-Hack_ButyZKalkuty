import React from 'react';
import Image from 'next/image';
import aidhub from '../components/ui/aidhub.png'
import { Phone, Heart } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="text-textgray flex min-h-screen w-full flex-col items-center bg-neutral-50 p-4 pb-16 md:w-[500px]">
      <main className="flex w-full flex-grow flex-col items-center justify-center gap-4">
        <div className="relative mb-2 overflow-hidden rounded-full bg-blue-50 p-6">
          <Image
            src={aidhub}
            alt="AidHub Logo"
            width={200}
            height={200}
            className="h-auto w-auto p-2 transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
        <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent md:text-4xl">
          Łączymy Potrzeby z Zasobami
        </h1>

        <div className="grid w-full gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Heart className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Potrzebna Pomoc?</h3>
            </div>
            <p className="text-sm text-gray-600">
              Skontaktuj się z nami, a połączymy Cię z osobami chętnymi do pomocy.
            </p>
          </div>
          <div className="rounded-lg bg-purple-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Heart className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold">Chcesz Pomóc?</h3>
            </div>
            <p className="text-sm text-gray-600">
              Dołącz do naszej społeczności i wspieraj innych w potrzebie.
            </p>
          </div>
        </div>

        <div className="w-full space-y-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <p className="text-center text-lg font-medium">Wyślij SMS na numer:</p>
          <a href = "/admin">
            <div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <Phone className="h-6 w-6" />
              <span className="text-2xl font-bold tracking-wider">123 456 789</span>
            </div>
          </a>
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-blue-600">Razem możemy więcej!</p>
          <p className="mt-2 text-sm text-gray-500">
            Dołącz do społeczności osób, które codziennie sobie pomagają
          </p>
        </div>
      </main>
    </div>
  );
};

export default Page;
