import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { ComplaintsBookComponent } from './pages/complaints-book/complaints-book.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'complaints-book', component: ComplaintsBookComponent},
  {path: 'product-view', component: ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
