import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './pages/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'error-404', component: Error404Component},
  { path: '**', pathMatch: 'full', redirectTo: 'error-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
