import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryUserComponent } from './history-user/history-user.component';



const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user/profile', component: UserProfileComponent },
  { path: 'user/history', component: HistoryUserComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
