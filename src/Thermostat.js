class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    this.temperature ++;
  }
  down() {
    console.log(this.temperature)
    if (this._isAtMinimumTemperature()) {
      return;
    } else {
      this.temperature --;
    }
  }
  _isAtMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
}
