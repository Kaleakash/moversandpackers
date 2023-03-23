import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddserviceComponent } from './addservice/addservice.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';

import { ContactsComponent } from './contacts/contacts.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerinquiryComponent } from './customerinquiry/customerinquiry.component';
import { CustomerrequestComponent } from './customerrequest/customerrequest.component';
import { CustomerwelcomeComponent } from './customerwelcome/customerwelcome.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MessageComponent } from './message/message.component';
import { PricesComponent } from './prices/prices.component';
import { QuickquoteComponent } from './quickquote/quickquote.component';
import { QuickquotebyuserComponent } from './quickquotebyuser/quickquotebyuser.component';
import { QuoteComponent } from './quote/quote.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { SupportComponent } from './support/support.component';
import { ViewOrdersByCustomerComponent } from './view-orders-by-customer/view-orders-by-customer.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"login",component:LoginComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"services",component:ServicesComponent},
  {path:"prices",component:PricesComponent},
  {path:"support",component:SupportComponent},
  {path:"signUp",component:SignupComponent},
  {path:"quickquote",component:QuickquoteComponent},
  {path:"adminhome",component:AdmindashboardComponent,children:[
    {path:"",component:AdminwelcomeComponent},
    {path:"addService",component:AddserviceComponent},
    {path:"viewService",component:ServicesComponent},
    {path:"viewQuote",component:QuoteComponent},
    {path:"viewAllMessage",component:MessageComponent},
    {path:"viewOrder",component:ViewOrdersComponent}

  ]},
  {path:"customerhome",component:CustomerdashboardComponent,children:[
    {path:"",component:CustomerwelcomeComponent},
    {path:"customerServiceRequest",component:CustomerrequestComponent},
    {path:"quickquotebyuser",component:QuickquotebyuserComponent},
    {path:"customerInquiry",component:CustomerinquiryComponent},
    {path:"viewOrders",component:ViewOrdersByCustomerComponent}
  ]},
  {path:"logout",component:LogoutComponent},
  {path:"back",component:AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
