import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})


export class UtilitiesService {
  /*
  * Helper service to share util functions between components
  */

  swalDelete: any = {// sweet alert delete
    title: '¿Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete!',
    cancelButtonText: 'Cancel'
  };
  swalDeleted: any = { // sweet alert deleted
    icon: 'success',
    title: 'Deleted!',
    text: 'Successfully deleted!',
    showConfirmButton: false,
    timer: 1500
  };
  optToast = { // options for toast
    positionClass: 'toast-top-full-width',
    progressBar: true
  }

  constructor(public toastr: ToastrService) { }
}
