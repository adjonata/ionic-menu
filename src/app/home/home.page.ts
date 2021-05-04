import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES, PROMOTION } from '../../utils/categories';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories = CATEGORIES;
  promotion = PROMOTION;

  constructor(private router: Router) {}

  openProduct(productId: string, categoryId: string) {
    this.router.navigate(['/product'], {
      queryParams: {
        productId,
        categoryId,
      },
    });
  }

  openPromotion() {
    this.router.navigate(['/product'], {
      queryParams: {
        type: 'promotion',
      },
    });
  }
}
