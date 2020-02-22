
    function fadeIn() {
        var scrolled = $(window).scrollTop();
        // 視窗，頁面的可視範圍
        $(".appear").each(function(){
        var current = $(this), // 此元素
            w_height = $(window).outerHeight(), //視窗高度
            offsetTop = current.offset().top; //此元素離頂部距離
        // 計算高度差
        // 當元素進入視窗後，添加class
        if (scrolled + w_height +50 > offsetTop) {
            current.addClass("fadeIn");
        } else {
            current.removeClass("fadeIn");
        }
        });
    }
    $(window).on("scroll", fadeIn);
   
    
 //進場由左進入效果
    function fadeInLeft() {
        var scrolled = $(window).scrollTop();
        $(".movefromLeft").each(function(){
        var current = $(this),
            w_height = $(window).outerHeight(),
            offsetTop = current.offset().top;
        if (scrolled + w_height +50 > offsetTop) {
            current.addClass("fadeInLeft");
        } else {
            current.removeClass("fadeInLeft");
        }
        });
    }
    $(window).on("scroll", fadeInLeft);
  
    
  //進場由右進入效果
    function fadeInRight() {
        var scrolled = $(window).scrollTop();
        $(".movefromRight").each(function(){
        var current = $(this),
            w_height = $(window).outerHeight(),
            offsetTop = current.offset().top;
        if (scrolled + w_height +50 > offsetTop) {
            current.addClass("fadeInRight");
        } else {
            current.removeClass("fadeInRight");
        }
        });
    }
    $(window).on("scroll", fadeInRight);
  
    
    
  //進場由上往下效果
    function fadeInDown() {
        var scrolled = $(window).scrollTop();
        $(".movefromTop").each(function(){
        var current = $(this),
            w_height = $(window).outerHeight(),
            offsetTop = current.offset().top;
        if (scrolled + w_height +50 > offsetTop) {
            current.addClass("fadeInDown");
        } else {
            current.removeClass("fadeInDown");
        }
        });
    }
    $(window).on("scroll", fadeInDown);
  
    
    
  //進場fadein效果
    function fadeInUp() {
        var scrolled = $(window).scrollTop();
        $(".movefrombottom").each(function(){
        var current = $(this),
            w_height = $(window).outerHeight(),
            offsetTop = current.offset().top; 
        if (scrolled + w_height +200 > offsetTop) {
            current.addClass("fadeInUp");
        } else {
            current.removeClass("fadeInUp");
        }
        });
    }
    $(window).on("scroll", fadeInUp);
  

  
    //進場變大效果
        function fadeInUpBig() {
        var scrolled = $(window).scrollTop();
        $(".appeartoBig").each(function(){
            var current = $(this),
            w_height = $(window).outerHeight(),
            offsetTop = current.offset().top;
            if (scrolled + w_height +200 > offsetTop) {
            current.addClass("fadeInUpBig");
            } else {
            current.removeClass("fadeInUpBig");
            }
        });
    }
    $(window).on("scroll", fadeInUpBig);