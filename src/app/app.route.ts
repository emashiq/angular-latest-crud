import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { HomeComponent } from "./home/home.component";


const appRoutes: Routes = [
    { path: 'students', component: StudentComponent },
    { path: '', component: HomeComponent },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }