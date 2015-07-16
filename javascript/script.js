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
      console.log(themeColor);
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


} 


console.log(navigator.appCodeName)


  // Background Gradients  245,141,133  237,68,53     237,68,53     238,53,32   207,50,19)
  //    
  
  // .lighter                                                                                                    -8 - 73 -80    -8 -73 -80   -7 -88 -101  -38 -91 -114
  var r = themeColors.lighterGradArray[0];
  var g = themeColors.lighterGradArray[1];
  var b = themeColors.lighterGradArray[2];
  
  $(".lighter-grad").css({"background": "-webkit-linear-gradient(top," +  "rgb(" + themeColors.lighter + ") 0%, " + 
    "rgb(" + (r - 10).toString() + "," + (g - 10).toString() + "," + (b - 10).toString() + ") 30%," + 
    "rgb(" + (r - 20).toString() + "," + (g- 20).toString() + "," + (b - 20).toString() + ") 50%," + 
    "rgb(" + (r - 30).toString() + "," + (g - 30).toString() + "," + (b - 30).toString() + ") 70%," + 
    "rgb(" + (r - 40).toString() + "," + (g - 40).toString() + "," + (b - 40).toString() + ") 90%)",
  });
  $(".lighter-grad").css({"background": "-moz-linear-gradient(top," +  "rgb(" + themeColors.lighter + ") 0%, " + 
    "rgb(" + (r - 8).toString() + "," + (g - 73).toString() + "," + (b - 80).toString() + ") 30%," + 
    "rgb(" + (r - 8).toString() + "," + (g- 73).toString() + "," + (b - 80).toString() + ") 30%," + 
    "rgb(" + (r - 7).toString() + "," + (g - 88).toString() + "," + (b - 101).toString() + ") 49%," + 
    "rgb(" + (r - 38).toString() + "," + (g - 91).toString() + "," + (b  -114).toString() + ") 100%)",
  });

  // .light

  r = themeColors.lightGradArray[0];
  g = themeColors.lightGradArray[1];
  b = themeColors.lightGradArray[2];
  console.log(themeColors.lightGradArray);

  $(".light-grad").css({"background": "-webkit-linear-gradient(top," +  "rgb(" + themeColors.lighter + ") 0%, " + 
    "rgb(" + (r - 8).toString() + "," + (g - 73).toString() + "," + (b - 80).toString() + ") 50%," + 
    "rgb(" + (r - 8).toString() + "," + (g- 73).toString() + "," + (b - 80).toString() + ") 50%," + 
    "rgb(" + (r - 7).toString() + "," + (g - 88).toString() + "," + (b - 101).toString() + ") 59%," + 
    "rgb(" + (r - 38).toString() + "," + (g - 91).toString() + "," + (b  -114).toString() + ") 100%)",
  });
  $(".light-grad").css({"background": "-moz-linear-gradient(top," +  "rgb(" + themeColors.lighter + ") 0%, " + 
    "rgb(" + (r - 8).toString() + "," + (g - 73).toString() + "," + (b - 80).toString() + ") 50%," + 
    "rgb(" + (r - 8).toString() + "," + (g- 73).toString() + "," + (b - 80).toString() + ") 50%," + 
    "rgb(" + (r - 7).toString() + "," + (g - 88).toString() + "," + (b - 101).toString() + ") 59%," + 
    "rgb(" + (r - 38).toString() + "," + (g - 91).toString() + "," + (b  -114).toString() + ") 100%)",
  });

  // .main

  r = themeColors.mainGradArray[0];
  g = themeColors.mainGradArray[1];
  b = themeColors.mainGradArray[2];
  console.log(themeColors.mainGradArray);

 $(".main-grad").css({"background": "-webkit-linear-gradient(top," +  "rgb(" + themeColors.main + ") 0%, " + 
    "rgb(" + (r - 10).toString() + "," + (g - 10).toString() + "," + (b - 10).toString() + ") 30%," + 
    "rgb(" + (r - 20).toString() + "," + (g- 20).toString() + "," + (b - 20).toString() + ") 50%," + 
    "rgb(" + (r - 30).toString() + "," + (g - 30).toString() + "," + (b - 30).toString() + ") 70%," + 
    "rgb(" + (r - 40).toString() + "," + (g - 40).toString() + "," + (b - 40).toString() + ") 90%)",
  });
  $(".light-grad").css({"background": "-moz-linear-gradient(top," +  "rgb(" + themeColors.main + ") 0%, " + 
    "rgb(" + (r - 8).toString() + "," + (g - 73).toString() + "," + (b - 80).toString() + ") 30%," + 
    "rgb(" + (r - 8).toString() + "," + (g- 73).toString() + "," + (b - 80).toString() + ") 30%," + 
    "rgb(" + (r - 7).toString() + "," + (g - 88).toString() + "," + (b - 101).toString() + ") 49%," + 
    "rgb(" + (r - 38).toString() + "," + (g - 91).toString() + "," + (b  -114).toString() + ") 100%)",
  });

  // .dark

  r = themeColors.darkGradArray[0];
  g = themeColors.darkGradArray[1];
  b = themeColors.darkGradArray[2];
  console.log(themeColors.darkGradArray);

  $(".dark-grad").css({"background": "-webkit-linear-gradient(top," +  "rgb(" + themeColors.dark + ") 0%, " + 
    "rgb(" + (r - 10).toString() + "," + (g - 10).toString() + "," + (b - 10).toString() + ") 30%," + 
    "rgb(" + (r - 20).toString() + "," + (g- 20).toString() + "," + (b - 20).toString() + ") 50%," + 
    "rgb(" + (r - 30).toString() + "," + (g - 30).toString() + "," + (b - 30).toString() + ") 70%," + 
    "rgb(" + (r - 40).toString() + "," + (g - 40).toString() + "," + (b - 40).toString() + ") 90%)",
  });
  $(".dark-grad").css({"background": "-moz-linear-gradient(top," +  "rgb(" + themeColors.dark + ") 0%, " + 
    "rgb(" + (r - 8).toString() + "," + (g - 73).toString() + "," + (b - 80).toString() + ") 30%," + 
    "rgb(" + (r - 8).toString() + "," + (g- 73).toString() + "," + (b - 80).toString() + ") 30%," + 
    "rgb(" + (r - 7).toString() + "," + (g - 88).toString() + "," + (b - 101).toString() + ") 49%," + 
    "rgb(" + (r - 38).toString() + "," + (g - 91).toString() + "," + (b  -114).toString() + ") 100%)",
  });

  // .dark

  r = themeColors.darkerGradArray[0];
  g = themeColors.darkerGradArray[1];
  b = themeColors.darkerGradArray[2];
  console.log(themeColors.darkerGradArray);

  $(".darker-grad").css({"background": "-webkit-linear-gradient(top," +  "rgb(" + themeColors.darker + ") 0%, " + 
    "rgb(" + (r - 10).toString() + "," + (g - 10).toString() + "," + (b - 10).toString() + ") 30%," + 
    "rgb(" + (r - 20).toString() + "," + (g- 20).toString() + "," + (b - 20).toString() + ") 50%," + 
    "rgb(" + (r - 30).toString() + "," + (g - 30).toString() + "," + (b - 30).toString() + ") 70%," + 
    "rgb(" + (r - 40).toString() + "," + (g - 40).toString() + "," + (b - 40).toString() + ") 90%)",
  });
  $(".darker-grad").css({"background": "-moz-linear-gradient(top," +  "rgb(" + themeColors.darker + ") 0%, " + 
    "rgb(" + (r - 10).toString() + "," + (g - 10).toString() + "," + (b - 10).toString() + ") 80%," + 
    "rgb(" + (r - 20).toString() + "," + (g- 20).toString() + "," + (b - 20).toString() + ") 90%," + 
    "rgb(" + (r - 30).toString() + "," + (g - 30).toString() + "," + (b - 30).toString() + ") 95%," + 
    "rgb(" + (r - 40).toString() + "," + (g - 40).toString() + "," + (b - 40).toString() + ") 100%)",
  });
  



     // background: -moz-linear-gradient(top,  #f2f288 0%, #e6e939 30%, #e6e939 30%, #e3ea24 49%, #b9cb17 100%); /* FF3.6+ */


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