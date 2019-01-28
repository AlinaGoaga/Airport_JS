describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = new WeatherForecast();
    airport = new Airport(weather);
    plane = 'plane';
  });

  describe('is able to land and take off planes', function() {

    it("is able to land planes", function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.land(plane);
      expect(airport.planesQueue).toContain(plane);
    });

    it("is able to take off a plane", function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planesQueue).toEqual([]);
    });

  });

  describe('is able to prevent take offs and landings when the wether is stormy', function() {

    it("prevents landings", function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function() { airport.land(plane) }).toThrowError('cannot land plane: weather is stormy')
    });

    it("prevents take offs", function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function() { airport.takeoff(plane) }).toThrowError('plane can not take off: weather is stormy');
    });

  });


});
