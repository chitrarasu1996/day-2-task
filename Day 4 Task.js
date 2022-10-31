




var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all', true);

request.send();

request.onload = function(){

    var data = JSON.parse(request.response);
    console.log(data);

for(i=0;i<data.length;i++){
    console.log(`CountryName-${data[i].name} and Flag- ${data[i].flag}`)
}
}


