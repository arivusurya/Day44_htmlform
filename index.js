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

const email = document.querySelector("#email")
const email_error = document.querySelector("#email-error")
email.addEventListener('input',()=>{
    const emailregex= RegExp("^[A-Za-z0-9]+(.[a-zA-Z0-9]+)?@[a-zA-Z]+.[a-zA-Z]{2,}(.[A-Za-z]{2,})?$")
    if(emailregex.test(email.value))
        email_error.textContent=""
    else
        email_error.textContent="Email is invalid"
 })


 const PhoneNum = document.querySelector("#tel")
 const pherror = document.querySelector("#tel-error")
 PhoneNum.addEventListener("input",()=>{
    let phregex = RegExp("^[1-9]{2}[ ]?[6789]{1}[0-9]{9}$")
    if(phregex.test(PhoneNum.value))
        pherror.textContent=""
    else
        pherror.textContent="Not a valif Phone Number"
 })

 const pwd = document.querySelector("#pwd")
 const pwderror = document.querySelector("#error-pwd")
 pwd.addEventListener("input",()=>{
    let pwdregex = RegExp("[A-Z a-z]{8,}")
    if(pwdregex.test(pwd.value))
        pwderror.textContent=""
    else
        pwderror.textContent="Password is valid"
 })