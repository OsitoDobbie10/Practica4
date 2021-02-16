ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32616").setExtent([394028.270733, 1696972.075080, 395433.974697, 1697607.245020]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Uso_suelo_1 = new ol.format.GeoJSON();
var features_Uso_suelo_1 = format_Uso_suelo_1.readFeatures(json_Uso_suelo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Uso_suelo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_suelo_1.addFeatures(features_Uso_suelo_1);
var lyr_Uso_suelo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uso_suelo_1, 
                style: style_Uso_suelo_1,
                interactive: true,
    title: 'Uso_suelo<br />\
    <img src="styles/legend/Uso_suelo_1_0.png" /> Baldio<br />\
    <img src="styles/legend/Uso_suelo_1_1.png" /> Urbanizacion<br />\
    <img src="styles/legend/Uso_suelo_1_2.png" /> Vivienda<br />\
    <img src="styles/legend/Uso_suelo_1_3.png" /> <br />'
        });
var format_Puntoscoordenadas_2 = new ol.format.GeoJSON();
var features_Puntoscoordenadas_2 = format_Puntoscoordenadas_2.readFeatures(json_Puntoscoordenadas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Puntoscoordenadas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntoscoordenadas_2.addFeatures(features_Puntoscoordenadas_2);
var lyr_Puntoscoordenadas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntoscoordenadas_2, 
                style: style_Puntoscoordenadas_2,
                interactive: true,
                title: '<img src="styles/legend/Puntoscoordenadas_2.png" /> Puntos coordenadas'
            });
var format_CotasLimiteLevantamiento_3 = new ol.format.GeoJSON();
var features_CotasLimiteLevantamiento_3 = format_CotasLimiteLevantamiento_3.readFeatures(json_CotasLimiteLevantamiento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_CotasLimiteLevantamiento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CotasLimiteLevantamiento_3.addFeatures(features_CotasLimiteLevantamiento_3);
var lyr_CotasLimiteLevantamiento_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CotasLimiteLevantamiento_3, 
                style: style_CotasLimiteLevantamiento_3,
                interactive: true,
                title: '<img src="styles/legend/CotasLimiteLevantamiento_3.png" /> Cotas Limite Levantamiento'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Uso_suelo_1.setVisible(true);lyr_Puntoscoordenadas_2.setVisible(true);lyr_CotasLimiteLevantamiento_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Uso_suelo_1,lyr_Puntoscoordenadas_2,lyr_CotasLimiteLevantamiento_3];
lyr_Uso_suelo_1.set('fieldAliases', {'id': 'id', 'Lote': 'Lote', 'Uso_Suelo': 'Uso_Suelo', 'Area': 'Area', });
lyr_Puntoscoordenadas_2.set('fieldAliases', {'Id': 'Id', 'X': 'X', 'Y': 'Y', });
lyr_CotasLimiteLevantamiento_3.set('fieldAliases', {'Id': 'Id', 'Distance': 'Distance', 'Azimuth': 'Azimuth', 'Rumbo': 'Rumbo', 'rumbo_new': 'rumbo_new', });
lyr_Uso_suelo_1.set('fieldImages', {'id': '', 'Lote': '', 'Uso_Suelo': '', 'Area': '', });
lyr_Puntoscoordenadas_2.set('fieldImages', {'Id': '', 'X': '', 'Y': '', });
lyr_CotasLimiteLevantamiento_3.set('fieldImages', {'Id': '', 'Distance': '', 'Azimuth': '', 'Rumbo': '', 'rumbo_new': '', });
lyr_Uso_suelo_1.set('fieldLabels', {'id': 'no label', 'Lote': 'inline label', 'Uso_Suelo': 'inline label', 'Area': 'inline label', });
lyr_Puntoscoordenadas_2.set('fieldLabels', {'Id': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_CotasLimiteLevantamiento_3.set('fieldLabels', {'Id': 'no label', 'Distance': 'inline label', 'Azimuth': 'inline label', 'Rumbo': 'inline label', 'rumbo_new': 'no label', });
lyr_CotasLimiteLevantamiento_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});