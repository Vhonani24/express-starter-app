module.exports = function PizzaCart() {

    var smallPizzaCost;
    var mediumPizzaCost;
    var largePizzaCost;

    
    let pizzaList = [];



    function setPizzaCost() {
        smallPizzaCost = 35;
        mediumPizzaCost = 65;
        largePizzaCost = 85;

    } function getPizzaCost
        () {
        return {
            smallPizzaCost,
            mediumPizzaCost,
            largePizzaCost,

        }
    }

    function add(pizza) {
        let cost = 0;
            if (pizza === 'small' ){
                cost += smallPizzaCost;
            }
            else if (pizza === 'medium'){
                cost += mediumPizzaCost;
            }
            else if (pizza === 'large'){
                cost += largePizzaCost;
            }
            return cost;

    }

    function remove(pizzaId) {

    }

    function list() {

    }







    return {
        setPizzaCost,
        getPizzaCost,
        getPizzaCost,
        add,
        remove,
        list

    }
}