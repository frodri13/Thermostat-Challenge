document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector("#temperature").innerText = thermostat.temperature;
    document.querySelector("#temperature").className = thermostat.energyUsage();
  };
  const thermostat = new Thermostat();
  updateTemperature();

  // ups the tempt

  document.querySelector("#temperature-up").addEventListener("click", () => {
    thermostat.up();
    updateTemperature();
  });

  // decreases the tempt
  document.querySelector("#temperature-down").addEventListener("click", () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector("#temperature-reset").addEventListener("click", () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector("#powersaving-on").addEventListener("click", () => {
    thermostat.powerSavingModeOn();
    document.querySelector("#power-saving-status").innerText = "on";
    updateTemperature();
  });

  document.querySelector("#powersaving-off").addEventListener("click", () => {
    thermostat.powerSavingModeOff();
    document.querySelector("#power-saving-status").innerText = "off";
    updateTemperature();
  });
});
