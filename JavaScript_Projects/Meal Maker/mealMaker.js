/*
    Meal Maker
    A restaurant has hired you to create a function for their website thaht allows
    them to set a meal and price each morning for Today's Special.
    Use your knowledge of getters and setters to make sure anyone 
    who uses the new function can generate a meal and a price Today's Special without any errors.

*/

let menu = {
    _meal : '',
    _price : 0,
    set meal(mealToCheck){
        if(typeof(mealToCheck) === 'string'){
            return this._menu = mealToCheck;
        }
    },
    set price(priceToCheck){
        if(typeof(priceToCheck) === 'number'){
            return this._price = priceToCheck;
        }
    },
    get todaysSpecial(){
        if(this._meal && this._price){
            return `Today's Special is ${this._meal} for ${this._price}$`;
        }else{
            return "Meal or price was not set correctly!";
        }
    }
};

/* 
menu.meal = 'chicken';
menu.price = 10;
console.log(_menu + " " + _price); //prints undefined undefined
*/

menu._meal = 'chicken';
menu._price = 9;

//menu.meal = 'chicken';
//menu.price = 9;

console.log(menu.todaysSpecial);