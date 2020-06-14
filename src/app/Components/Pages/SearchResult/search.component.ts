import { Component } from '@angular/core';
import { SearchService } from '../../../Services/search.module';
import { ActivatedRoute } from "@angular/router";


@Component({
  templateUrl: 'search.component.html',
  selector: 'search',
  providers: [SearchService]  // có thể gọi được nhiều service -> array

})

export class SearchComponent{
  stringSearch;
  configPage;
  arrProducts;
  constructor( private SearchService: SearchService, private route: ActivatedRoute ){
    this.route.queryParamMap.subscribe(params => {
      this.stringSearch = params.get('product');
      console.log(this.stringSearch);
    });
    SearchService.getProduct(this.stringSearch).subscribe(data=>{    // subscribe: chờ cho getCategory() chạy xong mới được xử lý tiếp kết quả
      this.arrProducts = data;
      this.configPage = {
        id: 'pSearch',
        itemsPerPage: 4,
        currentPage: 1,
        totalItems: this.arrProducts.count
      };
    });
  }
  pageChanged(event){
    this.configPage.currentPage = event;
  }
}
