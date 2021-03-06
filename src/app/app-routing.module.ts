import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { JitsiComponent } from './jitsi/jitsi.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'thank-you',
        component: ThankYouComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
