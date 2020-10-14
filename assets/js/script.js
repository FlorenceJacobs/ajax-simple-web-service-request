    let xhr = new XMLHttpRequest;
    
    xhr.open('GET', 'https://thatsthespir.it/api', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            switch (this.status){
                case 200 :
                    document.getElementById("quote").innerHTML = JSON.parse(this.responseText);
                    break;
                case 404 :
                    console.log(JSON.parse("ERROR 404"));
                    break;
                case 403 :
                    console.log(JSON.parse("FORBIDDEN"));
                    break;
                default:
                    console.log(JSON.parse("Unknow error"));
            }
                }
    //call send
    xhr.send();

    async function getData() 
        {
            //await the response of the fetch call
           let response = await fetch('https://thatsthespir.it/api');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }
//call getData function
getData()
.then(data => getElementQuote(data));

function getElementQuote (data) {
    document.getElementById("quote").textContent= data.quote;
    document.getElementById("author").textContent= data.author;
    document.getElementById("imageQuote").src= data.photo;
    // let imageQuote = document.getElementById("imageQuote");
    // imageQuote.setAttribute ("src","data.photo") 
};

