/* BEN */
$("#menu-toggle").click(function(e) {
  e.preventDefault();
    $("#sidebar-wrapper").toggleClass("toggled col-5 col-sm-4 col-md-3 col-xl-2 d-none");
  $("#page-content-wrapper").toggleClass("toggled col-7 col-sm-8 col-md-9 col-xl-10 col-12");
});
