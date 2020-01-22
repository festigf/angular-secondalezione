import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  //books:Book[]=[]; //{'nome':"rr"}
  constructor(private booksService: BooksService){
    
  /*this.booksService.getBooks().subscribe( (books:Book[]) => {
    console.log('2 sono nel subscribe')
    this.books=books;
    console.log(this.books[0]);
    });*/
    console.log('1 sono nel costruttore')
    console.log(this.booksService.books)

  }
  onClick1(){
    this.booksService.getBooks().subscribe( (books:Book[]) => {
    console.log('2 sono nel subscribe')
    this.booksService.books=books;
    console.log(this.booksService.books[0])
    
    },error => console.log(error));
  }
  onClick(){
    this.booksService.getBooks().subscribe( (books) => {
    console.log('2 sono nel subscribe')
    this.booksService.books=books;
    console.log(this.booksService.books[0])
    
    },error => console.log(error));
  }

}
