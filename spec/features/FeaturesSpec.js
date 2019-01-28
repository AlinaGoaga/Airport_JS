describe("AirportLogic", function() {
  var airport;

  beforeEach(function() {
    weather = new WeatherForecast();
    airport = new Airport(weather);
    plane1 = new Plane('BA123');
    plane2 = new Plane('KLM567');
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport and be available in the airport's hangar

  it("is able to land planes", function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.land(plane1);
    airport.land(plane2);
    expect(airport.planesFlightCodes()).toEqual(['BA123','KLM567']);
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to take off from an airport and remove it from the hangar

  it("is able to take off planes", function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.land(plane1);
    airport.land(plane2);
    airport.takeoff(plane1);
    expect(airport.planesFlightCodes()).toEqual(['KLM567']);
  });


  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when weather is stormy

  // As an air traffic controller
  // To ensure safety
  // I want to prevent take offs when weather is stormy

  describe('when the weather is stormy', function() {

    it('prevents landing', function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function() { airport.land(plane1) }).toThrowError('cannot land plane: weather is stormy');
    });

    it('prevents take offs', function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function() { airport.takeoff(plane1) }).toThrowError('plane can not take off: weather is stormy');
    });

  });

});
