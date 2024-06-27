let alreadyEnabled = false;
let thatEnabled = null;
let textEnabled = null;

class PosterEvent {
    constructor(position, title, desc) {
        this.position = position;
        this.title = title;
        this.desc = desc;
    }
}

let poster_events = [
    new PosterEvent("right", "Крик", "Спектакль о страхе перед ответственностью<br> и контролем."),
    new PosterEvent("right", "Последний танец", "Спектакль о людях, которые боятся<br> выстпулений и сцены. Основано на реальных<br> событиях"),
    new PosterEvent("left", "Забытый сон", "Спекталь о женщине, которая всю жизнь<br> боялась ошибиться и пережить неудачу"),
    new PosterEvent("left", "Видимость", "Спектакль о страхе потери всего самого<br> важного для человека"),
]

$(".poster__item_img").click(function() {
    if (alreadyEnabled && thatEnabled != this) {
        $(thatEnabled).animate({
            width: "250px",
        }, 500, () => $(thatEnabled).removeClass("poster__item_used"));

        $(textEnabled).animate({
            opacity: 0,
        }, 100);

        $(".poster__btn").remove();
    } else if (thatEnabled == this) {
        $(thatEnabled).animate({
            width: "250px",
        }, 500, () => $(this).removeClass("poster__item_used"));

        $(textEnabled).animate({
            opacity: 0,
        }, 100);

        $(".poster__btn").remove();

        alreadyEnabled = false;
        thatEnabled = null;
        textEnabled = null;
        return;
    }

    let poster = getPoster(this);

    $(this).addClass("poster__item_used");
    addBtn(this, poster);

    $(this).animate({
        width: getComputedStyle(document.body).getPropertyValue("--increase-to"),
    }, 500, function() {
        alreadyEnabled = true;
        thatEnabled = this;

        if (poster.position == "left") {
            $(".left__title").html(poster.title);
            $(".left__desc").html(poster.desc);

            $(".left__text").animate({
                opacity: 1,
            }, 100);

            textEnabled = $(".left__text");
        } else {
            $(".right__title").html(poster.title);
            $(".right__desc").html(poster.desc);

            $(".right__text").animate({
                opacity: 1,
            }, 100);

            textEnabled = $(".right__text");
        }
    });
});

function getPoster(item) {
    let number = $(item).attr("class").split(" ")[1].split("poster__item_")[1] - 1;
    let poster = poster_events[number];
    return poster;
}

function addBtn(item, poster) {
    let html_text = '<p class="poster__btn"><span class="poster__btn_span">купить билет</span></p>';

    if (window.innerWidth <= 1014) {
        if (poster.position == "left") {
            $(".left__text").append(html_text);
        } else {
            $(".right__text").append(html_text);
        }
    } else {
        $(item).parent().append(html_text);
    }
}

let lastValue = window.innerWidth;

function onresize(event) {
    if (thatEnabled == null) return;
    if (lastValue - window.innerWidth > 0) {

        if (window.innerWidth <= 1014) {
            $(".poster__btn").remove();
            addBtn(thatEnabled, getPoster(thatEnabled));
        }
    } else {
        if (window.innerWidth >= 1014) {
            $(".poster__btn").remove();
            addBtn(thatEnabled, getPoster(thatEnabled));
        }
    }

    lastValue = window.innerWidth;
}

window.addEventListener('resize', onresize);