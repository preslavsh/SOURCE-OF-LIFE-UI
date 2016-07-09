import {OnInit,OnDestroy,Component} from '@angular/core';
import {PlantsService} from "./services/plants.service";
import {ActivatedRoute} from "@angular/router";
import {ShopService} from "./services/shop.service";
import {GreenhouseModelsService} from "./services/greenhouse-models.service";
import {ConsumablesService} from "./services/consumables.service";

@Component({
    selector: "sg-buy-form-component",
    templateUrl: "templates/buy-form.component.html",
    styleUrls: ['styles/buy-form.component.css'],
    providers: [ConsumablesService, GreenhouseModelsService, PlantsService, ShopService]
})
export class BuyFormComponent implements OnInit,OnDestroy  {

    public item:any;
    public address:string;
    public city:string;
    public count:number;
    public hasOrdered:boolean;
    private sub:any;

    constructor(private service:ShopService,
                private _route:ActivatedRoute ) {
        this.city = "1";
        this.count = 1;
        this.hasOrdered=false;
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params=>{
            let en_name:string = params['en_name'];
            this.item = this.service.getByEnName(en_name);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
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