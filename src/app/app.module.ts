import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CardComponent } from './components/card/card.component';
import { Error404Component } from './pages/error404/error404.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { ButtonComponent } from './components/button/button.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PortfolioLogoComponent } from './components/portfolio-logo/portfolio-logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    MenuComponent,
    SkillsComponent,
    PortfolioComponent,
    CardComponent,
    Error404Component,
    SkillItemComponent,
    ButtonComponent,
    ProjectCardComponent,
    PortfolioLogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
