import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author, Basket, Book, Category } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class BookService {
  BASE_URL: string = 'http://127.0.0.1:8000/api/v1'

  constructor(private client: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.client.get<Category[]>(`${this.BASE_URL}/category/`)
  }

  getBooks(): Observable<Book[]> {
    return this.client.get<Book[]>(`${this.BASE_URL}/book/`)
  }

  getBook(id: number): Observable<Book> {
    return this.client.get<Book>(`${this.BASE_URL}/book/${id}/`)
  }

  getBaskets(): Observable<Basket[]> {
    return this.client.get<Basket[]>(`${this.BASE_URL}/basket/`)
  }

  getAuthors(): Observable<Author[]> {
    return this.client.get<Author[]>(`${this.BASE_URL}/author/`)
  }

  // getAuthorizationToken():
}
