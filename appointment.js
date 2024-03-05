var myinput = document.getElementById('searchbox');
var insidedoctor = document.getElementsByClassName('insidedoctor');


searchbox.addEventListener('input', function () {
    filterTable(searchbox.value.toLowerCase());
});


function filterTable(searchTerm) {
    var rows = insidedoctor.getElementsByClassName('box2')[0].getElementsByClassName('boxcontent');

    for (var i = 0; i < rows.length; i++) {
        var name = rows[i].getElementsByTagName('h2')[0].textContent.toLowerCase();

        if (name.includes(searchTerm)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}
