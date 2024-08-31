var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Boundary_1 = new ol.format.GeoJSON();
var features_Boundary_1 = format_Boundary_1.readFeatures(json_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_1.addFeatures(features_Boundary_1);
var lyr_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_1, 
                style: style_Boundary_1,
                popuplayertitle: "Boundary",
                interactive: false,
                title: '<img src="styles/legend/Boundary_1.png" /> Boundary'
            });
var format_M1_2 = new ol.format.GeoJSON();
var features_M1_2 = format_M1_2.readFeatures(json_M1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M1_2.addFeatures(features_M1_2);
var lyr_M1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M1_2, 
                style: style_M1_2,
                popuplayertitle: "M1",
                interactive: true,
                title: '<img src="styles/legend/M1_2.png" /> M1'
            });
var format_N5_3 = new ol.format.GeoJSON();
var features_N5_3 = format_N5_3.readFeatures(json_N5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N5_3.addFeatures(features_N5_3);
var lyr_N5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N5_3, 
                style: style_N5_3,
                popuplayertitle: "N5",
                interactive: true,
                title: '<img src="styles/legend/N5_3.png" /> N5'
            });
var format_N75_4 = new ol.format.GeoJSON();
var features_N75_4 = format_N75_4.readFeatures(json_N75_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N75_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N75_4.addFeatures(features_N75_4);
var lyr_N75_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N75_4, 
                style: style_N75_4,
                popuplayertitle: "N75",
                interactive: true,
                title: '<img src="styles/legend/N75_4.png" /> N75'
            });
var format_N80_5 = new ol.format.GeoJSON();
var features_N80_5 = format_N80_5.readFeatures(json_N80_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N80_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N80_5.addFeatures(features_N80_5);
var lyr_N80_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N80_5, 
                style: style_N80_5,
                popuplayertitle: "N80",
                interactive: true,
                title: '<img src="styles/legend/N80_5.png" /> N80'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Boundary_1.setVisible(true);lyr_M1_2.setVisible(true);lyr_N5_3.setVisible(true);lyr_N75_4.setVisible(true);lyr_N80_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Boundary_1,lyr_M1_2,lyr_N5_3,lyr_N75_4,lyr_N80_5];
lyr_Boundary_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_M1_2.set('fieldAliases', {'Name_road': 'Name_road', 'Gg/yr': 'Gg/yr', });
lyr_N5_3.set('fieldAliases', {'Name_road': 'Name_road', 'Gg/yr': 'Gg/yr', });
lyr_N75_4.set('fieldAliases', {'Name_road': 'Name_road', 'Gg/year': 'Gg/year', });
lyr_N80_5.set('fieldAliases', {'Name_road': 'Name_road', 'Gg/yr': 'Gg/yr', });
lyr_Boundary_1.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM1_REF': '', 'ADM1ALT1EN': '', 'ADM1ALT2EN': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', });
lyr_M1_2.set('fieldImages', {'Name_road': 'TextEdit', 'Gg/yr': 'TextEdit', });
lyr_N5_3.set('fieldImages', {'Name_road': 'TextEdit', 'Gg/yr': 'TextEdit', });
lyr_N75_4.set('fieldImages', {'Name_road': 'TextEdit', 'Gg/year': 'TextEdit', });
lyr_N80_5.set('fieldImages', {'Name_road': 'TextEdit', 'Gg/yr': 'TextEdit', });
lyr_Boundary_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_M1_2.set('fieldLabels', {'Name_road': 'inline label - always visible', 'Gg/yr': 'inline label - always visible', });
lyr_N5_3.set('fieldLabels', {'Name_road': 'inline label - always visible', 'Gg/yr': 'inline label - always visible', });
lyr_N75_4.set('fieldLabels', {'Name_road': 'inline label - always visible', 'Gg/year': 'inline label - always visible', });
lyr_N80_5.set('fieldLabels', {'Name_road': 'inline label - always visible', 'Gg/yr': 'inline label - always visible', });
lyr_N80_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});