import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { AuthorComponent } from './author/author.component';

export const routes: Routes = [
  {path:'', component: HomeComponent, title: 'Home Page'},
  {path: 'category', component: CategoryComponent, title: 'Categories'},
  {path: 'book', component: BookComponent, title: 'Books'},
  {path: 'book/:id', component: BookDetailComponent, title: 'Book Detail'},
  {path: 'basket', component: BasketComponent, title: 'Baskets'},
  {path: 'author', component: AuthorComponent, title: 'Authors'},
];
