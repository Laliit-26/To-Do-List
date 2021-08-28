const ip = document.querySelector("input");
const list = document.querySelector("ul");
const add = document.querySelector('.add')

const f1 = document.querySelector(".fl");

console.log(ip, list, add);


// myfun = (det) => {
//   det.addEventListener('click', () => {
//         f1.innerHTML = "";
//    })
// }

// del.forEach(myfun);

let st = "";
let counter = 1;
const addfn = () => {
    const txt = ip.value;
    const s = "      ";
    console.log(txt);
    if (txt != "") {
        list.innerHTML += `<li class="fl">
             <div class="work">
            ${s}  ${txt}
             </div>
             <div class="delete">
             <button class="done">Done</button>
               <button class ="dt">Delete</button>
             </div>
             </li>`
        counter++;
        ip.value = "";
    }

    don = (p) => {
    p.addEventListener("click",()=>{
        console.log(p);
        p.parentNode.parentNode.style.backgroundColor = "green";
    })
}
    const done = document.querySelectorAll(".done");
    done.forEach(don);



    const del = document.querySelectorAll('.dt');

    det = (d) => {
        d.addEventListener('click', () => {
            console.log(d.parentNode.parentNode);
            d.parentNode.parentNode.remove();
            console.log("sdfn");
        })
    }
    del.forEach(det);
}




add.onclick = addfn;
