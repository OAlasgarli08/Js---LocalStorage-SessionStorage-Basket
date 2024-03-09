"use strict";

let basket = [];

let basketCountSpan = document.querySelector('.navigation .basket-count') 

if(JSON.parse(localStorage.getItem('basket')) == null){
    localStorage.setItem('basket', JSON.stringify(basket));
    basketCountSpan.innerText = basket.length;
} 
else{
    basket.JSON.parse(localStorage.getItem('basket'));

    let basketCount = 0;
    for (const item of basket) {
        basketCount += item.count;
    }
    basketCountSpan.innerText = basketCount;
}




let addBtns = document.querySelectorAll('#products .add-btn');

addBtns.forEach(btn => {
    btn.addEventListener('click', function(e){
        e.preventDefault();

        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"))
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = this.parentNode.lastElementChild.innerText;
        let productImage = this.parentNode.previousElementSibling.getAttribute('src');
        let productPrice = this.parentNode.nextElementSibling.innerText;

        let existProduct = basket.find(m => m.id == productId);

        if(existProduct != undefined){
            existProduct.count ++;
        }
        else{
            basket.push({
                id: productId,
                name:productName,
                description: productDesc,
                image: productImage,
                count: 1
            })
        }

        
        localStorage.setItem('basket', JSON.stringify(basket));
    })
});