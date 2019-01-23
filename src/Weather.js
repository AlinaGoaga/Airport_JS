function WeatherForecast() {
}

WeatherForecast.prototype.isStormy = function() {
  var generator = Math.floor(Math.random() * 2)
  if (generator === 0) {return false}
  return true
}
