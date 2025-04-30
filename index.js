let container = document.createElement("div")
document.body.style.fontFamily="Oleo Script, system-ui"
/*--nav--*/
let nav = document.createElement("div")
let text = document.createElement("img")
let icon = document.createElement("i")
icon.className = 'fa-solid fa-sun'
icon.classList.add("toggle-btn")
text.src = 'Screenshot_4-4-2025_221748_.jpeg';

nav.appendChild(text);
nav.appendChild(icon);
nav.style.padding = "5px";
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.borderRadius = "5px";
nav.style.background = "hsl(226, 11%, 37%)";

container.appendChild(nav);
container.style.width = "80%";
container.style.margin = "auto";

icon.style.color = "hsl(217, 61%, 90%)";
icon.style.padding = "5px";
icon.style.borderRadius = "5px";
icon.style.cursor = "pointer";
icon.style.backgroundColor = "hsl(225, 23%, 24%)";
icon.style.fontSize = "25px";

text.style.width = "15%";
text.style.height = "30px";

document.body.appendChild(container);
document.body.style.background = "hsl(227, 75%, 14%)";

let isLightMode = true
icon.onclick = function () {
    
  if (isLightMode) {
        document.body.style.backgroundColor = 'hsl(227, 75%, 14%)';
        document.body.style.color = 'hsl(217, 61%, 90%)';
    isLightMode = false;
     title.style.color="white"
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#000';
    isLightMode = true;
    title.style.color="black"
      }
}

/*--next--*/
let slide = document.createElement("div")
let title = document.createElement("p")
let subSlide = document.createElement("div")
let fth = document.createElement("a")
let sth = document.createElement("a")
let thi = document.createElement("a")
let mainTitle = document.createTextNode('Etensions List')
let txtFth = document.createTextNode('All')
let txtSth = document.createTextNode('Active')
let txtThi = document.createTextNode('Inactive')

slide.appendChild(title);
slide.appendChild(subSlide);

subSlide.appendChild(fth);
subSlide.appendChild(sth);
subSlide.appendChild(thi);

title.appendChild(mainTitle);

fth.appendChild(txtFth);

sth.appendChild(txtSth);

thi.appendChild(txtThi);

container.appendChild(slide);

slide.style.display = "flex";
slide.style.justifyContent = "space-between";
slide.style.alignItems = "center";
slide.style.color = "hsl(200, 100.00%, 89.60%)";

title.style.fontSize = "20px";

subSlide.style.display = "flex";
subSlide.style.gap = "30px";
subSlide.style.cursor = "pointer";

fth.style.background = "hsl(226, 11%, 37%)";
fth.style.padding = "10px 20px";
fth.style.borderRadius = "20px";
fth.style.opacity = ".8";
fth.style.background = "hsl(3, 71%, 56%)";

sth.style.background = "hsl(226, 11%, 37%)";
sth.style.padding = "10px 20px";
sth.style.borderRadius = "20px";
sth.style.opacity = ".8";

thi.style.background = "hsl(226, 11%, 37%)";
thi.style.padding = "10px 20px";
thi.style.borderRadius = "20px";
thi.style.opacity = ".8";

/*--body--*/

let pic = ['Screenshot_5-4-2025_173844_.jpeg', 'Screenshot_5-4-2025_174035_.jpeg', 'Screenshot_5-4-2025_174025_.jpeg', 'Screenshot_5-4-2025_173931_.jpeg', 'Screenshot_5-4-2025_174051_.jpeg', 'Screenshot_5-4-2025_17413_.jpeg', 'Screenshot_5-4-2025_173957_.jpeg', 'Screenshot_5-4-2025_173916_.jpeg', 'Screenshot_5-4-2025_17409_.jpeg', 'Screenshot_5-4-2025_173943_.jpeg', 'Screenshot_5-4-2025_173855_.jpeg', 'Screenshot_5-4-2025_173827_.jpeg'];
let titls = ['Devlens', 'StyleSpy', 'SpeedBoost', 'JSONWizard', 'Tab Master Pro', 'ViewPortBuddy', 'markup Notes', 'GridGuides', 'Palette Picker', 'LinkChecker', 'DOM Snapshot', 'ConsolePlus'];
let content = document.createElement("div");


