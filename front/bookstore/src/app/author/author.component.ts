import { Component } from '@angular/core';
import { Author } from '../models';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  authors!:Author[];
  loaded: boolean = false;

  constructor(private bookService: BookService){
  }

  ngOnInit(): void {
    this.getAuthors();
  }
  getAuthors() {
    this.loaded = false;
    this.bookService.getAuthors().subscribe((authors) => {
      this.authors = authors;
      this.loaded = true;
    })
  }
}
