import { Component } from '@angular/core';
import { Book } from '../models';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  book!: Book;
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.route.paramMap.subscribe((params) => {
      const bookId = Number(params.get('id'));
      this.loaded = false;
      this.bookService.getBook(bookId).subscribe((book) => {
        this.book = book;
        this.loaded = true;
      });
    });
  }
}
