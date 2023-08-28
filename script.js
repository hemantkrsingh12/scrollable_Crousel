const images = [
  "https://images.unsplash.com/photo-1679505528631-9f1ac50c9d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  "https://images.unsplash.com/photo-1679305289765-c899db4ce88a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
  "https://images.unsplash.com/photo-1679486688715-cef43d24ccde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80",
  "https://images.unsplash.com/photo-1679542317082-8e8351fcbc48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1679512598221-3454804a8bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
];
const containermove = document.getElementById("flex_container");
const left = document.getElementById("left");
const right = document.getElementById("right");
const crosel = document.getElementById("croselnav");
const n = images.length;
for (let i = 0; i < n; i++) {
  const imagedata = document.createElement("img");
  imagedata.src = images[i];
  imagedata.classList.add("image");
  containermove.appendChild(imagedata);
  const dotdiv = document.createElement("div");
  dotdiv.classList.add("dot_style");
  crosel.appendChild(dotdiv);
  dotdiv.addEventListener("click", (event) => {
    const index = [...crosel.children].indexOf(event.target);
    console.log(index);
    transition(index);
    dotdiv.classList.toggle("active")
  });
}
let count = 0;
transition(count);
right.addEventListener("click", () => {
  if (count < n - 1) {
    count++;
  } else {
    count = 0;
  }
  transition(count);
});
left.addEventListener("click", () => {
  if  (count > 0){
    count--;
  } else {
    count = n - 1;
  }
  transition(count);
});

function transition(count) {  
  let move = -30 * count;
  containermove.style.transform = `translateX(${move}vw)`;
}
