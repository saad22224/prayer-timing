


var apiEndpoint = 'https://api.aladhan.com/v1/hijriCalendarByCity/2024/6?city=Cairo&country=Egypt&latitude=30.033&longitude=31.233&month=6&year=2024&method=5&timezonestring=Africa%2FCairo';


document.getElementById("getPrayerTimes").addEventListener("click" , ()=>{
  
  document.querySelector(".saad").style.display ="none"
  document.querySelector(".aml").style.display = "none"
  document.querySelector(".amira").style.display = "none"
  const inputcity = document.getElementById("city").value || "cairo"
  const inputcountry = document.getElementById("country").value || "Egypt"
  document.querySelectorAll(".saad, .aml , .amira " ).forEach(el => el.remove());

axios.get(apiEndpoint, {
  params: {
    "city" : inputcity ,
    "country" : inputcountry,
    latitude: 30.9977,
    longitude: 29.7432,
    month: 6,
    year: 2024,
    method: 5,
    // timezonestring: "Africa/Cairo"
  }
})
.then(function (response) {
 
  const timezone = response.data.data[20].meta.timezone;
  
  const timezonediv  = document.createElement("div");
  timezonediv.classList.add("aml")
  const node = document.createTextNode(timezone)
  timezonediv.appendChild(node)
  document.body.appendChild(timezonediv)

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // January is 0!
  const day = today.getDate();

  console.log(day)

const dayindex = day-1;

     const divedate = document.createElement("div")
     const datetime = response.data.data[dayindex].date.hijri.date;
   const nodedate = document.createTextNode(datetime)
divedate.appendChild(nodedate)
   document.body.appendChild(divedate)
divedate.classList.add("amira")

  // التعامل مع النجاح
  const div = document.createElement("div");
  const timings = response.data.data[20].timings;

  // إنشاء عناصر نصية لكل وقت صلاة وإضافتها إلى العنصر div
  for (const [key, value] of Object.entries(timings)) {
    const p = document.createElement('p');
    p.textContent = `${key}: ${value}`;
    div.appendChild(p);
    div.classList.add("saad")

  }

  // إضافة العنصر div إلى جسم الصفحة
  document.body.appendChild(div);
  console.log(response.data.data);


})
.catch(function (error) {
  // التعامل مع الخطأ
  console.log(error);
})
.finally(function () {
  // يتم تنفيذ هذا دائمًا
});



})





axios.get(apiEndpoint, {
  params: {
    "city" : "Cairo" ,
    "country" : "Egypt",
    latitude: 30.9977,
    longitude: 29.7432,
    month: 6,
    year: 2024,
    method: 5,
    timezonestring: "Africa/Cairo"
  }
})
.then(function (response) {


console.log(response.data.data[20].date.hijri.date)



  const timezone = response.data.data[20].meta.timezone;
  const timezonediv  = document.createElement("div");
  const node = document.createTextNode(timezone)

  timezonediv.appendChild(node)
  document.body.appendChild(timezonediv)
  timezonediv.classList.add("aml")

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // January is 0!
  const day = today.getDate();

  console.log(day)

const dayindex = day-1;

  const divedate = document.createElement("div")
  const datetime = response.data.data[dayindex].date.hijri.date;
const nodedate = document.createTextNode(datetime)
divedate.appendChild(nodedate)
document.body.appendChild(divedate)

divedate.classList.add("amira")
  // التعامل مع النجاح
  const div = document.createElement("div");
  const timings = response.data.data[20].timings;

  // إنشاء عناصر نصية لكل وقت صلاة وإضافتها إلى العنصر div
  for (const [key, value] of Object.entries(timings)) {
    const p = document.createElement('p');
    p.textContent = `${key}: ${value}`;
    div.appendChild(p);
    div.classList.add("saad")
  }

  // إضافة العنصر div إلى جسم الصفحة
  document.body.appendChild(div);
  console.log(response.data.data);

})
.catch(function (error) {
  // التعامل مع الخطأ
  console.log(error);
})
.finally(function () {
  // يتم تنفيذ هذا دائمًا
});






function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(updateClock, 1000); // Update clock every second
updateClock(); // Initial call to display clock immediately






const body = document.body

const moon = document.getElementById("moon")
console.log(moon)
 if (localStorage.getItem("mode") === "dark") {
  body.style.background = "black"
 }


 moon.addEventListener("click" , function () {
    if (localStorage.getItem("mode") === "dark") {
      body.style.background = "#ec6724"
      document.getElementById("clock").style.color = "blue"
      
      this.classList.replace("ri-sun-line" , "ri-moon-line")
      localStorage.setItem("mode" , "light")
    }
    else{
      document.getElementById("clock").style.color = "yellow"
      body.style.background = "black"
  this.classList.replace("ri-moon-line" , "ri-sun-line")
  localStorage.setItem("mode" , "dark")
    }
 })