import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
QuizTitle;
quizzes;

  constructor(private service: ApiConnectionService) { }
  add:boolean=false;
  addQuestions=false;
  addMore:boolean=true;
  question;
  opt1;
  opt2;
  opt3;
  opt4;
  ans;
  obj;
  i=0;
  jj=1;
  ngOnInit() {
    
  }
  onAddQuiz()
  { 
    this.add=!this.add;
    
  }
  onQuizAdd(topics: HTMLInputElement)
  {//const modules={topic:topics.value};
    this.service.quiz = this.QuizTitle;
    //this.service.module.push(modules);
    console.log(this.service.module)
    this.service.addQuiz().subscribe(val => this.quizzes=val);
    console.log(this.quizzes);
  }
  onDelete(vals)
  {
    console.log(vals);
    let index = this.quizzes.indexOf(vals);
    this.quizzes.splice(index,1);
    this.service.delquiz(vals.qID).subscribe();

  }
  onAdd(id)
  {
    this.addQuestions =!this.addQuestions;
    this.jj=id;
  }
  onSubmit(questt,A,B,C,D,correct,id){

    if(questt.value=="")
    {alert("Please provide Question!!");}
    else if(A.value=="")
    {alert("Please provide Option A !!");}
    else if(B.value=="")
    {alert("Please provide Option B !!");}
    else if(C.value=="")
    {alert("Please provide Option C !!");}
    else if(D.value=="")
    {alert("Please provide Option D !!");}
    // else if(correct.value==""||!(correct.value.match(/[A-D]/)))
    // {alert("Please provide Answer like A,B,C,D !!");}
  else{
    let obj={
      Text:questt,Answer1:A,Answer2:B,Answer3:C,Answer4:D,CorrectAnswer:correct,qID:id};
    console.log(obj);
    console.log(this.opt3+this.opt4);
    this.service.saveques(obj);
    id:this.i,
    this.jj++;
  
 
  if(this.jj>5){
    this.addQuestions=false;
    this.jj=1;

  }
  }
}
}
