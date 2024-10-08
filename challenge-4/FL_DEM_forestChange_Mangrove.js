var image = ee.Image("UMD/hansen/global_forest_change_2023_v1_11")

// Load the US Census Bureau's TIGER/Line shapefiles
var states = ee.FeatureCollection('TIGER/2018/States');

// Filter for Florida
var florida = states.filter(ee.Filter.eq('NAME', 'Florida'));

Map.centerObject(florida, 7);

//Tree cover Layer
var treeCoverVisParam = {
  bands: ['treecover2000'],
  min: 0,
  max: 100,
  palette: ['black', 'green']
};

//Map.addLayer(image, treeCoverVisParam, 'tree cover');

//Tree loss layer
var treeLossVisParam = {
  bands: ['lossyear'],
  min: 0,
  max: 21,
  palette: ['yellow', 'red']
};
Map.addLayer(image, treeLossVisParam, 'tree loss year');

//Mangroves layer
var dataset = ee.ImageCollection('LANDSAT/MANGROVE_FORESTS');
var mangrovesVis = {
  min: 0,
  max: 1.0,
  palette: ['8c2aba'],
};
Map.addLayer(dataset, mangrovesVis, 'Mangroves');

//DEM layer
var dem = ee.ImageCollection('USGS/3DEP/1m');
var visualization = {
  min: 0,
  max: 300,
  palette: [
    '3b3b3b', 'b5e22e', 'd6e21f', 'fff705', 'ffd611', 'ffb613', 'ff8b13',
    'ff6e08', 'ff500d', 'ff0000', 'de0101', 'c21301', '0602ff', '235cb1',
    '307ef3', '269db1', '30c8e2', '32d3ef', '3be285', '3ff38f', '86e26f'
  ],
  //opacity:0.6
};
Map.addLayer(dem, visualization, 'elevation');


