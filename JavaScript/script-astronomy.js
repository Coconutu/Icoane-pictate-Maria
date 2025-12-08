const apiKey = "AIpC1DRu4Sc0k17453q3FxlZFPl15Q66jDL7SlZj";
const apiLink = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
fetch(apiLink)
    .then(res => res.json())
    .then(data => {
        const { date, explanation, hdurl, title } = data;
        document.getElementById("date").innerText = date;
        document.getElementById("explanation").innerText = explanation;
        document.getElementById("hdurl").src = hdurl;
        document.getElementById("title").innerText = title;


    })
