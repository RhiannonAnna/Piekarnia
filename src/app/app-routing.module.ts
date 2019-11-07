import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pages/products/product-list.component';


const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
