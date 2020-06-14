import { Component } from '@angular/core';
import { MemberService } from '../../../Services/member.module';

@Component({
  templateUrl: 'home.component.html',
  selector: 'home',
  providers: [MemberService]  // có thể gọi được nhiều service -> array

})

export class HomeComponent{
  arrMember;
  constructor( private memberService: MemberService ){
    memberService.getMember().subscribe(data=>{    // subscribe: chờ cho getCategory() chạy xong mới được xử lý tiếp kết quả
      this.arrMember=(data);
      console.log(data);
      console.log( this.arrMember);

    });
  }
}
