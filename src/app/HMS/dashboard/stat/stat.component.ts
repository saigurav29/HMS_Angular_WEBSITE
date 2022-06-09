import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  @Input() bgClass: any;
  @Input() icon: any;
  @Input() count: any;
  @Input() label: any;
  @Input() data: any;
  @Input() detaillable:any;
  constructor() { }

  ngOnInit(): void {
  }

}
