  const images = [
    "ekran.png",
    "aaakaan.jpg"
];

let index=0;

const imgElement=document.getElementById("slideimage");
const prevbtn=document.getElementById("prevbtn");
const nextbtn=document.getElementById("nextbtn");

prevbtn.addEventListener("click",() => {
  index--;
  if(index < 0) index=images.length - 1;
  imgElement.src = images[index];
});

nextbtn.addEventListener("click", () => {
  index++;
  if(index >= images.length) index=images.length + 1;
  imgElement.src = images[index]
});