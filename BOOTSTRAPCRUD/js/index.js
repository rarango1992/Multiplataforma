/*$(document).ready(function() {
    alert('test');
});

$(document).ready(() => {
    alert('test');
});

$(document).ready(function() {
    $('#btnBuscar').click(() => {
        alert("Buscar");
    });
});

get obtener obtener/id
post insertar body : {"id" : 0, "nombre" : "fulano", "apellidos" : "asdasd"}


*/

const URL_API = "http://programacion.xyz/mtw/204/crud/index.php/api/"

function editar(id) {
    window.location.href = 'edicion.html?id=' + id;
}

function tblUsuario(data) {
    console.log(data);
    if (data.status) {
        var tbl = "";

        $.each(data.result, function(i, usuario) {
            tbl += "<tr>";
            tbl += '<td class="d-none d-md-table-cell">' + (i + 1) + "</td>";
            tbl += '<td class="d-none d-md-table-cell">' + usuario.nombre + "</td>";
            tbl += '<td class="d-none d-md-table-cell">' + usuario.apellidos + "</td>";
            tbl += '<td class="d-table-cell d-md-none">' + usuario.nombre + " " + usuario.apellidos + "</td>";
            tbl += '<td>';
            tbl += '<div class="d-flex justify-content-center">';
            tbl += '<button class="btn btn-primary" onclick="editar(' + usuario.id + ')">Editar</button>';
            tbl += '<button class="btn btn-danger ml-1"onclick="eliminar(' + usuario.id + ')">Eliminar</button>';
            tbl += '</div>';
            tbl += '</td>';
            tbl += "</tr>";
        });
        $('#usuarios-table-body').html(tbl);
    } else {
        alert('Error en el servicio');
    }

}

$(document).ready(function() {
    $("#btnBuscar").click(function() {
        var url = URL_API + "usuarios/obtener";
        $.ajax({
            type: "get",
            url: url,
            data: "",
            contentType: "application/json;charset=UTF-8",
            traditional: true,
            success: tblUsuario,
            error: function(result) {
                alert("Error en el servicio");
            }
        });
    });
});