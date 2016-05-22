var chart;
var counter=0;

var preMapsData=[];

var headers=["Температура","Влажност","pH","Осветеност","Поливане"];
var temp = [20,30,40,50,60];
var humidity=[100,80,60,40,20];
var ph=[5,6,7,5,6];
var sun = [7,8,9,10,11];
var irrigation=[100,0,100,0,100];

var temp2 = [30,20,30,20,30];
var humidity2=[50,100,50,100,30];
var ph2=[5,6,6,6,5];
var sun2 = [5,6,7,8,9];
var irrigation2=[100,100,100,0,100];

var gHouseData={
    "restaurant":{
        "temp":{
            name:headers[0],
            points:temp
        },
        "humidity":{
            name:headers[1],
            points:humidity
        },
        "ph":{
            name:headers[2],
            points:ph
        },
        "sun":{
            name:headers[3],
            points:sun
        },
        "irrigation":{
            name:headers[4],
            points:irrigation
        }
    },
    "home":{
        "temp":{
            name:headers[0],
            points:temp2
        },
        "humidity":{
            name:headers[1],
            points:humidity2
        },
        "ph":{
            name:headers[2],
            points:ph2
        },
        "sun":{
            name:headers[3],
            points:sun2
        },
        "irrigation":{
            name:headers[4],
            points:irrigation2
        }
    }
};


var loadChart = function () {
    if (chart == null) {
        google.charts.setOnLoadCallback(drawChart);
    }
    drawChart();
};

function prepareData(checkedObj,ghouse){
    var chartData = [
        ['Период'],
        ["Миналата седмица"],
        ["Тази седмица"],
        ["Предишния ден"],
        ["Вчера"],
        ["Днес"]
    ];
    var dataVal = gHouseData[ghouse];
    for(item in checkedObj){
        if(checkedObj[item]){
            chartData[0].push(dataVal[item].name);
            for(var i = 1; i<chartData.length;i++){
                chartData[i].push(dataVal[item].points[i-1]);
            }
        }
    }
    return chartData;
}

function loadAfterSelect(){
    var ghouse = document.getElementById("ghouse").value;
    var checkedObj = extractGHouseParams();
    preMapsData = prepareData(checkedObj,ghouse);
    loadChart();
    if(!areSelected(checkedObj)){
        insertIsEmptyHeader();
    }
}
function loadChartFromData() {
    counter++;
    var ghouse = document.getElementById("ghouse").value;
    if(counter%2===0){
        var checkedObj = extractGHouseParams();
        preMapsData = prepareData(checkedObj,ghouse);
        loadChart();
        if(!areSelected(checkedObj)){
            insertIsEmptyHeader();
        }
    }
}

function extractGHouseParams(){
    var temp = document.getElementById("temp").checked;
    var humidity = document.getElementById("humidity").checked;
    var ph = document.getElementById("ph").checked;
    var sun = document.getElementById("sun").checked;
    var irrigation = document.getElementById("irrigation").checked;
    var checkedObj={temp,humidity,ph,sun,irrigation};
    return checkedObj;
}

function areSelected(checkedObj){
    var hasTrue=false;
    for(item in checkedObj){
        if(checkedObj[item]){
            hasTrue=true;
        }
    }
    return hasTrue
}

function insertIsEmptyHeader(){
    var elm = `<h3 style="margin: 25%;"><i>Ще се визуализира след избора на данни!</i></h3>`;
    $(elm).appendTo(document.getElementById('chart_div').childNodes[1].childNodes[0]);
}

google.charts.load('current', {'packages': ['corechart']});

function drawChart() {
    var data = google.visualization.arrayToDataTable(preMapsData);
    var options = {
        title: 'Данни за период',
        hAxis: {title: 'Период', titleTextStyle: {color: '#511c39'}},
        vAxis: {minValue: 0}
    };
    chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}