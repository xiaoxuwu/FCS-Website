// MANIFEST CONSTANTS (active class changes based on current URL)
var enroll = document.URL.search("enroll") != -1 ? '<li class="active">' : '<li>';
var s_sched = document.URL.search("school_schedule") != -1 ? '<li class="active">' : '<li>';
var v_sched = document.URL.search("volunteer_schedule") != -1 ? '<li class="active">' : '<li>';
var classes = document.URL.search("classes") != -1 ? '<li class="active">' : '<li>';
var about = document.URL.search("about") != -1 ? '<li class="active">' : '<li>';
var dropdown = document.URL.search("school_schedule") != -1 ||
               document.URL.search("volunteer_schedule") != -1 ||
               document.URL.search("classes") != -1
               ? '<li class="dropdown active">' : '<li class="dropdown">';
var index = (enroll + s_sched + v_sched + classes + about + dropdown).search("active") == -1 ? '<li class="active">': '<li>';

// MENU
document.getElementById("NavMenu").innerHTML =
'<!-- begin nav -->' +
'<div class="container-fluid">' +
  '<div class="navbar-header">' +
    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">' +
      '<span class="sr-only">Toggle navigation</span>'+
      '<span class="icon-bar"></span>'+
      '<span class="icon-bar"></span>' +
      '<span class="icon-bar"></span>' +
    '</button>' +
    '<a class="navbar-brand" href="/">Folsom Chinese School</a>' +
  '</div>' +

  '<!-- Collect the nav links, forms, and other content for toggling -->' +
  '<div class="collapse navbar-collapse" id="navbar-collapse-1">' +
    '<ul class="nav navbar-nav">' +
      index + '<a href="/">Home <span class="sr-only">(current)</span></a></li>' +
      enroll + '<a href="/enroll">Enroll</a></li>' +
      dropdown +
          '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Schedules and Classes <span class="caret"></span></a>' +
          '<ul class="dropdown-menu">' +
              s_sched + '<a href="/school_schedule">School Schedule</a></li>' +
              v_sched + '<a href="/volunteer_schedule">Volunteer Schedule</a></li>' +
              '<li role="separator" class="divider"></li>' +
              classes + '<a href="/classes">Classrooms and Teachers</a></li>' +
          '</ul>' +
        '</li>' +
      about + '<a href="/about">About</a></li>' +
    '</ul>' +

  '</div><!-- /.navbar-collapse -->' +
'</div><!-- /.container-fluid -->';
