'use client';
import React from 'react';

type Props = {
  id: number;
  title: string;
  description: string;
  isSelected: boolean;
  onToggle: (id: number) => void;
};

export const ListItem: React.FC<Props> = ({ id, title, description, isSelected, onToggle }) => {
  const handleItemClick = () => {
    onToggle(id);
  };

  return (
    <div
      className={`mb-2 flex w-full cursor-pointer flex-col items-start justify-between gap-2 rounded border p-2 ${isSelected ? 'border-violet-700 bg-violet-100' : 'border-black'} hover:border-violet-700 hover:bg-violet-100`}
      onClick={handleItemClick}
    >
      <div className="text-lg text-violet-700">{title}</div>
      <div className="text-justify">{description}</div>
    </div>
  );
};