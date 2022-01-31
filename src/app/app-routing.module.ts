import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./onglets/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ask',
    loadChildren: () => import('./onglets/ask/ask.module').then( m => m.AskPageModule)
  },
  {
    path: 'add-ask',
    loadChildren: () => import('./views/add-ask/add-ask.module').then( m => m.AddAskPageModule)
  },
  {
    path: 'type-ask',
    loadChildren: () => import('./views/type-ask/type-ask.module').then( m => m.TypeAskPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
