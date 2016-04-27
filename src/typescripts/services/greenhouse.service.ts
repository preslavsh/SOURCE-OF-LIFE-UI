import {Injectable} from 'angular2/core';
import {Plant} from "../models/plant";

@Injectable()
export class GreenhouseService{
    public greenhouses:any[]=[
        {
            "id":1,
            "name":"Парник в ресторанта",
            "plants":[{
                "name": "грах",
                "en_name": "pea",
                "specific": "sprout",
                "description":"",
                "ph":"6.0 - 7.5",
                "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
            }]
        },
        {
            "id":2,
            "name":"Парник в дома",
            "plants":[]
        }
    ];

    public getGreenHouse(id:number):any{
        return this.greenhouses.filter(g=>g.id==id)[0]
    }

    public addPlant(id:number,plant:Plant){
        this.greenhouses.filter(g=>g.id==id)[0].plants.push(plant);
    }

    public removePlant(id:number){
        this.greenhouses.filter(g=>g.id==id)[0].plants.pop();
    }

    public replacePlant(id:number,newPlant:Plant){
        this.removePlant(id);
        this.addPlant(id,newPlant);
    }

    public renameGreenhouse(id:number,name:string){
        this.greenhouses.filter(p=>p.id===id)[0].name=name;
    }
}