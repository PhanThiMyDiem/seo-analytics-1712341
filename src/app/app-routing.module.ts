import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { DetailComponent } from './Components/Pages/Detail/detail.component';
import { DetailProComponent } from './Components/Pages/DetailProduct/detailPro.component';
import { CategoriesComponent } from './Components/Pages/Categories/cat.component';
import { HomeComponent } from './Components/Pages/Home/home.component';
import { SearchComponent } from './Components/Pages/SearchResult/search.component';

const routesConfig: Routes = [
  {path: 'cate', component: CategoriesComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'detailPro/:id', component: DetailProComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [DetailComponent, CategoriesComponent, HomeComponent, SearchComponent],
  imports: [RouterModule.forRoot(routesConfig), CommonModule, NgxPaginationModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