for (let y = 0; y < pic.length; y++){
let conatin = document.createElement("div")

let slice=document.createElement("div")
let pics = document.createElement("img")
let write=document.createElement("div")
let FontText = document.createElement("p")
let twxt = document.createElement("p")

let end = document.createElement("div")
let btn = document.createElement("a");

let isLightMode = false;
let toggel = document.createElement("button");
toggel.id = "modeToggle";
toggel.style.width = "60px";
toggel.style.height = "30px"; 
toggel.style.padding = "0";
toggel.style.border = "1px solid #888";
toggel.style.padding = "0 15px";
toggel.style.border = "1px solid #888";
toggel.style.borderRadius = "20px";
toggel.style.background = "hsl(3, 71%, 56%)";
toggel.style.cursor = "pointer";
toggel.style.transition = "background 0.3s";
toggel.style.position = "relative";
toggel.style.overflow = "hidden";
toggel.style.display = "flex";
toggel.style.alignItems = "center";
toggel.style.justifyContent = "flex-start";
  
let toggleCircle = document.createElement("div");
toggleCircle.style.width = "15px";
toggleCircle.style.height = "15px";
toggleCircle.style.background = "white";
toggleCircle.style.borderRadius = "55%";
toggleCircle.style.position = "absolute";
toggleCircle.style.left = "3px";
toggleCircle.style.top = "50%";
toggleCircle.style.transform = "translateY(-50%)";
toggleCircle.style.transition = "transform 0.3s";

toggel.appendChild(toggleCircle);
  
let cards = document.querySelectorAll('.card'); 

 let isDark = true;

toggleCircle.onclick = function () {
  if (isDark) {
    conatin.style.backgroundColor = "hsl(226, 11%, 37%)";
    toggleCircle.style.left = "3px";
    btn.style.color = "hsl(217, 61%, 90%)";
    toggel.style.background = "hsl(3, 71%, 56%)";
    twxt.style.color="hsl(217, 61%, 90%)"
  } else {
    conatin.style.backgroundColor = "white";
    toggleCircle.style.left = "55%";
    btn.style.color = "black";
    toggel.style.background = "hsl(226, 11%, 37%)";
    twxt.style.color="black"
  }

  isDark = !isDark;
};

  pics.src = pic[y];
  pics.style.width = "60px";
  pics.style.height = "60px";
  pics.style.borderRadius = "5px";

  FontText.textContent = titls[y];
  FontText.style.color = "white";
  
twxt.textContent = 'Quick inspect page layouts and visualize element boundaries';

  write.appendChild(FontText);
  write.appendChild(twxt);
  write.style.paddingLeft = "15px";

  slice.appendChild(pics);
  slice.appendChild(write);
  slice.style.display = "flex";

  btn.textContent = "Remove";
  btn.style.cursor = "pointer";
  btn.style.border = "1px solid gray";
  btn.style.padding = "5px 20px";
  btn.style.borderRadius = "20px";
  btn.style.color = "hsl(217, 61%, 90%)";

  end.appendChild(btn);
  end.appendChild(toggel);
  end.style.paddingBottom = "10px";
  end.style.width = "100%";
  end.style.display = "flex";
  end.style.justifyContent = "space-between";
  
  conatin.style.backgroundColor = "hsl(226, 11%, 37%)";
  conatin.style.borderRadius = "15px";
  conatin.style.padding = "10px 15px";
  conatin.classList.add("card")


  conatin.appendChild(slice);
  conatin.appendChild(end);
  content.appendChild(conatin);
  container.appendChild(content);
}
function updateLayout() {
  if (window.innerWidth <= 500) {
    content.style.display = "grid";
    content.style.gridTemplateColumns = "1fr";
    content.style.gridTemplateRows = "repeat(12,1fr)";
    content.style.gap = "10px";
    content.style.marginTop = "30px";
    
    slide.style.flexDirection = "column";
    title.style.fontSize = "30px";
    nav.style.marginTop = "20px";
    text.style.width = "";
    subSlide.style.gap = "20px";
    container.style.width = "95%";
  } else if (window.innerWidth > 400 && window.innerWidth <= 800) {
    content.style.display = "grid";
    content.style.gridTemplateColumns = "repeat(2, 1fr)";
    content.style.gridTemplateRows = "repeat(6,1fr)";
    content.style.gap = "10px";
    content.style.marginTop = "30px";

    title.style.fontSize = "30px";
    nav.style.marginTop = "20px";
    text.style.width = "";
    subSlide.style.gap = "20px";
    container.style.width = "95%";

  } else {
    content.style.display = "grid";
    content.style.gridTemplateColumns = "repeat(3, 1fr)";
    content.style.gridTemplateRows = "repeat(4,1fr)";
    content.style.gap = "10px";
    content.style.marginTop = "30px";

    title.style.fontSize = "30px";
    nav.style.marginTop = "20px";
    container.style.width = "88%";
  }
};
document.addEventListener("DOMContentLoaded", function () {
  updateLayout();
});

window.addEventListener("resize", updateLayout);








