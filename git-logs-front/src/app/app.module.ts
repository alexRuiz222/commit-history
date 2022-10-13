import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommitsHistoryComponent } from './components/commits-history/commits-history.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MyApiComponent } from './components/my-api/my-api.component';

// export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommitsHistoryComponent,
    HomeComponent,
    MyApiComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      // countDuplicates: true,
      // resetTimeoutOnDuplicate: true,
      includeTitleDuplicates: true
      // preventOpenDuplicates: true
    }),
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
