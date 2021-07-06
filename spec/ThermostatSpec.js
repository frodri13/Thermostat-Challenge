describe("Thermostat", function () {
  let thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("has an initial temperature of 20 degrees", function () {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("can increase the temperature", function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  })

  it("can decrease the temperature", function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  })
});
