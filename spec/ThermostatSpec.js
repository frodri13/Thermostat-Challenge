describe("Thermostat", function () {
  let thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it("has an initial temperature of 20 degrees", function () {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("can increase the temperature", function () {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("can decrease the temperature", function () {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("has a minimum of 10 degrees", function () {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("has a power saving mode that is set to be on", function () {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("can turn off power saving mode", function () {
    thermostat.powerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it("can turn on power saving mode", function () {
    thermostat.powerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.powerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  // If power saving mode is on, the maximum temperature is 25 degrees
  describe("Power saving mode is on", function () {
    it("has a maximum temperature of 25", function () {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe("Power saving mode is off", function () {
    it("has a maximum temperature of 32", function () {
      thermostat.powerSavingModeOff();
      for (let i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });
});
