document.addEventListener('DOMContentLoaded',function(){
    let input=document.getElementById('inputbox');
    let buttons=document.querySelectorAll('button');

    let string="";

    buttons.forEach(button=> {
        button.addEventListener('click',(e)=>{
            if(e.target.innerHTML==='='){
                string=eval(string);
                input.value=string;
            }
            else if(e.target.innerHTML==='AC'){
                string="";
                input.value=string;
            }
            else if(e.target.innerHTML==='DE'){
                string=string.substring(0,string.length - 1);
            }
            else{
                string += e.target.innerHTML;
                input.value=string;
            }
        });
    });
});