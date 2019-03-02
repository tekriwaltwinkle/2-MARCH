import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  constructor(private service: ApiConnectionService) { }
  showQuestions:boolean=false;

  ngOnInit() {
    this.service.getQuiz().subscribe(data => {this.service.module=data;});
    console.log(this.service.module);
  }
  onQuizStart(j)
  {
    this.service.getQuestions().subscribe(data=>{this.service.questions=data;});
    console.log(this.service.questions);
    this.showQuestions=true;
    
  }

}
