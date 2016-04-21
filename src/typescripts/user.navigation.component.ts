import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,AsyncRoute} from 'angular2/router';
import {NotificationComponent} from 'notification.component';
import {PlantsComponent} from 'plants.component';
import {GreenHouseComponent} from 'greenhouse.component';
import {ShopComponent} from 'shop.component';
import {DataComponent} from 'data.component'
declare var System:any;


@Component({
    selector: 'sg-user-navigation-component',
    templateUrl: `./templates/user.navigation.component.html`,
    styleUrls:['styles/bootstrap.min.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    new AsyncRoute({
        path: '/notification',
        loader: ()=>System.import('dist/notification.component').then(m=>m.NotificationComponent),
        name: 'Notification',
        useAsDefault: true
    }),
    new AsyncRoute({
        path: '/plants',
        loader: ()=>System.import('dist/plants.component').then(m=>m.PlantsComponent),
        name: 'Plants',
    }),
    new AsyncRoute({
        path: '/greenhouse',
        loader: ()=>System.import('dist/greenhouse.component').then(m=>m.GreenHouseComponent),
        name: 'GreenHouse'
    }),
    new AsyncRoute({
        path: '/data',
        loader: ()=>System.import('dist/data.component').then(m=>m.DataComponent),
        name: 'Data'
    }),
    new AsyncRoute({
        path: '/shop',
        loader: ()=>System.import('dist/shop.component').then(m=>m.ShopComponent),
        name: 'Shop'
    })
])
export class UserNavigationComponent {
}