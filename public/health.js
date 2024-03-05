var myinput = document.getElementById('myinput');
var tabledata = document.getElementById('tabledata');


myinput.addEventListener('input', function () {
    filterTable(myinput.value.toLowerCase());
});


function filterTable(searchTerm) {
    var rows = tabledata.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var name = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();

        if (name.includes(searchTerm)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}