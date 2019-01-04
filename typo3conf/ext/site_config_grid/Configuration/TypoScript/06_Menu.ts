lib.mainmenu = HMENU
lib.mainmenu.entryLevel = 0
lib.mainmenu.1 = TMENU
lib.mainmenu.1{
    wrap = <ul><li class="line"></li>|</ul>
    noBlur = 1
    expAll = 1
    NO {
        wrapItemAndSub = <li><div>|</div><li class="line"></li></li>
        stdWrap.cObject = COA
        stdWrap.cObject {
            10 = TEXT
            10.field = title
            10.wrap = <h2>|</h2>
            20 = TEXT
            20.field = subtitle
            20.wrap = <h3>|</h3>
        }

    }
    ACT = 1
    ACT{
        wrapItemAndSub = <li class="active"><div>|</div><li class="line"></li></li>
        stdWrap.cObject = COA
        stdWrap.cObject {
            10 = TEXT
            10.field = title
            10.wrap = <h2>|</h2>
            20 = TEXT
            20.field = subtitle
            20.wrap = <h3>|</h3>
        }
    }
}


//Language Typoscript
lib.langmenu=HMENU
lib.langmenu.special=language
lib.langmenu.special.value=0,1
lib.langmenu.special.noramlWhenNoLanguage = 0
lib.langmenu.1=TMENU
lib.langmenu.1{
    wrap=<ul class="language_menu">|</ul>
    noBlur=1
    NO=1
    NO{ 
        stdWrap.override  = EN || HI
        linkWrap=<li>|</li>
       
    }
    ACT = 1
    ACT{
        stdWrap.override  = EN || HI
        linkWrap = <li class="active">|</li>
            
    }
}

//Side Menu
lib.sidemenu=HMENU
lib.sidemenu.special=list
lib.sidemenu.special.value=75,76
lib.sidemenu.1=TMENU
lib.sidemenu.1{
    wrap=<ul class="sidemenu">|</ul>
    noBlur=1
    expAll = 1
    NO {
        linkWrap = <li>|</li>
    }
    ACT = 1
    ACT{
        linkWrap = <li class="active">|</li>    
    }
}



