import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { 

  }

  getBooks(){
    return this.http.get('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json');
  }
}