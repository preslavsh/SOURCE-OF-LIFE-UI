import {OnInit,Component} from 'angular2/core';
import {PlantsService} from "./services/plants.service";
import {RouteParams,Router} from "angular2/router";
import {ShopService} from "./services/shop.service";
import {GreenhouseModelsService} from "./services/greenhouse-models.service";
import {ConsumablesService} from "./services/consumables.service";

@Component({
    selector: "sg-buy-form-component",
    templateUrl: "templates/buy-form.component.html",
    styleUrls: ['styles/buy-form.component.css'],
    providers: [ConsumablesService, GreenhouseModelsService, PlantsService, ShopService]
})
export class BuyFormComponent implements OnInit {

    public item:any;
    public address:string;
    public city:string;
    public count:number;
    public hasOrdered:boolean;

    constructor(private service:ShopService,
                private _routeParams:RouteParams,
                private _router:Router) {
        this.city = "1";
        this.count = 1;
        this.hasOrdered=false;
    }

    ngOnInit() {
        let en_name:string = this._routeParams.get('en_name');
        this.item = this.service.getByEnName(en_name);
    }

    goBack() {
        window.history.back();
    }

    order() {
        if(this.address && this.address.length!==0){
            this.hasOrdered=true;
        }
    }
}