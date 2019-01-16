describe("Plane", function() {
  var plane;

    beforeEach(function() {
      plane = new Plane("BA123");
    });

    it("knows its flight code", function() {
      expect(plane.listFlightCode()).toEqual("BA123");
    });

  });
