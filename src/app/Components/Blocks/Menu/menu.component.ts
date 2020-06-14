import { Component } from '@angular/core';
import { CategoryService } from '../../../Services/category.module';

@Component({
  templateUrl: 'menu.component.html',
  selector: 'menu',
  providers: [CategoryService]
})

export class MenuComponent{

}
