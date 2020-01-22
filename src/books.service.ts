import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Book } from './book';
@Injectable()
export class BooksService {
  
  books:Book[]=[];
  constructor(private http: HttpClient) { 

  }

  getBooks(){

    /*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('festigf:AltaFormazione')
  })
};*/
console.log(btoa('festigf:AltaFormazione'));
    let header: HttpHeaders = new HttpHeaders();

//header = header.set('Authorization', 'Basic ' + btoa('festigf:AltaFormazione2020'));
header = header.set('authorization', 'Basic ZmVzdGlnZjpBbHRhRm9ybWF6aW9uZTIwMjA=');
/*header.append("cache-control", "no-cache");
header.append("Content-Type", "application/json");
header.append('Access-Control-Allow-Headers', 'Content-Type');
header.append('Access-Control-Allow-Methods', 'GET');
header.append('Access-Control-Allow-Origin', '*');
*/
/*{headers: header} */
    return this.http
    .get('https://festigf.pythonanywhere.com/books',{headers: header})
    .pipe(catchError(err => {
      console.log(err)
      return throwError(err);
    }));
    
    //('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json');
  }
  
  delBook(pos){
    this.books.splice(pos,1);
  }
}