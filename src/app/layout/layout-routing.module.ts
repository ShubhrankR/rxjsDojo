import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'promise',
        loadChildren: () => import('./modules/promise/promise.module').then(m => m.PromiseModule)
    },
    {
        path: 'observables',
        loadChildren: () => import('./modules/observables/observables.module').then(m => m.ObservablesModule)
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
