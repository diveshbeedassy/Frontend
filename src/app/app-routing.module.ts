import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event/event.component';
import { EventAllComponent } from './event-all/event-all.component';
import { EventCreateComponent } from './event-create/ui/event-create.component';
import { RegisterComponent} from './register/ui/register.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'event', component: EventComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'event', children: [
      { path: 'all', component: EventAllComponent},
      { path: 'create', component: EventCreateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
