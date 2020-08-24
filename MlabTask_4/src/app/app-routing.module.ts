import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentCardComponent } from './student-card/student-card.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student-card', component: StudentCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
