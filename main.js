

function def(){
    let ism=document.querySelector('.ism'),
    vazn=document.querySelector('.vazn'),
    fam=document.querySelector('.fam'),
    buy=document.querySelector('.buy'),
    p=document.querySelector('#p'),
    y=document.querySelector('#ismch');
    
    a=((vazn.value)/(1*(buy.value)+1*(buy.value))).toFixed(2);
    try{
        if (a<14.99 && ism.value && fam.value){
            y.textContent=`${fam.value} ${ism.value}`;
            p.textContent=`Hurmatli ${fam.value} ${ism.value} Kursatkichingiz ${a}. Harbiy hizmatga tug'ri kelmaysiz `;
            p.style.color="red"
        }
        else if(a>15 && a<24.99 && ism.value && fam.value){
            y.textContent=`${fam.value} ${ism.value}`;
            p.textContent=`Hurmatli ${fam.value} ${ism.value} Kursatkichingiz ${a}. Harbiy hizmatga tug'ri kelasiz`;
            p.style.color="white"
        }
        else if (a>25  && ism.value && fam.value){
            y.textContent=`${fam.value} ${ism.value}`;
            p.textContent=`Hurmatli ${fam.value} ${ism.value} Kursatkichingiz ${a}. Harbiy hizmatga tug'ri kelmaysiz biroz Shugulaning`;
            p.style.color="red"
        }
    }
    catch(e){
        p.textContent=`Malumotlarni To'liq kiriting `
        
    }

    
    
}
function bg(){
    z=document.querySelector('.malumot')
    m=document.querySelector('#checked')
    if (m==true){
       document.z.style.backgroundColor="blue"

        
    }
}
