// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // if ($("[name=devoured]:checked").val().trim()==="Devoured!"){}
    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
      
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  // $(".delete-burger").on("click", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var id = $(this).attr("data-id");

  //   // Send the POST request.
  //   $.ajax("/api/burger", {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("burger deleted");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

});
