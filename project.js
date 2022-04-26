let perantara = "";
function encodeImageFileAsURL(res) {
  const fileToLoad = res;
  console.log(fileToLoad);
  const fileReader = new FileReader();
  fileReader.onload = function (fileLoadedEvent) {
    const srcData = fileLoadedEvent.target.result;
    perantara = srcData;
    document.getElementsByClassName("footer")[0].style.display = "block";
    document.getElementById("imageTest").setAttribute("src", srcData);
    window.scrollTo(0, document.body.scrollHeight);
  };
  fileReader.readAsDataURL(fileToLoad);
}
document.querySelectorAll(".dropdown-image").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".box");
  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });
  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      encodeImageFileAsURL(inputElement.files[0]);
    }
  });
});
function copyText() {
  document.getElementsByClassName("loader")[0].style.display = "block";
  const el = document.createElement("textarea");
  el.value = perantara;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");

  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
  setTimeout(() => {
    document.getElementsByClassName("loader")[0].style.display = "none";
  }, 2000);
}
