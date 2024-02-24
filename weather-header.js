const url = `https://api.openweathermap.org/geo/1.0/reverse?lat={40.559810}&lon={-112.361346}&limit={1}&appid={2449653c0be4bff8e3ffcbe35f523514}`;

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("five-city").textContent = jsObject.name;

    document.getElementById("current-humid").textContent =
      jsObject.main.humidity;

    document.getElementById("current-windSpeed").textContent =
      jsObject.wind.speed;

    const descrip = jsObject.weather[0].description;
    document.getElementById("current-desc").textContent = descrip;

    let temp = (document.getElementById("current-temp").textContent =
      Math.floor(jsObject.main.temp));

    let wind = (document.getElementById("current-windSpeed").textContent =
      Math.ceil(jsObject.wind.speed));
    const wc =
      35.74 +
      0.6215 * temp -
      35.75 * wind ** 0.16 +
      0.4275 * temp * wind ** 0.16;
    document.getElementById("current-windChill").textContent = Math.floor(wc);
  });
