$(document).ready(function() {

    /*mobile search div toggle for mobile and tablets*/
    $('.search-mobile').on("click", function() {
        $('header').toggleClass('blue-border-bottom');
        $('.search-field').slideToggle(100);

        /*remove border on header as the search div has its own border */
    });




    function sendQuery() {

        var search_query = $('#search-input').val();
        var string_arr = search_query.split(' ');
        var query = "";

        $.each(string_arr, function(key, value) {
          query = query + (value + "+");
        });

        var complete_query = query.slice(0,-1);

        var link_to_form = "https://support.classflow.com/classflow/topics/search?utf8=✓&search%5Bkeywords%5D=" + complete_query;

        window.location.href = link_to_form;
    }

    //So we have 2 different search inputs - one for mobile (dropdown via handburger menu) and the desktop one
  //TODO: refactor into one function
  function sendQuery_med() {

    var search_query = $('#search-desktop-input').val();
    var string_arr = search_query.split(' ');
    var query = "";

    $.each(string_arr, function(key, value) {
      query = query + (value + "+");
    });

    var complete_query = query.slice(0,-1);

    var link_to_form = "https://support.classflow.com/classflow/topics/search?utf8=✓&search%5Bkeywords%5D=" + complete_query;

    window.location.href = link_to_form;
  }

  //same as above
  //TODO: refacfor when have time
  var form = document.getElementById("search-form");
  form.onsubmit = function() {
    sendQuery();
    return false;
  };

  var form2 = document.getElementById("desktop-search");
  form2.onsubmit = function() {
    sendQuery_med();
    return false;
  };

});