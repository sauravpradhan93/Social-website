import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CarouselModule } from 'ngx-bootstrap/carousel';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatStepperModule} from '@angular/material/stepper';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MainComponent } from './main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponentComponent,
    MainComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MatSidenavModule,
    MatButtonModule,MatCheckboxModule,MatToolbarModule,
    MatGridListModule,MatCardModule,MatFormFieldModule,
    MatStepperModule,ReactiveFormsModule,MatRadioModule,
    MatInputModule,CarouselModule.forRoot(),MatMenuModule,MatIconModule,
    RouterModule.forRoot([
      {
        path:'', 
        component:HomeComponentComponent
    },
    {
      path:'signup', 
      component:SignUpComponent
  },
  {
    path:'main', 
    component:MainComponent
}
    ])
    

  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
