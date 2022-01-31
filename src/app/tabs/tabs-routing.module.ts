import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {path:'home', loadChildren: () => import('../onglets/home/home.module').then( m => m.HomePageModule)},
      
      {
        path: 'ask',
        loadChildren: () => import('../onglets/ask/ask.module').then( m => m.AskPageModule)
      },
     
      {
        path:'',
        redirectTo:'tabs/home',
         pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/home',
     pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
