import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  books: any = [];
  book = new Book();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getBooksData();
  }

  getBooksData() {
    // console.log('Hello Books');
    this.dataService.getData().subscribe(res => {
      // console.log(res);
      let resData: any = res;
      this.books = resData.books.data;
    });
  }

  

}
