'use strict';

  printBMI('山根', 180, 54);
  printBMI('田中', 187, 58);
  printBMI('柴田', 156, 42);


    //本体の文
    function printBMI(name, height, weight) {
      let bmi = calcBMI(weight, height);
      document.write(name + '、おはよう<BR>');
      document.write('身長は、' + height +'cmです<BR>');
      document.write('体重は、' + weight +'kgです<BR>');
      document.write('私のBMIは、' + bmi +'です<BR>');
      document.write('さようなら<BR>');
      document.write('<BR>');
    }

    //BMIの計算 
    function calcBMI(weight, height) {
      return weight / (height/100)**2;
   
    }

    
    



