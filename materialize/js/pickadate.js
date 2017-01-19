$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 10 // Creates a dropdown of 15 years to control year
});

$(document).ready(function() {
    $('select').material_select();
});

$('input.autocomplete').autocomplete({
    data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'http://placehold.it/250x250'
    }
});
