import { Component } from '@angular/core';
import { DetailProService } from "../../../Services/detailPro.module";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'detailPro.component.html',
  selector: 'detailPro',
  providers: [DetailProService]
})

export class DetailProComponent{
  DetailProduct;
  constructor( private DetailProService: DetailProService, private route: ActivatedRoute ){
    DetailProService.getDetailPro(this.route.snapshot.paramMap.get("id")).subscribe(data=>{    // subscribe: chờ cho getCategory() chạy xong mới được xử lý tiếp kết quả
      this.DetailProduct=(data);
    });
  }
}

