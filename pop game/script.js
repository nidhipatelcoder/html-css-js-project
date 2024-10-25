let circle=document.querySelectorAll(".pop");

circle.forEach(circle=>{
    circle.addEventListener('click',()=>{
      // circle.classList.toggle('pop active')


      console.log(circle.classList[1])
      if(circle.classList[1] == "active"){

        circle.classList.remove('active');

      }else{
        circle.setAttribute("class", "pop active")
      }
      

      
    })
        
    
});








