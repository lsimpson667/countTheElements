
function countHello() {
    let listItems = document.querySelectorAll("li");
    let numberOfHellos = 0;
    for (i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent === "Hello") {
        numberOfHellos = numberOfHellos + 1;
        // listItems[i].style.color = random;
        }
    } 
    

    console.log(numberOfHellos);
}
