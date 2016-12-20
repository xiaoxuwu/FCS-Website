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
    '<a class="navbar-brand" href="#">Folsom Chinese School</a>' +
  '</div>' +

  '<!-- Collect the nav links, forms, and other content for toggling -->' +
  '<div class="collapse navbar-collapse" id="navbar-collapse-1">' +
    '<ul class="nav navbar-nav">' +
      '<li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>' +
      '<li><a href="#">Enroll</a></li>' +
    '</ul>' +

    '<ul class="nav navbar-nav navbar-right">' +
      '<li class="dropdown">' +
          '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Schedules and Classes <span class="caret"></span></a>' +
          '<ul class="dropdown-menu">' +
              '<li><a href="#">School Schedule</a></li>' +
              '<li><a href="#">Volunteer Schedule</a></li>' +
              '<li role="separator" class="divider"></li>' +
              '<li><a href="#">Classrooms and Teachers</a></li>' +
          '</ul>' +
        '</li>' +
      '<li><a href="#">About</a></li>' +
    '</ul>' +
  '</div><!-- /.navbar-collapse -->' +
'</div><!-- /.container-fluid -->';
