import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http: HttpClient) { }

  getProducts(search: string) {
    return this.http.get(`${environment.myApi_route}/products?search=${search}`);
  }

  getProduct(id: string) {
    return this.http.get(`${environment.myApi_route}/products/${id}`);
  }

  createProduct(product: any) {
    return this.http.post(`${environment.myApi_route}/products`, product);
  }

  updateProduct(product: any) {
    return this.http.patch(`${environment.myApi_route}/products/${product._id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.myApi_route}/products/${id}`);
  }
}
