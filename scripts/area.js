const side1=document.getElementById('side1');
const side2=document.getElementById('side2');
const side3=document.getElementById('side3');
const btn=document.getElementById('btn');
const msg=document.getElementById('msg');

//herons formula
//Area=root of s(s-a)(s-b)(s-c),
//s=(a+b+c)/2

btn.addEventListener('click',()=>{
 if(Number(side1.value)+Number(side2.value)>Number(side3.value) &&
 Number(side1.value)+Number(side3.value)>Number(side2.value) &&
 Number(side3.value)+Number(side2.value)>Number(side1.value) && 
 (Number(side1.value)) > 0 && (Number(side2.value)) > 0 && (Number(side3.value)) > 0 

 ){
 const s = (Number(side1.value) + Number(side2.value) + Number(side3.value))/2;
 console.log(s)
 const area = Math.sqrt(s*
    (s-Number(side1.value))*
    (s-Number(side2.value))*
    (s-Number(side3.value))
    ).toFixed(3);
 console.log(area)
 msg.innerText = `Area of Triangle is ${area} units`
 } else {
     msg.innerText='Invalid Details'
 }
})