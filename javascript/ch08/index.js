function addDiv() {
    let newDiv = document.createElement("Div");
    console.log(newDiv);
    newDiv.innerHTML = "나"
    let card_list = document.querySelector(".card-list");
    card_list.append(newDiv); //append 밑으로 추가하고 싶을 때 사용.
                                //prepend 위에서 추가하고 싶을 때 사용.
}

