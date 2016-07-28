var numberEl = document.getElementById('number');
var numeralEl = document.getElementById('roman-numeral')

function convertRoman() {
  var num = numberEl.value.replace(/,/g, "");
  var firstDigit = num.slice(-1);
  var secondDigit = num.slice(-2,-1);
  var thirdDigit = num.slice(-3,-2);
  var fourthDigit = num.slice(-4,-3);
  var fifthDigit = num.slice(-5,-4);
  var sixthDigit = num.slice(-6,-5);

  var romanNumeral = convSixthDigit(sixthDigit) + convFifthDigit(fifthDigit) + convFourthDigit(fourthDigit) + convThirdDigit(thirdDigit) + convSecondDigit(secondDigit) + convFirstDigit(firstDigit);

  numeralEl.innerHTML = romanNumeral;
}

function convFirstDigit(num) {
  if (num) {
    switch (parseInt(num)) {
      case 0:
        return "";
        break;
      case 1:
        return "I";
        break;
      case 2:
        return "II";
        break;
      case 3:
        return "III";
        break;
      case 4:
        return "IV";
        break;
      case 5:
        return "V";
        break;
      case 6:
        return "VI";
        break;
      case 7:
        return "VII";
        break;
      case 8:
        return "VIII";
        break;
      case 9:
        return "IX";
        break;
    }
  } else {
    return "";
  }
}

function convSecondDigit(num) {
  if (num) {
    switch (parseInt(num)) {
      case 0:
        return "";
        break;
      case 1:
        return "X";
        break;
      case 2:
        return "XX";
        break;
      case 3:
        return "XXX";
        break;
      case 4:
        return "XL";
        break;
      case 5:
        return "L";
        break;
      case 6:
        return "LX";
        break;
      case 7:
        return "LXX";
        break;
      case 8:
        return "LXXX";
        break;
      case 9:
        return "XC";
        break;
    }
  } else {
    return "";
  }
}

function convThirdDigit(num) {
  if (num) {
    switch (parseInt(num)) {
      case 0:
        return "";
        break;
      case 1:
        return "C";
        break;
      case 2:
        return "CC";
        break;
      case 3:
        return "CCC";
        break;
      case 4:
        return "CD";
        break;
      case 5:
        return "D";
        break;
      case 6:
        return "DC";
        break;
      case 7:
        return "DCC";
        break;
      case 8:
        return "DCCC";
        break;
      case 9:
        return "CM";
        break;
    }
  } else {
    return "";
  }
}

function convFourthDigit(num) {
  if (num) {
    switch (parseInt(num)) {
      case 0:
        return "";
        break;
      case 1:
        return "M";
        break;
      case 2:
        return "MM";
        break;
      case 3:
        return "MMM";
        break;
      case 4:
        return "M<span>V</span>";
        break;
      case 5:
        return "<span>V</span>";
        break;
      case 6:
        return "<span>VI</span>";
        break;
      case 7:
        return "<span>VII</span>";
        break;
      case 8:
        return "<span>VIII</span>";
        break;
      case 9:
        return "M<span>X</span>";
        break;
    }
  } else {
    return "";
  }
}

function convFifthDigit(num) {
  if (num) {
    switch (parseInt(num)) {
      case 0:
        return "";
        break;
      case 1:
        return "<span>X</span>";
        break;
      case 2:
        return "<span>XX</span>";
        break;
      case 3:
        return "<span>XXX</span>";
        break;
      case 4:
        return "<span>XL</span>";
        break;
      case 5:
        return "<span>L</span>";
        break;
      case 6:
        return "<span>LX</span>";
        break;
      case 7:
        return "<span>LXX</span>";
        break;
      case 8:
        return "<span>LXXX</span>";
        break;
      case 9:
        return "<span>XC</span>";
        break;
    }
  } else {
    return "";
  }
}

function convSixthDigit(num) {
  if (num) {
    switch (parseInt(num)) {
      case 0:
        return "";
        break;
      case 1:
        return "<span>C</span>";
        break;
      case 2:
        return "<span>CC</span>";
        break;
      case 3:
        return "<span>CCC</span>";
        break;
      case 4:
        return "<span>CD</span>";
        break;
      case 5:
        return "<span>D</span>";
        break;
      case 6:
        return "<span>DC</span>";
        break;
      case 7:
        return "<span>DCC</span>";
        break;
      case 8:
        return "<span>DCCC</span>";
        break;
      case 9:
        return "<span>CM</span>";
        break;
    }
  } else {
    return "";
  }
}
