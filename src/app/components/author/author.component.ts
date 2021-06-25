import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/author';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  [x: string]: any;

  authors: any = [];
  author = new Author();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAuthorsData();
  }

  getAuthorsData() {
    // console.log('Hello Authors');
    this.dataService.getAllAuthors().subscribe(res => {
       console.log(res);
      let resData: any = res;
      this.authors = resData.authors;
    });
  }


}
