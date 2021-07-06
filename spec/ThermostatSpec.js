describe("Thermostat", function () {
  let thermostat;

  it("has an initial temperature of 20 degrees", function () {
    //
    thermostat = new Thermostat();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
