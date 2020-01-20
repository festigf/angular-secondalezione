import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { Book } from '../../book';

@Component({
  selector: 'app-showbooks',
  templateUrl: './showbooks.component.html',
  styleUrls: ['./showbooks.component.css']
})
export class ShowbooksComponent implements OnInit {

  constructor(private booksService:BooksService) { }

  ngOnInit() {
  }
  onDelete(pos){
    this.booksService.books.slice(pos,1);
  console.log(this.booksService.books[0]);
  }
}