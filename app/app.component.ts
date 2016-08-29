import { Component } from '@angular/core';
import {ImageList} from './components/imageList'
import {Main} from './components/main'
@Component({
    selector: 'my-app',
    template: `
        <image-list></image-list>
        <main></main>
    `,
    directives:[ImageList,Main]
})
export class AppComponent { }
