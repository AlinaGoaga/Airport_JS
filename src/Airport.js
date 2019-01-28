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
  if (this.weather.isStormy() === false) {
    var index = this.planesQueue.indexOf(plane);
    this.planesQueue.splice(index,1);
  } else {
    throw new Error('plane can not take off: weather is stormy');
  };
};

Airport.prototype.planesFlightCodes = function() {
  return this.planesQueue.map(function(plane) {
    return plane.listFlightCode();
  });
};
