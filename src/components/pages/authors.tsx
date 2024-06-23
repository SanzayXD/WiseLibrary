import React from "react";
import Profile from "../../assets/icons/pfp.jpg";

const topBooks = [
  { title: "The Silent Whisper", year: 2019, rating: 4.8 },
  { title: "Shadows in the Mist", year: 2021, rating: 4.9 },
  { title: "Echoes of Deception", year: 2018, rating: 4.7 },
  { title: "The Forgotten Key", year: 2020, rating: 4.6 },
  { title: "Beneath the Surface", year: 2022, rating: 4.9 },
];

const Authors: React.FC = () => (
  <div className="p-6 flex-col">
    <div className="flex gap-[100px] items-center">
      <div>
        <img
          src={Profile}
          alt="John Donovan"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="mt-4">
        <h2>John Donovan</h2>
        <h1>Date Joined: 2021/10/09</h1>
        <h1>Number of Books: 10</h1>
      </div>
    </div>
    <p className="mt-2">
      John Donovan is an acclaimed author celebrated for his gripping fictional
      and thriller novels. With a unique talent for weaving intricate plots and
      creating compelling characters, Donovan has become a staple in the
      literary world. His stories often delve into the darker aspects of human
      nature, exploring themes of betrayal, survival, and the relentless pursuit
      of truth. Donovan's narrative style is characterized by its fast pace and
      unexpected twists, keeping readers on the edge of their seats from the
      first page to the last. He has a knack for building suspense, using vivid
      descriptions and meticulously crafted settings to immerse his audience in
      his fictional worlds. Whether it's a small, eerie town with hidden secrets
      or a bustling metropolis where danger lurks around every corner, Donovan's
      settings are as dynamic as his characters. His protagonists are often
      ordinary individuals thrust into extraordinary circumstances, forced to
      confront their deepest fears and make harrowing decisions. Through these
      characters, Donovan explores the complexities of the human psyche, making
      his stories not only thrilling but also thought-provoking. With a string
      of bestsellers to his name, John Donovan has garnered a loyal following of
      readers who eagerly anticipate each new release. His novels have been
      praised for their originality, depth, and the sheer adrenaline rush they
      provide. As he continues to write, Donovan remains dedicated to pushing
      the boundaries of the thriller genre, crafting stories that challenge and
      captivate his audience.
    </p>
    <h1 className="font-600 text-xl mt-[5rem] mb-4">Top Books</h1>
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th
            className="border border-gray-300 p-2"
            style={{ textAlign: "center" }}
          >
            SN
          </th>
          <th
            className="border border-gray-300 p-2"
            style={{ textAlign: "center" }}
          >
            Title
          </th>
          <th
            className="border border-gray-300 p-2"
            style={{ textAlign: "center" }}
          >
            Year
          </th>
          <th
            className="border border-gray-300 p-2"
            style={{ textAlign: "center" }}
          >
            Rating
          </th>
        </tr>
      </thead>
      <tbody>
        {topBooks.map((book, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
            <td
              className="border border-gray-300 p-2"
              style={{ textAlign: "center" }}
            >
              {index + 1}
            </td>
            <td
              className="border border-gray-300 p-2"
              style={{ textAlign: "center" }}
            >
              {book.title}
            </td>
            <td
              className="border border-gray-300 p-2"
              style={{ textAlign: "center" }}
            >
              {book.year}
            </td>
            <td
              className="border border-gray-300 p-2"
              style={{ textAlign: "center" }}
            >
              {book.rating}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export { Authors };
