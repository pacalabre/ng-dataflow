import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent {
  @Input() dog;
  @Output() dogNameFromOuter = new EventEmitter();

  dogNameFromInner(passed) {
  	this.dog = passed;
  	this.dogNameFromOuter.emit(this.dog);
  }


  constructor() { }


}
