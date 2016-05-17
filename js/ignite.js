$(function () {
  $('.progress').hide();
  setBackground(1, "#preload");
});

function setBackground(slideNumber, of) {
  if (of == null) {of = "#content";}
  $(of).css("backgroundImage", "url(img/"+slideNumber+".jpg)")
}

function startIgnite() {
  $('.progress').show();
  $('#actual-slide').html("" + 1 );
  setBackground(1);
  setBackground(2, "#preload");
  content = $("#"+1).html();
  $("#content").html(content);
  progressBar(15000, 200);
  $('#content').css("cursor", "none");
}

function endIgnite() {
  $('.progress').hide();
  $('#actual-slide').html(' <span style="color: white">Carlo Martinucci</span> <i class="fa fa-fire" style="color: rgba(255,83,13,0.8)"></i> ');
  setBackground(21);
  content = $("#tnx").html();
  $('#content').css("background-color", setColor('asd'));
  $("#content").html(content);
  setTimeout(function(){
    $('#content').animate({
        opacity: 0,
      }, 5000, function() {
        $('#content').css("cursor", "auto");
         // Animation complete.
      });
  }, 2000)
}

// function progressBar(T) {
//   console.log("progressBar("+T+")");
//   var actualSlide = 1;
//   advanceProgressBar(T);
//   function advanceProgressBar(T) {
//     console.log("advanceProgressBar("+T+")");
//     $('.progress-bar').animate({width: "250px"}, T, function () {
//       actualSlide += 1;
//       $('.actual-slide').html("" + actualSlide );
//       setBackground(actualSlide);
//       setBackground(actualSlide+1, "#preload");
//       content = $("#"+actualSlide).html();
//       $("#content").html(content);
//       // $('.progress-bar').css("background-color", "#" + color);
//       if (actualSlide <= 20 ) {
//         $('.progress-bar').animate({width: "0px"}, 1);
//         advanceProgressBar(T);
//       }
//       else {
//         endIgnite();
//       }
//     });
//   }
// }

function progressBar(T, t) {
  var actualSlide = 1;
  var percentage = 0;
  var color = 0;
  var delta_percentage = t/T;
  function advanceProgressBar(dp){
    setTimeout(function(){
      percentage += dp;
      var newVal = 3.10 * percentage * $(window).width() / 10;
      $('.progress-bar').css("width", newVal);
      //$('.progress-bar').html("" + Math.round(percentage*T/1000) );
      if (percentage>=0.98){
        actualSlide += 1;
        $('#actual-slide').html("" + actualSlide );
        setBackground(actualSlide);
        setBackground(actualSlide+1, "#preload");
        content = $("#"+actualSlide).html();
        $("#content").html(content);
        animateSlide(actualSlide);
        percentage = 0;
        color += 50505;
        console.log(color)
        $('.progress-bar').css("background-color", setColor(actualSlide));
      }
      if (actualSlide <= 20 ) {
        advanceProgressBar(dp);
      }
      else {
        endIgnite();
      }
    }, t)
  }
  advanceProgressBar(delta_percentage);
}

function setColor(slideNumber) {
  var color = ""
  switch(slideNumber) {
    case 2:
      color = "rgba(255,0,0,0.7)"
      break;
    case 3:
      color = "rgba(255, 115, 132,0.7)"
      break;
    case 5:
      color = "rgba(255,0,0,0.7)"
      break;
    case 7:
      color = "rgba(10,123,10,0.7)"
      break;
    case 14:
      color = "rgba(255,255,10,0.7)"
      break;
    default:
      color = "#333"
  }
  return color
}

function animateSlide(slideNumber) {
  switch(slideNumber) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      setTimeout(function(){
        $('.slide4volume').removeClass("fa-volume-up").addClass("fa-volume-down");
        setTimeout(function(){
          $('.slide4volume').removeClass("fa-volume-down").addClass("fa-volume-off");
        }, 1000);
      }, 8000);
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10:
      setTimeout(function(){
        $('.sitetree').append("<br><i class='fa fa-sitemap'></i><i class='fa fa-sitemap'></i>")
        setTimeout(function(){
          $('.sitetree').append("<br><i class='fa fa-sitemap'></i><i class='fa fa-sitemap'></i><i class='fa fa-sitemap'></i><i class='fa fa-sitemap'></i>")
        }, 1000);
      }, 8000);
      break;
    case 11:
      setTimeout(function(){
        $('.duplicate').append('<br><i class="fa fa-square"></i><i class="fa fa-square"></i><i class="fa fa-arrow-right"></i><i class="fa fa-square-o"></i>')
      }, 6000);
      break;
    case 12:
      break;
    case 13:
      break;
    case 14:
      break;
    case 15:
      break;
    case 16:
      break;
    case 17:
      break;
    case 18:
      break;
    case 19:
      setTimeout(function(){
        $('.battery').removeClass("fa-battery-0").addClass("fa-battery-1");
        setTimeout(function(){
          $('.battery').removeClass("fa-battery-1").addClass("fa-battery-2");
          setTimeout(function(){
            $('.battery').removeClass("fa-battery-2").addClass("fa-battery-3");
            setTimeout(function(){
              $('.battery').removeClass("fa-battery-3").addClass("fa-battery-4");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 8000);
      break;
    case 20:
      break;
    case 21:
      break;
  }
}