var btnCalc = document.getElementById('calc');
var btnDel = document.getElementById('del');

btnCalc.addEventListener('click', function() {

    var psngName = document.getElementById('name').value; 
    var psngKm = parseInt(document.getElementById('km').value); 
    var discount = document.getElementById('age');
    var psngDiscount = discount.value;
    var psngDiscountStr = discount.options[discount.selectedIndex].text;
    var psngCouch = Math.floor(Math.random() * 10) + 1;
    var psngCode = Math.floor(Math.random() * (100000 - 90000)) + 90000;
    var finalCost = psngKm * .21;

    if (psngDiscount != 'normal'){

        finalCost -= finalCost * .2;
    }
    console.log(psngName, psngKm, psngDiscountStr, psngCouch, psngCode, finalCost);

    document.getElementById('tktName').innerHTML = psngName;
    document.getElementById('tktDiscount').innerHTML = psngDiscountStr;
    document.getElementById('tktCouch').innerHTML = psngCouch;
    document.getElementById('tktCode').innerHTML = psngCode;
    document.getElementById('tktPrice').innerHTML = finalCost + '&euro; ';
});


btnDel.addEventListener('click', function() {

    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').selectedIndex = 0;
    document.getElementById('tktName').innerHTML = '';
    document.getElementById('tktDiscount').innerHTML = '';
    document.getElementById('tktCouch').innerHTML = '';
    document.getElementById('tktCode').innerHTML = '';
    document.getElementById('tktPrice').innerHTML = '';
});