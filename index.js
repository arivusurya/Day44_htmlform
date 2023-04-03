const text = document.querySelector("#text")
const error_text = document.querySelector(".text-error")
text.addEventListener("input",function(){
   let Nameregex = RegExp('^[A-Z]{1}[a-z]{2,}$')
   if(Nameregex.test(text.value))
        error_text.textContent=""
    else
        error_text.textContent = "Name is Incorrect"
    
})


const salary = document.querySelector("#salary");
const outputsalary = document.querySelector('.salary-output')
salary.addEventListener("input",()=>{
    outputsalary.textContent=salary.value
})