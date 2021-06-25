import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any = [];
  book = new Book();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getBooksData();
  }

  getBooksData(){
    // console.log('Hello Books');
    this.dataService.getAuthorsBook().subscribe(res => {
      // console.log(res);
      let resData:any= res;
      this.books = resData.books.data;
    });
  }

  insertData(){
    this.dataService.insertData(this.book).subscribe(res => {
      this.getBooksData();
    })
  }

}
