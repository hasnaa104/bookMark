var webName = document.getElementById('name')
var webUrl = document.getElementById('url')

var arr = []

if(localStorage.getItem('webPages') != null){
arr = JSON.parse(localStorage.getItem('webPages'))
displayItems()
}

function submitItems(){
    var webObj = {
        name : webName.value,
        url : webUrl.value
    }
arr.push(webObj)
localStorage.setItem('webPages',JSON.stringify(arr))
displayItems()
clearItems()
}
function displayItems(){
    var items = ``
    for (var i=0 ; i<arr.length ; i++){
        items += `<tr >
        <td >${arr[i].name}</td>
        <td class="p-5"><button class="btn btn-danger" onclick="deleteItems(${i})">delete</button></td>
        <td class="p-5"><a class="btn btn-primary" href="${arr[i].url}" target="_blank" >visit</a></td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML = items
}
displayItems()

function clearItems(){
    webName.value = ''
    webUrl.value = ''
}

function deleteItems(i){
    arr.splice(i,1)
    localStorage.setItem('webPages',JSON.stringify(arr))
    displayItems()

}

