const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-lid");
const links = document.querySelectorAll(".link");

// console.log(forms, pwShowHide, link);

pwShowHide.forEach(eyeLid => {
    eyeLid.addEventListener("click", ()=> {
        let pwFields = eyeLid.parentElement.parentElement.querySelectorAll(".password");
        // console.log(pwFields)

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = 'text';
                eyeLid.classList.replace("fa-eye-slash", "fa-eye")
                return;
            }
            password.type = 'password';
            eyeLid.classList.replace("fa-eye", "fa-eye-slash")
        })
    })
})

// links.forEach(link => {
//     link.addEventListener("click", e=>{
//         e.preventDefault();
//     })
// })
const login = () => {
    alert("Login Succesfully")
}
document.getElementById("myForm").addEventListener("submit", login);




