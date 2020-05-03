import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../core/Service/news-data.service';
import { INewsDetail } from '../core/Model/News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: INewsDetail[];

  constructor(private newDataService : NewsDataService) { }

  ngOnInit(): void {
    this.getNews();
  }
  getNews() {
    this.newDataService.getNewsrDetails().subscribe(data => {
      this.news = data;
    });
  }

}
