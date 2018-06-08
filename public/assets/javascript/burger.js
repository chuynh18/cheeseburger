"use strict";

// new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// wait for document to load
document.addEventListener("DOMContentLoaded", function() {

    // reload the page if we see http status 200 coming back
    xhr.onload = function() {
        console.log(xhr.status);
        if (xhr.status == 200) {
            location.reload(); 
        }
    }
    
    // ========== attach event handlers to eat buttons ==========
    
    // save array-like list of things on the page with class of "change-eaten" to a variable
    var eatButtons = document.getElementsByClassName("change-eaten");

    // attach event handlers to all eatButtons.  can't use forEach!  it's array-like, not an array
    for (var i = 0; i < eatButtons.length; i++) {
        // on clicking the eat button, we send the appropriate service call
        eatButtons[i].addEventListener("click", function() {
            console.log(`Eating burger with id of ${this.id}`);
            xhr.open("PUT", `/api/burgers/${this.id}`);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send();
        })
    }

    // ========== attach event handlers to delete buttons ==========

    // save array-like list of things on the page with class of "delete-burger" to a variable
    var deleteButtons = document.getElementsByClassName("delete-burger");

    // attach event handlers to all delete buttons
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function() {
            console.log(`Deleting burger with id of ${this.id}`);
            xhr.open("DELETE", `/api/burgers/${this.id}`);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send();
        })
    }

    // ========== attach event handler to create burger button ==========
    document.getElementById("addBurger").addEventListener("click", function() {
        var newBurgerName = document.getElementById("newBurger").value;
        xhr.open("POST", "/api/burgers");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(`burgerName=${newBurgerName}`);
        console.log(newBurgerName);
        document.getElementById("newBurger").value = "";
    })

});