$("[draggable-item]").draggable({ scroll: true, scrollSpeed: 100, scrollSensitivity: 100, handle: "[draggable-handle]" });

var zIndex = 500;

// MAKE ACTIVE WINDOW BY Z-INDEX AND IS--ACTIVE SWITCH
function makeActiveWindow(e) {
    if ($(e).hasClass('is--minimized')){
        zIndex += 2;
        $(e).removeClass('is--minimized');
        $(e).find('.window--title-bar').addClass('active--window');
        $(e).siblings('.window').find('.window--title-bar').removeClass('active--window');
        $(e).css('zIndex', zIndex);
    } else {
        zIndex += 2;
        $(e).find('.window--title-bar').addClass('active--window');
        $(e).siblings('.window').find('.window--title-bar').removeClass('active--window');
        $(e).css('zIndex', zIndex);
    }};

function startApp(string) {
    zIndex += 2;
    let window = "#" + string + "--window";
    let taskbar = "#" + string + "--taskbar";
    $(window).css("z-index", zIndex);
    $(window).toggleClass('is--active');
    $(taskbar).toggleClass('is--active');
    $(taskbar).siblings('.startbar--window-wrap').removeClass('selected');
    $(taskbar).addClass('selected');
    $(window).find('.window--title-bar').addClass('active--window');
    $(window).siblings('.window').find('.window--title-bar').removeClass('active--window');
};

// CLICK ON AN APP WINDOW
$('.window').on('mousedown', function() {
    zIndex += 2;
    $(this).css('zIndex', zIndex);
    $(this).find('.window--title-bar').addClass('active--window');
    $(this).siblings('.window').find('.window--title-bar').removeClass('active--window');
    let app = $(this).attr('id');
    var activeTask = document.getElementsByClassName('selected');
    $(activeTask[0]).toggleClass('selected');
    switch (app) {
      case 'msn--window':
        $('#msn--taskbar').toggleClass('selected');
        break;
      case 'ie--window':
        $('#ie--taskbar').toggleClass('selected');
        break;
      case 'bld--window':
        $('#bld--taskbar').toggleClass('selected');
        break;
      case 'notepad--window':
        $('#notepad--taskbar').toggleClass('selected');
        break;
      case 'winamp--window':
        $('#winamp--taskbar').toggleClass('selected');
        break;
      case 'contact--window':
        $('#contact--taskbar').toggleClass('selected');
        break;
      case 'portfolio--window':
        $('#portfolio--taskbar').toggleClass('selected');
        break;
      case 'pinball--window':
        $('#pinball--taskbar').toggleClass('selected');
        break;
      default:
        console.log('default case.');
        break;
      }
  });

// OPEN / LAUNCH APP FROM STARTBAR
$('.startbar--icon-wrap').on('click', function() {
	let app = $(this).attr('id');
  	switch (app) {
    case 'msn--start':
        startApp('msn');
        break;
    case 'ie--start':
        startApp('ie');
        break;
    case 'winamp--start':
        startApp('winamp');
        break;
    case 'notepad--start':
        startApp('notepad');
        break;
    default:
        console.log('No app detected.');
        break;
}
});

// OPEN / LAUNCH APP FROM DESKTOP
$('.icon--wrap').dblclick(function() {
    let app = $(this).attr('id');
    switch (app) {
        case 'bld--start':
            startApp('bld');
            break;
        case 'portfolio--start':
            startApp('portfolio');
            break;
        case 'contact--start':
            startApp('contact');
            break;
        case 'clients--start':
            startApp('clients');
            break;
        case 'pinball--start':
            $('#pinball--iframe').attr('src', "https://alula.github.io/SpaceCadetPinball/");
            $('#pinball--window').css("z-index", zIndex);
            $('#pinball--taskbar').addClass('is--active');
            removeActiveTaskbar();
            $('#pinball--taskbar').addClass('selected');
            $('#pinball--window').addClass('is--active');
            $('#pinball--window').find('.window--title-bar').addClass('active--window');
            $('#pinball--window').siblings('.window').find('.window--title-bar').removeClass('active--window');
        default:
            console.log('No app detected.');
            break;
        }
});

