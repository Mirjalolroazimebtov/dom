
const icons = document.querySelectorAll(".icon");
const body = document.querySelector("body")
const cards = document.querySelectorAll(".card");

icons.forEach(icon => {
   icon.addEventListener("click", () => {
      const backgroundColor = icon.style.backgroundColor;
      body.style.backgroundColor = backgroundColor
      if (backgroundColor == "black") {
         cards.forEach(item => {
            item.style.borderColor = "white"
         })
   }else{    cards.forEach(item => {
      item.style.borderColor = "black"
   })}
   });
});


