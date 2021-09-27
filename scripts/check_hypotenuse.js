const side1=document.getElementById('side1')
const side2=document.getElementById('side2')
const btn=document.getElementById('btn')
const msg=document.getElementById('msg')

btn.addEventListener('click',()=>{
    console.log('click')
    if(side1.value && side2.value && side1.value > 0 && side2.value > 0 ){
       
        const sumOfSq= (Number(side1.value)**2) + (Number(side2.value)**2)
        const hypo= sumOfSq ** (1/2)
        msg.innerText=`Length of Hypotenuse is ${hypo}`
    } else{
        msg.innerText='ADD VALID DATA'
    }
})