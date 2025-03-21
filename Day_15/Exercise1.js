var person_list = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function buyLunch(){
    chosen_one = Math.floor(Math.random() * person_list.length);
    return person_list[chosen_one] + " pays the bill.";
}

buyLunch()