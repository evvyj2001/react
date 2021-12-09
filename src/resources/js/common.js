// w3c에서 제공하는 html 내 include 시키는 function
// w3.includeHTML();
import $ from 'jquery';
// window.$ = $;

var comm = {
    init : function(){
        this.UserAgent();
        // this.scrollAction();
        this.clickAction();
        this.bodyScroll();
    },
    UserAgent : function(){ // 디바이스 분기
        if(/Android/i.test(navigator.userAgent)){
            $('html').addClass('android');
        }else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
            $('html').addClass('ios');
        }else {
            // iOS, AOS 외 디바이스
        }
    },
    clickAction : function(){ // 클릭이벤트

        //nav
        var btnNav = $('.nav-btn'), btnNavClose = $('.nav-close'), nav = $('.nav-wrap'), tabBtn = $('.tab-list>li'), tabCont = $('.tab-cont>li');

        btnNav.on('click', function(){
            nav.addClass('show');
        });
        btnNavClose.on('click', function(){
            nav.removeClass('show');
        });

        //탭 클릭 이벤트
        tabBtn.on('click',function(){
            var ind = $(this).index();

            tabBtn.removeClass('on').eq(ind).addClass('on');
            tabCont.removeClass('on').eq(ind).addClass('on');
        });
    },
    scrollAction : function(){ // 스크롤이벤트
        var header = $('#headerArea');
        var scroll = null;

        $(window).scroll(function(){    
            scroll = $(window).scrollTop();

            if(scroll >= 5){
                header.addClass('fixed');
            }else{
                header.removeClass('fixed');
            }
        });   
    },
    bodyScroll : function(){ //bodylock
        var $docEl = $('html, body'),
            $wrap = $('.wrap'),
            $scrollTop;

        $.lockBody = function() {
            if(window.pageYOffset) {
                $scrollTop = window.pageYOffset;
                $wrap.css({
                    top: - ($scrollTop)
                });
            }
            $docEl.css({
                height: "100%",
                overflow: "hidden"
            });
        }

        $.unlockBody = function() {
            $docEl.css({
                height: "",
                overflow: ""
            });
            $wrap.css({
                top: ''
            });
            window.scrollTo(0, $scrollTop);
            window.setTimeout(function () {
                $scrollTop = null;
            }, 0);
        }
    }
    
};

$(document).ready(function(){
    comm.init();
});
