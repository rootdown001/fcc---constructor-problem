function palindrome(str) {
  
    function editString(sBefore) {
      let sAfter = sBefore.toLowerCase();
      let myRegex = /[a-z0-9]/ig;
      return sAfter
                    .match(myRegex)
                    .join("");
    }
    

    let newStr = editString(str);
    let arr = newStr.split("");
    let halfLen = Math.floor(arr.length/2);
    let answer = true; 

    for (let i = 0; i < halfLen; i++ ) {
        if (arr[i] !== arr[(arr.length -1)-i]) {
            return false;
        }
    }



    return true;
  }
  
  
  console.log(palindrome("2_A3*3#A"))
  palindrome("eye");