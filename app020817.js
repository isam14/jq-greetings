var prenom = " ";
var nom = " ";
var age = " ";

$('#btn_valid').click(function () {
    prenom = $("#prenom").val();
    nom = $("#nom").val();
    age = $("#age").val();
    
    $("#phrase").html("Vous vous appelez " + prenom + " " + nom + " et vous avez " + age + " ans.");
});

//----------------------------ma facon-----
$('#btn_table').click(function () {
console.log("hi");
    var prenom = $("#prenom").val();
    var nom = $("#nom").val();
    var age = $("#age").val();
$("#table").append("<tr><td>" + prenom + "</td><td>" + nom + "</td><td>" + age + "</td></tr>");

    
});

// //-----------------------------methode fdsoos

// var prenom = "",
//     nom = "",
//     age = 0;

// var tableRows = "<tr><th>Prenom</th><th>Nom</th><th>Age</th></tr>";

// $("button").click(function() {
//   prenom = $("#prenom").val();
//   nom = $("#nom").val();
//   age = $("#age").val();
  
//  tableRows += "<tr><td>" + prenom +
//                 "</td><td>" + nom +
//                 "</td><td>" + age +
//                 "</td></tr>";
  
 
//  $("#container").html("<table>" + tableRows + "</table>");
// });
