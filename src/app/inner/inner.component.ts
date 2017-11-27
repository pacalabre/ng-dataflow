import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent {

  @Input() dog;
  @Output() dogNameFromInner = new EventEmitter<string>();
  
   sendUpToOuter(e) {
  	e.preventDefault();
  	 this.dogNameFromInner.emit(e.target[0].value);
  	 console.log(e.target[0].value);
  }
  constructor() { }


}
