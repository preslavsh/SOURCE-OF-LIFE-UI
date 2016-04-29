import {OnInit,Component} from 'angular2/core';
import {PlantsService} from "./services/plants.service";
import {RouteParams,Router} from "angular2/router";
import {ShopService} from "./services/shop.service";
import {GreenhouseModelsService} from "./services/greenhouse-models.service";
import {ConsumablesService} from "./services/consumables.service";

@Component({
    selector: "sg-shop-other-detail-component",
    templateUrl:"templates/shop-other-detail.component.html",
    styleUrls:['styles/plant-detail.component.css'],
    providers: [ConsumablesService, GreenhouseModelsService,PlantsService, ShopService]
})
export class ShopOtherDetailComponent implements OnInit {

    public item:any;

    constructor(private service:ShopService,
                private _routeParams:RouteParams,
                private _router:Router) {
        this.item = {en_name:"",name:"",description:""};
    }

    ngOnInit() {
        let en_name:string = this._routeParams.get('en_name');
        this.item = this.service.getByEnName(en_name);
    }

    goBack() {
        window.history.back();
    }

    buy(en_name:string){
        let link = ['BuyForm', { en_name:en_name  }];
        this._router.navigate(link);
    }
}