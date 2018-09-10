import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Column = 4;
  Photos = [
    'https://drive.google.com/uc?id=1dxIBv2FBUWXCjuYd6kyfnKEfIr3ZZuUH',
    'https://drive.google.com/uc?id=1WynMwYheuL5Zt39Ct4UhBlQugmJg6IPU',
    'https://drive.google.com/uc?id=1_bo5B_dQhWF1ZQFo-fR61F0ytuiMfo6L',
    'https://drive.google.com/uc?id=1uEe5f8O1954ZWwyn3YLJwhQoP41OltTB',
    'https://drive.google.com/uc?id=1AVX7Og-JTml3-gm5nbu9_t6XaIiqxI_3',
    'https://drive.google.com/uc?id=1N8O4V7HKqwp0H47xrqrCRTn0KXxyEUL2',
    'https://drive.google.com/uc?id=1ZMmG3CLjQfgMTIxSS_rqk2Ej0hVwG6gd',
    'https://drive.google.com/uc?id=1uWz37vREx97m4jE2923-VNxoVnGxep7q',
    'https://drive.google.com/uc?id=1iSlXXmuAsw38FZ1dQeyXO593Ssd734II',
    'https://drive.google.com/uc?id=1lCE-xk1TnEXDMdhwUWqhtRHqsNhWgDsH',
    'https://drive.google.com/uc?id=1d8tE3CEFENPBhmxw59CUT-rI0iAx4UBv',
    'https://drive.google.com/uc?id=13neK2SQUE3iRg27o1NLvrKMO-yiwl0Yw'

  ];

  ngOnInit()  {
    if(window.innerWidth < 800) {
      this.Column = 2;
    }
  }
}
