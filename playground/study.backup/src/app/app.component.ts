import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'study0514';
  item: string;
  items = [];

  
  // 리스트에 입력한 정보 추가
  onclickAdd(item: string) {
    this.item = item;  // onclickAdd의 item은 AppComponent의 item이다??
    this.items.push(item);
    // console.log(this.items);
    // 배열의 마지막값
    // console.log(this.items.slice(-1)[0]);
    return this.items;
  }


}
