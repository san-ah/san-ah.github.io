import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'study0514';

  // 1. 기본 배열
  arr = new Array(3);  

  
  // 2. 실시간 출력
  myData : string;


  // 3. 자식컴포넌트에 1004 보내기
  result = {number: 1004, string:"연결 성공"};


  // 4. 버튼 이벤트
  clickMessage: string;
  onClickMe() {
    this.clickMessage = '이벤트 연결 성공';
  }


  // 5. 심화 1
  myTxt: string = "여기에 입력 됩니다.";
  myTxts = [];
  clickAdd(myTxt: string) {
    this.myTxt = myTxt;
    this.myTxts.push(myTxt);
    console.log(this.myTxts);
  }
  
  // 6. 심화 2
  myItem: string = "여기";
  myItemss = [];
  add(myItemValue: any) {
    this.myItem = myItemValue;  // add의 item은 AppComponent의 item이다??
    this.myItemss.push( this.myItem);
    console.log("myItem:"+this.myItem);
    console.log("myItems:"+this.myItemss);
  }
  
  

}
