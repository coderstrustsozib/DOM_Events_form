const form = document.querySelector("form");
const email = document.querySelector("#exampleInputEmail1");
const password = document.querySelector("#exampleInputPassword1");

form.addEventListener("submit", formHandler);


function formHandler(e){
    e.preventDefault();
    // console.log(email.value);
    // console.log(password.value);

    const formInfo = {
        Email: email.value,
        password: password.value,
    }

    console.log(formInfo);

    email.value = "",
    password.value = ""
}