describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should be able to land a plane", function() {
    airport.land(plane);
    expect(airport.landed).toEqual(plane);
  });

  it("should be able to take off a plane", function() {
    airport.takeoff(plane);
    expect(airport.takenoff).toEqual(plane);
  });

});
