import {OnInit,OnDestroy,Component} from '@angular/core';
import {PlantsService} from "./services/plants.service";
import {ActivatedRoute,Router} from "@angular/router";
import {ShopService} from "./services/shop.service";
import {GreenhouseModelsService} from "./services/greenhouse-models.service";
import {ConsumablesService} from "./services/consumables.service";

@Component({
    selector: "sg-shop-other-detail-component",
    templateUrl:"templates/shop-other-detail.component.html",
    styleUrls:['styles/plant-detail.component.css'],
    providers: [ConsumablesService, GreenhouseModelsService,PlantsService, ShopService]
})
export class ShopOtherDetailComponent implements OnInit,OnDestroy {

    public item:any;
    private sub:any;

    constructor(private service:ShopService,
                private _route:ActivatedRoute,
                private _router:Router) {
        this.item = {en_name:"",name:"",description:""};
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

    buy(en_name:string){
        this._router.navigate(['/shop/buy/', en_name]);
    }
}