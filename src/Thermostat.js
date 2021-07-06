class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = true;
    this.MAX_PSM_ON = 25;
    this.MAX_PSM_OFF = 32;
    this.LOW_TEMP_LIMIT = 18;
    this.MEDIUM_TEMP_LIMIT = 25;
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

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < this.LOW_TEMP_LIMIT) {
      return 'low-usage';
    } else if (this.temperature >= this.LOW_TEMP_LIMIT && this.temperature <= this.MEDIUM_TEMP_LIMIT) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }

  }
}
