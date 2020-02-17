$(document).ready(function() {
    $(".bg").hide().fadeIn(2000);
    $(".hiddennav").hide();
    $(".progress").hide();
    $(".snow-container").hide();

    $(".specialbtn").click(function() {
        $(".hiddennav").fadeToggle(1000);
    });

    $(".task1").click(function() {
        $(".secheader").toggleClasses(['text-left', 'text-right', 'text-center']);
    });

    $(".task2").click(function() {
        var hobby = prompt("Update your details", "New hobby");
        if (hobby != null) {
            var data = '<div class="list-group-item list-group-item-warning">' + hobby + '</div>';
            $(".list-group").append(data);
        }
    });

    $(".task3").click(function() {
        $(".progress").fadeToggle(100);
    });

    $(".task4").click(function() {
        alert("Please enjoy the snowy dark mode of my website! ");
        $(".snow-container").show();
        $(".header").css('background-image', 'url(https://static.myfbcover.com/covers/Nature/Black_Flower.png');
        $(".header").css('color', 'white');
        $(".change").removeClass("bg-warning").addClass("bg-dark");
        $(".secheader").css('color', 'white');
        $(".after").removeClass("bg-light").addClass("bg-secondary");
        $(".text").removeClass("text-info").addClass("text-warning");
        $(".intro").css('color', 'pink');
        $(".coll").css('background-color', 'grey');
        $(".lis").removeClass("list-group-item-warning").addClass("list-group-item-secondary");
        $(".well").removeClass("table-danger").addClass("table-info");
        $(".tab").removeClass("text-danger").addClass("text-success");

    });

    window.onscroll = function() {
        detectScroll()
    };

});

(function($) {
    // credits to ThibaultJanBeyer
    $.fn.extend({
        toggleClasses: function(classes, boolean) {
            var conf = {
                    toggleZero: boolean
                },
                currentClass = 0,
                elementClass = $(this).attr("class").split(" "),
                hasClass = [];

            Array.prototype.remove = function() {
                var what, a = arguments,
                    L = a.length,
                    ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };

            for (var i = 0; i < classes.length; i++) {
                if (elementClass.indexOf(classes[i]) != -1) {
                    hasClass[i] = 'true';
                }
            }
            for (var int = 0; int < classes.length; int++) {
                if (hasClass.indexOf('true') >= 0) {
                    if (hasClass[int] === 'true' && int < (classes.length - 1)) {
                        elementClass.remove(classes[int]);
                        currentClass = int + 1;
                        elementClass.push(classes[currentClass]);
                        break;
                    } else if (hasClass[int] === 'true') {
                        elementClass.remove(classes[int]);
                        currentClass = 0;
                        if (classes.length > 1 && conf.toggleZero !== true) {
                            elementClass.push(classes[currentClass]);
                        }
                        break;
                    }
                } else {

                    currentClass = 0;
                    elementClass.push(classes[currentClass]);
                    break;
                }
            }

            $.extend(conf, classes);
            return $(this).each(function() {
                $(this).attr("class", elementClass.join(" "));
            });
        }
    });
})(jQuery);

function detectScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").textContent = scrolled.toFixed(0) + "%";
    document.getElementById("myBar").style.width = scrolled + "%";
}