const quill = new Quill('#editor', {
    theme: 'snow'
  });

var postBtn = document.getElementById("post-btn");
var editor = document.getElementById("editor");
var post = document.getElementById("post");
// var counter = 
var counterData = Number(window.localStorage.getItem("counter"));

if (counterData) {
  for (var i = 1; i <= counterData; i++) {
    post.innerHTML += `<div id="post-card"><p>${window.localStorage.getItem(`post${i}`)}<p></div>`;
  }
}

postBtn.addEventListener("click", function () {
  if (quill.root.innerText.trim() !== '') {
    counterData++;
    window.localStorage.setItem(`post${counterData}`, quill.root.innerHTML);
    window.localStorage.setItem("counter", counterData.toString());
    post.innerHTML += `<div id="post-card"><p>${quill.root.innerHTML}<p></div>`;
  }
  postBtn.style.backgroundColor = "#ffac00";
  window.setTimeout(function () {
    postBtn.style.backgroundColor = "#ffc141"
  }, 200);
})

// logout btn 
var logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", function () {
  logoutBtn.style.backgroundColor = "#ffc141";
  window.setTimeout(function () {
    logoutBtn.style.backgroundColor = "white"
logoutBtn.style.color = "#ffc141";
  }, 200);
  logoutBtn.style.color = "white";
  window.setTimeout(function () {
    window.location.href = "/index.html";
  }, 1250);
});