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
      { path: '', redirectTo: 'tab1', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' }
];
