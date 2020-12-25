let btnPlus = Array.from( document.querySelectorAll('.plus'))
let amount =Array.from( document.querySelectorAll('.amount'))
let btnMoins=Array.from( document.querySelectorAll('.moins'))


for(let i=0; i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(){
   
    amount[i].innerHTML++
    sum();  
 })
 
}

for(let i=0; i<btnMoins.length;i++){
    btnMoins[i].addEventListener('click',function(){
    
        if(amount[i].innerHTML>0) {
        amount[i].innerHTML--
        sum();
        }
        
    })
    
}

function sum(){
    let total= document.querySelector('.total')
    let price=Array.from(document.querySelectorAll('.prix'))
    let amount =Array.from( document.querySelectorAll('.amount'))

    let s=0;

    for(let i=0;i<amount.length;i++ ){

     s+=amount[i].innerHTML*price[i].innerHTML;

     total.innerHTML=s;
     
        
    }
    return s;

}

let heart = document.querySelectorAll('.btn_heart')
for(let i=0;i<heart.length;i++){

    heart[i].addEventListener('click',function(){
        
        if (heart[i].style.color=='salmon') {
            heart[i].style.color='grey';
        } else {
            heart[i].style.color='salmon';

        }

    })  
    
}


let remove = Array.from(document.querySelectorAll('.btn_delete'))
let article =Array.from(document.querySelectorAll('article'))

for(let i=0;i<remove.length;i++) {
    
    remove[i].addEventListener('click',function(){
        
        article[i].remove()
    sum()
    
    })
}

