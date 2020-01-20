import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksService} from '../books.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShowbooksComponent } from './showbooks/showbooks.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ShowbooksComponent ],
  providers:    [ BooksService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
