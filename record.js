// fill in javascript code here

document.querySelector("form").addEventListener("submit",myfunction)

function myfunction(){
    event.preventDefault()

    var name = document.querySelector("#name").value 

    var employeeid = document.querySelector("#employeeID").value

    var department = document.querySelector("#department").value

    var experience = document.querySelector("#exp").value

    var email = document.querySelector("#email").value 

    var mobile = document.querySelector("#mbl").value 

    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = name 

    var td2 = document.createElement("td")
    td2.innerText = employeeid

    var td2 = document.createElement("td")
    td2.innerText = employeeid

    var td3 = document.createElement("td")
    td3.innerText = department

    var td4 = document.createElement("td")
    td4.innerText = experience

    var td5 = document.createElement("td")
    td5.innerText = email

    var td6 = document.createElement("td")
    td6.innerText = mobile

    var td7 = document.createElement("td")
    if(Number(td4.innerText) <= 1){
        td7.innerText = "Fresher"
    }
    else if(Number(td4.innerText) > 5){
        td7.innerText = "Senior"
    }
    else{
        td7.innerText = "Junior"
    }

    var td8 = document.createElement("td")
    td8.innerText = "DELETE"
    td8.addEventListener("click",deleteitem)
    td8.style.cursor = "pointer"
    function deleteitem(event){
        event.target.parentNode.remove()
    }

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)

    document.querySelector("tbody").append(tr)
}