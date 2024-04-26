import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import { BookService } from '../book.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories!: Category[];
  loaded: boolean = false;

  constructor(private bookService: BookService){
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.loaded = false;
    this.bookService.getCategories().subscribe((categories => {
      this.categories = categories;
      this.loaded = true;
    }))
  }
}
