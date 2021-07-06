class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = true;
    this.MAX_PSM_ON = 25;
    this.MAX_PSM_OFF = 32;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    if (this._isAtMaximumTemperature()) {
      return;
    } else {
      this.temperature++;
    }
  }
  down() {
    if (this._isAtMinimumTemperature()) {
      return;
    } else {
      this.temperature--;
    }
  }
  _isAtMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  _isAtMaximumTemperature() {
    if (this.powerSavingMode) {
      return this.temperature === this.MAX_PSM_ON;
    } else {
      return this.temperature === this.MAX_PSM_OFF;
    }
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
  }

  powerSavingModeOn() {
    this.powerSavingMode = true;
  }
}
