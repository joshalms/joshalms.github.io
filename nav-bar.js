$(function () {
  var bar = '';
  bar += '<nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: #0b0731;">';
  bar += '<a class="navbar-brand" href="./index.html"><img src="./images/FullColor_IconOnly_1280x1024_72dpi.jpg" width="35" height="35" class="d-inline-block align-top" alt="" loading="lazy"><img src="./images/FullColor_DuQIS_Only_1280x1024_72dpi.jpg" width="85" height="32" class="d-inline-block align-top" alt="" loading="lazy"></a>';
  bar += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>';
  bar += '<div class="collapse navbar-collapse flex-row-reverse" id="navbarCollapse">';
  bar += '<ul class="navbar-nav text-right">';
  bar += '<li id="index" class="nav-item"><a class="nav-link" href="./index.html">Home<span class="sr-only">(current)</span></a></li>';
  bar += '<li id="calendar" class="nav-item"><a class="nav-link" href="./calendar.html">Calendar</a></li>';
  bar += '<li id="event" class="nav-item"><a class="nav-link" href="./event.html">Events</a></li>';
  bar += '<li id="study" class="nav-item"><a class="nav-link" href="./study_guide.html">Study Guide</a></li>';
  bar += '<li id="archive" class="nav-item"><a class="nav-link" href="./archive/index.html">Archive</a></li>';
  bar += '<li id="contact" class="nav-item"><a class="nav-link" href="./contact.html">Contact</a></li>';
  bar += '</ul>';
  bar += '</div>';
  bar += '</nav>';

  $("#main-bar").html(bar);

  var id = getValueByName("id");
  $("#" + id).addClass("active");
});

function getValueByName(name) {
  var url = document.getElementById('nav-bar').getAttribute('src');
  var param = new Array();
  if (url.indexOf("?") != -1) {
      var source = url.split("?")[1];
      items = source.split("&");
      for (var i = 0; i < items.length; i++) {
          var item = items[i];
          var parameters = item.split("=");
          if (parameters[0] == "id") {
              return parameters[1];
          }
      }
  }
}
