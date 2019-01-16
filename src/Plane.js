function Plane(flightCode) {
  this.flightCode = flightCode;
};

Plane.prototype.listFlightCode = function() {
  return this.flightCode;
};
