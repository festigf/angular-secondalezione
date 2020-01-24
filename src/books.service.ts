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
   'Access-Control-Allow-Headers': 'Content-Type',
  'Authorization': 'Basic ' + btoa('festigf:AltaFormazione2020'),
  'Access-Control-Allow-Credentials': "true",
  'Access-Control-Allow-Origin':'http://localhost:4200' 
 }),
 withCredentials: true
};    

/*const httpOptions = {
 headers: new HttpHeaders(),
 withCredentials: true
};*/ 
    
    //'Basic ' + btoa('festigf:AltaFormazione2020')
    let header: HttpHeaders = new HttpHeaders();

header.append('Authorization', 'Basic ' + btoa('festigf:AltaFormazione2020'));
//header = header.set('authorization', 'Basic ZmVzdGlnZjpBbHRhRm9ybWF6aW9uZTIwMjA=');
header.append("cache-control", "no-cache, no-store, must-revalidate, post-check=0, pre-check=0");
header.append('Pragma', 'no-cache');
header.append('Expires', '0');
header.append("Content-Type", "application/json");
header.append('Access-Control-Allow-Headers', 'Content-Type');
header.append('Access-Control-Allow-Methods', '*');
header.append('Access-Control-Allow-Origin','http://localhost:4200' );
header.append('Access-Control-Allow-Credentials', 'false');
let  corsurlr = "https://cors-anywhere.herokuapp.com/";
header.append('Authorization','Basic ZmVzdGlnZjpBbHRhRm9ybWF6aW9uZTIwMjA=');

// 'https://angular-secondalezione.stackblitz.io');

//header.append('withCredentials', 'true');

/*{headers: header} 
{headers: header, withCredentials: true}*/
    return this.http
    //.get('https://festigf.pythonanywhere.com/api/books'); //,httpOptions);/*
    .get('https://festigf.pythonanywhere.com/api'); 
   /* .pipe(catchError(err => {
      console.log(err);
      //return this.http
        //.get('https://festigf.pythonanywhere.com/books',{headers: header, withCredentials: true})
      return throwError(err);
    }));*/
    
    //('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json');
  }
  
  delBook(pos){
    this.books.splice(pos,1);
  }
}