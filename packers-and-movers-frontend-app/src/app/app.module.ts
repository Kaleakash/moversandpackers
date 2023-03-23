import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { PricesComponent } from './prices/prices.component';
import { SupportComponent } from './support/support.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { CustomerwelcomeComponent } from './customerwelcome/customerwelcome.component';
import { CustomerinquiryComponent } from './customerinquiry/customerinquiry.component';
import { QuickquoteComponent } from './quickquote/quickquote.component';
import { QuickquotebyuserComponent } from './quickquotebyuser/quickquotebyuser.component';
import { CustomerrequestComponent } from './customerrequest/customerrequest.component';
import { MessageComponent } from './message/message.component';
import { QuoteComponent } from './quote/quote.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewOrdersByCustomerComponent } from './view-orders-by-customer/view-orders-by-customer.component';
import { VieworderbycustomerComponent } from './vieworderbycustomer/vieworderbycustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContactsComponent,
    ServicesComponent,
    PricesComponent,
    SupportComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    CustomerdashboardComponent,
    LogoutComponent,
    AddserviceComponent,
    AdminwelcomeComponent,
    CustomerwelcomeComponent,
    CustomerinquiryComponent,
    QuickquoteComponent,
    QuickquotebyuserComponent,
    CustomerrequestComponent,
    MessageComponent,
    QuoteComponent,
    ViewOrdersComponent,
    ViewOrdersByCustomerComponent,
    VieworderbycustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
