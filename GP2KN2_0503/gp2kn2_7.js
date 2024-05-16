$(document).ready(function() {
    $('#szoveg').click(function() {
        $('#box').append('<p>Programtervező informatikus</p>');
    });

    $('#html_kod').click(function() {
        $('#box').text('ME GEIK - PTI');
    });

    $('#ertek').click(function() {
        var name = $('#name').val();
        if (name) {
            alert('Név: ' + name);
        } else {
            alert('Nincs megadva név.');
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();
        alert('Jelentkezés');
    });

    $('#parameter').click(function() {
        var link = $('#link').attr('href');
        var url = new URL(link);
        var area = url.pathname;
        var id = $('#box').attr('id');
        
        alert('Paraméter értéke:\nLink: ' + link + '\nTerület: ' + area + '\nID: ' + id);
    });

    

    $('#uj_gomb').click(function() {
        $('#box').after('<button>ME GEIK-MI</button>');
    });

    $('#alcim').click(function() {
        $('#form_fejlec').text('HTML metódusok');
    });

    $('#fejlec').click(function() {
        $('body').prepend('<h1>jQuery feladat</h1>');
    });

    $('#urlap_fejlec').click(function() {
        $('body').prepend('<h2>ŰRLAP - GP2KN2</h2>');
    });

    $('#gomb').click(function() {
        $('#gombbeilleszt').append('<button>MI Gomb</button>');
    });

});
