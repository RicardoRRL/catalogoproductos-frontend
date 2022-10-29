import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { ComplaintsBookComponent } from './pages/complaints-book/complaints-book.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TopBarComponent,
    FooterComponent,
    ProductsComponent,
    AboutUsComponent,
    CartComponent,
    ComplaintsBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
