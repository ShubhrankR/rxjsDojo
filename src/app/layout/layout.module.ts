import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {WrapperComponent} from './core/wrapper/wrapper.component';
import {LayoutRoutingModule} from "./layout-routing.module";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        WrapperComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule {
}
