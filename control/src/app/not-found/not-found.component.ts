import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
CurrentDate: number = Date.now();
Number1: number=2019.123456;
Number2: number=2019.7654;
Number3: number=2019.18765;
Number4: number=2019.18765;
Message: string = 'Angular is awesome!';


  constructor() { }

  ngOnInit() {
  }

}
