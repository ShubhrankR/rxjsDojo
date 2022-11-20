import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
    isPathHome = false;

    constructor() {
    }

    ngOnInit(): void {
        this.isPathHome = location.pathname === "/home";
        console.log("ngOnInit() --- location.pathname =", location.pathname);
        console.log("ngOnInit() --- isPathName =", this.isPathHome);
    }

}
