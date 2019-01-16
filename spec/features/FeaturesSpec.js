describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane1 = new Plane('BA123');
    plane2 = new Plane('KLM567');
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport and be available in the airport's hangar

  it("is able to land planes", function() {
    airport.land(plane1);
    airport.land(plane2);
    expect(airport.planesFlightCodes()).toEqual(['BA123','KLM567']);
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to take off from an airport and remove it from the hangar

  it("is able to take off planes", function() {
    airport.land(plane1);
    airport.land(plane2);
    airport.takeoff(plane1);
    expect(airport.planesFlightCodes()).toEqual(['KLM567']);
  });

});
