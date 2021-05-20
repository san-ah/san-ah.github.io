import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.sass']
})
export class ParagraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() item: string;
  @Input() items: string[];

}
