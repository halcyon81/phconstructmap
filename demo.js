/*
 the script mus be loaded after the map div is defined.
 otherwise this will not work (we would need a listener to
 wait for the DOM to be fully loaded).
 Just put the script tag below the map div.
 The source code below is the example from the leaflet start page.
 */

var map = L.map('map', {center: [16.4152, 120.5928], zoom: 14});

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


L.marker([16.4152, 120.5928]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup();
		
var polygon = L.polygon([
    [16.4025671, 120.6072369],
    [16.4024506, 120.6076044],
    [16.4024243, 120.6075843],
	[16.4023033, 120.607186],
	[16.4023117, 120.6071457]
]).addTo(map);


L.marker([16.4024352, 120.6073751]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 
	
var polygon = L.polygon([
	[16.4101085, 120.6032904],
	[16.4103163, 120.6033303],
	[16.4104282, 120.6032673],
	[16.4106141, 120.6031576],
	[16.4103864, 120.6028156],
	[16.4102584, 120.6029226],	
	[16.41014, 120.6027603],
	[16.4099619, 120.6029109],
	[16.410176, 120.6030728],
	[16.4101548, 120.6031898]
]).addTo(map);

L.marker([16.410288, 120.6030453]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([
	[16.4116739, 120.6006466],
	[16.4114394, 120.6004181],
	[16.4113191, 120.6005522],
	[16.4115358, 120.6007761]
]).addTo(map);

L.marker([16.4114965, 120.6005971]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([
	[16.4126267, 120.6004601],
	[16.4124424, 120.6003086],
	[16.4122512, 120.6004936],
	[16.4123167, 120.6006378],
	[16.412578, 120.6005193]
]).addTo(map);

L.marker([16.412439, 120.6004732]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 
		
var polygon = L.polygon([
	[16.41302, 120.6001363],
	[16.4130782, 120.6002382],
	[16.4130828, 120.6002888],
	[16.41307, 120.6003127],
	[16.4130335, 120.6003385],
	[16.4128422, 120.6005406],
	[16.4129071, 120.6005708],
	[16.413003, 120.6005775],
	[16.4132461, 120.6005936],
	[16.4133265, 120.6005943],
	[16.4133657, 120.6005715],
	[16.413394, 120.6005359],
	[16.4134114, 120.6004964],
	[16.4134133, 120.6004139],
	[16.4134088, 120.6001356],
	[16.4134059, 120.5998962]	
]).addTo(map);

L.marker([16.4131278, 120.6002453]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([		
	[16.4190422, 120.5992761],
	[16.4188711, 120.5990267],
	[16.4190255, 120.598792],
	[16.4192339, 120.5988282],
	[16.4192596, 120.5990729]
]).addTo(map);

L.marker([16.4190654, 120.5990341]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([
	[16.4038272, 120.5937293],
	[16.4038581, 120.5938554],
	[16.4039752, 120.5937977],
	[16.4041553, 120.5937079],
	[16.4043341, 120.5938715],
	[16.4046429, 120.5935362],
	[16.4042968, 120.5932452],
	[16.4041488, 120.5931205],
	[16.4040215, 120.5930668],
	[16.403476, 120.5934383],
	[16.4036664, 120.5937964]
]).addTo(map);

L.marker([16.4040594, 120.5934691]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([	
	[16.4226178, 120.5953923],
	[16.4229259, 120.5953896],
	[16.4230564, 120.595464],
	[16.4230584, 120.5955847],
	[16.4226113, 120.5955525]
]).addTo(map);

L.marker([16.4228349, 120.5954872]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 
		
var polygon = L.polygon([
	[16.4115254, 120.59835],
	[16.4116263, 120.598433],
	[16.4117095, 120.5983231],
	[16.4116087, 120.5982401]
]).addTo(map);

L.marker([16.4116175, 120.5983365]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 
		
var polygon = L.polygon([
	[16.4135626, 120.5932437],
	[16.4135615, 120.5931078],
	[16.4137477, 120.5931063],
	[16.4137488, 120.5932421]
]).addTo(map);

L.marker([16.4136552, 120.593175]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([
	[16.4146412, 120.5965709],
	[16.4148068, 120.5966157],
	[16.4148492, 120.5964698],
	[16.4146839, 120.596421]
]).addTo(map);

L.marker([16.4147452, 120.5965183]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([	
 [16.4157463, 120.5973129],
 [16.4155681, 120.5972341],
 [16.4155933, 120.5969967],
 [16.4157409, 120.5970577]
]).addTo(map);

L.marker([16.4156572, 120.5971548]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([		
	[16.4199003, 120.617774],
	[16.4197227, 120.6176251],
	[16.4195606, 120.6174414],
	[16.4193986, 120.6175661],
	[16.4193561, 120.6181763],
	[16.4194204, 120.6184968],
	[16.4196764, 120.6181119]
]).addTo(map);

L.marker([16.4196282, 120.6179691]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([
	[16.4147251, 120.6065936],
	[16.4135624, 120.607489],
	[16.4132609, 120.6070275],
	[16.4144416, 120.6061321]
]).addTo(map);

L.marker([16.413993, 120.6068106]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 
		
var polygon = L.polygon([
	[16.4209667, 120.6252587],
	[16.4210066, 120.6251822],
	[16.4210619, 120.6249663],
	[16.4210709, 120.624855],
	[16.4210426, 120.6247357],
	[16.4210091, 120.624686],
	[16.4209448, 120.6246592],
	[16.4208792, 120.6246552],
	[16.4207519, 120.6247303],
	[16.4204187, 120.625134],
	[16.4202836, 120.6252587],
	[16.4202051, 120.6252882],
	[16.4202605, 120.6258689],
	[16.4204869, 120.6258528],
	[16.4207995, 120.625484]
]).addTo(map);

L.marker([16.420638, 120.625262]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 
		
var polygon = L.polygon([	
	[16.3820991, 120.6035894],
	[16.3827977, 120.6030417],
	[16.3826438, 120.6028284],
	[16.3819452, 120.6033761]
]).addTo(map);

L.marker([16.3823715, 120.6032089]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([
	[16.4134971, 120.5797751],
	[16.4130397, 120.5796558],
	[16.412978, 120.5796625],
	[16.4129407, 120.579696],
	[16.4129188, 120.5797456],
	[16.4129188, 120.5798033],
	[16.4130423, 120.5802391],
	[16.4133806, 120.580335]
]).addTo(map);

L.marker([16.4132079, 120.5799954]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 
		
var polygon = L.polygon([		
	[16.3906606, 120.5781779],
	[16.3904933, 120.5780746],
	[16.3904644, 120.577976],
	[16.390429, 120.5776294],
	[16.3906914, 120.5774215],
	[16.390777, 120.5773749],
	[16.3910208, 120.5777474]
]).addTo(map);

L.marker([16.3907249, 120.5777764]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 

var polygon = L.polygon([			
	[16.4152588, 120.5897757],
	[16.4149803, 120.589651],
	[16.4149687, 120.5898428],
	[16.4151913, 120.5900882]		
]).addTo(map);		
		
L.marker([16.4151138, 120.5898696]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 
		
var polygon = L.polygon([		
	[16.4132018, 120.5833512],
	[16.4129638, 120.5833646],
	[16.4128763, 120.5834779],
	[16.412913, 120.5835939],
	[16.4132237, 120.5834927]
]).addTo(map);
		
L.marker([16.41305, 120.5834725]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 		
		
var polygon = L.polygon([			
	[16.4106887, 120.5906731],
	[16.4108149, 120.5908622],
	[16.4109728, 120.5907401],	
	[16.4109185, 120.5908019],
	[16.4109676, 120.5906731]	
]).addTo(map);		
		
L.marker([16.4108308, 120.5907677]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
/*COMPLETED PROJECTS*/	
		
		
		
		
		
		
		
		
		
var polygon = L.polygon([			
	[16.412996, 120.625186],
	[16.412615, 120.6251943],
	[16.4126049, 120.6246903],
	[16.4129859, 120.624682]
],{color:'green'}).addTo(map);

L.marker([16.4128004, 120.6249382],{icon: greenIcon}).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup(); 