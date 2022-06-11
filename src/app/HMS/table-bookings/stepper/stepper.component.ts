import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() initialValue:any;
  step: any = 1;
  min: any = 0;
  max: any = 5;
  @Input() symbol: string="";
  @Input() data: any;
  @Input() ariaLabelMore: string="";
  renderedValue: string="";
  value: any ;
  @Output() onchange: EventEmitter<any>= new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.value=this.data.counter;
  }

  toggleMore = () => {
    if (this.step + this.value <= this.max) {
      this.value = this.value + this.step;
      this.data.counter=this.value;
      this.onchange.emit(this.data);
    }
  };

  toggleLess = () => {
    if (this.value - this.step >= this.min) {
      this.value = this.value - this.step;
      this.data.counter=this.value;
      this.onchange.emit(this.data);
    }
  };

}
