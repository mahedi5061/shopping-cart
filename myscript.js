//using one function
function changeProductItem(product,isIncrease){

    const productCount=document.getElementById(product+'-count');
    const productCountNumber=parseInt(productCount.value);
    // const newMobile=mobileCountNumber+1;
    let newProduct=productCountNumber;
    if(isIncrease==true){
         newProduct=newProduct+1;
    }
    if(isIncrease==false && productCountNumber>0 ){
        newProduct=newProduct-1;
    }
    productCount.value=newProduct;
    let productTotal=newProduct;
    if(product == 'mobile'){
        productTotal=productTotal*1219;
    }
    if(product == 'case'){
        productTotal=productTotal*59;
    }
    
    document.getElementById(product+'-total').innerText='$'+ productTotal;
    totalCalculate();
}

function totalCalculate(){
    // const mobileTotalAmount=document.getElementById('mobile-count');
    // const mobileTotalAmountNumber=parseInt(mobileTotalAmount.value);

    // const caseTotalAmount=document.getElementById('case-count');
    // const caseTotalAmountNumber=parseInt(caseTotalAmount.value);
    const mobileTotalAmount=getItem('mobile');
    const caseTotalAmount=getItem('case');
    const totalCalculateAmount=mobileTotalAmount*1219+caseTotalAmount*59;
    document.getElementById('total-count').innerText='$' +totalCalculateAmount;
    
    const tax=Math.round(totalCalculateAmount*0.1);
    document.getElementById('tax-amount').innerText='$'+tax;

    const grandTotal=totalCalculateAmount+tax;
    document.getElementById('grand-total').innerText='$'+grandTotal;
}

function getItem(product){
    const productTotalAmount=document.getElementById(product+'-count');
    const productTotalAmountNumber=parseInt(productTotalAmount.value);
    return productTotalAmountNumber;
}

 
// function changeCaseItem(isIncrease){

//     const caseCount=document.getElementById('case-count');
//     const caseCountNumber=parseInt(caseCount.value);
//     // const newMobile=mobileCountNumber+1;
//     let newCase=caseCountNumber;
//     if(isIncrease==true){
//          newCase=caseCountNumber+1;
//     }
//     if(isIncrease==false){
//          newCase=caseCountNumber-1;
//     }
//     caseCount.value=newCase;
//     const caseTotal= newCase*59;
//     document.getElementById('case-total').innerText='$'+ caseTotal;
// }


 

// Without using function
// document.getElementById('mobile-increase').addEventListener('click',function(){
//     const mobileCount=document.getElementById('mobile-count');
//     const mobileCountNumber=parseInt(mobileCount.value);
//     const newMobile=mobileCountNumber+1;
//     mobileCount.value=newMobile;
//     const mobileTotal= newMobile*1219;
//     document.getElementById('mobile-total').innerText='$'+ mobileTotal;
// })

// document.getElementById('mobile-decrease').addEventListener('click',function(){
//     const mobileCount=document.getElementById('mobile-count');
//     const mobileCountNumber=parseInt(mobileCount.value);
//     const newMobile=mobileCountNumber-1;
//     mobileCount.value=newMobile;
//     const mobileTotal= newMobile*1219;
//     document.getElementById('mobile-total').innerText='$'+ mobileTotal;
// })