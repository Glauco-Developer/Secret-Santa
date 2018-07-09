import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MembersService } from './members.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MembersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
