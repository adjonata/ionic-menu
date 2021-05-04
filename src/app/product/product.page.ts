import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES, PROMOTION } from '../../utils/categories';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  returnToHome() {
    this.router.navigate(['/home']);
  }

  makePromotionObject() {
    let subtotal = 0;
    let images: string[] = [];

    for (const product of PROMOTION.products) {
      subtotal += product.price;
      images = [...images, ...product.images];
    }

    const promotionObject = {
      name: PROMOTION.name,
      price: subtotal,
      description: PROMOTION.products.map((p) => '1x ' + p.name).join('<br />'),
      images,
    };

    this.product = promotionObject;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const { categoryId = null, productId = null, type = 'product' } = params;

      if (type === 'promotion') {
        this.makePromotionObject();
        return;
      }

      const foundedCategory = CATEGORIES.find(
        (category) => category.id === categoryId
      );

      if (!foundedCategory) {
        this.router.navigate(['/home']);
      }

      const foundedProduct = foundedCategory.products.find(
        (product) => product.id === productId
      );

      if (foundedProduct) {
        this.product = foundedProduct;
      }
    });
  }
}
