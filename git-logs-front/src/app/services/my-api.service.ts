import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http: HttpClient) { }

  /*
  * params: string search query
  */
  getProducts(search: string) { // get products from my api
    return this.http.get(`${environment.myApi_route}/products?search=${search}`);
  }

  /*
  * params: object product id
  */

  getProduct(id: string) { // get product by id from my api
    return this.http.get(`${environment.myApi_route}/products/${id}`);
  }

  /*
* params: object product data
*/
  createProduct(product: any) { // create product in my api
    return this.http.post(`${environment.myApi_route}/products`, product);
  }

  /*
  * params: object product data
  */

  updateProduct(product: any) { // update product in my api
    return this.http.patch(`${environment.myApi_route}/products/${product._id}`, product);
  }

  /*
  * params: object product id
  */
  deleteProduct(id: string) { // delete product from my api
    return this.http.delete(`${environment.myApi_route}/products/${id}`);
  }
}
