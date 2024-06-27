function link() {
    if (document.getElementsByClassName("burger")[0].style.display === "block") {
        document.getElementsByClassName("burger")[0].style.display = "none";
        return;
    }
        document.getElementsByClassName("burger")[0].style.display = "block";
  }

function reload() {
    location.reload();
}