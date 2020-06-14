import { Component } from '@angular/core';
import { CategoryService } from '../../../Services/category.module';
declare var $: any;


@Component({
  templateUrl: 'header.component.html',
  selector: 'header',
  providers: [CategoryService]
})

export class HeaderComponent{
  arrCate;
  constructor( private cateService: CategoryService ){
    cateService.getCategory().subscribe(data=>{    // subscribe: chờ cho getCategory() chạy xong mới được xử lý tiếp kết quả
      this.arrCate=(data);
      $('#menu > ul').superfish({
        delay: 100,
        animation: { opacity: 'show', height: 'show' },
        speed: 'fast',
        arrowClass: false,
        autoArrows: true
    });
    });
  }
}
