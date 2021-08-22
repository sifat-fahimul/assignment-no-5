//get memory button
const memory8Gb=document.getElementById('memory-8gb');
const memory16Gb=document.getElementById('memory-16gb');

// get storage button
const ssd256GB=document.getElementById('ssd-256GB');
const ssd512GB=document.getElementById('ssd-512GB');
const ssd1TB=document.getElementById('ssd-1TB');
//get delivery button
const freeDelivery=document.getElementById('free-delivery');
const chargeDelivery=document.getElementById('charge-delivery');

// get price all eliments
const bestPrice=document.getElementById('best-price');
const extraMemory=document.getElementById('extra-memory');
const extraStorage=document.getElementById('extra-storage');
const deliveryCharge=document.getElementById('delivery-cost');
const totalPrice=document.getElementById('total-price');



// memory handler
memory8Gb.addEventListener('click',function(){
    extraMemory.innerText=0;
    updateTotal();
    afterDiscountTotal()
});
memory16Gb.addEventListener('click',function(){
    extraMemory.innerText=180;
    updateTotal();
    afterDiscountTotal()
});
// storage handler
ssd256GB.addEventListener('click',function(){
    extraStorage.innerText=0;
    updateTotal();
    afterDiscountTotal()
});
ssd512GB.addEventListener('click',function(){
    extraStorage.innerText=100;
    updateTotal();
    afterDiscountTotal()
});
ssd1TB.addEventListener('click',function(){
    extraStorage.innerText=180;
    updateTotal();
    afterDiscountTotal()
});
// delivery option handler
freeDelivery.addEventListener('click',function(){
    deliveryCharge.innerText=0;
    updateTotal();
    afterDiscountTotal()
});
chargeDelivery.addEventListener('click',function(){
    deliveryCharge.innerText=20;
    updateTotal();
    afterDiscountTotal()
    
});

// update total
function updateTotal(){
    const extraMemoryField=parseInt(extraMemory.innerText);
    const extraStorageField=parseInt(extraStorage.innerText);
    const deliveryOption=parseInt(deliveryCharge.innerText);
    const bestPriceField=parseInt(bestPrice.innerText);
    totalPrice.innerText=extraMemoryField+extraStorageField+deliveryOption+bestPriceField;
    
}

// extra section
const discountInput=document.getElementById('discount-code');

const pomoButton=document.getElementById('pomo-btn');

const discountPrice=document.getElementById('discount-price');

pomoButton.addEventListener('click',function(){
    
    if(discountInput.value=='stevekaku'){
        const totalPriceDiscount=parseInt(totalPrice.innerText);
        const discountAmount=20/100;
        const totalDiscount=totalPriceDiscount-(totalPriceDiscount*discountAmount);
        discountPrice.innerText=totalDiscount;
       
    };
    discountInput.value='';
    
    
});
// after discount total
function afterDiscountTotal(){
    const total=document.getElementById('total-price');
    const discountTotal=document.getElementById('discount-price');
    discountTotal.innerText=total.innerText;
};