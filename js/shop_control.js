// SHOW PRICE

function show_good(event) {
  if (event.target.className.split(" ")[0] == "shop__good_img") {
      event.target.classList.remove("show");
      event.target.parentElement.children[1].style.display = "none";
      return;
  }

  if (!(event.target.className.includes("shop__good"))) return;

  let number = event.target.className.split(" ")[1].split("_")[1];
  let items = document.querySelectorAll(".shop__good_img");
  let item = items[number - 1];
  item.classList.toggle("show");
  item.parentElement.children[1].style.display = "flex";
}

let goods = document.getElementsByClassName("shop__good_item");

Array.prototype.forEach.call(goods, function(el) {
  el.onclick = show_good;
});

let showed = document.getElementsByClassName("show");

Array.prototype.forEach.call(showed, function(el) {
  el.onclick = hide_good;
});

$(".shop__span").click(function() {
  let counter = $(this).parent().parent().children("span")[0];
  let count = $(counter).text();
  $(counter).text(Number(count) + 1);

  if (count == 0) {
      $(counter).css("opacity", 1);
  }
});