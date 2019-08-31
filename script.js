/**
 * Clear current result, reset data
 */
function resetData() {

    // Get the parameter id 'data' and empty it out
    $('#data').empty();
}

/**
 * Show some dummy data without server
 */
function getFromDummy() {
    resetData();
    $('#data').html("This data is just plain text, without any server involved.");
    $('#data').text("shir");
}

/**
 * Show some data from other external server
 */
function getFromExternal() {
    resetData();

    // Connect to external server and get data from it
    $.ajax({
        url: "https://reststop.randomhouse.com/resources/authors/3446/",
        type: "GET",

        // If the call to the function "get" from the URl is succeful, put the data from the server
        success: function(server_response) {

            // If there is response from the server, put the server response into the parameter id 'data'
            if (server_response != "") {
                $("#data").append($(server_response.children[0].innerHTML).text());
            }

            // If there is not response from the server, put "not OK" into the parameter id 'data'
            else {
                alert('Not OK');
            }
        }
    });
}

/**
 * Show some data from local server
 */
function getFromLocal() {
    resetData();

    // Connect to internal server and get data from it
    $.ajax({

        // Get from the server the function 'listUsers' result.
        url: "http://localhost:8080/",
        type: "GET",

        // If the call to the function "get" from the URl is succeful, put the data from the local server
        success: function(server_response) {

            // If there is response from the server, put the server response into the parameter id 'data'
            if (server_response != "") {
                $("#data").append(server_response);
            }

            // If there is not response from the server, put "not OK" into the parameter id 'data'
            else {
                alert('Not OK');
            }
        }
    });
}


/**
 * Show some data from local server
 */
function getFromLocalFile() {
    resetData();

    // Connect to internal server and get data from it
    $.ajax({

        // Get from the server the function 'listUsers' result.
        url: "http://localhost:8080/listUsers",
        type: "GET",

        // If the call to the function "get" from the URl is succeful, put the data from the local server
        success: function(server_response) {

            // If there is response from the server, put the server response into the parameter id 'data'
            if (server_response != "") {
                $("#data").append(server_response);
            }

            // If there is not response from the server, put "not OK" into the parameter id 'data'
            else {
                alert('Not OK');
            }
        }
    });
}

/**
 * Transimt data to the server, calculate the result in the server, show the result in the client
 */
function calculateOnServer() {
    resetData();

    // Get the input-data from the client
    var x = $("#num1").val();
    var y = $("#num2").val();

    // Connect to internal server and get data from it
    $.ajax({

        // Get from the server the function 'sum' result. Function 'sum' recieves param a & param b.
        url: "http://localhost:8080/sum?a=" + x + "&b=" + y,
        type: "GET",
        success: function(server_response) {

            // If the call to the function "get" from the URl is succeful, put the data from the local server
            if (server_response != "") {
                $("#data").append(server_response);
            }

            // If there is not response from the server, put "not OK" into the parameter id 'data'
            else {
                alert('Not OKay');
            }
        }
    });
}


function calculateMultipOnServer() {
    resetData();

    var a = $("#numA").val();
    var b = $("#numB").val();
    var c = $("#numC").val();

    $.ajax({

        url: "http://localhost:8080/multiply?numA=" + a + "&numB=" + b + "&numC=" + c,
        type: "GET",

        success: function(server_response) {

            // If the call to the function "get" from the URl is succeful, put the data from the local server
            if (server_response != "") {
                $("#data").append(server_response);
            }

            // If there is not response from the server, put "not OK" into the parameter id 'data'
            else {
                alert('Not OK');
            }
        }

    })

}

function readMsgOnServer() {
    resetData();

    var msg1 = $("#msg1").val();

    $.ajax({

        url: "http://localhost:8080/readMsg?msg1=" + msg1,
        type: "POST",

        success: function(server_response) {

            // If the call to the function "post" from the URl is succeful, put the data from the local server
            if (server_response != "") {
                $("#data").append(server_response);
            }

            // If there is not response from the server, put "not OK" into the parameter id 'data'
            else {
                alert('Not OK');
            }
        }

    })
}