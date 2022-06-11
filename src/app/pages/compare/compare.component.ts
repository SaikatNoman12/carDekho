import { CompareService } from './../../services/compare.service';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
   selector: 'app-compare',
   templateUrl: './compare.component.html',
   styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
 constructor(
      private compareService:CompareService,
      private router:Router
      ) { }
   
      ngOnInit(): void {
      }
   
      selectedModel: any = null;
      selectedModel2: any = null;
      selectedModel3: any = null;
      selectedModel4: any = null;
   
      selectedVariant: any = [];
      selectedVariant2: any = [];
      selectedVariant3: any = [];
      selectedVariant4: any = [];
   
      selectedCar1: any = null;
      selectedCar2: any = null;
      selectedCar3: any = null;
      selectedCar4: any = null;
   
      models: any = [
         {
            _id: 'maruti',
            data: [
               {
                  "_id":"1",
                  "MID":"3254",
                  "MN":"Maruti Celerio",
                  "MSN":"Celerio",
                  "SLG":"celerio",
                  "upcoming":false,
                  "expired":false
               },
               {
                  "_id":"2",
                  "MID":"3298",
                  "MN":"Maruti Suzuki",
                  "MSN":"Ertiga",
                  "SLG":"ertiga",
                  "upcoming":false,
                  "expired":false
               },
               {
                  "_id":"3",
                  "MID":"3291",
                  "MN":"Maruti XL6",
                  "MSN":"XL6",
                  "SLG":"xl6",
                  "upcoming":false,
                  "expired":false
               },
               {
                  "_id":"4",
                  "MID":"3137",
                  "MN":"Maruti Vitara Brezza",
                  "MSN":"Vitara Brezza",
                  "SLG":"vitara-brezza",
                  "upcoming":false,
                  "expired":false
               },
               {
                  "_id":"5",
                  "MID":"3316",
                  "MN":"Maruti Super Carry",
                  "MSN":"Super Carry",
                  "SLG":"super-carry",
                  "upcoming":false,
                  "expired":false
               },
               {
                  "_id":"6",
                  "MID":"591",
                  "MN":"Maruti Eeco",
                  "MSN":"Eeco",
                  "SLG":"eeco",
                  "upcoming":false,
                  "expired":false
               },
               {
                  "_id":"7",
                  "MID":"3317",
                  "MN":"Maruti Eeco Cargo",
                  "MSN":"Eeco Cargo",
                  "SLG":"eeco-cargo",
                  "upcoming":false,
                  "expired":false
               },
            ]
         }
      ];
      
      variants: any = [
         {
            parent: '1',
            data: [
               "STD Opt",
               "LXI Opt",
               "Dzire"
            ]
         },
         {
            parent: '2',
            data: [
               "VXI",
               "VXI Plus",
               "LXI Opt S-CNG",
               "LXI Opt",
               "Dzire"
   
            ]
         },
         {
            parent: '3',
            data: [
               "VXI",
               "VXI Plus",
               "Dzire",
               "SUV"
   
            ]
         },
         {
            parent: '4',
            data: [
               "VXI",
               "VXI Plus",
               "LXI Opt S-CNG",
               "Dzire",
               "SUV"
   
            ]
         },
         {
            parent: '5',
            data: [
               "VXI",
               "VXI Plus",
               "Dzire",
               "SUV"
   
            ]
         },
         {
            parent: '6',
            data: [
               "VXI",
               "VXI Plus",
               "LXI Opt S-CNG",
   
            ]
         },
         {
            parent: '7',
            data: [
               "VXI",
               "VXI Plus",
   
            ]
         }
      ];
   
      cars: any = [
         {
            "model":"1",
            "fueltype":"Petrol",
            "displayName":"STD Opt",
            "avgPriceTildFuelPrice":"21.025~74.02",
            "exShowRoomPrice":"3.39 Lakh",
            "rating":2,
            "carVariantId":"Maruti Alto 800 STD Opt",
            "exShowroomPriceInIndianFormat":"3,39,000",
            "ExShowRoomPrice":339000,
            "modelBrandName":"Maruti",
            "Variantcategory":true,
            "Fuelprice":74.0199966430664,
            "arai_mileage":22.049999237060547,
            "price":"3,39,000",
            "enginoilcapacity":1,
            "modelSlugUrl":"maruti-alto-800",
            "tag":"Base Model",
            "IndianCarPrices":"3.39 Lakh",
            "modelUrl":"/carmodels/Maruti/Maruti_Alto_800",
            "modelDisplayName":"Maruti Alto 800",
            "topSelling":false,
            "image":"https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Alto-800/7072/1650542631570/front-left-side-47.jpg",
            "shortModelName":"Alto 800",
            "price_orp":"3.77 Lakh",
            "onRoadPrice":376784,
            "DisplayCarVariantId":"Maruti Alto 800 STD Opt",
            "City":"New Delhi",
            "EndDate":"2044-07-31",
            "modelName":"Maruti Alto 800",
            "city_mileage":20,
            "name":"Maruti Alto 800 STD Opt",
            "variantName":"STD Opt",
            "carVariantCentralId":"7072",
            "onRoadPriceInIndianFormat":"3,76,784",
            "priceRange":"3.39 - 5.03 Lakh",
            "shortDisplayCarVariantId":"STD Opt",
            "status":"CURRENT"
         },
         {
            "model":"2",
            "fueltype":"Petrol",
            "displayName":"LXI Opt",
            "avgPriceTildFuelPrice":"21.025~74.02",
            "exShowRoomPrice":"4.08 Lakh",
            "rating":4,
            "carVariantId":"Maruti Alto 800 LXI Opt",
            "exShowroomPriceInIndianFormat":"4,08,000",
            "ExShowRoomPrice":408000,
            "modelBrandName":"Maruti",
            "Variantcategory":true,
            "Fuelprice":74.0199966430664,
            "arai_mileage":22.049999237060547,
            "price":"4,08,000",
            "enginoilcapacity":1,
            "modelSlugUrl":"Maruti Suzuki",
            "IndianCarPrices":"4.08 Lakh",
            "modelUrl":"/carmodels/Maruti/Maruti_Alto_800",
            "modelDisplayName":"Maruti Alto 800",
            "topSelling":false,
            "image":"https://mcmscache.epapr.in/post_images/website_300/post_18234677/thumb.jpg",
            "shortModelName":"Alto 800",
            "price_orp":"4.53 Lakh",
            "onRoadPrice":452616,
            "DisplayCarVariantId":"Maruti Alto 800 LXI Opt",
            "City":"New Delhi",
            "EndDate":"2044-07-31",
            "modelName":"Maruti Suzuki",
            "city_mileage":20,
            "name":"Maruti Alto 800 LXI Opt",
            "variantName":"LXI Opt",
            "carVariantCentralId":"7074",
            "onRoadPriceInIndianFormat":"4,52,616",
            "priceRange":"3.39 - 5.03 Lakh",
            "shortDisplayCarVariantId":"LXI Opt",
            "status":"CURRENT"
         },
         {
            "model":"3",
            "fueltype":"Petrol",
            "displayName":"VXI",
            "avgPriceTildFuelPrice":"21.025~74.02",
            "exShowRoomPrice":"4.28 Lakh",
            "rating":5,
            "carVariantId":"Maruti Alto 800 VXI",
            "exShowroomPriceInIndianFormat":"4,28,000",
            "ExShowRoomPrice":428000,
            "modelBrandName":"Maruti",
            "Variantcategory":true,
            "Fuelprice":74.0199966430664,
            "arai_mileage":22.049999237060547,
            "price":"4,28,000",
            "enginoilcapacity":1,
            "modelSlugUrl":"maruti-alto-800",
            "IndianCarPrices":"4.28 Lakh",
            "modelUrl":"/carmodels/Maruti/Maruti_Alto_800",
            "modelDisplayName":"Maruti Alto 800",
            "topSelling":false,
            "image":"https://imgd.aeplcdn.com/0x0/n/cw/ec/45691/marutisuzuki-dzire-right-front-three-quarter8.jpeg",
            "shortModelName":"Alto 800",
            "price_orp":"4.74 Lakh",
            "onRoadPrice":474018,
            "DisplayCarVariantId":"Maruti Alto 800 VXI",
            "City":"New Delhi",
            "EndDate":"2044-07-31",
            "modelName":"Maruti Suzuki Dzire",
            "city_mileage":20,
            "name":"Maruti Alto 800 VXI",
            "variantName":"Dzire",
            "carVariantCentralId":"7075",
            "onRoadPriceInIndianFormat":"4,74,018",
            "priceRange":"3.39 - 5.03 Lakh",
            "shortDisplayCarVariantId":"VXI",
            "status":"CURRENT"
         },
         {
            "model":"4",
            "fueltype":"Petrol",
            "displayName":"VXI Plus",
            "avgPriceTildFuelPrice":"21.025~74.02",
            "exShowRoomPrice":"4.42 Lakh",
            "rating":6,
            "carVariantId":"Maruti Alto 800 VXI Plus",
            "exShowroomPriceInIndianFormat":"4,41,500",
            "ExShowRoomPrice":441500,
            "modelBrandName":"Maruti",
            "Variantcategory":true,
            "Fuelprice":74.0199966430664,
            "arai_mileage":22.049999237060547,
            "price":"4,41,500",
            "enginoilcapacity":1,
            "modelSlugUrl":"maruti-alto-800",
            "IndianCarPrices":"4.42 Lakh",
            "modelUrl":"/carmodels/Maruti/Maruti_Alto_800",
            "modelDisplayName":"Maruti Alto 800",
            "topSelling":true,
            "image":"https://mcmscache.epapr.in/post_images/website_300/post_17689734/thumb.jpg",
            "shortModelName":"Alto 800",
            "price_orp":"4.88 Lakh",
            "onRoadPrice":488461,
            "DisplayCarVariantId":"Maruti Alto 800 VXI Plus",
            "City":"New Delhi",
            "EndDate":"2044-12-18",
            "modelName":"Maruti Suzuki SUV",
            "city_mileage":20,
            "name":"Maruti Alto 800 VXI Plus",
            "variantName":"SUV",
            "carVariantCentralId":"7277",
            "onRoadPriceInIndianFormat":"4,88,461",
            "priceRange":"3.39 - 5.03 Lakh",
            "shortDisplayCarVariantId":"VXI Plus",
            "status":"CURRENT"
         },
         {
            "model":"5",
            "fueltype":"CNG",
            "displayName":"LXI Opt S-CNG",
            "avgPriceTildFuelPrice":"28.295~40.61",
            "exShowRoomPrice":"5.03 Lakh",
            "rating":8,
            "carVariantId":"Maruti Alto 800 LXI Opt S-CNG",
            "exShowroomPriceInIndianFormat":"5,03,000",
            "ExShowRoomPrice":503000,
            "modelBrandName":"Maruti",
            "Variantcategory":true,
            "Fuelprice":40.61000061035156,
            "arai_mileage":31.59000015258789,
            "price":"5,03,000",
            "enginoilcapacity":1,
            "modelSlugUrl":"maruti-alto-800",
            "IndianCarPrices":"5.03 Lakh",
            "modelUrl":"/carmodels/Maruti/Maruti_Alto_800",
            "modelDisplayName":"Maruti Alto 800",
            "topSelling":false,
            "image":"https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Alto-800/7072/1650542631570/front-left-side-47.jpg",
            "shortModelName":"Alto 800",
            "price_orp":"5.55 Lakh",
            "onRoadPrice":555011,
            "DisplayCarVariantId":"Maruti Alto 800 LXI Opt S-CNG",
            "City":"New Delhi",
            "EndDate":"2045-01-26",
            "modelName":"Maruti Alto 800",
            "city_mileage":25,
            "name":"Maruti Alto 800 LXI Opt S-CNG",
            "variantName":"LXI Opt S-CNG",
            "carVariantCentralId":"7417",
            "onRoadPriceInIndianFormat":"5,55,011",
            "priceRange":"3.39 - 5.03 Lakh",
            "shortDisplayCarVariantId":"LXI Opt S-CNG",
            "status":"CURRENT"
         }
      ]
   
      
   
      arr: any = [
         {
            "MID": "3254",
            "MN": "Maruti Celerio",
            "MSN": "Celerio",
            "SLG": "celerio",
            "upcoming": false,
            "expired": false
         },
         {
            "MID": "3298",
            "MN": "Maruti Ertiga",
            "MSN": "Ertiga",
            "SLG": "ertiga",
            "upcoming": false,
            "expired": false
         },
         {
            "MID": "3291",
            "MN": "Maruti XL6",
            "MSN": "XL6",
            "SLG": "xl6",
            "upcoming": false,
            "expired": false
         },
         {
            "MID": "3137",
            "MN": "Maruti Vitara Brezza",
            "MSN": "Vitara Brezza",
            "SLG": "vitara-brezza",
            "upcoming": false,
            "expired": false
         },
         {
            "MID": "3316",
            "MN": "Maruti Super Carry",
            "MSN": "Super Carry",
            "SLG": "super-carry",
            "upcoming": false,
            "expired": false
         },
         {
            "MID": "591",
            "MN": "Maruti Eeco",
            "MSN": "Eeco",
            "SLG": "eeco",
            "upcoming": false,
            "expired": false
         },
         {
            "MID": "3317",
            "MN": "Maruti Eeco Cargo",
            "MSN": "Eeco Cargo",
            "SLG": "eeco-cargo",
            "upcoming": false,
            "expired": false
         },
      ]
   
   
      onModelChange(event: MatSelectChange) {
         this.selectedModel = event.value;
         this.selectedVariant = this.variants.find(f => f.parent === this.selectedModel._id);
         console.log('selected variant 1', this.selectedVariant);
   
      }
      onModelChange1(event: MatSelectChange) {
         this.selectedModel2 = event.value;
         this.selectedVariant2 = this.variants.find(f => f.parent === this.selectedModel2._id);
         console.log('selected model 2', this.selectedModel2);
         console.log('selected variant 2', this.selectedVariant2);
      }
      onModelChange2(event: MatSelectChange) {
         this.selectedModel3 = event.value;
         this.selectedVariant3 = this.variants.find(f => f.parent === this.selectedModel3._id);
         console.log('selected model 3', this.selectedModel3);
   
      }
      onModelChange3(event: MatSelectChange) {
         this.selectedModel4 = event.value;
         this.selectedVariant4 = this.variants.find(f => f.parent === this.selectedModel4._id);
         console.log('selected model 4', this.selectedModel4);
      }
   
      onVariantChange(event: MatSelectChange) {
         this.selectedCar1 = this.cars.find(m => m.variantName === event.value)
         console.log('selected model 1', this.selectedCar1);
      }
      onVariantChange2(event: MatSelectChange) {
         this.selectedCar2 = this.cars.find(m =>m.variantName === event.value)
         console.log('selected model 1', this.selectedCar2);
      }
      onVariantChange3(event: MatSelectChange) {
         this.selectedCar3 = this.cars.find(m =>m.variantName === event.value)
         console.log('selected model 1', this.selectedCar3);
      }
      onVariantChange4(event: MatSelectChange) {
         this.selectedCar4 = this.cars.find(m =>m.variantName === event.value)
         console.log('selected model 1', this.selectedCar4);
      }
   
      onCompare() {
         if(this.selectedCar1){
            this.compareService.setCompareCars(this.selectedCar1)
         }
         
         if(this.selectedCar2){
            this.compareService.setCompareCars(this.selectedCar2)
         }
         if(this.selectedCar3){
            this.compareService.setCompareCars(this.selectedCar3)
         }
         if(this.selectedCar4){
            this.compareService.setCompareCars(this.selectedCar4)
         }
         // console.log('Compare cars', this.compareService.getCompareCars());
         this.router.navigate(['/', 'difference'])
      }

}
