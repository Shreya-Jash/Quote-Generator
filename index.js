let p= fetch("https://favqs.com/api/qotd")
p.then((response) => {  //fetch api is a 2-stage process for which we use two .then
    console.log(response.status) //for status check between 200-299
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((response) => {   //for getting the value
    console.log(response)   
    for(var x in response)
    {
        let quoteFetch = document.getElementById("quote-fetch")
        quoteFetch.textContent = `${response[x].body} ` +  `    --${response[x].author}`
    }
}).catch((error)=>{
    console.log(error)
})


function fetchQuote()
{

}