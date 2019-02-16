import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Election, Position, PageTransitions } from 'src/app/routes/vote/vote.component';


@Component({
  selector: 'multi-position-handler',
  templateUrl: './multi-position-handler.component.html',
  styleUrls: ['./multi-position-handler.component.css']
})
export class MultiPositionHandlerComponent implements OnInit {
  // request data
  @Input() election: Election = null;  // the current election
  @Input() positions: Position[] = [];  // the list of district positions
  // completion emitter
  @Output() onComplete: EventEmitter<number> = new EventEmitter<number>();

  // member variables
  currentPosition: number = 0;  // current position being voted for

  constructor() { }

  ngOnInit() {
  }

  formChange(transition: number = PageTransitions.NextPage) {
    // go back to the start page
    if (transition == PageTransitions.StartOver) {
      this.onComplete.emit(PageTransitions.StartOver);
    // go to the next position to vote for
    } else if (transition == PageTransitions.NextPage && this.currentPosition + 1 < this.positions.length) {
      console.log('next position');
      this.currentPosition++;
    // got to the completion page
    } else {
      console.log('next page');
      this.onComplete.emit(PageTransitions.NextPage);
    }
  }
}
