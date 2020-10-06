import proj4, { WGS84 } from 'proj4';
const a = 6378137.000
// Origin Point
const lon_0 = 35.20451694444
const lat_0 = 31.73439361111
// False Origin
const y_0 = 626907.390
const x_0 = 219529.584
const k_0 = 1.0000067
proj4.defs('ITM', `+title=ITM +proj=UTM +lat_0=${lat_0} +lon_0=${lon_0} +x_0=${x_0} +y_0=${y_0} +k_0=${k_0} `)

export default function ITMToWGS84(ITMCor=[211080,745685]) {
  console.log("ITMCor");
  console.log(ITMCor);
  var t = proj4('ITM').forward(ITMCor)
  //var t = proj4('ITM','WGS84', ITMCor)
  console.log("t");
  console.log(t);
}
ITMToWGS84()