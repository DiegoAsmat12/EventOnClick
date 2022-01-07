function changeText(element){
    const textOfElement = element.innerText;
    if(textOfElement=="Login"){
        element.innerText="Logout"
    }
    else if(textOfElement=="Logout"){
        element.innerText="Login"
    }
    
}
function removeButton(element){
    element.remove();
}