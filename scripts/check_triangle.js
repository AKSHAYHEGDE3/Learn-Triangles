const angle1=document.getElementById('ang1');
const angle2=document.getElementById('ang2');
const angle3=document.getElementById('ang3');
const btn=document.getElementById('btn');
const msg=document.getElementById('msg');

btn.addEventListener('click',()=>{
   if(angle1.value && angle2.value && angle3.value){

        totalAngle=Number(angle1.value)+Number(angle2.value)+Number(angle3.value);
        if(totalAngle==180){
            msg.innerText="Yes, the angle forms a Triangle"
        } else{
            msg.innerText="Angles does not forms a Triangle"
        }
  } else{
    msg.innerText="ADD VALID DATA"
  }
})