// CLICK ON TASKBAR
$('.startbar--window-wrap').on('click', function() {
    if ($(this).hasClass('selected')){
        $(this).toggleClass('selected');
        let app = $(this).attr('id');
        switch (app) {
            case 'pinball--taskbar':
                $("#pinball--window").toggleClass('is--minimized');
                break;
            case 'msn--taskbar':
                $("#msn--window").toggleClass('is--minimized');
                break;
            case 'notepad--taskbar':
                $("#notepad--window").toggleClass('is--minimized');
                break;
            case 'winamp--taskbar':
                $("#winamp--window").toggleClass('is--minimized');
                break;
            case 'bld--taskbar':
                $("#bld--window").toggleClass('is--minimized');
                break;
            case 'ie--taskbar':
                $("#ie--window").toggleClass('is--minimized');
                break;
            case 'portfolio--taskbar':
                $("#portfolio--window").toggleClass('is--minimized');
                  break;
            case 'contact--taskbar':
                $("#contact--window").toggleClass('is--minimized');
                break;
            case 'clients--taskbar':
                $("#clients--window").toggleClass('is--minimized');
                break;
            default:
                console.log('No app detected.');
                break;
        }
    } else {
            $(this).siblings('.startbar--window-wrap').removeClass('selected');
            $(this).toggleClass('selected');
            let app = $(this).attr('id');
            switch (app) {
                case 'pinball--taskbar':
                    pinball = $('#pinball--window');
                    makeActiveWindow(pinball);
                    break;
                case'msn--taskbar':
                    msn = $('#msn--window');
                    makeActiveWindow(msn);
                    break;
                case 'bld--taskbar':
                    bld = $('#bld--window');
                    makeActiveWindow(bld);
                    break;
                case 'ie--taskbar':
                    ie = $('#ie--window');
                    makeActiveWindow(ie);
                    break;
                case 'winamp--taskbar':
                    winamp = $('#winamp--window');
                    makeActiveWindow(winamp);
                    break;
                case 'notepad--taskbar':
                    notepad = $('#notepad--window');
                    makeActiveWindow(notepad);
                    break;
                case 'portfolio--taskbar':
                    portfolio = $('#portfolio--window');
                    makeActiveWindow(portfolio);
                    break;
                case 'contact--taskbar':
                    contact = $('#contact--window');
                    makeActiveWindow(contact);
                    break;
                case 'clients--taskbar':
                    clients = $('#clients--window');
                    makeActiveWindow(clients);
                    break;
                default:
                    console.log('No app detected.');
                    break;
                }
            }
        });

// CLOSE APPS
$('.winamp--close').on('click', function() {
    $('#winamp--window').removeClass('is--active');
    $('#winamp--taskbar').toggleClass('selected');
    $('#winamp--taskbar').removeClass('is--active');
});

$('.icon--close').on('click', function() {
    let app = $(this).attr('id');
    switch (app) {
        case 'bld--close':
            $('#bld--window').removeClass('is--active');
            $('#bld--taskbar').toggleClass('selected');
            $('#bld--taskbar').removeClass('is--active');
            break;
        case 'winamp--close':
            $('#winamp--window').removeClass('is--active');
            $('#winamp--taskbar').toggleClass('selected');
            $('#winamp--taskbar').removeClass('is--active');
            break;
        case 'notepad--close':
            $('#notepad--window').removeClass('is--active');
            $('#notepad--taskbar').toggleClass('selected');
            $('#notepad--taskbar').removeClass('is--active');
            break;
        case 'msn--close':
            $('#msn--window').removeClass('is--active');
            $('#msn--taskbar').toggleClass('selected');
            $('#msn--taskbar').removeClass('is--active');
            break;
        case 'ie--close':
            $('#ie--window').removeClass('is--active');
            $('#ie--taskbar').toggleClass('selected');
            $('#ie--taskbar').removeClass('is--active');
            break;
        case 'contact--close':
            $('#contact--window').removeClass('is--active');
            $('#contact--taskbar').toggleClass('selected');
            $('#contact--taskbar').removeClass('is--active');
            break;
        case 'pinball--close':
            $('#pinball--window').removeClass('is--active');
            $('#pinball--iframe').attr('src', "");
            $('#pinball--taskbar').toggleClass('selected');
            $('#pinball--taskbar').removeClass('is--active');
            break;
        case 'portfolio--close':
            $('#portfolio--window').removeClass('is--active');
            $('#portfolio--taskbar').toggleClass('selected');
            $('#portfolio--taskbar').removeClass('is--active');
            break;
        default:
            console.log('No app detected.');    
            break;
    }
});

