import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Subject } from 'rxjs';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  quiz;
  id;
  quizzes = [];
  module;
  questions;
  constructor(private http: HttpClient) { }

  getQuiz():Observable<any>
  {
    const x=this.http.get(`http://localhost:49683/api/quizs`);
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
    return this.http.post(`http://localhost:49683/api/questions`,ques).subscribe(
      res => {
        console.log(res)
      }
    )
    
  }
  getQuestions():Observable<any>{
    return this.http.get('http://localhost:49683/api/questions')
  }
}
