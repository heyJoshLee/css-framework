if ($("#page-wrapper").hasClass("useThemes")) {
  var themeColor =  $("#page-wrapper").attr("class").split(" ")[1].replace("theme-", "");
  var themeColorHex;
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
      themeColorHex = themeColor;
  }
  
  var themeColorArray = themeColor.split(",");
// Calculate the color pallete
  var themeColors = {
    lighter: (parseInt(themeColorArray[0]) + 80).toString() + "," + (parseInt(themeColorArray[1]) + 65).toString() + ","+ (parseInt(themeColorArray[2]) + 52).toString(),
    lighterGradArray: [(parseInt(themeColorArray[0]) + 80), (parseInt(themeColorArray[1]) + 65), (parseInt(themeColorArray[2]) + 52)],
    
    light: (parseInt(themeColorArray[0]) + 33).toString() + "," + (parseInt(themeColorArray[1]) + 29).toString() + ","+ (parseInt(themeColorArray[2]) + 24).toString(),
    lightGradArray: [(parseInt(themeColorArray[0]) + 33), (parseInt(themeColorArray[1]) + 29), (parseInt(themeColorArray[2]) + 24)],
    
    main: themeColorArray[0].toString() + "," + themeColorArray[1].toString() + ","+ themeColorArray[2].toString(),
    mainGradArray: [parseInt(themeColorArray[0]), parseInt(themeColorArray[1]), parseInt(themeColorArray[2])], 

    dark: (parseInt(themeColorArray[0]) - 25).toString() + "," + (parseInt(themeColorArray[1]) - 17).toString() + ","+ (parseInt(themeColorArray[2]) - 11).toString(),
    darkGradArray: [(parseInt(themeColorArray[0]) - 25),  (parseInt(themeColorArray[1]) - 17), (parseInt(themeColorArray[2]) - 11)],

    darker: (parseInt(themeColorArray[0]) - 16).toString() + "," + (parseInt(themeColorArray[1]) - 25).toString() + ","+ (parseInt(themeColorArray[2]) - 32).toString(),
    darkerGradArray: [(parseInt(themeColorArray[0]) - 16), (parseInt(themeColorArray[1]) - 25), (parseInt(themeColorArray[2]) - 32)]

  }


  $(".lighter").css("background-color", "rgb(" + themeColors.lighter + ")");
  $(".light").css("background-color", "rgb(" + themeColors.light + ")");
  $(".main").css("background-color", "rgb(" + themeColors.main + ")");
  $(".dark").css("background-color", "rgb(" + themeColors.dark + ")");
  $(".darker").css("background-color", "rgb(" + themeColors.darker + ")");


} // If end

  var gradHelper = [
                {
                selector: ".lighter-grad",
                colors: themeColors.lighter,
                array: themeColors.lighterGradArray 
                }, 
                {
                selector: ".light-grad",
                colors: themeColors.light,
                array: themeColors.lightGradArray 
                },
                {
                selector: ".main-grad",
                colors: themeColors.main,
                array: themeColors.mainGradArray
                },
                {
                selector: ".dark-grad",
                colors: themeColors.main,
                array: themeColors.darkGradArray
                },
                {
                selector: ".darker-grad",
                colors: themeColors.darker,
                array: themeColors.darkerGradArray
                }
                ];
  // Subtract values
  var sv = [10,20,30,40];
  var r, g, b;
  var counter = 0;
  for (counter; counter < gradHelper.length; counter += 1) {
    r = gradHelper[counter]["array"][0];
    g = gradHelper[counter]["array"][1];
    b = gradHelper[counter]["array"][2];

    // -webkit Chrome10+,Safari5.1
    $(gradHelper[counter].selector).css({"background": "-webkit-linear-gradient(top," +  "rgb(" + gradHelper[counter]["colors"] + ") 0%, " + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 49%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 100%)"
    });
    // -moz FF3.6+
    $(gradHelper[counter].selector).css({"background": "-moz-linear-gradient(top," +  "rgb(" + gradHelper[counter]["colors"] + ") 0%, " + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 49%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 100%)"
    });
    // -o Opera 11.10+
    $(gradHelper[counter].selector).css({"background": "-o-linear-gradient(top," +  "rgb(" + gradHelper[counter]["colors"] + ") 0%, " + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 49%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 100%)"
    });
    // -ms IE10+
    $(gradHelper[counter].selector).css({"background": "-ms-linear-gradient(top," +  "rgb(" + gradHelper[counter]["colors"] + ") 0%, " + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 49%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 100%)"
    });
    // Chrome,Safari4+ TO DO: test
    $(gradHelper[counter].selector).css({"background": "-webkit-gradient(linear, left top,, left bottom, color-stop( 0%, rgb(" + gradHelper[counter]["colors"] + ")), " + 
    "color-stop(30%,rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + "))," + 
    "color-stop(30%,rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + "))," + 
    "color-stop(49%,rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + "))," + 
    "color-stop(100%,rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + "))"
    });
    // -linear gradient W3C TO DO: test
    $(gradHelper[counter].selector).css({"background": "linear-gradient(to bottom ," +  "rgb(" + gradHelper[counter]["colors"] + ") 0%, " + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 30%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 49%," + 
    "rgb(" + (r - sv[0]).toString() + "," + (g - sv[1]).toString() + "," + (b - sv[2]).toString() + ") 100%)"
    });
  


    console.log(gradHelper[counter].selector);
    console.log(r + "," + g + "," + b);
  } // for
 