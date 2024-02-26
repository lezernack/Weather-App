const url = `https://api.openweathermap.org/data/3.0/onecall?lat=40.559810&lon=-112.361346&limit=1&appid=42b2bd6a477109afc00d28704bef90ae`;

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("five-city").textContent = jsObject.name;

    document.getElementById("current-humid").textContent =
      jsObject.base.main.humidity;

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

const news = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=250c1df2d31345be815b8308dedf5fef`;

fetch(news)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("header-article").textContent =
      jsObject.articles[1].name;

    document.getElementById("header-img").src = jsObject.articles[1].urlToImage;

    document.getElementById("header-desc").textContent =
      jsObject.articles[1].description;

    document.getElementById("article-link-1").textContent =
      jsObject.articles[3].name;

    document.getElementById("article-img-1").src =
      jsObject.articles[3].urlToImage;

    document.getElementById("article-desc-1").textContent =
      jsObject.articles[3].description;

    document.getElementById("article-link-2").textContent =
      jsObject.articles[4].name;

    document.getElementById("article-img-2").src =
      jsObject.articles[4].urlToImage;

    document.getElementById("article-desc-2").textContent =
      jsObject.articles[4].description;

    document.getElementById("article-link-3").textContent =
      jsObject.articles[5].name;

    document.getElementById("article-img-3").src =
      jsObject.articles[5].urlToImage;

    document.getElementById("article-desc-3").textContent =
      jsObject.articles[5].description;

    document.getElementById("article-link-4").textContent =
      jsObject.articles[6].name;

    document.getElementById("article-img-4").src =
      jsObject.articles[6].urlToImage;

    document.getElementById("article-desc-4").textContent =
      jsObject.articles[6].description;
  });

let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#updated");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;
