// viết service để req ra bên ngoai, Móc dữ liệu từ server về Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//khai bao service
@Injectable()

export class SubService{
  constructor( private http: HttpClient ){  // req ra ben ngoai

  }
  getSubcate(id){
    // options
    let options = {
      headers: new HttpHeaders().set("Content-type", "application/x-www-form-urlencoded")
    }
    return this.http.post("http://server-shop-new.herokuapp.com/api/subcate/"+id, options);
  }
}
