$("[draggable-item]").draggable({ scroll: true, scrollSpeed: 100, scrollSensitivity: 100, handle: "[draggable-handle]" });

var zIndex = 500;
$('.window').on('mousedown', function() {
  zIndex += 2;
});

$('.window').on('mousedown', function() {
  $(this).css("z-index", zIndex);
  $(this).find('.window--title-bar').addClass('active--window');
  $(this).siblings('.window').find('.window--title-bar').removeClass('active--window');
});

// START BUTTON
$('#start-button').on('click', function() {
  $('#start-menu').toggleClass('is--open');
});
// MSN
$('#msn--start').on('click', function() {
  $('#msn--window').css("z-index", zIndex);
  $('#msn--window').addClass('is--active');
  $('#msn--taskbar').addClass('is--active');
  $('#msn--taskbar').addClass('selected');
  $('#msn--window').find('.window--title-bar').addClass('active--window');
  $('#msn--window').siblings('.window').find('.window--title-bar').removeClass('active--window');
  });
$('#msn--close').on('click', function() {
  $('#msn--window').removeClass('is--active');
  $('#msn--taskbar').toggleClass('selected');
  $('#msn--taskbar').removeClass('is--active');
 });
 $('#msn--minimize').on('click', function() {
  $('#msn--window').toggleClass('is--minimized');
  $('#msn--taskbar').toggleClass('selected');
});
$('#msn--taskbar').on('click', function() {
  $('#msn--window').toggleClass('is--minimized');
  $('#msn--taskbar').toggleClass('selected');
});
$('#msn--title-bar').dblclick(function() {
  $('#msn--window').toggleClass('is--maximized');
});
// INTERNET EXPLORER
$('#ie--start').on('click', function() {
    $('#ie--window').css("z-index", zIndex);
    $('#ie--window').addClass('is--active');
  $('#ie--taskbar').addClass('is--active');
  $('#ie--taskbar').addClass('selected');
  $('#ie--window').find('.window--title-bar').addClass('active--window');
  $('#ie--window').siblings('.window').find('.window--title-bar').removeClass('active--window');
});
$('#ie--close').on('click', function() {
  $('#ie--window').removeClass('is--active');
  $('#ie--taskbar').toggleClass('selected');
  $('#ie--taskbar').removeClass('is--active');
 });
  $('#ie--minimize').on('click', function() {
  $('#ie--window').toggleClass('is--minimized');
  $('#ie--taskbar').toggleClass('selected');
});
$('#ie--taskbar').on('click', function() {
  $('#ie--window').toggleClass('is--minimized');
  $('#ie--taskbar').toggleClass('selected');
});
$('#ie--title-bar').dblclick(function() {
  $('#ie--window').toggleClass('is--maximized');
});

// WINAMP
$('#winamp--start').on('click', function() {
    $('#winamp--window').css("z-index", zIndex);
    $('#winamp--window').addClass('is--active');
  $('#winamp--taskbar').addClass('is--active');
  $('#winamp--taskbar').addClass('selected');
  $('#winamp--window').siblings('.window').find('.window--title-bar').removeClass('active--window');
});
$('#winamp--close').on('click', function() {
  $('#winamp--window').removeClass('is--active');
  $('#winamp--taskbar').toggleClass('selected');
  $('#winamp--taskbar').removeClass('is--active');
});
$('#winamp--minimize').on('click', function() {
  $('#winamp--window').toggleClass('is--minimized');
  $('#winamp--taskbar').toggleClass('selected');
});
$('#winamp--taskbar').on('click', function() {
  $('#winamp--window').toggleClass('is--minimized');
  $('#winamp--taskbar').toggleClass('selected');
});
// NOTEPAD
$('#notepad--start').on('click', function() {
    $('#notepad--window').css("z-index", zIndex);
    $('#notepad--window').addClass('is--active');
  
  $('#notepad--taskbar').addClass('is--active');
  $('#notepad--taskbar').addClass('selected');
  $('#notepad--window').find('.window--title-bar').addClass('active--window');
  $('#notepad--window').siblings('.window').find('.window--title-bar').removeClass('active--window');
});
$('#notepad--close').on('click', function() {
  $('#notepad--window').removeClass('is--active');
  $('#notepad--taskbar').toggleClass('selected');
  $('#notepad--taskbar').removeClass('is--active');
});
$('#notepad--minimize').on('click', function() {
  $('#notepad--window').toggleClass('is--minimized');
  $('#notepad--taskbar').toggleClass('selected');
});
$('#notepad--taskbar').on('click', function() {
  $('#notepad--window').toggleClass('is--minimized');
  $('#notepad--taskbar').toggleClass('selected');
});
$('#notepad--title-bar').dblclick(function() {
  $('#notepad--window').toggleClass('is--maximized');
});
 // BLACKLIGHT DIGITAL
