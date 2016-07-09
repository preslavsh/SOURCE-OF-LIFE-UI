import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
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

declare var System:any;

@Component({
    selector: 'sg-user-navigation-component',
    templateUrl: './templates/user.navigation.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile:[NotificationComponent,PlantsComponent,GreenHouseComponent,ShopComponent,
        DataComponent,PlantDetailComponent,GreenHouseSelectionComponent,ShopPlantDetailComponent,
        ShopOtherDetailComponent,BuyFormComponent]
})
export class UserNavigationComponent {};