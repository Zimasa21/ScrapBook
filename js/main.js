"use strict"
const TypeWriter = function(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function() {
   const current = this.wordIndex & this.words.length;//current index
   const fullTxt = this.words[current];//full text


    if(this.isDeleting) {//check if deleting

      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {

      this.txt = fullTxt.substring(0, this.txt.length + 1);//Add char
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 100; //typing speed

    if(this.isDeleting) {
        typeSpeed /= 2;
    }
    if(!this.isDeleting && this.txt === fullTxt) { //if word is complete

       typeSpeed = this.wait; //pause at end
       this.isDeleting = true; //set delete to true

    } else if(this.isDeleting && this.txt === '') {
       this.isDeleting = false;
       this.wordIndex++;
       typeSpeed = 500;
    }
   
    setTimeout(() => this.type(),typeSpeed)
}

document.addEventListener ('DOMContentLoaded', init); //event listeners functions app=(words for data-words)(txt-type is the txtelement)(wait for data-wait). TypeWrite is text section/typing section
//init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init TypeWrite
    new TypeWriter(txtElement, words, wait);

};


/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;






