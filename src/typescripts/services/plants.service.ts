import {Injectable} from 'angular2/core';

@Injectable()
export class PlantsService {
    public plants:Array<any> = [
        {
            "name": "босилек",
            "en_name": "basil",
            "description": `Босилекът (Ocimum basilicum),
                известен още като „царска билка“ (от гр. basilicum — царски),
                е едногодишно тревисто растение с голо четириръбесто стъбло.
                Разклонено достига до височина 60 cm. Листата му са яйцевидно-продълговати
                с дълги дръжки и заострени в края. Цветовете са предимно бели, много рядко
                лилаво-бели или червени. Плодовете са сухи и след като узреят се разпадат
                на четири малки семенца. Цъфти от юни до септември. Като билка и подправка
                се използва надземната част на растението, най-често стръковете в пресен
                вид, като се бере по време на цъфтежа, а за сушене — преди цъфтежа.
                Съдържа етерично масло, горчиво вещество, гликозиди, танини, органични киселини,
                минерални соли. Родина на босилека са тропиците на Азия и Африка.
                Отглежда се културно в Европа от векове.`,
            "ph":"5.5 - 6.5",
            "sun":"Пълно слънце",
            "water":"Седмично",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "мента",
            "en_name": "mint",
            "description":`Мента (Mentha) е род многогодишни
            тревисти растения от семейство Устноцветни. Разпространена
            е главно в северния умерен пояс. В България се срещат около
            9 вида с многобройни вариации, от които се отглежда M. piperita
            – черна мента и джоджен – M. spicata. Стъблото е клонесто,
            високо около 0,70 m, четириръбесто, листата са прости,
            продълговати, остро назъбени. Цветовете са червеникавовиолетови,
            събрани в класовидни съцветия; семената са дребни.
            Всички надземни части на растението съдържат етерично
            масло с главна съставна част ментол (45-65%). От надземната маса,
            получена от 1 декар, прибрана в пълен цъфтеж през слънчево време,
            се получава при парна дестилация около 3-5  kg етерично масло.
            В България се култивира по поречията на реките Марица, Тунджа,
            Вит и др. Използването на ментата като алтернативна култура се
            състои в ментов лист, предназначен за износ или за употреба
            като трапезен чай. При подходяща агротехника и неполивни условия,
            добивите са около 150 – 200 kg/da. При фамилни площи с малък размер
            и много добро торене и поливане, добивите са над 300 kg/da. За фамилни
            терени оптимумът е 10 – 50 da. При добив 400 kg сух ментов лист приходите
            са от порядъка на 640 – 800 лв. бруто доход от декар, в зависимост от цената
            на изкупуване по време на сезона.`,
            "ph":"7.0 - 8.0",
            "dishes":[{name:'Мохито',img_name:"mohito.png"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "репичка",
            "en_name": "radish",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "магданоз",
            "en_name": "parsley",
            "description":"",
            "ph":"5.0 - 7.0",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "риган",
            "en_name": "oregano",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "лук",
            "en_name": "onion",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "латинка",
            "en_name": "nasturtium",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "синап",
            "en_name": "sinapis",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "мащерка",
            "en_name": "thymus",
            "description":"",
            "ph":"5.5 - 7.0",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "манголд",
            "en_name": "chard",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "слънчоглед",
            "en_name": "sunflower",
            "specific": "sprout",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "чубрица",
            "en_name": "satureja",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "житняк",
            "en_name": "agropyron",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "sage",
            "en_name": "sage",
            "description":"",
            "ph":"5.5 - 6.5",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "грах",
            "en_name": "pea",
            "specific": "sprout",
            "description":"",
            "ph":"6.0 - 7.5",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "маруля",
            "en_name": "lettuce",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "леща",
            "en_name": "lentil",
            "description":"",
            "ph":"5.5 - 7.0",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "маточина",
            "en_name": "balm",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "komatsuna",
            "en_name": "komatsuna",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "сминдух",
            "en_name": "fenugreek",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "лен",
            "en_name": "linum",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "къдрaвo зеле",
            "en_name": "kale",
            "description":"",
            "ph":"6.0 - 7.5",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "копър",
            "en_name": "dill",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "сибирски лук",
            "en_name": "chives",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "кориандър",
            "en_name": "cilantro",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "зеле",
            "en_name": "cabbage",
            "description":"",
            "ph":"6.0 - 7.5",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "елда",
            "en_name": "fagopyrum",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "броколи",
            "en_name": "broccoli",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "цвекло",
            "en_name": "beet",
            "specific": "sprout",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "рукола",
            "en_name": "rucola",
            "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
        },
        {
            "name": "марихуана",
            "en_name": "weed",
            "dishes":[{name:'Коз',img_name:"joint.jpg"},{name:'Бонг',img_name:"bong.jpg"}]
        }
    ];

    public getByEnName(en_name:string):any {
        return this.plants.filter(p=>p.en_name === en_name)[0];
    }
}