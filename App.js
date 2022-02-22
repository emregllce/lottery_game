
let repeat = document.getElementById("repeat");
let numbersButton = document.getElementById("numbers_button");
let tryAgainButton = document.getElementById("try_again")
let numberList = document.getElementById("list");
let warning = document.getElementById("warning");

// tryAgainButton.style.display = "none"


numbersButton.addEventListener("click",begin)

function begin() {

    if (repeat.value < 1 || repeat.value>8) {
        warning.innerHTML = "Please enter a number between 1-8; TRY AGAIN?"
        numberList.style.display = "none"
        repeat.value = ""
        }
    else {
        warning.style.display = "none"
        numberList.style.display = "block"
        for (let i = 0; i < Number(repeat.value); i++) {
            findNumbers()
        }
    }
    tryAgainButton.addEventListener("click", ()=>{
        location.reload();

    })
}

function findNumbers() {
    let numsSet = new Set();
    while(numsSet.size !== 6) {
      numsSet.add(Math.floor(Math.random() *90) + 1);
    }

    let joker = (Math.floor(Math.random() *90) + 1).toString().padStart(2, "0");
    let superStar = (Math.floor(Math.random() *90) + 1).toString().padStart(2, "0");
    let numArray = [...numsSet]
    numArray.sort(function(a, b){return a-b});
    numArray.includes(joker) ? numArray.push("|"+(Math.floor(Math.random() *90) + 1)+"|" ,"*"+superStar+"*") : numArray.push("|"+joker+"|","*"+superStar+"*")

    let x = document.createElement("LI");
    var t = document.createTextNode(numArray.join(" "));
    x.appendChild(t);
    document.getElementById("list").appendChild(x);
    load()
    //  numberList.style.display = "block"

}


document.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        numbersButton.click();
    }
  });

function load() {
    let loading = document.querySelector(".loading");
    document.body.style.backgroundImage = "none"
    // window.addEventListener("load", () => {

        loading.style.display = "block";
        loading.style.width = "100%";
        loading.style.margin = "auto";
        // loading.style.marginTop = "0"
        loading.style.height = "100%"
        repeat.style.display= "none"
        numbersButton.style.display = "none";
        numberList.style.display = "none"

        setTimeout(()=>{
            loading.style.display = "none"
            repeat.style.display= "inline"
            numbersButton.style.display = "inline";
            numberList.style.display = "block"
            document.body.style.backgroundImage = "url(./img/result.jpg)"

            repeat.value = ""
            tryAgainButton.style.display = "inline"
            document.getElementById("numbers_button").disabled = true;
            numbersButton.style.backgroundColor = "gray"
            numbersButton.style.fontSize = "14px"
        }, 3000)
    // });
}
$("#repeat").focus();
// console.log(numArray);

// console.log(son);
// console.log([...numsSet]);
// console.log([...nums].sort(function(a, b){return a-b}));