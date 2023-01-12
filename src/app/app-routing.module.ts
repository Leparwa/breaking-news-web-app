import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'breaking-news',
    pathMatch:'full'
  },
  {
    path:'breaking-news',
    component: BreakingNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
