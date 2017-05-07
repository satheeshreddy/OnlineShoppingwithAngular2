import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StarComponent } from './shared/star.component'
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter-pipe';
import  { WelcomeComponent } from './home/welcome.component';
import   { ProductDetailsGuard } from './products/product-serviceguard';
 @NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
      canActivate: [ProductDetailsGuard],
       component: ProductDetailsComponent },
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch:'full'},
      { path:'**',redirectTo: 'welcome', pathMatch:'full' }
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent],
    providers:[ProductDetailsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
