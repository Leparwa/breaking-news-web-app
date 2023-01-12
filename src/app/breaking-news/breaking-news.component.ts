import { Component, OnInit } from '@angular/core';
import { BreakingNewsService } from '../services/breaking-news.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css']
})
export class BreakingNewsComponent implements OnInit {
  realTimeNews:any
  constructor(
    private breakingNews: BreakingNewsService
  ) { }

  ngOnInit(): void {
    this.breakingNews.getRealtimeNews().subscribe((realtimeNews) =>{
      this.realTimeNews = realtimeNews.data
      console.log(realtimeNews.data)
    })
  }

}
