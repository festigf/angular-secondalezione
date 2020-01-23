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
const httpOptions = {
 headers: new HttpHeaders({
  'Authorization': 'Basic ' + btoa('festigf:AltaFormazione2020')
 }),
 withCredentials: true
};    
    
    
    let header: HttpHeaders = new HttpHeaders();

header = header.set('Authorization', 'Basic ' + btoa('festigf:AltaFormazione2020'));
//header = header.set('authorization', 'Basic ZmVzdGlnZjpBbHRhRm9ybWF6aW9uZTIwMjA=');
header.append("cache-control", "no-cache, no-store, must-revalidate, post-check=0, pre-check=0");
header.append('Pragma', 'no-cache');
header.append('Expires', '0');
header.append("Content-Type", "application/json");
header.append('Access-Control-Allow-Headers', 'Content-Type');
header.append('Access-Control-Allow-Methods', '*');
header.append('Access-Control-Allow-Origin','http://localhost:4200' );


// 'https://angular-secondalezione.stackblitz.io');

//header.append('withCredentials', 'true');

/*{headers: header} */
    return this.http
    .get('https://festigf.pythonanywhere.com/books',{headers: header, withCredentials: true})
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