// MINIMIZE APPS
$('.icon--minimize').on('click', function() {
    let app = $(this).attr('id');
    switch (app) {
        case 'bld--minimize':
            $('#bld--window').addClass('is--minimized');
            $('#bld--taskbar').toggleClass('selected');
            break;
        case 'notepad--minimize':
            $('#notepad--window').addClass('is--minimized');
            $('#notepad--taskbar').toggleClass('selected');
            break;
        case'msn--minimize':
            $('#msn--window').addClass('is--minimized');
            $('#msn--taskbar').toggleClass('selected');
            break;
        case 'ie--minimize':
            $('#ie--window').addClass('is--minimized');
            $('#ie--taskbar').toggleClass('selected');
            break;
        case 'contact--minimize':
            $('#contact--window').addClass('is--minimized');
            $('#contact--taskbar').toggleClass('selected');
            break;
        case 'pinball--minimize':
            $('#pinball--window').addClass('is--minimized');
            $('#pinball--taskbar').toggleClass('selected');
            break;
        case 'portfolio--minimize':
            $('#portfolio--window').addClass('is--minimized');
            $('#portfolio--taskbar').toggleClass('selected');
            break;
        default:
            console.log('No app detected.');    
            break;
    }
});

// WINAMP MINIMIZE
$('.winamp--minimize').on('click', function() {
    $('#winamp--window').addClass('is--minimized');
    $('#winamp--taskbar').toggleClass('selected');
});

// MAXIMIZE APP
function toggleMaximize(appWindow) {
  if ($(appWindow).hasClass('is--maximized')) {
    $(appWindow).removeClass('is--maximized');
  } else {
    $(appWindow).css({top: "0px", left: "0px"});
    $(appWindow).addClass('is--maximized');
  } 
};

function maximizeApp(el) {
  let app = $(el).attr('id');
  switch (app) {
    case 'bld--maximize':
        appWindow = '#bld--window';
        toggleMaximize(appWindow);
        break;
    case 'notepad--maximize':
        appWindow = '#notepad--window';
        toggleMaximize(appWindow);
        break;
    case 'contact--maximize':
        appWindow = '#contact--window';
        toggleMaximize(appWindow);
        break;
    case 'portfolio--maximize':
        appWindow = '#portfolio--window';
        toggleMaximize(appWindow);
        break;
    case 'ie--maximize':
        appWindow = '#ie--window';
        $('.ie--embed').toggleClass('mod--maximize');
        toggleMaximize(appWindow);
        break;
    case 'msn--maximize':
        appWindow = '#msn--window';
        toggleMaximize(appWindow);
        break;
    case 'clients--maximize':
        appWindow = '#clients--window';
        toggleMaximize(appWindow);
        break;
    case 'bld--title-bar':
        appWindow = '#bld--window';
        toggleMaximize(appWindow);
        break;
    case 'notepad--title-bar':
        appWindow = '#notepad--window';
        toggleMaximize(appWindow);
        break;
    case 'contact--title-bar':
        appWindow = '#contact--window';
        toggleMaximize(appWindow);
        break;
    case 'portfolio--title-bar':
        appWindow = '#portfolio--window';
        toggleMaximize(appWindow);
        break;
    case 'clients--title-bar':
        appWindow = '#clients--window';
        toggleMaximize(appWindow);
        break;
    case 'ie--title-bar':
        appWindow = '#ie--window';
        toggleMaximize(appWindow);
        break;
    case 'msn--title-bar':
        appWindow = '#msn--window';
        toggleMaximize(appWindow);
        break;
    default:
        console.log('No app detected.');    
        break;
  }
};

$('.icon--maximize').on('click', function() {
  maximizeApp(this);
});

// DOUBLE CLICK TITLE BAR
$('.window--title-bar').dblclick(function() {
    maximizeApp(this);
});

// START BUTTON
$('#start-button').on('click', function() {
    $('#start-menu').toggleClass('is--open');
  });

// CLIPPY
$('#clippy-no1').on('click', function() {
  $('#clippy').attr('style', 'display: none !important');
});
$('#clippy-yes1').on('click', function() {
	$('#clippy-message-1').addClass('answered');
  $('#clippy-message-2').removeClass('answered');
});

// CLOCK
let clock = document.getElementById('timestamp');
setInterval(function () {
  let timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
	clock.innerText = timestamp;
  }, 1000);

// INTERNET SEARCH BAR
var previousURL = "https://web.archive.org/web/1998/https://www.google.com/"
var baseURL = "https://web.archive.org/web/1998/https://"
var ieURL = document.getElementById('ieURL');
function search(ele) {
    if(event.key === 'Enter') {
        newURL = baseURL + ele.value;
				$('#ieURL').attr('src', newURL);
        document.getElementById('urlSearchText').innerText = newURL;
    }
};	