import { Component } from '@angular/core';
import { CategoryService } from '../../../Services/category.module';

@Component({
  templateUrl: 'footer.component.html',
  selector: 'footer',
  //component mà muốn sài service thì phải thêm "Providers"
  providers: [CategoryService]
})

export class FooterComponent{

}
