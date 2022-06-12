import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  private compareCars: any = [];

  constructor() { }

  resetCompareCars(){
    this.compareCars = [];
  }

  setCompareCars(car: any) {
      this.compareCars.push(car);
  }

  getCompareCars() {
    return [...this.compareCars];
  }

}
