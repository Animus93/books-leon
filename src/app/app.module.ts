import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BooksComponent } from './pages/books/books.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthorsInputComponent } from './components/authors-input/authors-input.component';
import { BooksInputComponent } from './components/books-input/books-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsTableComponent } from './components/authors-table/authors-table.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { BooksTableComponent } from './components/books-table/books-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent,
    HeaderComponent,
    AuthorsInputComponent,
    BooksInputComponent,
    AuthorsTableComponent,
    MaxLengthPipe,
    BooksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
