
var actt=document.getElementById('act');
actt.addEventListener('click',() => {
    var name = 'Varanasi';        
    if(document.getElementById('firstname').value.length==0)
    name = 'Varanasi';
    else
    name=document.getElementById('firstname').value;
    var c=document.getElementById('cty');
    c.value=name;
    $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/city?name=' + name,
    headers: { 'X-Api-Key': 'VUz/PhiUoSiFu+bTCDQwWw==CrdmVopAUwelWYmf'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        document.getElementById('cty').style.marginLeft = "100px";
        document.getElementById('cty').innerHTML=name;
        document.getElementById('names').innerText="Name  =  "+result[0].name;
        document.getElementById('latitude').innerText="Latitude  =  "+result[0].latitude;
        document.getElementById('longitude').innerText="Longitude  =  "+result[0].longitude;
        document.getElementById('country').innerText="Country  =  "+result[0].country;
        document.getElementById('population').innerText="Population  =  "+result[0].population;
        document.getElementById('is_capital').innerText="Is_capital?  =  "+result[0].is_capital;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
})