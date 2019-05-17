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
