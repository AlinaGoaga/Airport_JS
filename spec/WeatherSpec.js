
describe("WeatherForecast", function() {
  var weather = new WeatherForecast;

  describe("#isStormy", function() {
    it("can be calm", function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy()).toBe(false);
    });

    it("can be stormy", function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isStormy()).toBe(true);
    });
  });

});
