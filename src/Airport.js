function Airport(weather = new WeatherForecast()) {
  this.planesQueue = [];
  this.weather = weather;
}

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy() === false) {
    this.planesQueue.push(plane);
  } else {
   throw new Error('cannot land plane: weather is stormy');
 };
};

Airport.prototype.takeoff = function(plane) {
  var index = this.planesQueue.indexOf(plane);
  this.planesQueue.splice(index,1);
};

Airport.prototype.planesFlightCodes = function() {
  return this.planesQueue.map(function(plane) {
    return plane.listFlightCode();
  });
};
