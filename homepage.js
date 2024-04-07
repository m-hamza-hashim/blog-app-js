const quill = new Quill('#editor', {
    theme: 'snow'
  });

var postBtn = document.getElementById("post-btn");
var editor = document.getElementById("editor");
var post = document.getElementById("post");

postBtn.addEventListener("click", function () {
  if (quill.root.innerText.trim() !== '') {
    post.innerHTML += `<div id="post-card">${quill.root.innerHTML}</div>`;
  }
  postBtn.style.backgroundColor = "#ffac00";
  window.setTimeout(function () {
    postBtn.style.backgroundColor = "#ffc141"
  }, 200);
  console.log(quill.root.innerHTML);
})