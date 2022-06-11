import { CompareService } from './../../services/compare.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.scss']
})
export class DifferenceComponent implements OnInit {

  cars:any = [];

  constructor(
    private compareService:CompareService

  ) { }



  ngOnInit(): void {
    this.cars = this.compareService.getCompareCars()
  }
 

}
