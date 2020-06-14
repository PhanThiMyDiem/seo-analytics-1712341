import { Component } from '@angular/core';
import { CategoryService } from '../../../Services/category.module';

@Component({
  templateUrl: 'cate.component.html',
  selector: 'cate',
  //component mà muốn sài service thì phải thêm "Providers"
  providers: [CategoryService]  // có thể gọi được nhiều service -> array
})

export class CateComponent{
  arrCate;
  constructor( private cateService: CategoryService ){
    cateService.getCategory().subscribe(data=>{    // subscribe: chờ cho getCategory() chạy xong mới được xử lý tiếp kết quả
      this.arrCate=(data);
      this.arrCate.forEach(Cat => {
        Cat.numberOfSubcat = Cat.SubCat_Id.length;
      });
    });
  }
}
