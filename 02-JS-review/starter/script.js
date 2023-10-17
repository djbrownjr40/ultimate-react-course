import fetch from "node-fetch";

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring Objects

const book = getBook(2);
book;
// const title = book.title;
// title;
// const author = book.author;
// author;

const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;
console.log(author, title, genres)

// Destructuring Arrays

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// primaryGenre takes the first element of the genres array and assign it to primaryGenre variable

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres)

// ...spread operator takes all values out of array
const newGenres = [...genres, "epic fantasy"];
newGenres

// .spread operator can update object with new key-values
const updatedBook = {
  ...book,
  // pages: 1210,
  moviePublicationDate: '2001-12-19',
};
updatedBook

// arrow functions

// function getYear(str){
//   return str.split('-')[0];
// }

// following arrow function is the same as above
const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

const summary = `${title} is a ${pages}-page book, was written by ${author}, and published in ${getYear(publicationDate)}. The book has ${hasMovieAdaptation ? '' : "not"} been adapted as a movie.`;
summary;

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than a thousand';
pagesRange;
console.log(`The book has ${pagesRange} pages.`);


// short-circuting - with &&, when first value is false, automatically returns second value
console.log(true && 'some string')
console.log(false && 'some string')

console.log(hasMovieAdaptation && "this book has a movie")

// falsy: 0, '', null, undefined

console.log('Dennis' && "My name is Dennis.")

// or - short-circuits when first value is true
console.log(true || 'some string')
console.log(0 || 'some string')

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "not translated";
spanishTranslation

// console.log(book.reviews.librarything.reviewsCount); 0
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// nullish coalescing operator - short-circuits for falsy values

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// optional chaining - add ? to make it optional, then add ?? 0 to change from undefined to 0

function getTotalReviewCount(book){
  const goodRead = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodRead + librarything;
}

console.log(getTotalReviewCount(book));
*/

// map method - loops over original array, returns new array with some operational applied to each element
// const books = getBooks();

// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const bookTitles = books.map((book) => book.title);
// bookTitles;

// function getTotalReviewCount(book){
//   const goodRead = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodRead + librarything;
// }

// const essentialData = books.map((book) => ({
//     title: book.title,
//     author: book.author,
//     reviewsCount: getTotalReviewCount(book),
// }));

// essentialData;

// // filter method - remove something from array based on a condition and add to new array

// const longBooksWithMovies = books
// .filter((book) => book.pages > 500)
// .filter((book) => book.hasMovieAdaptation);
// longBooksWithMovies

// const adventureBooks = books.filter((book) => book.genres.includes("adventure")
// ).map((book) => book.title);
// adventureBooks;

// // reduce method - used to boil elements down to a single number
// // acc = accumulator (current value of what will be final value)
// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// // sort method - mutates (changes original array) - (not functional)

// const z = [3, 7, 1, 9, 6];
// const sorted = z.slice().sort((a, b) => a - b);
// sorted;
// z;

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedByPages

// // immutable arrays

// // 1) add a new object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J.K. Rowling",
// };

// const booksAfterAdd = [...books, newBook];
// booksAfterAdd

// // 2) delete an object from array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete

// // 3) update an object in the array
// // update one property in one object of the array
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? {...book, pages: 1 } : book
//   );

//   booksAfterUpdate

// asynchronous js

// promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));


// console.log('dennis');

async function getToDos(){
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getToDos();
console.log(todos)

console.log("dennis");
