document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
      e.preventDefault(); // impede que o navegador abra o "Ver código-fonte"
      window.location.href = "../view/index.html";
    }
  });
  
  document.addEventListener("mousemove", function(e) {
    var rocket = document.querySelector(".rocket");
    rocket.style.left = e.offsetX + 'px';
    rocket.style.top = e.offsetY + 'px';
  });
  