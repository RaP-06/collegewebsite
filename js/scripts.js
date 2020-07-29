function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " email is valid :)");
    $result.css("color", "green");
  } else {
    $result.text(email + " email is not valid :(");
    $result.css("color", "red");
  }
  return false;
}
$("#validate").on("click", validate);

select:required:invalid {
       color: #666;
     }
     option[value=""][disabled] {
       display: none;
     }
     option {
       color: #000;
     }
     $(function() {

       $('#sfname').keydown(function (e) {

         if (e.shiftKey || e.ctrlKey || e.altKey) {

           e.preventDefault();

         } else {

           var key = e.keyCode;

           if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

             e.preventDefault();

           }

         }

       });

     });

     $(function() {

  $('#smname').keydown(function (e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {

      e.preventDefault();

    } else {

      var key = e.keyCode;

      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

        e.preventDefault();

      }

    }

  });

});

$(function() {

  $('#slname').keydown(function (e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {

      e.preventDefault();

    } else {

      var key = e.keyCode;

      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

        e.preventDefault();

      }

    }

  });

});

$(function() {

  $('#ffname').keydown(function (e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {

      e.preventDefault();

    } else {

      var key = e.keyCode;

      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

        e.preventDefault();

      }

    }

  });

});

$(function() {

  $('#fmname').keydown(function (e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {

      e.preventDefault();

    } else {

      var key = e.keyCode;

      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

        e.preventDefault();

      }

    }

  });

});

$(function() {

  $('#flname').keydown(function (e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {

      e.preventDefault();

    } else {

      var key = e.keyCode;

      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

        e.preventDefault();

      }

    }

  });

});

$(function() {

  $('#mfname').keydown(function (e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {

      e.preventDefault();

    } else {

      var key = e.keyCode;

      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

        e.preventDefault();

      }

    }

  });

});

$(function() {

  $('#mmname').keydown(function (e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {

      e.preventDefault();

    } else {

      var key = e.keyCode;

      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

        e.preventDefault();

      }

    }

  });

});

$(function() {

  $('#mlname').keydown(function (e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {

      e.preventDefault();

    } else {

      var key = e.keyCode;

      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

        e.preventDefault();

      }

    }

  });

});
