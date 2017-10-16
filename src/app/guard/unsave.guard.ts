import { CanDeactivate, ActivatedRoute } from '@angular/router';
import { ProductComponent } from './../product/product.component';
import { Injectable } from '@angular/core';

@Injectable()
export class UnsaveGuard implements CanDeactivate<ProductComponent> {
  constructor() {}
  canDeactivate(component: ProductComponent) {
    return window.confirm("你还没有保存，确定要离开么？");
  }
}
