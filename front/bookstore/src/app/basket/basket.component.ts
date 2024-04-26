import { Component } from '@angular/core';
import { Basket } from '../models';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  baskets!:Basket[];
  loaded: boolean = false;

  constructor(private bookService: BookService){
  }

  ngOnInit(): void {
    this.getBaskets();
  }
  getBaskets() {
    this.loaded = false;
    this.bookService.getBaskets().subscribe((baskets) => {
      this.baskets = baskets;
      this.loaded = true;
    })
  }
}
