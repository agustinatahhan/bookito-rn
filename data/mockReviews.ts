import { Review } from "@/types/book";

export const data: Review[] = [
  {
    id: "1",
    title: "El ruiseñor",
    author: "Harper Lee",
    pageCount: 320,
    rating: 5,
    review: "Un clásico inolvidable sobre la justicia y la infancia.",
    quotes: [
      "La valentía es cuando sabes que estás derrotado antes de empezar... y aun así empiezas.",
      "La valentía es cuando sabes que estás derrotado antes de empezar... y aun así empiezas.",
    ],
    favCharacter: "Atticus Finch",
    image: require("../assets/images/book.jpeg"),
    startDate: "2025-08-19",
    endDate: "2025-08-19",
    genre: "Classic",
    recommend: true
  },
  {
    id: "2",
    title: "Todo lo que nunca fuimos",
    author: "Alice Kellen",
    pageCount: 400,
    rating: 4,
    review: "Una historia tierna de amor y redescubrimiento personal.",
    quotes: ["A veces hay que perderse para volver a encontrarse."],
    favCharacter: "Leah",
    image: require("../assets/images/book.jpeg"),
    startDate: "2025-08-19",
    endDate: "2025-08-19",
    genre: "Romance"
  },
  {
    id: "3",
    title: "Maestría en el amor",
    author: "Don Miguel Ruiz",
    pageCount: 200,
    rating: 2,
    review: "Algunas ideas interesantes, pero no todas me convencieron.",
    quotes: [
      "No necesitamos justificar el amor; el amor verdadero se comparte libremente.",
    ],
    favCharacter: "Narrador",
    image: require("../assets/images/book.jpeg"),
    startDate: "2025-08-19",
    endDate: "2025-08-19",
    genre: "Romance"
  },
  {
    id: "4",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    pageCount: 417,
    rating: 5,
    review: "Un viaje mágico a Macondo lleno de realismo mágico.",
    quotes: [
      "El secreto de una buena vejez no es otra cosa que un pacto honrado con la soledad.",
    ],
    favCharacter: "Úrsula Iguarán",
    image: require("../assets/images/book.jpeg"),
    startDate: "2025-08-19",
    endDate: "2025-08-19",
    genre: "Magic"
  },
  {
    id: "5",
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    pageCount: 565,
    rating: 4,
    review: "Misterio, literatura y amor en la Barcelona de posguerra.",
    quotes: ["Cada libro, cada tomo que ves, tiene alma."],
    favCharacter: "Daniel Sempere",
    image: require("../assets/images/book.jpeg"),
    startDate: "2025-08-19",
    endDate: "2025-08-19",
    genre: "Mistery"
  },
  {
    id: "6",
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    pageCount: 96,
    rating: 5,
    review: "Una fábula que siempre enseña algo nuevo en cada lectura.",
    quotes: ["Lo esencial es invisible a los ojos."],
    favCharacter: "El zorro",
    image: require("../assets/images/book.jpeg"),
    startDate: "2025-08-19",
    endDate: "2025-08-19",
    genre: "Fiction"
  },
];