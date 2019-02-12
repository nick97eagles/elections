import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/shared-ng/services/request.service';

interface Count {
  positions: {
    position: string;
    votes: {
      candidate: string;
      votes: number;
    };
  }[];
}

@Component({
  selector: 'app-admin-vote-count',
  templateUrl: './admin-elections-count-modal.component.html',
  styleUrls: ['./admin-elections-count-modal.component.css']
})
export class AdminElectionsCountModalComponent implements OnInit {

  @Input() electionID: string;
  @Input() positions: Position[];
  positionData: Count;

  constructor(private rs: RequestService) { }

  ngOnInit() {
    this.positionData = null;
    this.getCount();
  }

  getCount() {
    let uri = 'elections/election/' + this.electionID + '/count';
    const countObservable = this.rs.get(uri);
    countObservable.subscribe((data: Count) => {
      // success
      console.log('[success] in countObservable', data);
      this.positionData = data;
    }, (err) => {
      console.log('[error] in countObservable', err);
    }, () => {
      // complete
      console.log('[complete] countObservable closed.');
    });
  }

}
