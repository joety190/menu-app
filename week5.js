/// iam going to make a way for a user to build a burger.


class Burger{
    constructor(meat, toppings){
        this.meat = meat;
        this.toppings = toppings;
    }
    describe(){
        return `your burger with ${this.meat} and ${this.Toppings}`
    }
}

class orderName{ //// i want this to be where the user inserts their name to keep track of order
    constructor(name) {
        this.name = name;
        this.orders = [];
    }
    startOrder(order) {
        if (order instanceof Burger){
            this.orders.push(order);
        } else {
            throw new Error(`order name can not be used.`);
        }
    }
    describe() {
    return `Order ${this.name} ordered ${this.orders}`;

    }
}

class Menu {
    constructor(){
        this.burgerOrder = [];
        this.selectedorder = null;
    }

    start(){ //// switch so people can view menu, cancel orders, see all orders placed

        let selection = this.showMainMenuOptions();

        while(selection != 0){
            switch (selection) {
                case '1':
                    this.createOrder();
                    break;
                case '2':
                    this.viewOrder();
                    break;
                case '3':
                    this.cancelOrder();
                    break;
                case '4':
                    this.showOrders();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Thank You!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) Create order
        2) view order
        3) cancel order
        4) show all orders
        `);
    } 
    showBurgerOptions(burgerInfo){ /// i had a hard time getting this part to work
        return prompt(`
            0) Start over
            1)Begin Order
            2)Cancel order
            -------------
            ${burgerInfo}
        `);
    }
    beginOrder() { /// starts orders

        let meat = prompt(`enter meat:`)
        let toppings = prompt(`enter toppings:`)
        this.selectedorder.orders.push(new Burger(meat, toppings))
    }
    cancelOrder() {
        let index = prompt(`enter the index you wish to cancel.`);
        if (index > -1 && index < this.selectedorder.Orders.length) {
            this.selectedOrder.orders.splice(index, 1);
        }
    }
    showOrders() {
        let allOrders = "";
        for (let i = 0; i < this.burgerOrder.length; i++){
            allOrders += i + ') ' + this.burgerOrder[i].name + '\n';
        }
        alert(allOrders)
    }
    createOrder() { /// my code isnt saving multiple orders id love some feed back on something i can put in to see it.
        let name = prompt( `enter name for new order:`);
        this.burgerOrder.push( new orderName(name));
    }
    viewOrder() {
        let index = prompt(`enter order number (index):`)
        if (index > -1 && index < this.burgerOrder.length) {
            this.selectedorder = this.burgerOrder[index];
            let description = `order: ` + this.selectedorder.name  + '\n';

            for (let i = 0; i < this.selectedorder.orders.length; i++) {
                description += i + ') ' + this.selectedorder.burger[i].name + '-' + this.selectedorder.order[i].meat 
                + this.selectedorder.order[i].toppings + '\n';
            }
            let selection = this.showBurgerOptions(description);
            switch(selection) {
                case "1":
                    this.beginOrder();
                    break;
                case '2':
                    this.cancelOrder();    
            }
        }
    }
    cancelOrder() {
        let index = prompt(`enter the index you wish to cancel.`);
        if (index > -1 && index < this.selectedorder.orders.length) {
            this.burgerOrder.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();
    




