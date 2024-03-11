import { PlancreateComponent } from './plancreate/plancreate.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantypeComponent } from './plantype/plantype.component';
import { PlanupdateComponent } from './planupdate/planupdate.component';

const routes: Routes = [
  {
    path:'plan_list',
    component:PlantypeComponent
  },
  {
    path:'plan_create',
    component:PlancreateComponent
  },
  {
    path:'plan_update/:id',
    component:PlanupdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
