import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BreakingNewsService {
baseUrl = environment.baseUrl
  constructor(private htpp: HttpClient) { }

  // get realtime news 
  getRealtimeNews():Observable<any>{
    return this.htpp.get(`https://newsapi.org/v2/top-headlines`, {  'headers': {
      'apiKey': 'ca84965a4f174cf3ae49747b8dac0631',
    },
  })  
  }
}
