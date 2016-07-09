import {NotificationComponent} from "./notification.component";
import {PlantsComponent} from "./plants.component";
import {GreenHouseComponent} from "./greenhouse.component";
import {ShopComponent} from "./shop.component";
import {DataComponent} from "./data.component"
import {PlantDetailComponent} from "./plant-detail.component";
import {GreenHouseSelectionComponent} from "./greenhouse-selection.component";
import {ShopPlantDetailComponent} from "./shop-plant-detail.component";
import {ShopOtherDetailComponent} from "./shop-other-detail.component";
import {BuyFormComponent} from "./buy-form.component";
import {provideRouter,RouterConfig} from "@angular/router";

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/notification',
        pathMatch: 'full'
    },
    {
        path: 'notification',
        component: NotificationComponent,
    },
    {
        path: 'plants',
        component:PlantsComponent,
    },
    {
        path: 'greenhouse',
        component: GreenHouseComponent
    },
    {
        path: 'data',
        component:DataComponent,
    },
    {
        path: 'shop',
        component: ShopComponent,
    },
    {
        path: 'detail/:en_name',
        component: PlantDetailComponent
    },
    {
        path: 'selection/:en_name',
        component: GreenHouseSelectionComponent
    },
    {
        path: 'shop/plant/:en_name',
        component: ShopPlantDetailComponent
    },
    {
        path: 'shop/other/:en_name',
        component: ShopOtherDetailComponent
    },
    {
        path: 'shop/buy/:en_name',
        component: BuyFormComponent
    }
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];