import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  swalDelete: any = {
    title: '¿Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete!',
    cancelButtonText: 'Cancel'
  };
  swalDeleted: any = {
    icon: 'success',
    title: 'Deleted!',
    text: 'Successfully deleted!',
    showConfirmButton: false,
    timer: 1500
  };
  optToast = {
    positionClass: 'toast-top-full-width',
    progressBar: true
  }

  constructor(public toastr: ToastrService) { }
}
