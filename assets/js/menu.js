// MANIFEST CONSTANTS
var index = document.URL.search("index") != -1 ? '<li class="active">' : '<li>';
var enroll = document.URL.search("enroll") != -1 ? '<li class="active">' : '<li>';
var s_sched = document.URL.search("school_schedule") != -1 ? '<li class="active">' : '<li>';
var v_sched = document.URL.search("volunteer_schedule") != -1 ? '<li class="active">' : '<li>';
var classes = document.URL.search("classes") != -1 ? '<li class="active">' : '<li>';
var about = document.URL.search("about") != -1 ? '<li class="active">' : '<li>';
var dropdown = document.URL.search("school_schedule") != -1 ||
               document.URL.search("volunteer_schedule") != -1 ||
               document.URL.search("classes") != -1
               ? '<li class="dropdown active">' : '<li class="dropdown">';
if ((index + enroll + s_sched + v_sched + classes + about + dropdown).search("active") == -1)
    index = '<li class="active">';

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
    '<a class="navbar-brand" href="/index.html">Folsom Chinese School</a>' +
  '</div>' +

  '<!-- Collect the nav links, forms, and other content for toggling -->' +
  '<div class="collapse navbar-collapse" id="navbar-collapse-1">' +
    '<ul class="nav navbar-nav">' +
      index + '<a href="/index.html">Home <span class="sr-only">(current)</span></a></li>' +
      enroll + '<a href="/assets/static/enroll.html">Enroll</a></li>' +
    '</ul>' +

    '<ul class="nav navbar-nav navbar-right">' +
      dropdown +
          '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Schedules and Classes <span class="caret"></span></a>' +
          '<ul class="dropdown-menu">' +
              s_sched + '<a href="/assets/static/school_schedule.html">School Schedule</a></li>' +
              v_sched + '<a href="/assets/static/volunteer_schedule.html">Volunteer Schedule</a></li>' +
              '<li role="separator" class="divider"></li>' +
              classes + '<a href="/assets/static/classes.html">Classrooms and Teachers</a></li>' +
          '</ul>' +
        '</li>' +
      about + '<a href="/assets/static/about.html">About</a></li>' +
    '</ul>' +
  '</div><!-- /.navbar-collapse -->' +
'</div><!-- /.container-fluid -->';
