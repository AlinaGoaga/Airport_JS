function Airport() {
  this.planesQueue = [];
}

// landing adds the plane to the airport queue
Airport.prototype.land = function(plane) {
  this.planesQueue.push(plane);
};

// takeoff removes the plane from the airport queue
Airport.prototype.takeoff = function(plane) {
  var index = this.planesQueue.indexOf(plane);
  this.planesQueue.splice(index,1);
};

// for each plane the listFlightCode is called and map is used to create an array with all these values
Airport.prototype.planesFlightCodes = function() {
  return this.planesQueue.map(function(plane) {
    return plane.listFlightCode();
  });
};
