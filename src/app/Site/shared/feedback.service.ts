import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private URL = 'http://localhost:9090/feedback'

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get<Feedback[]>(this.URL)
  }

  public insert(feedback : Feedback){
    return this.http.post<Feedback>(this.URL, feedback)
  }

  getById(id : number){
    const newURL = `${this.URL}/${id}`;
    return this.http.get<Feedback>(newURL);
  }

  public update(feedback : Feedback){
    const newURL = `${this.URL}/${feedback.id_feedback}`;
    return this.http.put<Feedback>(newURL, feedback);
  }

  public delete(id : number){
    const newURL = `${this.URL}/${id}`;
    return this.http.delete<Feedback>(newURL);
  }
}
