import { Component,  EventEmitter,  Input, OnInit, Output, SimpleChanges,  } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.sass']
})
export class ParagraphComponent implements OnInit {
  
  
  //-- 라이프사이클 
  //-- https://abelog.netlify.app/Angular/%EC%95%B5%EA%B7%A4%EB%9F%AC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-(angular-component-lifecycle)
  //-- https://js2prince.tistory.com/entry/Angular-Component-LifeCycle
  
  // 타입스크립트
  constructor() { }
  
  // 앵귤러 ngOnChanges ngOnInit
  // @Input로 호출
 
  // @Input() item: string;
  @Input() items: Array <String>;
  // 왜...?? <input _ngcontent-pqn-c41 type=​"text" ng-model=​"item">​

  ngOnChanges(changes: SimpleChanges) {
    // 작성시 참고 https://www.python2.net/questions-1153319.htm
    console.log("ngOnChanges:",this.items);
    console.log(changes.items.currentValue);
  }

  ngOnInit(): void {
    console.log("ngOnInit:",this.items);
  }

  // 업데이트 할 때마다 어레이를 복사해야한다??https://stackoverflow.com/questions/43223582/why-angular-2-ngonchanges-not-responding-to-input-array-push
}
