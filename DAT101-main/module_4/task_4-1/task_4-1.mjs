"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 Account types (5 points) ----------------------------------------------------------------------------------------------");
/*Create a constant object to hold account types with these properties:
normal: "Brukskonto"
Saving: "Sparekonto"
Credit: "Kredittkonto"
Pension: "Pensjonskonto"

Print all these types on a single comma-separated line:
Bruktskonto,Sparekonto,Kreditkonto,pensionskonto*/

const currencyTypes = {
    NOK:{value: 1.0000, name: "Norske kroner", denomination: "kr"},
    EUR:{value: 0.0985, name: "Europeriske euro", denomination: "€"},
    USD:{value: 0.1891, name: "United States dollar", denomination: "$"},
    GBP:{value: 0.0847, name: "Pound sterling", denomination: "£"},
    INR:{value: 7.8389, name: "Indiske rupee", denomination: "₹"},
    AUD:{value: 0.1581, name: "Australske dollar", denomination: "A$"},
    PHP:{value: 6.5189, name: "Fillippinske peso", denomination: "₱"},
    SEK:{value: 1.0580, name: "Svenske kroner", denomination: "kr"},
    CAD:{value: 0.1435, name: "Canadiske dollar", denomination: "C$"},
    THB:{value: 3.3289, name: "Thai baht", denomination: "฿"}
};

const accountType = {
        normal: "Brukskonto",
        saving: "Sparekonto",
        credit: "Kredittkonto",
        pension: "Pensjonskonto"
};

class TAccount {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;

    constructor(aType){
        this.#type = aType;
        this.#balance = 0;
        this.#withdrawCount = 0;
        this.#currencyType = currencyTypes.NOK;
        
    }
    toString(){
    return this.#type;

    }
    setType(aType){
    let text = "Account type has been changed from " + this.#type;
    this.#type = aType;
    this.#withdrawCount = 0;
    text += " to " + this.#type;
    printOut(text);
    }

    getBalance(){
    return this.#balance;
    }

    deposit(aAmount, aType = currencyTypes.NOK){
        const newAmount = aAmount / this.#currencyConvert(aType);
        this.#balance += newAmount;
        this.#withdrawCount = 0;
        let text = "Deposit of " + aAmount + " " + aType.name + ", new balance is: ";
        text += this.#balance.toFixed(2); 
        text += this.#currencyType.denomination;
        printOut(text);
    }
    withdraw (aAmount, aType = currencyTypes.NOK){
        let canWithdraw = true;
        let text = "";
        const newAmount = aAmount;

        switch ( this.#type) {
            case accountType.saving:
                if (this.#withdrawCount < 3) {
                    this.#withdrawCount++;
                    canWithdraw = true;
                }else{
                    canWithdraw = false;
                    text = "Cannot withdraw more than 3 times from a " + this.#type;
                }
                break;
                case accountType.pension:
                canWithdraw = false;
                text = "Cannot withdraw from a " + this.#type; 
                break;
        }
        if (canWithdraw) {
            this.#balance -= newAmount;
            text = "The withdrawal is: " + aAmount + " " + aType.name + ", the new balance is: ";
            text += this.#balance.toFixed(2);
            text += aType.denomination;
        }
        printOut(text);
    }
    setCurrencyType(aNewCurrencyType){
    /*Create a "public" "setCurrencyType" method so you can change the account currency. If this method tries
    to switch to a new currency of the same type as the account already has, the method should do nothing
    and just return. The new structure will be like this:
    Make a deposit to the account with an amount of 150, and let the output look like this:*/

    if(this.#currencyType === aNewCurrencyType){
        return;
    }
    this.#balance = this.#balance * this.#currencyConvert(aNewCurrencyType);
    let text = "The account currency has been changed from ";
    text += this.#currencyType.name + " to " + aNewCurrencyType.name + ". ";
    text += newLine + "New balance is ";
    text += this.#balance.toFixed(2) + aNewCurrencyType.denomination;
    this.#currencyType = aNewCurrencyType;
    printOut(text);

    }
    #currencyConvert(aType){
        return currencyTypes.NOK.value / this.#currencyType.value * aType.value;
    }
}

const typesList = Object.values(accountType).join(",");
printOut("" + typesList);

printOut(newLine);

printOut("--- Part 2 Basic Bank Account (15 points) ----------------------------------------------------------------------------------------------");
/*Create a bank account class with this structure:
Private type

Public toString()
Public setType(aType)

Let the constructor of the class have a parameter for the account type of this bank account class. And set
"type" to this parameter value. The "toString" method should return the account type. The "setType"
method should set "type" to this new value and print out the change of account type.
Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
type. Then change the account type to "Saving".
Print something similar to this:
*/
let myAccount = new TAccount(accountType.normal);
printOut("MyAccount: " + myAccount.toString());
myAccount.setType(accountType.saving);
printOut("MyAccount: " + myAccount.toString());


printOut(newLine);

printOut("--- Part 3: Account Balance and Transactions (15 points)----------------------------------------------------------------------------------------------");
/*"getBalance" should return the account balance. "deposit" should increase the balance by a given amount
and print the amount and the new balance. "withdraw" should decrease the balance by a given amount
and print the amount and the new balance.*/

myAccount.deposit(100);
myAccount.withdraw(15);
printOut("My account balance is: " + myAccount.getBalance());


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Use a "switch statement" to check if the account type is "Pension" or "Saving". If the account type is a
savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if
the account type is changed or the deposit method is used. If the account type is a pension account, no
withdrawals are allowed.
Make sure that the account is set to "Saving" and that the balance is exactly 100, use "deposit" and
"setType" if necessary.
*/
myAccount.deposit(15);
myAccount.withdraw(5);
myAccount.withdraw(10);
myAccount.withdraw(5);
myAccount.setType(accountType.normal);
myAccount.withdraw(30);
myAccount.setType(accountType.pension);
myAccount.withdraw(25);
myAccount.setType(accountType.normal);
myAccount.withdraw(55);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Add a private currency type to the account class and set the default value to "NOK".
Create a "public" "setCurrencyType" method so you can change the account currency. If this method tries
to switch to a new currency of the same type as the account already has, the method should do nothing
and just return. The new structure will be like this:
Make a deposit to the account with an amount of 150, and let the output look like this:*/

myAccount.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*Expand the account class with a private method that converts from one currency to another. Use this
method to change the balance when the currency changes. Replace all places where you print the balance
so that it has exactly 2 decimals.*/

myAccount.setCurrencyType(currencyTypes.SEK);
myAccount.setCurrencyType(currencyTypes.AUD);
myAccount.setCurrencyType(currencyTypes.THB);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*Modify the "deposit" and "withdraw" methods to take an additional parameter for the currency type. If no
currency type is specified (undefined), use NOK as the default. Make this change so that the functions
print out the currency the amount is in.
Deposit 12 USD and withdraw 10 GBP. Change the account currency a few times and withdraw the rest of
the balance with a different currency than the account is in. You should have a balance of exactly 0.00.
Try to print something like this:*/

myAccount.deposit(25, currencyTypes.INR);
myAccount.withdraw(5, currencyTypes.USD);
myAccount.setCurrencyType(currencyTypes.GBP);
myAccount.setCurrencyType(currencyTypes.PHP);
myAccount.withdraw(97.32, currencyTypes.EUR);

printOut(newLine);
