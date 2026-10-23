const data = [
  {
    id: crypto.randomUUID(),
    cover: "lughatul muhaddis.gif",
    title: "Lughatul Muhaddis",
    description:
      "An intermediate-level guide to the terminology and essential concepts of Hadith studies.",
    genre: "Hadith Studies",
    rating: 5,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "manahijul muhaddiseen.webp",
    title: "Manahijul Muhaddiseen",
    description:
      "An introductory guide to the foundational Hadith collections and their scholarly traditions.",
    genre: "Hadith Studies",
    rating: 4,
    price: 150,
  },
  {
    id: crypto.randomUUID(),
    cover: "mutoon.webp",
    title: "Mutoon",
    description:
      "A collection of classical texts for structured study and review.",
    genre: "Classical Islamic Texts",
    rating: 3,
    price: 120,
  },
  {
    id: crypto.randomUUID(),
    cover: "mutoon level 1.webp",
    title: "Mutoon Level 1",
    description:
      "An introductory collection of foundational texts for learners beginning their studies.",
    genre: "Classical Islamic Texts",
    rating: 4,
    price: 50,
  },
  {
    id: crypto.randomUUID(),
    cover: "mutoon level 3.webp",
    title: "Mutoon Level 3",
    description:
      "A collection of Level 3 texts for continued study and deeper subject understanding.",
    genre: "Classical Islamic Texts",
    rating: 4,
    price: 150,
  },
];

function getAllBooks() {
  return data;
}

export { getAllBooks };
