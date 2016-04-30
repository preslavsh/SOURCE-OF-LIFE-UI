import {Component,Input} from 'angular2/core';
import {ShopService} from "./services/shop.service";
import {ConsumablesService} from "./services/consumables.service";
import {GreenhouseModelsService} from "./services/greenhouse-models.service";
import {PlantsService} from "./services/plants.service";
import {CapitalCasePipe} from "./pipes/capital.case.pipe";
import {FilterByNameCatPipe} from "./pipes/filter-by-name-cat.pipe";
import {SelectTypeDirective} from "./directives/select-type.directive";
import {Router} from "angular2/router";

@Component({
    selector: 'sg-shop-component',
    templateUrl: './templates/shop.component.html',
    styleUrls: ['./styles/shop.component.css'],
    directives: [SelectTypeDirective],
    providers: [ConsumablesService, GreenhouseModelsService, PlantsService, ShopService],
    pipes: [CapitalCasePipe, FilterByNameCatPipe]
})
export class ShopComponent {
    public nameFilter:string = "";
    @Input() select;

    constructor(public service:ShopService,
                public _router:Router) {
    }

    gotoDetail(en_name:string, category:string) {
        if (category === 'plant') {
            let link = ['ShopPlantDetail', {en_name: en_name}];
            this._router.navigate(link);
        } else if (category === 'greenhouse' || category === 'consumables') {
            let link = ['ShopOtherDetail', {en_name: en_name}];
            this._router.navigate(link);
        }
    }

    buy(en_name:string) {
        let link = ['BuyForm', {en_name: en_name}];
        this._router.navigate(link);
    }
}