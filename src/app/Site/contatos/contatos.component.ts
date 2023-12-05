import { Component, OnInit } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../shared/feedback.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit{

  'feedback' : Feedback;

  constructor(private route : ActivatedRoute, private router: Router, private feedbackservice : FeedbackService){}
  ngOnInit(){
    this.feedback = new Feedback();
    const id = this.route.snapshot.paramMap.get('id');
  
    if(id){
      this.feedbackservice.getById(parseInt(id)).subscribe(resp =>{
        this.feedback = resp;
      })
    }
  }

  onSubmit(){
    let observable : Observable<Feedback>;
    observable = this.feedbackservice.insert(this.feedback);
    observable.subscribe(() =>{
    this.router.navigate(['/feedback'])
  })
  }
}
