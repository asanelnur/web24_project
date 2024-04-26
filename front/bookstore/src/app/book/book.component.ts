import { Component } from '@angular/core';
import { Book } from '../models';
import { BookService } from '../book.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books!:Book[];
  loaded: boolean = false;

  constructor(private bookService: BookService){
  }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.loaded = false;
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
      this.loaded = true;
    })
  }
}
