function pageLoad() {
  console.log("client is running");

  const blocked = document.getElementById("uploadForm");

  blocked.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("The file upload process is blocked");
  });
}

window.addEventListener("load", pageLoad);
