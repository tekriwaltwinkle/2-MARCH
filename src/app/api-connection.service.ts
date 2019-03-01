import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  quiz;
  id;
  quizzes = [];
  constructor(private http: HttpClient) { }

  getQuiz()
  {
    const x=this.http.get(`http://localhost:49683/api/values`);
    return x;
  }

  addQuiz()
  {
    const x = this.http.post(`http://localhost:49683/api/quizs`, {Title:this.quiz, aID: 5});
    
    return x;
  }
  delquiz(id)
  {
    return this.http.delete(`http://localhost:49683/api/quizs/${id}`);
  }
  saveques(ques)
  {
    return this.http.post(`http://localhost:49683/api/questions`,ques)
    
  }
}
