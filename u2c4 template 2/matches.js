// write js code here corresponding to matches.html

var data = JSON.parse(localStorage.getItem("schedule"))

displaydata(data)

var newdata = JSON.parse(localStorage.getItem("favourites")) || []

function displaydata(data){
    document.querySelector("tbody").innerHTML = ""

    data.forEach(function(el){
        
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
        td6.innerText = "favourites"
        td6.style.color = "orange"
        td6.style.cursor = "pointer"
        td6.addEventListener("click",function(){
            favourites(el)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })

    function favourites(el){
        newdata.push(el)

        localStorage.setItem("favourites",JSON.stringify(newdata))
    }

}

function sortfun(){

var sortdata = document.querySelector("#filterVenue").value 

var data1 = []

if(data[0].venue == "Hyderabad" && sortdata == "Hyderabad"){
    data1.push(data[0])
}
if(data[0].venue == "Pune" && sortdata == "Pune"){
    data1.push(data[0])
}
if(data[0].venue == "Mumbai" && sortdata == "Mumbai"){
    data1.push(data[0])
}
if(data[0].venue == "Delhi" && sortdata == "Delhi"){
    data1.push(data[0])
}
if(data[0].venue == "Banglore" && sortdata == "Banglore"){
    data1.push(data[0])
}

   if(sortdata == "Pune"){
     data.sort(function(a){
         if(a.venue == "Pune"){
             data1.push(a)
             if(data[0].venue=="Pune"){
                 data1.push(data[0])
             }
         }
         
     })
     
    }
    if(sortdata == "Delhi"){
        data.sort(function(a){
            if(a.venue == "Delhi"){
                data1.push(a)
            }
            
        })
        
     }
     if(sortdata == "Banglore"){
        data.sort(function(a){
            if(a.venue == "Banglore"){
                data1.push(a)
            }
            
        })
       
    }
    if(sortdata == "Hyderabad"){
        data.sort(function(a){
            if(a.venue == "Hyderabad"){
                data1.push(a)
                
            }
            
        })
        
    }
    if(sortdata == "Mumbai"){
        data.sort(function(a){
            if(a.venue == "Mumbai"){
                data1.push(a)
            }
        })
    }
    
    console.log(data[0].venue)
     displaydata(data1)
}