// write js code here corresponding to favourites.html

var data = JSON.parse(localStorage.getItem("favourites"))

displaydata(data)

function displaydata(data){

    data.forEach(function(el,index){
        
        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = el.match

        var td2 = document.createElement("td")
        td2.innerText = el.teamA

        var td3 = document.createElement("td")
        td3.innerText = el.teamB

        var td4 = document.createElement("td")
        td4.innerText = el.data

        var td5 = document.createElement("td")
        td5.innerText = el.venue

        var td6 = document.createElement("td")
        td6.innerText = "Delete"
        td6.style.color = "orange"
        td6.style.cursor = "pointer"
        td6.addEventListener("click",function(){
            deleteItem(index)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
 
   
}

function deleteItem(index){
    data.splice(index,1)

    localStorage.setItem("favourites",JSON.stringify(data))

    window.location.reload()
}