'use client';
import { useState, useEffect } from 'react';
import { addResource, addNeed, getResourcesAndNeeds } from '@/actions/resourceNeedHandler';

export default function Home() {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('OTHER');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '' });
  const [type, setType] = useState('RESOURCE');
  const [entries, setEntries] = useState({ resources: [], needs: [] });

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    const data = await getResourcesAndNeeds();
    setEntries(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { description, category, location, contactInfo };
    if (type === 'RESOURCE') {
      await addResource(data);
    } else {
      await addNeed(data);
    }
    setDescription('');
    setCategory('OTHER');
    setLocation('');
    setContactInfo({ name: '', phone: '' });
    loadEntries();
  };

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <h2 className="text-xl font-semibold">Zarządzaj Zgłoszeniami</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded border p-2"
        >
          <option value="RESOURCE">Zasób</option>
          <option value="NEED">Potrzeba</option>
        </select>
        <textarea
          placeholder="Opis zgłoszenia"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="rounded border p-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded border p-2"
        >
          <option value="FOOD_AND_WATER">Żywność i woda</option>
          <option value="MEDICINE">Leki</option>
          <option value="CLOTHING_AND_BLANKETS">Odzież i koce</option>
          <option value="TRANSPORT_AND_LOGISTICS">Transport i logistyka</option>
          <option value="CHEMICALS">Środki chemiczne</option>
          <option value="BUILDING_MATERIALS">Materiały budowlane</option>
          <option value="TOOLS_AND_EQUIPMENT">Sprzęt i narzędzia</option>
          <option value="INFORMATION_AND_COMMUNICATION">Informacja i komunikacja</option>
          <option value="PSYCHOLOGICAL_AND_LEGAL_SUPPORT">Wsparcie psychologiczne i prawne</option>
          <option value="OTHER">Inne</option>
        </select>
        <input
          placeholder="Lokalizacja"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="rounded border p-2"
        />
        <input
          placeholder="Imię kontaktowe"
          value={contactInfo.name}
          onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
          required
          className="rounded border p-2"
        />
        <input
          placeholder="Telefon kontaktowy"
          value={contactInfo.phone}
          onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
          required
          className="rounded border p-2"
        />
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          Dodaj zgłoszenie
        </button>
      </form>

      <div className="w-full bg-orange-600">SIEMA</div>
      {/* <div className="w-full max-w-3xl mt-8">
        <h3 className="text-lg font-semibold mb-4">Zasoby</h3>
        <table className="w-full border border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Opis</th>
              <th className="border p-2">Kategoria</th>
              <th className="border p-2">Lokalizacja</th>
              <th className="border p-2">Kontakt</th>
            </tr>
          </thead>
          <tbody>
            {entries.resources.map((resource) => (
              <tr key={resource.id}>
                <td className="border p-2">{resource.description}</td>
                <td className="border p-2">{resource.category}</td>
                <td className="border p-2">{resource.location}</td>
                <td className="border p-2">{resource.contactInfo.name} ({resource.contactInfo.phone})</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="text-lg font-semibold mt-8 mb-4">Potrzeby</h3>
        <table className="w-full border border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Opis</th>
              <th className="border p-2">Kategoria</th>
              <th className="border p-2">Lokalizacja</th>
              <th className="border p-2">Kontakt</th>
            </tr>
          </thead>
          <tbody>
            {entries.needs.map((need) => (
              <tr key={need.id}>
                <td className="border p-2">{need.description}</td>
                <td className="border p-2">{need.category}</td>
                <td className="border p-2">{need.location}</td>
                <td className="border p-2">{need.contactInfo.name} ({need.contactInfo.phone})</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
