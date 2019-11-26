import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginHistoryComponent } from './login-history/login-history.component';
import { AboutComponent } from './about/about.component'
const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'loginhistory', component: LoginHistoryComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
