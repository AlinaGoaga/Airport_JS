describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane('BA123');
  });

  it("is able to land planes", function() {
    airport.land(plane);
    plane2 = new Plane('KLM567')
    airport.land(plane2);
    expect(airport.planesFlightCodes()).toEqual(['BA123','KLM567']);
  });

  it("should be able to take off a plane", function() {
    airport.takeoff(plane);
    expect(airport.takenoff).toEqual(plane);
  });

});
