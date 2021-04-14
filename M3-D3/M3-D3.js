
let images = []

function loadPrimary() {
  fetch("http://www.splashbase.co/api/v1/images/search?query=sky")
    .then((resp) => resp.json()) //transform to json object
    .then((images) => {
      console.log(images);
      const card = document.getElementById("#imageDiv");
  //   images = [a,b,c,d,e]
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    // remove svg
    card.firstElementChild.remove();
    // create image
    const img = document.createElement("img");
    img.innerHTML = image;
    img.classList.add("img-fluid");
    card.appendChild(img);
  }      
    })
    .catch((err) => {
      console.error(err);
    });
}
// loadPrimary();


for(let i = 0; i < images.length; i++) {
    const image = images[i]
    //add the book to the row!
    // create a <div class="col col-md-3">
    const bookDiv = document.createElement("div")
    bookDiv.classList.add("col-12")
    bookDiv.classList.add("col-md-3")
    // add <img src="https://...." />
    const img = document.createElement("img")
    img.src = book.img
    img.classList.add("img-fluid")
    // img.addEventListener('load', () => console.log("test"))
    bookDiv.appendChild(img)
    row.appendChild(bookDiv)
}


function loadSecondary() {
  fetch("http://www.splashbase.co/api/v1/images/search?query=beach")
    .then((beachresp) => beachresp.json()) //transform to json object
    .then((images) => {
      console.log(images);
    })
    .catch((err) => {
      console.error(err);
    });
}


function showModal() {

   const img = document.querySelector("img")

}

function hideImage () {

}