function getId(){
    return document.querySelectorAll("p[name='content']")[0].getAttribute("id")
};

function del(params) {
    console.log("DELETE:");
    console.log(getId());
    let url = `${window.location.origin}/` // result in http//localhost:3000/, or whatever my page is

    fetch('/posts', {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({id:getId()}),
    })
    .then(reponse=>reponse.json())
    .then(response=>{
        console.log(response)
        window.location.replace(url)
    });
};

function put() {
    let form = document.forms["form-edit-post"];
    let data = {
        title : form["title"].value,
        body : form["body"].value,
        id : getId()
    };

    fetch('/posts', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(reponse=>reponse.json())
    .then(response=>console.log(response));
    
    toogleShowPost("block",data.title,data.body);

    form.remove();

    return false;
};
function getBtnDel(){
    return document.querySelectorAll("button[name='delBtn']")[0];
}
function getInitalElements(){
    return {
        lastTitle : document.querySelectorAll("h1")[0].firstElementChild.innerText,
        lastContent : document.querySelectorAll("p[name='content']")[0].innerText,
        delbtn : getBtnDel()
    };
};

function toogleShowPost(display="none", title="", content=""){
    if(display=="none"){
        document.querySelectorAll("h1")[0].style.display = display;
        document.querySelectorAll("p[name='content']")[0].style.display = display;
    }else{
        document.querySelectorAll("h1")[0].lastElementChild.before(getBtnDel());
        document.querySelectorAll("h1")[0].firstElementChild.innerText = title;
        document.querySelectorAll("p[name='content']")[0].innerText = content;
        document.querySelectorAll("h1")[0].style.display = display;
        document.querySelectorAll("p[name='content']")[0].style.display = display;
    }
};

function createTheForm() {
    let { lastTitle, lastContent, delbtn } = getInitalElements();

    // append the form
    // Create a form 
    let form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "/posts");
    form.setAttribute("name", "form-edit-post");
    form.onsubmit = put;

    // Create the divs
    let div1 = document.createElement("div");
    div1.classList.add("mb3");
    let div2 = div1;

    // Create an input and label element for TITLE
    let labelTitle = document.createElement("label");
    labelTitle.innerText ="Title";
    labelTitle.setAttribute("for","title");
    labelTitle.classList.add("form-label");

    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Your Title");
    title.classList.add("form-control");
    title.value = lastTitle;

    // hidden method
    let method = document.createElement("input");
    method.setAttribute("type","hidden");
    method.setAttribute("name","_method");
    method.setAttribute("value","PUT");

    // Create an input and label element for Textarea
    let labelBody = document.createElement("label");
    labelBody.innerText ="Post";
    labelBody.setAttribute("for","title");
    labelBody.classList.add("form-label");

    let body = document.createElement("textarea");
    body.setAttribute("rows", "3");
    body.setAttribute("name", "body");
    body.setAttribute("placeholder", "Type Your post Here");
    body.classList.add("form-control");
    body.value = lastContent;

    // create a submit button and h1
    let h1 = document.createElement("h1");
    h1.innerText = "Edit Post | "
    h1.appendChild(delbtn);
    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Update");
    submit.classList.add("btn","btn-primary","mb-3")
    
    // Append to divs
    div1.appendChild(labelTitle);
    div1.appendChild(title);
    div2.appendChild(labelBody);
    div2.appendChild(body);

    // Append the divs , ande submit to the form
    form.appendChild(h1);
    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(document.createElement("br"));
    form.appendChild(submit);
    form.appendChild(method);

    return form;
};

function edit(id) {
    // hide the inital elements
    toogleShowPost(display="none");
    // Get the form
    let form = createTheForm();
    // append the form to site
    document.querySelectorAll(".nav")[1].before(form);

};


let buttons = document.querySelectorAll(".functional");
buttons[0].addEventListener("click",del); //DELETE
buttons[1].addEventListener("click",edit); //EDIT