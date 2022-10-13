import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/models/products';
import { MyApiService } from 'src/app/services/my-api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-my-api',
  templateUrl: './my-api.component.html',
  styleUrls: ['./my-api.component.css']
})
export class MyApiComponent implements OnInit {
  showModal = false;
  products: Product[] = [];
  submitted = false;
  search = '';
  productForm = new FormGroup({
    _id: new FormControl(),
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    color: new FormControl(null),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
  })
  constructor(private _myApiService: MyApiService, private _utilitiesService: UtilitiesService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  toggleModal() {// toggle modal to create or update product
    this.submitted = false;
    this.productForm.reset();
    this.showModal = !this.showModal;
  }

  saveProduct() {// save product
    this.submitted = true;
    if (!this.productForm.valid) return;
    if (this.productForm.controls._id.value) {
      if (!this.productForm.touched) {
        this._utilitiesService.toastr.info('There are not changes', 'Oops!', this._utilitiesService.optToast);
        return;
      }
      this.updateProduct();
      return;
    }
    this.createProduct();
  }

  createProduct() {// create new product
    this.spinner.show();
    this._myApiService.createProduct(this.productForm.value).subscribe((data: any) => {
      this.getProducts();
      this.toggleModal();
      this.spinner.hide();
    }, ({ error }) => {

      this._utilitiesService.toastr.error(error.msg, 'Oops!', this._utilitiesService.optToast);

      this.spinner.hide();
    });
  }

  getProducts(search = '') { // get products from api, if search is empty, get all products
    if (search.trim().length === 0) this.search = '';
    this.spinner.show();
    this._myApiService.getProducts(search).subscribe((data: any) => {
      this.products = data;
      this.spinner.hide();
    }, ({ error }) => {

      this._utilitiesService.toastr.error(error.msg, 'Oops!', this._utilitiesService.optToast);
      this.spinner.hide();
    });
  }

  searchProducts() { // search products, search must be at least 3 characters
    if (this.search.length >= 3 || this.search == '') {
      this.getProducts(this.search);
    }
  }

  fillForm(product: Product) { // fill form to update product
    this.productForm.patchValue(product);
    this.showModal = true;
  }

  updateProduct() { // update product in api
    this.spinner.show();
    this._myApiService.updateProduct(this.productForm.value).subscribe((data: any) => {
      this.getProducts();
      this.toggleModal();
      this.spinner.hide();
    }, ({ error }) => {

      this._utilitiesService.toastr.error(error.msg, 'Oops!', this._utilitiesService.optToast);

      this.spinner.hide();
    });
  }

  deleteProduct(id: string) { // delete product from api
    Swal.fire(this._utilitiesService.swalDelete).then(result => {
      if (result.value) {
        this.spinner.show();
        this._myApiService.deleteProduct(id).subscribe((data: any) => {
          this.spinner.hide();
          Swal.fire(this._utilitiesService.swalDeleted);
          this.getProducts();
        }, ({ error }) => {

          this._utilitiesService.toastr.error(error.msg, 'Oops!', this._utilitiesService.optToast);
          this.spinner.hide();
        })
      }
    })
  }



}
