import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {DataModule} from "./data/data.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        SharedModule,
        CoreModule,
        DataModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
