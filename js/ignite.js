$(function () {
  $('.progress').hide();
});

function setBackground(slideNumber, of) {
  if (of == null) {of = "#content";}
  $(of).css("backgroundImage", "url(img/"+slideNumber+".jpg)")
}

function startIgnite() {
  $('.progress').show();
  $('.progress-bar').css("background-color", setColor(1));
  $('.actual-slide').html("" + 1 );
  setBackground(1);
  setBackground(2, "#preload");
  content = $("#"+1).html();
  $("#content").html(content);
  progressBar(15000, 200);
}

function endIgnite() {
  $('.progress').hide();
  $('.actual-slide').html("");
  setBackground(21);
  content = $("#tnx").html();
  $("#content").html(content);
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
      $('.progress-bar').html("" + Math.round(percentage*T/1000) );
      if (percentage>=0.98){
        actualSlide += 1;
        $('.actual-slide').html("" + actualSlide );
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
    case 1:
      color = "#390"
      break;
    case 2:
      color = "#910"
      break;
    case 3:
      color = "#099"
      break;
    case 4:
      color = ""
      break;
    case 5:
      color = ""
      break;
    case 6:
      color = ""
      break;
    case 7:
      color = ""
      break;
    case 8:
      color = ""
      break;
    case 9:
      color = ""
      break;
    case 10:
      color = ""
      break;
    case 11:
      color = ""
      break;
    case 12:
      color = ""
      break;
    case 13:
      color = ""
      break;
    case 14:
      color = ""
      break;
    case 15:
      color = ""
      break;
    case 16:
      color = ""
      break;
    case 17:
      color = ""
      break;
    case 18:
      color = ""
      break;
    case 19:
      color = ""
      break;
    case 20:
      color = ""
      break;
    case 21:
      color = ""
      break;
    default:
      color = "#000"
  }
  return color
}

function animateSlide(slideNumber) {
  switch(slideNumber) {
    case 1:
      console.log(1)
      break;
    case 2:
      console.log(2)
      break;
    case 3:
      console.log(3)
      break;
    case 4:
      console.log(4)
      setTimeout(function(){
        $('.slide4volume').removeClass("fa-volume-up").addClass("fa-volume-down");
        setTimeout(function(){
          $('.slide4volume').removeClass("fa-volume-down").addClass("fa-volume-off");
        }, 3000);
      }, 5000);
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
      break;
    case 11:
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
      break;
    case 20:
      break;
    case 21:
      break;
  }
}