import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/Site/shared/feedback';
import { FeedbackService } from 'src/app/Site/shared/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  'feedbacks' : Feedback[];

  constructor(private feedbackservice: FeedbackService){}

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.feedbackservice.getAll().subscribe(resp=>{
      this.feedbacks= resp
    })
  }

  delete(feedback: Feedback){
    if(window.confirm('Confirmar exclusão do registro')){
    this.feedbackservice.delete(feedback.id_feedback).subscribe(()=>{
    this.feedbacks = this.feedbacks.filter(c=> c!== feedback)
    })
  }}

}
