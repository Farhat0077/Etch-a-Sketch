    let color="black";
    document.addEventListener('DOMContentLoaded',function(){
      creatContainer(30);

      let btn_popup=document.querySelector("#popup");
      
      btn_popup.addEventListener("click",function(){
        
     let size=getsize();
       
     creatContainer(size);  
       
     })
})
function creatContainer(size){
    let container=document.querySelector(".container");

    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    container.style.gridTemplateRows=`repeat(${size},1fr)`;

    let numberDives=size*size;

    for(let i=0;i<numberDives;i++){
        let div=document.createElement("div");
        div.addEventListener("mouseover",colorDiv)
        container.insertAdjacentElement("beforeend",div);
    }
}
    function getsize(){
        let input = prompt("what would be the size of the container");
        let message=document.querySelector("#message");
        if(input==""){
            message.innerHTML ="please provide a number";
        }
        else if (input<=0 ||input>100){
            message.innerHTML ="provide a number between 1 and 100";
          
        }
        else{
            message.innerHTML ="now you can play";
            return input;
        }
}
    function colorDiv(){
        if (color=="random"){
            this.style.backgroundColor =`hsl(${Math.random() *360 },100%,50%)`
        }
        else{
            this.style.backgroundColor = "black";
        }

    }   
    function setColor(colorChoice){
        color =colorChoice;

    } 
   