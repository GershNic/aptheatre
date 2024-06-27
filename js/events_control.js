class EventPoster {
  constructor(img, description, date) {
      this.img = img;
      this.description = description;
      this.date = date;
  }
}

let event_posters = {
  "1": new EventPoster("./imgs/posters/poster_1.png",
      "Лекция о том, как быстро, эффекивно <br>" +
      "избавиться от фобии клаустрофобия. <br>" +
      "Топовые психологи на сцене <br>" +
      "поделятся практиками и полезными советами.<br>",
      "31.02.2024 17:00"),
  "2": new EventPoster("./imgs/posters/poster_2.png",
      "Лекция для самых маленьких. <br>" +
      "Поможет детям от 4 до 10 лет <br>" +
      "перестать бояться темноты <br>" +
      "и кошмарных снов <br>",
      "17.02.2024 15:00"),
  "3": new EventPoster("./imgs/posters/poster_3.png",
      "Специально разработанная комната <br>" +
      "для того, чтобы вы могли выпустить <br>" +
      "всю злость, ярость и другие <br>" +
      "негативные эмоции, путём <br>" +
      "разбивания посуды. <br>",
      "24.05.2024 15:40"),
  "4": new EventPoster("./imgs/posters/poster_4.png",
      "Круг помощи борьбы с тревожностью <br>" +
      "и страхами приглашает вас принять <br>" +
      "участие в собществе. Вы сможете <br>" +
      "поделиться тем, что вас беспокоит<br>" +
      "и получить поддержку <br>",
      "10.07.2024 19:00"),
}

function clicked_poster(event) {
  let number = event.target.className.split(" ")[1].split("_")[3];
  update_poster(number);
  show_poster();
  console.log(window.innerWidth);
  if (window.innerWidth <= 450) {
      myScroll(1800);
  } else {
      myScroll(800);
  }
}

var myScroll = function(to) {
  var currentScroll = window.scrollY,
      down = currentScroll < to; //вниз крутим или вверх

  var scr = setInterval(function() {
      currentScroll = currentScroll + 10 * (down ? 1 : -1);
      window.scrollTo(0, currentScroll);
      if ((down && currentScroll > to) || (!down && currentScroll < to)) {
          clearInterval(scr);
      }
  }, 5);
}

function update_poster(number) {
  let event_poster = event_posters[number];

  let img = document.getElementById("ticket-img");
  let desc = document.getElementById("ticket-desc");
  let date = document.getElementById("ticket-date");

  img.src = event_poster.img;
  desc.innerHTML = event_poster.description;
  date.innerHTML = event_poster.date;
}

function show_poster() {
  let ticket_block = document.getElementsByClassName("ticket__block")[0];
  console.log(ticket_block.style.display)
  if (ticket_block.style.display == "") {
      ticket_block.style.display = "flex";
  }
}

let posters = document.getElementsByClassName("event__poster");

Array.prototype.forEach.call(posters, function(element) {

  element.onclick = clicked_poster;
});