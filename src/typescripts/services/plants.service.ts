import {Injectable} from 'angular2/core';

@Injectable()
export class PlantsService {
    public plants:Array<any> = [
        {
            "name": "босилек",
            "en_name": "basil",
            "category":"plant",
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
            "dishes":[{name:'Песто',img_name:"pesto"},{name:'Капрезе',img_name:"kapreze"}]
        },
        {
            "name": "мента",
            "en_name": "mint",
            "category":"plant",
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
            "dishes":[{name:'Мохито',img_name:"mohito"},{name:'Табуле с мента',img_name:"mint_tabule"}]
        },
        {
            "name": "репичка",
            "en_name": "radish",
            "category":"plant",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Салата от репички',img_name:"radish_salad"},{name:'Репички с авокадо',img_name:"radish_avocado"}]
        },
        {
            "name": "магданоз",
            "en_name": "parsley",
            "category":"plant",
            "description":"",
            "ph":"5.0 - 7.0",
            "dishes":[{name:'Кюфтета от магданоз',img_name:"parsley-balls"},{name:'Табуле',img_name:"tabule"}]
        },
        {
            "name": "риган",
            "en_name": "oregano",
            "category":"plant",
            "dishes":[{name:'Гръцка салата',img_name:"greek-salad"},{name:'Пиле с риган',img_name:"oregano-chicken"}]
        },
        {
            "name": "лук",
            "en_name": "onion",
            "category":"plant",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Салата с пресен лук',img_name:"fresh-onion-salad"},{name:'Яйца с лук',img_name:"onion-eggs"}]
        },
        {
            "name": "латинка",
            "en_name": "nasturtium",
            "category":"plant",
            "dishes":[{name:'Салата с латинка',img_name:"latinka-salad"},{name:'Песто с латинка',img_name:"latinka-pesto"}]
        },
        {
            "name": "синап",
            "en_name": "sinapis",
            "category":"plant",
            "dishes":[{name:'Горчица',img_name:"mustard"},{name:'Пица "Рустика"',img_name:"rustica_pizza"}]
        },
        {
            "name": "мащерка",
            "en_name": "thymus",
            "category":"plant",
            "description":"",
            "ph":"5.5 - 7.0",
            "dishes":[{name:'Ориз с мащерка',img_name:"thyme-rice"},{name:'Пиле с мащерка',img_name:"thyme-chicken"}]
        },
        {
            "name": "манголд",
            "en_name": "chard",
            "category":"plant",
            "dishes":[{name:'Топла салата с манголд',img_name:"warm-mangold-sald"},{name:'Тофу с манголд',img_name:"mangold-tofu"}]
        },
        {
            "name": "слънчоглед",
            "en_name": "sunflower",
            "category":"plant",
            "specific": "sprout",
            "dishes":[{name:'Златно цветкло със слънчогледени кълнове',img_name:"golden-beet-sunflower-salad"},{name:'Салата със слънчогледови кълнове',img_name:"sunflower-sprout-salad"}]
        },
        {
            "name": "чубрица",
            "en_name": "savory",
            "category":"plant",
            "dishes":[{name:'Лятна брускета',img_name:"savory-brusceta"},{name:'Вегитариански Киш',img_name:"savory-quiche"}]
        },
        {
            "name": "житняк",
            "en_name": "agropyron",
            "category":"plant",
            "dishes":[{name:'Смути',img_name:"wheatgrass-smoothie"},{name:'Фреш с цвекло и житняк',img_name:"wheatgrass-beet-cucumber"}]
        },
        {
            "name": "sage",
            "en_name": "sage",
            "category":"plant",
            "description":"",
            "ph":"5.5 - 6.5",
            "dishes":[{name:'Свинско със Sage',img_name:"sage-pork"},{name:'Брюкселско зеле със Sage',img_name:"sage-bruccells"}]
        },
        {
            "name": "грах",
            "en_name": "pea",
            "category":"plant",
            "specific": "sprout",
            "description":"",
            "ph":"6.0 - 7.5",
            "dishes":[{name:'Пържени грахови кълнове',img_name:"fry-pea-sprouts"},{name:'Салата от грахови кълнове',img_name:"pea-shoots-salad"}]
        },
        {
            "name": "маруля",
            "en_name": "lettuce",
            "category":"plant",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Зелена салата',img_name:"green-saald"},{name:'Сърми с маруля',img_name:"lettuce-wraps"}]
        },
        {
            "name": "леща",
            "en_name": "lentil",
            "category":"plant",
            "description":"",
            "ph":"5.5 - 7.0",
            "dishes":[{name:'Кълнове от леща с манго',img_name:"lentil-mango"},{name:'Кълнове от леща с булгур',img_name:"lentil-bulger"}]
        },
        {
            "name": "маточина",
            "en_name": "balm",
            "category":"plant",
            "dishes":[{name:'Студен чай',img_name:"lemon-balm-ice-tea"},{name:'Торта',img_name:"lemon-balm-cake"}]
        },
        {
            "name": "komatsuna",
            "en_name": "komatsuna",
            "category":"plant",
            "dishes":[{name:'Тофу',img_name:"komatsuna-tofu"},{name:'Салата с Komatsuna',img_name:"komatsuna-salad"}]
        },
        {
            "name": "сминдух",
            "en_name": "fenugreek",
            "category":"plant",
            "dishes":[{name:'Шарена сол',img_name:"sharena_sol"},{name:'Салата от кълнове на сминдух',img_name:"sminduh-salad"}]
        },
        {
            "name": "лен",
            "en_name": "linum",
            "category":"plant",
            "dishes":[{name:'Хляб',img_name:"linen-bread"},{name:'Крекери',img_name:"linen-kreker"}]
        },
        {
            "name": "къдрaвo зеле",
            "en_name": "kale",
            "category":"plant",
            "description":"",
            "ph":"6.0 - 7.5",
            "dishes":[{name:'Маринована салата',img_name:"kale-marinated-salad"},{name:'Kъдраво зеле със наденица',img_name:"sausage-kale-saute-polenta"}]
        },
        {
            "name": "копър",
            "en_name": "dill",
            "category":"plant",
            "dishes":[{name:'Таратор',img_name:"tarator"},{name:'Сиренки',img_name:"cheese-dill"}]
        },
        {
            "name": "сибирски лук",
            "en_name": "chives",
            "category":"plant",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Картофено пюре със сибирски лук',img_name:"patatoes-chives"},{name:'Сьомга със сибирски лук',img_name:"almond-salmon-chives"}]
        },
        {
            "name": "кориандър",
            "en_name": "cilantro",
            "category":"plant",
            "dishes":[{name:'Пиле с кориандър',img_name:"chicken_coriander"},{name:'Картофена супа с кориандър',img_name:"coriander-soup"}]
        },
        {
            "name": "зеле",
            "en_name": "cabbage",
            "category":"plant",
            "description":"",
            "ph":"6.0 - 7.5",
            "dishes":[{name:'Свинско със зеле',img_name:"pork-cabbage"},{name:'Капрезе',img_name:"apples-cabagge"}]
        },
        {
            "name": "елда",
            "en_name": "fagopyrum",
            "category":"plant",
            "dishes":[{name:'Шоколадови бисквити с елда',img_name:"buckwheat_choco_chip_cookies"},{name:'Ризото с елда',img_name:"buckwheat-risotto"}]
        },
        {
            "name": "броколи",
            "en_name": "broccoli",
            "category":"plant",
            "description":"",
            "ph":"6.0 - 7.0",
            "dishes":[{name:'Пюре с броколи',img_name:"broccoli-potatoes"},{name:'Спагети с броколи',img_name:"broccoli-pasta"}]
        },
        {
            "name": "цвекло",
            "en_name": "beet",
            "category":"plant",
            "specific": "sprout",
            "dishes":[{name:'Салата с кълнове цвекло',img_name:"beet-sprouts-salad"},{name:'Пица с кълнове цвекло',img_name:"pizza-beet-sprouts"}]
        },
        {
            "name": "рукола",
            "en_name": "rucola",
            "category":"plant",
            "dishes":[{name:'Рукола с репички',img_name:"radish-rukola-salad"},{name:'Рукола с айсберг',img_name:"rukola-iceberg"}]
        }
/*        {
            "name": "марихуана",
            "en_name": "weed",
            "category":"plant",
            "dishes":[{name:'Коз',img_name:"joint"},{name:'Бонг',img_name:"bong"}]
        }*/
    ];

    public getByEnName(en_name:string):any {
        return this.plants.filter(p=>p.en_name === en_name)[0];
    }
}