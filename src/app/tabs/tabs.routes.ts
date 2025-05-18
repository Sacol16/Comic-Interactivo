import { Routes } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { Tab4Page } from '../tab4/tab4.page';
import { Tab5Page } from '../tab5/tab5.page';
import { Tab6Page } from '../tab6/tab6.page';
import { Tab7Page } from '../tab7/tab7.page';
import { Tab8Page } from '../tab8/tab8.page';
import { Tab9Page } from '../tab9/tab9.page';
import { Tab10Page } from '../tab10/tab10.page';
import { Tab11Page } from '../tab11/tab11.page';
import { Tab12Page } from '../tab12/tab12.page';
import { Tab13Page } from '../tab13/tab13.page';
import { Tab14Page } from '../tab14/tab14.page';
import { Tab15Page } from '../tab15/tab15.page';
import { Tab16Page } from '../tab16/tab16.page';
import { Tab17Page } from '../tab17/tab17.page';
import { Tab18Page } from '../tab18/tab18.page';
import { Tab19Page } from '../tab19/tab19.page';
export const routes: Routes = [
  {
    path: 'tabs',
    children: [
      { path: 'tab1', component: Tab1Page },
      { path: 'tab2', component: Tab2Page },
      { path: 'tab3', component: Tab3Page },
      { path: 'tab4', component: Tab4Page },
      { path: 'tab5', component: Tab5Page },
      { path: 'tab6', component: Tab6Page },
      { path: 'tab7', component: Tab7Page },
      { path: 'tab8', component: Tab8Page },
      { path: 'tab9', component: Tab9Page },
      { path: 'tab10', component: Tab10Page },
      { path: 'tab11', component: Tab11Page },
      { path: 'tab12', component: Tab12Page },
      { path: 'tab13', component: Tab13Page },
      { path: 'tab14', component: Tab14Page },
      { path: 'tab15', component: Tab15Page },
      { path: 'tab16', component: Tab16Page },
      { path: 'tab17', component: Tab17Page },
      { path: 'tab18', component: Tab18Page },
      { path: 'tab19', component: Tab19Page },
      { path: '', redirectTo: 'tab1', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' }
];
