import { Component, OnInit } from '@angular/core';
import { Iheadline, IHttpResponse } from '../interfaces/iheadline';
import { BreakingNewsService } from '../services/breaking-news.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css']
})
export class BreakingNewsComponent implements OnInit {
  realTimeNews:Iheadline[] = [];
  constructor(
    private breakingNews: BreakingNewsService
  ) {}

  ngOnInit(): void {
    this.getAllHeadline()
  }

  // get all headlines
  getAllHeadline(){
    this.breakingNews.getRealtimeNews().subscribe({
      next: (success:IHttpResponse) => {
        this.realTimeNews = success.articles
      },
      error: (error: IHttpResponse) => {
    
      }
    })
  }

  // get specific category of news
  getNewsCategory(category: string){
    this.breakingNews.getNewsCategory(category).subscribe({
      next: (success:IHttpResponse) => {
        this.realTimeNews = success.articles
      },
      error: (error: IHttpResponse) => {
    
      }
    })
  }

}
