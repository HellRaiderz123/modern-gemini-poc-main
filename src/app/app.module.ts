import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenetHeaderComponent } from './componenet-header/componenet-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CompoenentSidebarComponent } from './compoenent-sidebar/compoenent-sidebar.component';
import { ComponentRolesComponent } from './component-roles/component-roles.component';
import { ComponenetCardsComponent } from './componenet-cards/componenet-cards.component';
import { ComponenetNewsComponent } from './componenet-news/componenet-news.component';
import { ComponentRecentComponent } from './component-recent/component-recent.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenetHeaderComponent,
    CompoenentSidebarComponent,
    ComponentRolesComponent,
    ComponenetCardsComponent,
    ComponenetNewsComponent,
    ComponentRecentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
