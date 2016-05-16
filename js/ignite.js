$(function () {
  $('.progress').hide();
});

function setBackground(slideNumber, of="#content") {
  $(of).css("backgroundImage", "url(img/"+slideNumber+".jpg)")
}

function startIgnite() {
  $('.progress').show();
  $('.actual-slide').html("" + 1 );
  setBackground(1);
  setBackground(2, "#preload");
  content = $("#"+1).html();
  $("#content").html(content);
  progressBar(15000, 200)
}

function endIgnite() {
  $('.progress').hide();
  $('.actual-slide').html("");
  setBackground(21);
  content = $("#tnx").html();
  $("#content").html(content);
}

function progressBar(T, t) {
  var actualSlide = 1;
  var percentage = 0;
  var color = 0;
  var delta_percentage = t/T;
  function advanceProgressBar(dp){
    setTimeout(function(){
      percentage += dp;
      var newVal = 3.15 * percentage * $(window).width() / 10;
      $('.progress-bar').css("width", newVal);
      $('.progress-bar').html("" + Math.round(percentage*T/1000) );
      if (percentage>=0.98){
        actualSlide += 1;
        $('.actual-slide').html("" + actualSlide );
        setBackground(actualSlide);
        setBackground(actualSlide+1, "#preload");
        content = $("#"+actualSlide).html();
        $("#content").html(content);
        percentage = 0;
        color += 50505;
        console.log(color)
        $('.progress-bar').css("background-color", "#" + color);
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