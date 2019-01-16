function Airport() {
}
Airport.prototype.land = function(plane) {
  this.landed = plane;
};

Airport.prototype.takeoff = function(plane) {
  this.takenoff= plane;
};
