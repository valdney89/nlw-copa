import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() theme: 'google' | 'primary' = 'primary';
  @Input() type: 'submit' | 'text' | 'reset' = 'text'

  @Output() clickEmitter = new EventEmitter()

  constructor() { }

  handleClick(): void {
    this.clickEmitter.emit()
  }

  //TODO Loading

}
