/*      
<li>
    <div>
        <img src="" alt="">
        <h2></h2>
    </div>
    <p></p>
    <button></button>
</li> */
let ul = document.querySelector("ul");
got.houses.forEach(house => {
console.log("test")
    house.people.forEach(p => {
        let li = document.createElement("li");
        li.classList.add("item");
        let divLegend = document.createElement("div");
        divLegend.classList.add("item-legend");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let para = document.createElement("p");
        let btn = document.createElement("button");
    
        img.src = p.image;
        h2.innerText = p.name;
        para.innerText = p.description;
        btn.innerText = "Learn More";
        divLegend.append(img,h2);
        li.append(divLegend,para,btn);
        ul.append(li);
    })
 
})


// document.querySelector(".hero-content").append(ul);

