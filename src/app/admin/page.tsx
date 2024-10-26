'use client';
import { ListItem } from '@/components/ui/ListItem';
import React, { useState } from 'react';
import MapComponent from '@/components/MapComponent';

type Item = {
  id: number;
  nazwa: string;
  telefon: string;
};

const zasoby: Item[] = [
  { id: 1, nazwa: 'Latarka', telefon: '600 345 678' },
  { id: 2, nazwa: 'Bandaże', telefon: '600 987 654' },
  { id: 3, nazwa: 'Namiot', telefon: '601 234 567' },
  { id: 4, nazwa: 'Maseczki ochronne', telefon: '601 876 543' },
  { id: 5, nazwa: 'Śpiwór', telefon: '602 345 678' },
  { id: 6, nazwa: 'Woda pitna', telefon: '602 987 654' },
  { id: 7, nazwa: 'Prowiant', telefon: '603 234 567' },
  { id: 8, nazwa: 'Rękawice ochronne', telefon: '603 876 543' },
  { id: 9, nazwa: 'Kamizelka ratunkowa', telefon: '604 345 678' },
  { id: 10, nazwa: 'Podręcznik pierwszej pomocy', telefon: '604 987 654' },
  { id: 11, nazwa: 'Powerbank', telefon: '605 234 567' },
  { id: 12, nazwa: 'Apteczka medyczna', telefon: '605 876 543' },
];

const potrzeby: Item[] = [
  { id: 1, nazwa: 'Środki dezynfekujące', telefon: '606 123 456' },
  { id: 2, nazwa: 'Racje żywnościowe', telefon: '606 789 012' },
  { id: 3, nazwa: 'Maseczki filtrujące', telefon: '607 123 456' },
  { id: 4, nazwa: 'Środki opatrunkowe', telefon: '607 789 012' },
  { id: 5, nazwa: 'Butle tlenowe', telefon: '608 123 456' },
  { id: 6, nazwa: 'Ochraniacze oczu', telefon: '608 789 012' },
  { id: 7, nazwa: 'Ogrzewacze dłoni', telefon: '609 123 456' },
  { id: 8, nazwa: 'Folie termiczne', telefon: '609 789 012' },
  { id: 9, nazwa: 'Płyny do dezynfekcji', telefon: '610 123 456' },
  { id: 10, nazwa: 'Maski z filtrem', telefon: '610 789 012' },
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
    <div className="text-textgray flex min-h-screen w-full flex-col items-center border bg-neutral-50 pb-4 md:w-[450px]">
      <main className="flex w-full flex-grow flex-col items-start justify-between gap-8 p-4">
        <div className="border-lg h-[380px] w-full rounded border">
          <MapComponent />
        </div>

        <div className="flex w-full flex-grow gap-4">
          <div className="w-1/2">
            <h2 className="mb-2 text-lg font-bold">Zasoby</h2>
            <div className="scrollbar-hidden max-h-[370px] overflow-y-auto py-2">
              {zasoby.length > 0 ? (
                zasoby.map((zasob) => (
                  <ListItem
                    key={zasob.id}
                    id={zasob.id}
                    title={`Tel: ${zasob.telefon}`}
                    description={zasob.nazwa}
                    isSelected={selectedZasoby.has(zasob.id)}
                    onToggle={handleZasobToggle}
                  />
                ))
              ) : (
                <p className="p-16 text-center">Brak dodanych zasobów</p>
              )}
            </div>
          </div>

          <div className="w-1/2">
            <h2 className="mb-2 text-lg font-bold">Potrzeby</h2>
            <div className="scrollbar-hidden max-h-[370px] overflow-y-auto py-2">
              {potrzeby.length > 0 ? (
                potrzeby.map((potrzeba) => (
                  <ListItem
                    key={potrzeba.id}
                    id={potrzeba.id}
                    title={`Tel: ${potrzeba.telefon}`}
                    description={potrzeba.nazwa}
                    isSelected={selectedPotrzeby.has(potrzeba.id)}
                    onToggle={handlePotrzebaToggle}
                  />
                ))
              ) : (
                <p className="p-16 text-center">Brak dodanych potrzeb</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <button className="button">
        Zaznaczono zasoby: {selectedZasoby.size}, potrzeby: {selectedPotrzeby.size}
      </button>
    </div>
  );
}
