



if ($("#page-wrapper").hasClass("useThemes")) {
  var themeColor =  $("#page-wrapper").attr("class").split(" ")[1].replace("theme-", "");

  if (themeColor[0] == "#") {
        function hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
      }
      themeColor = hexToRgb(themeColor).r + "," + hexToRgb(themeColor).g + "," + hexToRgb(themeColor).b ;
      console.log(themeColor);
  }
  
  var themeColorArray = themeColor.split(",");
// Calculate the color pallete
  var themeColors = {
    lighter: (parseInt(themeColorArray[0]) + 80).toString() + "," + (parseInt(themeColorArray[1]) + 65).toString() + ","+ (parseInt(themeColorArray[2]) + 52).toString(),
    light: (parseInt(themeColorArray[0]) + 33).toString() + "," + (parseInt(themeColorArray[1]) + 29).toString() + ","+ (parseInt(themeColorArray[2]) + 24).toString(),
    main: themeColorArray[0].toString() + "," + themeColorArray[1].toString() + ","+ themeColorArray[2].toString(),
    dark: (parseInt(themeColorArray[0]) - 25).toString() + "," + (parseInt(themeColorArray[1]) - 17).toString() + ","+ (parseInt(themeColorArray[2]) - 11).toString(),
    darker: (parseInt(themeColorArray[0]) - 16).toString() + "," + (parseInt(themeColorArray[1]) - 25).toString() + ","+ (parseInt(themeColorArray[2]) - 32).toString()
  }

$(".lighter").css("background-color", "rgb(" + themeColors.lighter + ")");
$(".light").css("background-color", "rgb(" + themeColors.light + ")");
$(".main").css("background-color", "rgb(" + themeColors.main + ")");
$(".dark").css("background-color", "rgb(" + themeColors.dark + ")");
$(".darker").css("background-color", "rgb(" + themeColors.darker + ")");


} 








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