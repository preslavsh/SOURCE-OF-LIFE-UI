import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,AsyncRoute,ROUTER_PROVIDERS} from 'angular2/router';
import {NotificationComponent} from './notification.component';
import {PlantsComponent} from './plants.component';
import {GreenHouseComponent} from './greenhouse.component';
import {ShopComponent} from './shop.component';
import {DataComponent} from './data.component'
import {PlantDetailComponent} from "./plant-detail.component";
import {GreenHouseSelectionComponent} from "./greenhouse-selection.component";
import {ShopPlantDetailComponent} from './shop-plant-detail.component';
import {ShopOtherDetailComponent} from './shop-other-detail.component';
import {BuyFormComponent} from "./buy-form.component";
declare var System:any;


@Component({
    selector: 'sg-user-navigation-component',
    templateUrl: `./templates/user.navigation.component.html`,
    directives: [ROUTER_DIRECTIVES],
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
    }),
    {
        path: '/detail/:en_name',
        name: 'PlantDetail',
        component: PlantDetailComponent
    },
    {
        path: '/selection/:en_name',
        name: 'GreenhouseSelection',
        component: GreenHouseSelectionComponent
    },
    {
        path: '/shop/plant/:en_name',
        name: 'ShopPlantDetail',
        component: ShopPlantDetailComponent
    },
    {
        path: '/shop/other/:en_name',
        name: 'ShopOtherDetail',
        component: ShopOtherDetailComponent
    },
    {
        path: '/shop/buy/:en_name',
        name: 'BuyForm',
        component: BuyFormComponent
    }
])
export class UserNavigationComponent {
}