$('#bld--start').dblclick(function() {
    $('#bld--window').css("z-index", zIndex);
    $('#bld--window').toggleClass('is--active');

  $('#bld--taskbar').toggleClass('is--active');
  $('#bld--window').find('.window--title-bar').addClass('active--window');
  $('#bld--window').siblings('.window').find('.window--title-bar').removeClass('active--window');
});
$('#bld--close').on('click', function() {
  $('#bld--window').removeClass('is--active');
  $('#bld--taskbar').toggleClass('selected');
  $('#bld--taskbar').removeClass('is--active');
});
$('#bld--minimize').on('click', function() {
  $('#bld--window').toggleClass('is--minimized');
  $('#bld--taskbar').toggleClass('selected');
});
$('#bld--taskbar').on('click', function() {
  $('#bld--window').toggleClass('is--minimized');
  $('#bld--taskbar').toggleClass('selected');
});
$('#bld--maximize').on('click', function() {
  $('#bld--window').toggleClass('is--maximized');
});
$('#bld--title-bar').dblclick(function() {
  $('#bld--window').toggleClass('is--maximized');
});
// CONTACT
$('#contact--start').dblclick(function() {
  $('#contact--window').css("z-index", zIndex);
  $('#contact--taskbar').addClass('is--active');
  $('#contact--taskbar').addClass('selected');
  $('#contact--window').addClass('is--active');
  $('#contact--window').find('.window--title-bar').addClass('active--window');
  $('#contact--window').siblings('.window').find('.window--title-bar').removeClass('active--window');
});
$('#contact--close').on('click', function() {
  $('#contact--window').removeClass('is--active');
  $('#contact--taskbar').toggleClass('selected');
  $('#contact--taskbar').removeClass('is--active');
});
 // PINBALL
$('#pinball--start').dblclick(function() {
  $('#pinball--iframe').attr('src', "https://alula.github.io/SpaceCadetPinball/");
  $('#pinball--window').css("z-index", zIndex);
  $('#pinball--taskbar').addClass('is--active');
  $('#pinball--taskbar').addClass('selected');
  $('#pinball--window').addClass('is--active');
  $('#pinball--window').find('.window--title-bar').addClass('active--window');
  $('#pinball--window').siblings('.window').find('.window--title-bar').removeClass('active--window');
});
$('#pinball--close').on('click', function() {
  $('#pinball--window').removeClass('is--active');
  $('#pinball--iframe').attr('src', "");
  $('#pinball--taskbar').toggleClass('selected');
  $('#pinball--taskbar').removeClass('is--active');
});
$('#pinball--minimize').on('click', function() {
  $('#pinball--window').toggleClass('is--minimized');
  $('#pinball--taskbar').toggleClass('selected');
});
$('#pinball--taskbar').on('click', function() {
  $('#pinball--window').toggleClass('is--minimized');
  $('#pinball--taskbar').toggleClass('selected');
});
$('#pinball--title-bar').dblclick(function() {
  $('#pinball--window').toggleClass('is--maximized');
});
// PORTFOLIO APP
$('#portfolio--start').dblclick(function() {
  $('#portfolio--window').css("z-index", zIndex);
  $('#portfolio--window').addClass('is--active');
  $('#portfolio--taskbar').addClass('is--active');
  $('#portfolio--taskbar').addClass('selected');
  $('#portfolio--window').addClass('is--active');
  $('#portfolio--window').find('.window--title-bar').addClass('active--window');
  $('#portfolio--window').siblings('.window').find('.window--title-bar').removeClass('active--window');
});
$('#portfolio--close').on('click', function() {
  $('#portfolio--window').removeClass('is--active');
  $('#portfolio--taskbar').toggleClass('selected');
  $('#portfolio--taskbar').removeClass('is--active');
});

// CLIPPY
$('#clippy-no1').on('click', function() {
  $('#clippy').attr('style', 'display: none !important');
});
$('#clippy-yes1').on('click', function() {
	$('#clippy-message-1').addClass('answered');
  $('#clippy-message-2').removeClass('answered');
});

// TIMED EVENTS
let clock = document.getElementById('timestamp');
setInterval(function () {
  let timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
	clock.innerText = timestamp;
  }, 1000);
