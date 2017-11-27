import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent {

  @Input() dog;
  @Output() dogNameFromInner = new EventEmitter();

   sendUpToOuter(e) {
  	e.preventDefault();
  	 this.dogNameFromInner.emit(e.target[0].value);
  	 e.target.reset();
  }
  constructor() { }


}
