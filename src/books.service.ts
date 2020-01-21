import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Book } from './book';
@Injectable()
export class BooksService {
  
  books:Book[]=[];
  constructor(private http: HttpClient) { 

  }

  getBooks(){
    let header: HttpHeaders = new HttpHeaders();

//header = header.set('Authorization', ('Token ' + auth));

header = header.append("Content-Type", "application/json");
    return this.http.get('https://festigf.pythonanywhere.com/books',{ headers: header });
    
    //('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json');
  }
  
  delBook(pos){
    this.books.splice(pos,1);
  }
}