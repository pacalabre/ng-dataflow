import { Component, Input } from '@angular/core';

@Component({
  selector: 'outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent {
  @Input() dog;
  newDogName = "";

  dogNameFromInner(passed) {
  	this.dog = passed;
  	console.log("stuff "+ this.dog);
  }
  constructor() { }


}
