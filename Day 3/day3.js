var requests = new XMLHttpRequest

url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

requests.open("GET",url)
requests.send()
console.log(requests);
requests.onload= function() {
var data = JSON.parse(requests.response);
console.log('1. For')
for (var i=0;i<data.length;i++)
{
    console.log(data[i].flag); 
}
console.log('2. For in')
for (let i in data)
{
    console.log(data[i].flag); 
}
console.log('3. For of')
for (let i of data)
{
    console.log(data[i].flag); 
}

console.log('4. forEach')
data.forEach(myFunction)
function myfunction (data,flag)
{
    console.log(data[i].flag); 
    i++
}
}