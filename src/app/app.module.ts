import { ClientService } from './services/client.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// component imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientComponent } from './components/clients/client/client.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRouterModule } from './modules/app-routes.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ClientsComponent,
    ClientComponent,
    EditClientComponent,
    AddClientComponent,
    SettingsComponent,
    ClientDetailsComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
