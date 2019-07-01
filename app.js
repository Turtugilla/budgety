// BUDGET CONTROLLER
var budgetController = (function () {
    // Some Code
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, des, val) {
            var newItem;
            new Item = new Expense(ID, des, val);

        }
    };
})();


// UI CONTROLLER
var UIController = (function () {

    DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstring: function () {
            return DOMstrings;
        }
    };

})();




// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    DOM = UICtrl.getDOMstring();

    var setupEventListeners = function () {
        DOM = UICtrl.getDOMstring();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function () {
        //  1. Get the filled input data
        var input = UICtrl.getinput();
        console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget}
    }


    // Inicialización pública.
    return {
        init: function () {
            console.log('Application has started');
            setupEventListeners();
        }
    };




})(budgetController, UIController);


controller.init();



