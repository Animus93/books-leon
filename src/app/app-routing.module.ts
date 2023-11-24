import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  {
    path: "authors",
    component: AuthorsComponent
  },
  {
    path: "books",
    component: BooksComponent
  },
  {
    path: "**",
    component: AuthorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
