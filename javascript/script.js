var themeColor = "128,129,157";
var themeColorArray = themeColor.split(",");

var lighter = (parseInt(themeColorArray[0]) + 80).toString() + "," + (parseInt(themeColorArray[1]) + 65).toString() + ","+ (parseInt(themeColorArray[2]) + 52).toString();

var light = (parseInt(themeColorArray[0]) + 33).toString() + "," + (parseInt(themeColorArray[1]) + 29).toString() + ","+ (parseInt(themeColorArray[2]) + 24).toString();

var main = themeColorArray[0].toString() + "," + themeColorArray[1].toString() + ","+ themeColorArray[2].toString();

var dark = (parseInt(themeColorArray[0]) - 25).toString() + "," + (parseInt(themeColorArray[1]) - 17).toString() + ","+ (parseInt(themeColorArray[2]) - 11).toString();

var darker = (parseInt(themeColorArray[0]) - 16).toString() + "," + (parseInt(themeColorArray[1]) - 25).toString() + ","+ (parseInt(themeColorArray[2]) - 32).toString();


console.log(lighter);

$(".lighter").css("background-color", "rgb(" + lighter + ")");
$(".light").css("background-color", "rgb(" + light + ")");
$(".main").css("background-color", "rgb(" + main + ")");
$(".dark").css("background-color", "rgb(" + dark + ")");
$(".darker").css("background-color", "rgb(" + darker + ")");



/***
lighter
89B4D8
RGB: 137–180–216

light
5A90BC
RGB: 90–144–188


main
3973A4
RGB: 57–115–164

dark
206299
RGB: 32–98–153

darker
104979

RGB: 16–73–121

***/