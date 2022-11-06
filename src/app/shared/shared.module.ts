import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ParticipantCardComponent } from './components/participant-card/participant-card.component';
import { PoolCardComponent } from './components/pool-card/pool-card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PoolCardComponent,
    CardComponent,
    ParticipantCardComponent
  ],
  imports: [ CommonModule ],
  exports: [
    ButtonComponent,
    PoolCardComponent,
    CardComponent,
    ParticipantCardComponent
  ],
  providers: [],
})
export class SharedModule { }
