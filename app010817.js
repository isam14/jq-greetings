// console.log('have fun !');

var info = {
    first_name: $("#first_name").val(),
    last_name: $("#last_name").val(),
    city: $("#city").val(),
};

$('button').click(function () {
    $("#username").html(info.first_name + " " + info.last_name + " " + info.city);

});


var info = {
    first_name: $("#first_name").val(),
    last_name: $("#last_name").val(),
    city: $("#city").val(),
};


$("input").change(function () {
    
    $("#username").html(info.first_name + " " + info.last_name + " " + info.city);
});





// console.log(info);
// ($("#first_name") + $("#last_name") + $("#city")).makeArray();

// alert( $("input[name=first_name]").val() );

// $('#first-name').change(function () {
//     $(input).push[]
//    console.log(array[]);
// })
