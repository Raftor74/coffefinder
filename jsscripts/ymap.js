ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("coffie_map", {
        center: [55.16, 61.40],
        zoom: 12,
        controls:["default"]
    });
}
