describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane';
  });

  it("is able to land planes", function() {
    airport.land(plane);
    expect(airport.planesQueue).toContain(plane);
  });

  it("is able to take off a plane", function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planesQueue).toEqual([]);
  });

});
