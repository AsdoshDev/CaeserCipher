function rot13(text) { // LBH QVQ VG!
  let str = "";
  let splitArr = text.split('');
  splitArr.forEach(function(letter){
      let index = alphabet.indexOf(letter)
    if(index > -1){
       let index = alphabet.indexOf(letter);
    let newIndex = (index + 13) > 25 ? (index + 13 - 26) : (index + 13);
    str+= alphabet[newIndex];
    }
    else{
     str+= letter; 
    }
  
  });
   return str;
}

let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];




//other solutions :

  // Solution with Regular expression and Array of ASCII character codes
    function rot13(str) {
      var rotCharArray = [];
      var regEx = /[A-Z]/ ;
      str = str.split("");
      for (var x in str) {
        if (regEx.test(str[x])) {
          // A more general approach
          // possible because of modular arithmetic
          // and cyclic nature of rot13 transform
          console.log("before " + str[x] +  " - " +str[x].charCodeAt());
          /* to achieve the cyclic value if code reaches the end of the cycle */
          rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
          console.log((str[x].charCodeAt() - 65 + 13) % 26 + 65)
        } else {
          rotCharArray.push(str[x].charCodeAt());
        }
      }
      console.log(rotCharArray);
      str = String.fromCharCode.apply(String, rotCharArray);
      return str;
    }

    // Change the inputs below to test
    console.log(rot13("LBH QVQ VG!"));


//one more



    function rot13(str) {
      // Split str into a character array
      return str.split('')
      // Iterate over each character in the array
        .map.call(str, function(char) {
          // Convert char to a character code
          x = char.charCodeAt(0);
          // Checks if character lies between A-Z
          if (x < 65 || x > 90) {
            return String.fromCharCode(x);  // Return un-converted character
          }
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places
          else if (x < 78) {
            return String.fromCharCode(x + 13);
          }
          // Otherwise shift the character 13 places backward
          return String.fromCharCode(x - 13);
        }).join('');  // Rejoin the array into a string
    }
