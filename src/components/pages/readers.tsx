import React from "react";

interface Reader {
  id: number;
  name: string;
  booksBorrowed: number;
}

const readersData: Reader[] = [
  { id: 1, name: "James Hettfield", booksBorrowed: 5 },
  { id: 2, name: "Matt Shadows", booksBorrowed: 3 },
  { id: 3, name: "Chester Bennington", booksBorrowed: 7 },
  { id: 4, name: "Chris Cornell", booksBorrowed: 2 },
  { id: 5, name: "Axl Rose", booksBorrowed: 9 },
];

const Readers: React.FC = () => (
  <div className="p-6 flex flex-col items-center">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">READERS Page</h2>
    <div className="overflow-x-auto w-full flex justify-center">
      <table className="min-w-full max-w-4xl bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-center">ID</th>
            <th className="px-4 py-2 border-b text-center">Name</th>
            <th className="px-4 py-2 border-b text-center">Books Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {readersData.map((reader) => (
            <tr key={reader.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2 text-center">{reader.id}</td>
              <td className="px-4 py-2 text-center">{reader.name}</td>
              <td className="px-4 py-2 text-center">{reader.booksBorrowed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export { Readers };
