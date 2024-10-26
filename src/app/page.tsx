'use client';
import { ListItem } from '@/components/ui/ListItem';
import React, { useState } from 'react';

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
];

export default function Home() {
  const [selectedZasoby, setSelectedZasoby] = useState<Set<number>>(new Set());
  const [selectedPotrzeby, setSelectedPotrzeby] = useState<Set<number>>(new Set());
  const [activeTab, setActiveTab] = useState<'zasoby' | 'potrzeby'>('potrzeby');

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

  const handleTabChange = (tab: 'zasoby' | 'potrzeby') => {
    setActiveTab(tab);
  };

  return (
    <div className="text-textgray flex min-h-screen w-full flex-col items-center border bg-neutral-50 pb-4 md:w-[450px]">
      <main className="flex w-full flex-grow flex-col items-start justify-between gap-8 p-4">
        <div className="border-lg h-[380px] w-full rounded border">mapa</div>

        <div className="flex w-full flex-grow items-start">
          <div role="tablist" className="tabs tabs-bordered w-full">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab w-full px-[71px] text-lg"
              aria-label="Zasoby"
              checked={activeTab === 'zasoby'}
              onChange={() => handleTabChange('zasoby')}
            />
            <div
              role="tabpanel"
              className="tab-content scrollbar-hidden max-h-[370px] overflow-y-auto py-2"
            >
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

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab w-full px-[71px] text-lg"
              aria-label="Potrzeby"
              checked={activeTab === 'potrzeby'}
              onChange={() => handleTabChange('potrzeby')}
            />
            <div
              role="tabpanel"
              className="tab-content max-h-1/2 scrollbar-hidden overflow-y-auto py-2"
            >
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
        Zaznaczono: {activeTab === 'zasoby' ? selectedZasoby.size : selectedPotrzeby.size}
      </button>
    </div>
  );
}
