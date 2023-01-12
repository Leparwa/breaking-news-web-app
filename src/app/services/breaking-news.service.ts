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
    return this.htpp.get(`https://news-api14.p.rapidapi.com/top-headlines`, {  
      params: {country: 'us', language: 'en'},
      headers: {
        'X-RapidAPI-Key': 'ef46e918dfmshb3d555c901f3613p149c59jsnb331a7054843',
        'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
      }
  })  
  }
}
