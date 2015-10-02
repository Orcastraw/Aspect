$(document).ready(function() {
    $('.xb1,.n64,.wiiu,.ps4,.ds,.3ds,.gba,.gbc,.gc,.wii,.psp,.pc').click(function() {
     $('#rem').hide();
    });
});

$(document).ready(function() {
    $('.xb1,.n64,.wiiu,.ps4,.ds,.3ds,.gba,.gbc,.gc,.wii,.psp').click(function() {
     $('#pc').hide();
    });
});
$(document).ready(function() {
    $('.pc').click(function() {
     $('#pc').show();
     ranPic("pc")
    });
});
$(document).ready(function() {
    $('.pc,.n64,.wiiu,.ps4,.ds,.3ds,.gba,.gbc,.gc,.wii,.psp').click(function() {
     $('#xb1').hide();
    });
});
$(document).ready(function() {
    $('.xb1').click(function() {
     $('#xb1').show();
     ranPic("xb1")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.n64,.ps4,.ds,.3ds,.gba,.gbc,.gc,.wii,.psp').click(function() {
     $('#wiiu').hide();
    });
});
$(document).ready(function() {
    $('.wiiu').click(function() {
     $('#wiiu').show();
     ranPic("wiiu")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.wiiu,.n64,.ds,.3ds,.gba,.gbc,.gc,.wii,.psp').click(function() {
     $('#ps4').hide();
    });
});
$(document).ready(function() {
    $('.ps4').click(function() {
     $('#ps4').show();
     ranPic("ps4")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.wiiu,.ps4,.n64,.3ds,.gba,.gbc,.gc,.wii,.psp').click(function() {
     $('#ds').hide();
    });
});
$(document).ready(function() {
    $('.ds').click(function() {
     $('#ds').show();
     ranPic("ds")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.wiiu,.ps4,.ds,.n64,.gba,.gbc,.gc,.wii,.psp').click(function() {
     $('#tds').hide();
    });
});
$(document).ready(function() {
    $('.3ds').click(function() {
     $('#tds').show();
     ranPic("tds")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.wiiu,.ps4,.ds,.3ds,.n64,.gbc,.gc,.wii,.psp').click(function() {
     $('#gba').hide();
    });
});
$(document).ready(function() {
    $('.gba').click(function() {
     $('#gba').show();
     ranPic("gba")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.wiiu,.ps4,.ds,.3ds,.gba,.n64,.gc,.wii,.psp').click(function() {
     $('#gbc').hide();
    });
});
$(document).ready(function() {
    $('.gbc').click(function() {
     $('#gbc').show();
     ranPic("gbc")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.wiiu,.ps4,.ds,.3ds,.gba,.gbc,.n64,.wii,.psp').click(function() {
     $('#gc').hide();
    });
});
$(document).ready(function() {
    $('.gc').click(function() {
     $('#gc').show();
     ranPic("gc")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.wiiu,.ps4,.ds,.3ds,.gba,.gbc,.gc,.n64,.psp').click(function() {
     $('#wii').hide();
    });
});
$(document).ready(function() {
    $('.wii').click(function() {
     $('#wii').show();
     ranPic("wii")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.wiiu,.ps4,.ds,.3ds,.gba,.gbc,.gc,.wii,.n64').click(function() {
     $('#psp').hide();
    });
});
$(document).ready(function() {
    $('.psp').click(function() {
     $('#psp').show();
     ranPic("psp")
    });
});
$(document).ready(function() {
    $('.pc,.xb1,.wiiu,.ps4,.ds,.3ds,.gba,.gbc,.gc,.wii,.psp').click(function() {
     $('#n64').hide();
    });
});
$(document).ready(function() {
    
    $('.n64').click(function() {
     $('#n64').show();
     ranPic("n64")
    });
    
});

var pcPics = new Array("pc/pc1hd.png","pc/pc2hd.png")
var pc1Pics = new Array("pc/pc1sd.png","pc/pc2sd.png")
var xb1Pics = new Array("retro/ret1.png","retro/ret2.png")
var wiiuPics = new Array("wiiu/wiiu1.png","wiiu/wiiu2.png","wiiu/wiiu3.png")
var ps4Pics = new Array("ps4/ps31.png","ps4/ps32.png","ps4/ps33.png","ps4/ps41.png","ps4/ps42.png","ps4/ps43.png")
var dsPics = new Array("retro/ret1.png","retro/ret2.png")
var tdsPics = new Array("3ds/3ds1.png","3ds/3ds2.png","3ds/3ds3.png")
var gbaPics = new Array("gba/gba1.png","gba/gba2.png","gba/gba3.png")
var gbcPics = new Array("gbc/gbc1.png","gbc/gbc2.png","gbc/gbc3.png")
var gcPics = new Array("retro/ret1.png","retro/ret2.png")
var wiiPics = new Array("retro/ret1.png","retro/ret2.png")
var pspPics = new Array("psp/psp1.png","psp/psp2.png","psp/psp3.png")
var retPics = new Array("retro/ret1.png","retro/ret2.png")

function ranPic(system){
    if(system=="pc"){
        console.log("pc")
        var ran = Math.floor(Math.random() * pcPics.length);
        console.log(ran)
        document.getElementById("pcpic").src = pcPics[ran];
        document.getElementById("pc1pic").src = pc1Pics[ran];
    }
    if(system=="xb1"){
        console.log("xb1")
        var ran = Math.floor(Math.random() * retPics.length);
        console.log(ran)
        document.getElementById("xb1pic").src = retPics[ran];
    }
    if(system=="wiiu"){
        console.log("wiiu")
        var ran = Math.floor(Math.random() * wiiuPics.length);
        console.log(ran)
        document.getElementById("wiiupic").src = wiiuPics[ran];
    }
    if(system=="ps4"){
        console.log("ps4")
        var ran = Math.floor(Math.random() * ps4Pics.length);
        console.log(ran)
        document.getElementById("ps4pic").src = ps4Pics[ran];
    }
    if(system=="ds"){
        console.log("ds")
        var ran = Math.floor(Math.random() * retPics.length);
        console.log(ran)
        document.getElementById("dspic").src = retPics[ran];
    }
    if(system=="tds"){
        console.log("tds")
        var ran = Math.floor(Math.random() * tdsPics.length);
        console.log(ran)
        document.getElementById("tdspic").src = tdsPics[ran];
    }
    if(system=="gba"){
        console.log("gba")
        var ran = Math.floor(Math.random() * gbaPics.length);
        console.log(ran)
        document.getElementById("gbapic").src = gbaPics[ran];
    }
    if(system=="gbc"){
        console.log("gbc")
        var ran = Math.floor(Math.random() * gbcPics.length);
        console.log(ran)
        document.getElementById("gbcpic").src = gbcPics[ran];
    }
    if(system=="gc"){
        console.log("gc")
        var ran = Math.floor(Math.random() * retPics.length);
        console.log(ran)
        document.getElementById("gcpic").src = retPics[ran];
    }
    if(system=="wii"){
        console.log("wii")
        var ran = Math.floor(Math.random() * retPics.length);
        console.log(ran)
        document.getElementById("wiipic").src = retPics[ran];
    }
    if(system=="psp"){
        console.log("psp")
        var ran = Math.floor(Math.random() * pspPics.length);
        console.log(ran)
        document.getElementById("psppic").src = pspPics[ran];
    }
    if(system=="n64"){
        console.log("N64")
        var ran = Math.floor(Math.random() * retPics.length);
        console.log(ran)
        document.getElementById("n64pic").src = retPics[ran];
    }
    
}





