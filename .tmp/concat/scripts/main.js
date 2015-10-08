$(document).ready(function() {
  var totalQuestions = 13;
  var answeredQuestions = 0;
  var mode = "question";

  $('#hint').text("( 尚未完成：Q1 Q2 Q3 Q4 Q5 Q6 Q7 Q8 Q9 Q10 Q11 Q12 Q13 )");
  $('#ok').hide();

  $(window).scroll( function(){

    if(mode == "question"){
      $('.questions').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
          var bottom_of_window = $(window).scrollTop() + $(window).height()/2;

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              $('.questions').each(function(){
                $(this).removeClass('active');
              });
              $(this).addClass('active');
          }
      });
    }

    /* Scrolling Title */
    if($(window).scrollTop() + 30 > $('#section3').offset().top){
      $('#changeTitle').text('金錢');
    }
    else if($(window).scrollTop() + 30 > $('#section2').offset().top){
      $('#changeTitle').text('時間');
    }
    else if($(window).scrollTop() + 30 > $('#section1').offset().top){
      $('#changeTitle').text('個人狀況');
    }
    else {
      $('#changeTitle').text('周遭環境');
    }
  });

  var start = $('#start');
  //$('html').css('overflow-y', 'hidden');

  start.on('click', function(){
    $('.questions').each(function(){
      $(this).removeClass('active');
    });
    $('.sectionIntro').fadeOut(500, function(){
      $('.sectionQuestions').fadeIn(500);
      $('html').css('overflow-y', 'scroll');
      $('#margin').css('display', 'block');
    });
    $('.header').animate({top: 0}, 500);
    $('.footer').animate({bottom: 0}, 500);
    $('#question1').addClass('active');

  });

  var results = $('#results');
  results.on('click', function(){
    console.log("??");
    $('.questions').each(function(){
      $(this).removeClass('active');
    });
    $('.sectionQuestions').fadeOut(500, function(){
      $('#results').remove();
      mode = "results";
      $('.questions').css({'opacity': 1, 'margin-bottom': '40px' });
      $('.sectionQuestions').show();
      $('#margin').css('display','none');
      $('.sectionResults').append($('.sectionQuestions'));
      $('.sectionResults').fadeIn(500);
      $('html, body').stop().animate({
          scrollTop: 0
      }, 1, 'easeInOutCubic');

      $('#section1, #section2, #section3, h3').hide();

      /* --- Questions 1 ---*/
      if(document.getElementById("radio102").checked){
        $('#question1').hide();
      }
      if(document.getElementById("radio111").checked || document.getElementById("radio112").checked){
        $('#sub1-1').append("<div class=\"sugguestion\">" +
        "<p>1-1風運證空今有，單言任，，小期產車為思才政在立散統活許，達裡苦候之點保，當見情，走把自型，麗入賽腦當道在研交院交：作成密：不其特情風奇一士一的的直治大地指接軍多文進從用電他有展！了停畫能花什的不立爸所再傳己。</p>"
        + "</div>");
        $('#sub1-3').hide();
      } else {
        $('#sub1-1').hide();
      }
      if(document.getElementById("radio122").checked || document.getElementById("radio123").checked){
        $('#sub1-2').append("<div class=\"sugguestion\">" +
        "<p>1-2風運證空今有，單言任，，小期產車為思才政在立散統活許，達裡苦候之點保，當見情，走把自型，麗入賽腦當道在研交院交：作成密：不其特情風奇一士一的的直治大地指接軍多文進從用電他有展！了停畫能花什的不立爸所再傳己。</p>"
        + "</div>");
        $('#sub1-3').hide();
      } else {
        $('#sub1-2').hide();
        $('#sub1-3').hide();
      }

      /* --- Questions 2 ---*/
      $('#question2').hide();

      /* --- Questions 3 ---*/
      $('#question3').append("<div class=\"sugguestion\">" +
      "<p>3風運證空今有，單言任，，小期產車為思才政在立散統活許，達裡苦候之點保，當見情，走把自型，麗入賽腦當道在研交院交：作成密：不其特情風奇一士一的的直治大地指接軍多文進從用電他有展！了停畫能花什的不立爸所再傳己。</p>"
      + "</div>");

      /* --- Questions 4 ---*/
      if(document.getElementById("radio401").checked){
        $('#sub4-1').append("<div class=\"sugguestion\">" +
        "<p>4-1風運證空今有，單言任，，小期產車為思才政在立散統活許，達裡苦候之點保，當見情，走把自型，麗入賽腦當道在研交院交：作成密：不其特情風奇一士一的的直治大地指接軍多文進從用電他有展！了停畫能花什的不立爸所再傳己。</p>"
        + "</div>");
      } else {
        $('#question4').hide();
      }

      /* --- Questions 5 ---*/
      $('#question5').hide();

      /* --- Questions 6 ---*/
      $('#question6').hide();

      /* --- Questions 7 ---*/
      $('#question7').hide();

      /* --- Questions 8 ---*/
      $('#question8').hide();

      /* --- Questions 9 ---*/
      $('#question9').hide();

      /* --- Questions 10 ---*/
      $('#question10').hide();

      /* --- Questions 11 ---*/
      $('#question11').hide();

      /* --- Questions 12 ---*/
      $('#question12').hide();

      /* --- Questions 13 ---*/
      $('#question13').hide();


    });
    $('.header').animate({top: "-100px"}, 500);
    $('.footer').animate({bottom: "-88px"}, 500);
  });

  var answered = [];

  for(var i = 0; i < 13; i++){
    answered[i] = false;
  }

  $('input').on('click', function(){
    if((document.getElementById("radio101").checked
      && (document.getElementById("radio131").checked || document.getElementById("radio132").checked || document.getElementById("radio133").checked)
      && (document.getElementById("radio121").checked || document.getElementById("radio122").checked || document.getElementById("radio123").checked)
      && (document.getElementById("radio111").checked || document.getElementById("radio112").checked || document.getElementById("radio113").checked))
      || document.getElementById("radio102").checked) {
      if(!answered[0]) {
        answeredQuestions++;
        answered[0] = true;
      }
    } else {
      if(answered[0]){
        answered[0] = false;
        answeredQuestions--;
      }
    }
    if((document.getElementById("radio201").checked && (document.getElementById("radio211").checked || document.getElementById("radio212").checked || document.getElementById("radio213").checked || document.getElementById("radio214").checked))
     || document.getElementById("radio202").checked) {
      if(!answered[1]) {
        answeredQuestions++;
        answered[1] = true;
      }
    } else {
      if(answered[1]){
        answered[1] = false;
        answeredQuestions--;
      }
    }
    if(document.getElementById("radio301").checked || document.getElementById("radio302").checked || document.getElementById("radio303").checked) {
      if(!answered[2]) {
        answeredQuestions++;
        answered[2] = true;
      }
    } else {
      if(answered[2]){
        answered[2] = false;
        answeredQuestions--;
      }
    }
    if((document.getElementById("radio401").checked && (document.getElementById("radio411").checked || document.getElementById("radio412").checked || document.getElementById("radio413").checked))
    || document.getElementById("radio402").checked) {
      if(!answered[3]) {
        answeredQuestions++;
        answered[3] = true;
      }
    } else {
      if(answered[3]){
        answered[3] = false;
        answeredQuestions--;
      }
    }
    if(( document.getElementById("radio501").checked && (document.getElementById("radio511").checked || document.getElementById("radio512").checked || document.getElementById("radio513").checked))
    || document.getElementById("radio502").checked) {
      if(!answered[4]) {
        answeredQuestions++;
        answered[4] = true;
      }
    } else {
      if(answered[4]){
        answered[4] = false;
        answeredQuestions--;
      }
    }
    if(document.getElementById("radio611").checked || document.getElementById("radio612").checked || document.getElementById("radio602").checked  ) {
      if(!answered[5]) {
        answeredQuestions++;
        answered[5] = true;
      }
    } else {
      if(answered[5]){
        answered[5] = false;
        answeredQuestions--;
      }
    }
    if(document.getElementById("radio703").checked
    || ( document.getElementById("radio701").checked &&(document.getElementById("radio721").checked || document.getElementById("radio722").checked))
    || ( document.getElementById("radio702").checked && (document.getElementById("radio721").checked || document.getElementById("radio722").checked) && (document.getElementById("radio711").checked || document.getElementById("radio712").checked))
    ) {
      if(!answered[6]) {
        answeredQuestions++;
        answered[6] = true;
      }
    } else {
      if(answered[6]){
        answered[6] = false;
        answeredQuestions--;
      }
    }
    if(document.getElementById("radio801").checked || document.getElementById("radio802").checked) {
      if(!answered[7]) {
        answeredQuestions++;
        answered[7] = true;
      }
    } else {
      if(answered[7]){
        answered[7] = false;
        answeredQuestions--;
      }
    }
    if(document.getElementById("radio901").checked || document.getElementById("radio902").checked || document.getElementById("radio903").checked || document.getElementById("radio904").checked  ) {
      if(!answered[8]) {
        answeredQuestions++;
        answered[8] = true;
      }
    } else {
      if(answered[8]){
        answered[8] = false;
        answeredQuestions--;
      }
    }
    if(document.getElementById("radio1001").checked || document.getElementById("radio1002").checked || document.getElementById("radio1003").checked) {
      if(!answered[9]) {
        answeredQuestions++;
        answered[9] = true;
      }
    } else {
      if(answered[9]){
        answered[9] = false;
        answeredQuestions--;
      }
    }
    if(document.getElementById("radio1101").checked || document.getElementById("radio1102").checked || document.getElementById("radio1103").checked) {
      if(!answered[10]) {
        answeredQuestions++;
        answered[10] = true;
      }
    } else {
      if(answered[10]){
        answered[10] = false;
        answeredQuestions--;
      }
    }
    if(document.getElementById("radio1201").checked || document.getElementById("radio1202").checked) {
      if(!answered[11]) {
        answeredQuestions++;
        answered[11] = true;
      }
    } else {
      if(answered[11]){
        answered[11] = false;
        answeredQuestions--;
      }
    }
    if(document.getElementById("radio1301").checked || document.getElementById("radio1302").checked || document.getElementById("radio1303").checked) {
      if(!answered[12]) {
        answeredQuestions++;
        answered[12] = true;
      }
    } else {
      if(answered[12]){
        answered[12] = false;
        answeredQuestions--;
      }
    }
    var $q = "";
    for(var i = 0; i < 13; i++){
      if(!answered[i]) $q += ("Q"+(parseInt(i)+1)+" ");
    }
    $('#hint').text("( 尚未完成："+$q+" )");

    console.log(answeredQuestions);
    var percentage = parseInt(answeredQuestions/totalQuestions*100);
    $('.progressNumber').text(percentage);
    $('.progress-bar').css('width',percentage+'%');
    if(percentage == 100){
      $('#results').removeClass('disabled');
      $('#hint').hide();
      $('#ok').show();
    }
  });

  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 100)
      }, 750, 'easeInOutCubic');
      event.preventDefault();
  });


  /* ---------- Question 1 ---------- */
  $('#radio101').on('click', function(){
    $('.subquestions#sub1').slideDown(500);
    $('html, body').stop().animate({
        scrollTop: ($('#sub1-1').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio131, #radio132, #radio133').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question2').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio102').on('click', function(){
    $('.subquestions#sub1').slideUp(500, function(){
      $('html, body').stop().animate({
          scrollTop: ($('#question2').offset().top - 100)
      }, 750, 'easeInOutCubic');
    });
  });

  /* ---------- Question 2 ---------- */
  $('#radio201').on('click', function(){
    $('.subquestions#sub2').slideDown(500);
    $('html, body').stop().animate({
        scrollTop: ($('#sub2-1').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio211, #radio212, #radio213, #radio214').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question3').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio202').on('click', function(){
    $('.subquestions#sub2').slideUp(500, function(){
      $('html, body').stop().animate({
          scrollTop: ($('#question3').offset().top - 100)
      }, 750, 'easeInOutCubic');
    });
  });

  /* ---------- Question 3 ---------- */
  $('#radio301, #radio302, #radio303').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question4').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  /* ---------- Question 4 ---------- */
  $('#radio401').on('click', function(){
    $('.subquestions#sub4').slideDown(500);
    $('html, body').stop().animate({
        scrollTop: ($('#sub4-1').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio411, #radio412, #radio413, #radio414').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question5').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio402, #radio403, #radio404').on('click', function(){
    $('.subquestions#sub4').slideUp(500, function(){
      $('html, body').stop().animate({
          scrollTop: ($('#question5').offset().top - 100)
      }, 750, 'easeInOutCubic');
    });
  });

  /* ---------- Question 5 ---------- */
  $('#radio501').on('click', function(){
    $('.subquestions#sub5').slideDown(500);
    $('html, body').stop().animate({
        scrollTop: ($('#sub5-1').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio511, #radio512, #radio513').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question6').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio502').on('click', function(){
    $('.subquestions#sub5').slideUp(500, function(){
      $('html, body').stop().animate({
          scrollTop: ($('#question6').offset().top - 100)
      }, 750, 'easeInOutCubic');
    });
  });

  /* ---------- Question 6 ---------- */
  $('#radio601').on('click', function(){
    $('.subquestions#sub6').slideDown(500);
    $('html, body').stop().animate({
        scrollTop: ($('#sub6-1').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio611, #radio612').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question7').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio602').on('click', function(){
    $('.subquestions#sub6').slideUp(500, function(){
      $('html, body').stop().animate({
          scrollTop: ($('#question7').offset().top - 100)
      }, 750, 'easeInOutCubic');
    });
  });

  /* ---------- Question 7 ---------- */
  $('#radio701').on('click', function(){
    $('.subquestions#sub7').slideDown(500);
    $('#sub7-1').hide();
    $('html, body').stop().animate({
        scrollTop: ($('#sub7-2').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });
  $('#radio702').on('click', function(){
    $('.subquestions#sub7').slideDown(500);
    $('#sub7-1').show();
    $('html, body').stop().animate({
        scrollTop: ($('#sub7-1').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio721, #radio722').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question8').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });

  $('#radio703').on('click', function(){
    $('.subquestions#sub7').slideUp(500, function(){
      $('html, body').stop().animate({
          scrollTop: ($('#question8').offset().top - 100)
      }, 750, 'easeInOutCubic');
    });
  });

  /* ---------- Question 8 ---------- */
  $('#radio801, #radio802').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question9').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });
  /* ---------- Question 9 ---------- */
  $('#radio901, #radio902, #radio903, #radio904').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question10').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });
  /* ---------- Question 10 ---------- */
  $('#radio1001, #radio1002, #radio1003').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question11').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });
  /* ---------- Question 11 ---------- */
  $('#radio1101, #radio1102, #radio1103').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question12').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });
  /* ---------- Question 12 ---------- */
  $('#radio1201, #radio1202').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($('#question13').offset().top - 100)
    }, 750, 'easeInOutCubic');
  });
  /* ---------- Question 13 ---------- */
  $('#radio1301, #radio1302, #radio1303').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: ($(document).height())
    }, 750, 'easeInOutCubic');
  });
});
