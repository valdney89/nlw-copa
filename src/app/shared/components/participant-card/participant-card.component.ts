import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '@shared/models/participant';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {

  @Input() participant!: Participant;

  constructor() { }

  ngOnInit() {
  }

}
