// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
  $(document).scroll(function () {
    var $nav = $('.navbar.fixed-top');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
  $('.flashCard').click(function flip() {
    $(this).toggleClass('flipped');
  });
  $('#signUpModal').on('shown.bs.modal', function () {
    $('#modalButton').trigger('focus');
  });
  $('#Refresh').click(function () {
    location.reload();
  });
  $('.fraction').each(function (key, value) {
    $this = $(this);
    var split = $this.html().split('/');
    if (split.length == 2) {
      $this.html(
        '<span class="top">' +
          split[0] +
          '</span><span class="bottom">' +
          split[1] +
          '</span>'
      );
    }
  });
  $('.fractionAdd').each(function (key, value) {
    $this = $(this);
    var split = $this.html().split('/');
    if (split.length == 2) {
      $this.html(
        '<span class="top">' +
          split[0] +
          '</span><span class="bottom">' +
          split[1] +
          '</span>'
      );
    }
  });
  $('.fractionAnswer').each(function (key, value) {
    $this = $(this);
    var split = $this.html().split('/');
    if (split.length == 2) {
      $this.html(
        '<span class="topAnswer">' +
          split[0] +
          '</span><span class="bottomAnswer">' +
          split[1] +
          '</span>'
      );
    }
  });
  // $('.button-up').click(function() {
  //   $('#score').html(function(i, val) {
  //     return val*1+1 });
  // });
  $('.dropdown-submenu .dropdown-toggle').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).next('.dropdown-menu').toggle();
  });
  $('#register').validate({
    rules: {
      'Register.Username': {
        required: true,
        minlength: 2,
      },
      'Register.Email': {
        required: true,
        email: true,
      },
      'Register.Password': {
        required: true,
        minlength: 8,
        pattern: /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
      },
      'Register.Confirm': {
        minlength: 8,
        equalTo: '#Register_Password',
      },
    },
    messages: {
      'Register.Username': {
        required: 'Please enter a username',
        minlength: 'Must be more than 2 characters',
      },
      'Register.Password': {
        required: 'Please provide a password',
        minlength: 'Must be at least 8 characters...',
        pattern:
          'Password must be at least 8 characters long and contain at least 1 letter, 1 number and a special character(@$!%*#?&)',
      },
      'Register.Confirm': {
        required: 'Please provide a matching password',
        minlength: 'Must be at least 8 characters...',
        equalTo: 'Your passwords do not match',
      },
    },
  });

  $('#login').validate({
    rules: {
      'Login.Email': {
        required: true,
        email: true,
      },
      'Login.Password': {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      'Login.Password': {
        required: 'Please enter your password',
        minlength: 'Password must be at least 8 characters long',
      },
    },
  });

  $('#eyeCon').click(function () {
    $(this).toggleClass('fa-eye fa-eye-slash');
    var input = $($(this).attr('toggle'));
    if (input.attr('type') == 'password') {
      input.attr('type', 'text');
    } else {
      input.attr('type', 'password');
    }
  });
  $('#lockCon').click(function () {
    $(this).toggleClass('fa-lock fa-unlock');
    var input = $($(this).attr('toggle'));
    if (input.attr('type') == 'password') {
      input.attr('type', 'text');
    } else {
      input.attr('type', 'password');
    }
  });
  var currentClass = '';
  $('#0').click(function () {
    if (currentClass === '') {
      $(this).addClass('show-right');
      currentClass = 'show-right';
    } else if (currentClass === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass = 'show-back';
    } else if (currentClass === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass = 'show-left';
    } else if (currentClass === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass = 'show-top';
    } else if (currentClass === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass = 'show-bottom';
    } else if (currentClass === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass = '';
    }
  });
  var currentClass1 = '';
  $('#1').click(function () {
    if (currentClass1 === '') {
      $(this).addClass('show-right');
      currentClass1 = 'show-right';
    } else if (currentClass1 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass1 = 'show-back';
    } else if (currentClass1 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass1 = 'show-left';
    } else if (currentClass1 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass1 = 'show-top';
    } else if (currentClass1 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass1 = 'show-bottom';
    } else if (currentClass1 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass1 = '';
    }
  });
  var currentClass2 = '';
  $('#2').click(function () {
    if (currentClass2 === '') {
      $(this).addClass('show-right');
      currentClass2 = 'show-right';
    } else if (currentClass2 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass2 = 'show-back';
    } else if (currentClass2 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass2 = 'show-left';
    } else if (currentClass2 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass2 = 'show-top';
    } else if (currentClass2 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass2 = 'show-bottom';
    } else if (currentClass2 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass2 = '';
    }
  });
  var currentClass3 = '';
  $('#3').click(function () {
    if (currentClass3 === '') {
      $(this).addClass('show-right');
      currentClass3 = 'show-right';
    } else if (currentClass3 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass3 = 'show-back';
    } else if (currentClass3 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass3 = 'show-left';
    } else if (currentClass3 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass3 = 'show-top';
    } else if (currentClass3 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass3 = 'show-bottom';
    } else if (currentClass3 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass3 = '';
    }
  });
  var currentClass4 = '';
  $('#4').click(function () {
    if (currentClass4 === '') {
      $(this).addClass('show-right');
      currentClass4 = 'show-right';
    } else if (currentClass4 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass4 = 'show-back';
    } else if (currentClass4 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass4 = 'show-left';
    } else if (currentClass4 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass4 = 'show-top';
    } else if (currentClass4 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass4 = 'show-bottom';
    } else if (currentClass4 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass4 = '';
    }
  });
  var currentClass5 = '';
  $('#5').click(function () {
    if (currentClass5 === '') {
      $(this).addClass('show-right');
      currentClass5 = 'show-right';
    } else if (currentClass5 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass5 = 'show-back';
    } else if (currentClass5 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass5 = 'show-left';
    } else if (currentClass5 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass5 = 'show-top';
    } else if (currentClass5 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass5 = 'show-bottom';
    } else if (currentClass5 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass5 = '';
    }
  });
  var currentClass6 = '';
  $('#6').click(function () {
    if (currentClass6 === '') {
      $(this).addClass('show-right');
      currentClass6 = 'show-right';
    } else if (currentClass6 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass6 = 'show-back';
    } else if (currentClass6 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass6 = 'show-left';
    } else if (currentClass6 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass6 = 'show-top';
    } else if (currentClass6 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass6 = 'show-bottom';
    } else if (currentClass6 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass6 = '';
    }
  });
  var currentClass7 = '';
  $('#7').click(function () {
    if (currentClass7 === '') {
      $(this).addClass('show-right');
      currentClass7 = 'show-right';
    } else if (currentClass7 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass7 = 'show-back';
    } else if (currentClass7 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass7 = 'show-left';
    } else if (currentClass7 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass7 = 'show-top';
    } else if (currentClass7 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass7 = 'show-bottom';
    } else if (currentClass7 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass7 = '';
    }
  });
  var currentClass8 = '';
  $('#8').click(function () {
    if (currentClass8 === '') {
      $(this).addClass('show-right');
      currentClass8 = 'show-right';
    } else if (currentClass8 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass8 = 'show-back';
    } else if (currentClass8 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass8 = 'show-left';
    } else if (currentClass8 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass8 = 'show-top';
    } else if (currentClass8 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass8 = 'show-bottom';
    } else if (currentClass8 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass8 = '';
    }
  });
  var currentClass9 = '';
  $('#9').click(function () {
    if (currentClass9 === '') {
      $(this).addClass('show-right');
      currentClass9 = 'show-right';
    } else if (currentClass9 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass9 = 'show-back';
    } else if (currentClass9 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass9 = 'show-left';
    } else if (currentClass9 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass9 = 'show-top';
    } else if (currentClass9 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass9 = 'show-bottom';
    } else if (currentClass9 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass9 = '';
    }
  });
  var currentClass10 = '';
  $('#10').click(function () {
    if (currentClass10 === '') {
      $(this).addClass('show-right');
      currentClass10 = 'show-right';
    } else if (currentClass10 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass10 = 'show-back';
    } else if (currentClass10 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass10 = 'show-left';
    } else if (currentClass10 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass10 = 'show-top';
    } else if (currentClass10 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass10 = 'show-bottom';
    } else if (currentClass10 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass10 = '';
    }
  });
  var currentClass11 = '';
  $('#11').click(function () {
    if (currentClass11 === '') {
      $(this).addClass('show-right');
      currentClass11 = 'show-right';
    } else if (currentClass11 === 'show-right') {
      $(this).removeClass('show-right').addClass('show-back');
      currentClass11 = 'show-back';
    } else if (currentClass11 === 'show-back') {
      $(this).removeClass('show-back').addClass('show-left');
      currentClass11 = 'show-left';
    } else if (currentClass11 === 'show-left') {
      $(this).removeClass('show-left').addClass('show-top');
      currentClass11 = 'show-top';
    } else if (currentClass11 === 'show-top') {
      $(this).removeClass('show-top').addClass('show-bottom');
      currentClass11 = 'show-bottom';
    } else if (currentClass11 === 'show-bottom') {
      $(this).removeClass('show-bottom').addClass('');
      currentClass11 = '';
    }
  });
  $('#delete0').click(function () {
    $('#0').remove();
    $('.hide0').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete1').click(function () {
    $('#1').remove();
    $('.hide1').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete2').click(function () {
    $('#2').remove();
    $('.hide2').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete3').click(function () {
    $('#3').remove();
    $('.hide3').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete4').click(function () {
    $('#4').remove();
    $('.hide4').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete5').click(function () {
    $('#5').remove();
    $('.hide5').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete6').click(function () {
    $('#6').remove();
    $('.hide6').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete7').click(function () {
    $('#7').remove();
    $('.hide7').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete8').click(function () {
    $('#8').remove();
    $('.hide8').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete9').click(function () {
    $('#9').remove();
    $('.hide9').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete10').click(function () {
    $('#10').remove();
    $('.hide10').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  $('#delete11').click(function () {
    $('#11').remove();
    $('.hide11').css('display', 'block');
    $('#score').html(function (i, val) {
      return val * 1 + 1;
    });
  });
  // line_numbers(document.getElementById('line_nums'));
});
