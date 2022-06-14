import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // show brand
  brand: any = true;

  // show model
  model: any = false;



  RecommendedCars: any = [
    { _id: 1, name: 'Maruti Alto 800', price: '3.39 - 5.03 Lakh*', offer: 'Check june Offers', img: '../../../assets/image/card/front-left-side-47 (1).jpg' },
    { _id: 2, name: 'Maruti Alto 800 tour', price: '3.91 - 3.97 Lakh*', offer: 'Check june Offers', img: '../../../assets/image/card/front-left-side-47.jpg' },
    { _id: 3, name: 'Honda City Hybrid', price: '19.50 Lakh*', offer: 'Check june Offers', img: '../../../assets/image/card/front-left-side-47 (2).jpg' },
    { _id: 4, name: 'Hyundai Alcazar', price: '16.44 - 20.25 Lakh*', offer: 'Check june Offers', img: '../../../assets/image/card/front-left-side-47 (3).jpg' },
  ];


  mostSearchedCars: any = [
    { _id: 1, name: 'Renault KWID', price: '4.62 - 5.96 Lakh*', offer: 'View All Offers', img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/7897/1647502017122/front-left-side-47.jpg' },
    { _id: 2, name: 'Maruti Swift', price: '5.92 - 8.85 Lakh*', offer: 'Check june Offers', img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/8378/1644834798148/front-left-side-47.jpg' },
    { _id: 3, name: 'Maruti Baleno', price: '6.49 - 9.71 Lakh*', offer: 'Check june Offers', img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/8674/1645684614616/front-left-side-47.jpg' },
    { _id: 4, name: 'Hyundai i20', price: '7.03 - 11.54 Lakh*', offer: 'Check june Offers', img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/i20/6986/1604567349336/front-left-side-47.jpg' },
  ];


  popularBrandsName: any = [
    {
      _id: 1,
      name: 'Maruti',
      img: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg'
    },
    {
      _id: 2,
      name: 'Hyundai',
      img: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg'
    },
    {
      _id: 3,
      name: 'Tata',
      img: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg'
    },
    {
      _id: 4,
      name: 'Mahindra',
      img: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg'
    },
    {
      _id: 5,
      name: 'Kia',
      img: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/kia.jpg'
    },
    {
      _id: 6,
      name: 'Mercedes-Benz',
      img: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mercedes-benz.jpg'
    },
  ];


  upComingCars: any = [
    {
      _id: 1,
      name: 'Toyota Land Cruiser',
      price: '1.50 Cr',
      offer: 'Alert Me When Launched',
      launch: 'Aug 16, 2022 Expected Launch',
      img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Land-Cruiser/8448/1623313668941/front-left-side-47.jpg'
    },
    {
      _id: 2,
      name: 'Hyundai Nexo',
      price: '65.00 Lakh',
      offer: 'Alert Me When Launched',
      launch: 'Mar 01, 2023 Expected Launch',
      img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Nexo/7255/1580972415014/front-left-side-47.jpg'
    },
    {
      _id: 3,
      name: 'Citroen C3',
      price: '65.00 Lakh',
      offer: 'Alert Me When Launched',
      launch: 'Aug 01, 2022 Expected Launch',
      img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Citroen/C3/8434/1631795589577/front-left-side-47.jpg'
    },
    {
      _id: 4,
      name: 'Tesla Model X',
      price: '2.00 Cr',
      offer: 'Alert Me When Launched',
      launch: 'Jul 10, 2022 Expected Launch',
      img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Model-X/5253/1611841733029/front-left-side-47.jpg'
    },
  ];

  trustedUsedCars:any = [
    {
      _id: 1,
      name: '2016 Maruti Baleno 2015-2022',
      price: '85 Lakh',
      fuelType:'Petrol',
      kms:'23,358 Kms',
      city:'Gurgaon',
      img: 'https://images10.gaadicdn.com/usedcar_image/largephoto/VCC_1514799_24_1654950220.jpg'
    },
    {
      _id: 2,
      name: '2018 Hyundai Grand i10',
      price: '4.72 Lakh',
      fuelType:'Petrol',
      kms:'35,277 Kms',
      city:'Gurgaon',
      img: 'https://images10.gaadicdn.com/usedcar_image/largephoto/VCC_1514466_24_1654944595.jpg'
    },
    {
      _id: 3,
      name: '2017 Maruti Baleno 2015-2022',
      price: '5.01 Lakh',
      fuelType:'Petrol',
      kms:'24,026 Kms',
      city:'New Delhi',
      img: 'https://images10.gaadicdn.com/usedcar_image/largephoto/VCC_1510198_24_1654682419.jpg'
    },
    {
      _id: 4,
      name: '2014 Maruti Swift 2011-2014',
      price: '3.31 Lakh',
      fuelType:'Diesel',
      kms:'1,14,345 Kms',
      city:'New Delhi',
      img: 'https://images10.gaadicdn.com/usedcar_image/largephoto/3583_1646454963_78_vcc_image.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onShowModel() {
    this.brand = false;
    this.model = true
  }

  onShowBrand() {
    this.model = false;
    this.brand = true;
  }

}
