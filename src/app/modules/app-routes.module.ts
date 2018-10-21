import { AddClientComponent } from './../components/clients/add-client/add-client.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'; 
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";

const appRoutes: Routes = [

    {path:'', component:DashboardComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'add-client', component:AddClientComponent},

];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRouterModule{}