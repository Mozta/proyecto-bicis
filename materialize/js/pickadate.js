$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 10 // Creates a dropdown of 15 years to control year
});

$(document).ready(function() {
    $('select').material_select();
});


$(document).ready(function() {
    var i = 0;

    $('#btAdd').click(function() {
        if (i <= 10) {
            i = i + 1;
            // Añadir caja de texto.
            $('.camposdinamicos').append('<div id=mydiv' + i + '>' +
                '<div class="input-field col s8">' +
                '<i class="material-icons prefix">assignment</i>' +
                '<input id=servicio' + i + ' type="text" class="validate">' +
                '<label for=servicio' + i + '>Servicio</label> </div>' +

                '<div class="input-field col s0.5">' +
                '<i class="fa fa-usd fa-lg" aria-hidden="true"></i></div>' +

                '<div class="input-field col s2">' +
                '<input id=precio' + i + ' type="text" class="validate">' +
                '<label for=precio' + i + '>Precio</label>');

            $('#main').after('.camposdinamicos');
        } else { //se establece un limite para añadir elementos, 20 es el limite
            $('.camposdinamicos').append('<label>Limite Alcanzado</label>');
            $('#btAdd').attr('class', 'bt-disable');
            $('#btAdd').attr('disabled', 'disabled');
        }
    });

    $('#btRemove').click(function() { // Elimina un elemento por click
        if (i != 0) {
            $('#mydiv' + i).remove();
            i = i - 1;
        }

        if (i == 0) {
            $('.camposdinamicos').empty();
            $('#btSubmit').remove();
            $('#btAdd').removeAttr('disabled');
        }
    });

    $('#btRemoveAll').click(function() { // Elimina todos los elementos del contenedor
        $('.camposdinamicos').empty();
        $('#btSubmit').remove();
        i = 0;
        $('#btAdd').removeAttr('disabled');
    });
});
