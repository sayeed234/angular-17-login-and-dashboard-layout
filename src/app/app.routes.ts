import { PlanModule } from './components/plan/plan.module';
import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';


export const routes: Routes = [
    //app routes
           {
            path:'',
            component:DashboardLayoutComponent,
            children:[
                {
                    path:'',
                    redirectTo:'/dashboard',
                    pathMatch:'full'
                },
                {
                    path:'dashboard',
                    loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
                },
                {
                    path:'health',
                    loadChildren:() => import('./components/components.module').then(m => m.ComponentsModule)
                }
            ]
           },
    //auth routes
    {
        path:'',
        component:AuthLayoutComponent,
        children:[
            {
                path:'',
                redirectTo:'/auth',
                pathMatch:'full'
            },
            {
                path:'auth',
                loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
            }
        ]
       }
];
