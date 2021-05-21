import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.sass']
})
export class ChildDataComponent implements OnInit {


  @Input() result: any;
 
  constructor() { }

  ngOnInit(): void {
  }
}
