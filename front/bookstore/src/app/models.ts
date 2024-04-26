export interface Category {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  price: number;
  description: string;
  in_sell: boolean;
  author: Author;
  category: number;
}

export interface Author {
  id: number;
  name: string;
  surname: string;
  age: number;
}

export interface Basket {
  id: number;
  book: Book;
  user: number;
}
