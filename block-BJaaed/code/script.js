/* <li>
  <img src="" alt="">
  <h2></h2>
  <p></p>
  <button></button>
</li> */

let ul = document.querySelector(".list")

data.books.forEach(book => {
    let li = document.createElement("li");
    li.classList.add("item");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let image = document.createElement("div");
    image.classList.add("image");
    let p = document.createElement("p");
    let divItemInfo = document.createElement("div");
    divItemInfo.classList.add("item-info");
    let btn = document.createElement("button");
    h2.innerText = book.title;
    img.src = book.image;
    p.innerText = book.author;
    btn.innerText = "Buy Now";
    image.append(img);

    divItemInfo.append(image,h2,p,btn);
    li.append(divItemInfo);
    ul.append(li);
})

document.querySelector(".hero").append(ul);