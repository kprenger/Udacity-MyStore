import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductItemComponent } from './components/product-item/product-item.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { CartComponent } from './components/cart/cart.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { CartItemComponent } from './components/cart-item/cart-item.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    NavBarComponent,
    CartComponent,
    ProductDetailComponent,
    CartItemComponent,
    ConfirmationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
