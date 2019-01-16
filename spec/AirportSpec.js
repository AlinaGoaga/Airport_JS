describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane1 = new Plane('BA123');
    plane2 = new Plane('KLM567')
  });

  it("is able to land planes", function() {
    airport.land(plane1);
    airport.land(plane2);
    expect(airport.planesFlightCodes()).toEqual(['BA123','KLM567']);
  });

  it("is able to take off a plane", function() {
    airport.land(plane1);
    airport.land(plane2);
    airport.takeoff(plane1);
    expect(airport.planesFlightCodes()).toEqual(['KLM567']);
  });

});
