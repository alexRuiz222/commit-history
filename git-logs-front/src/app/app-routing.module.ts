import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsHistoryComponent } from './components/commits-history/commits-history.component';
import { HomeComponent } from './components/home/home.component';
import { MyApiComponent } from './components/my-api/my-api.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
}, {
  path: 'commits-history',
  component: CommitsHistoryComponent
}, {
  path: 'my-api',
  component: MyApiComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
