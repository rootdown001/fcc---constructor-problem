console.log('greetings from script.js');

// *****************
//function onClickEvent() {
// *****************

function orbitalPeriod(arr) {

    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    function x(num) {
        let answer = 2 * Math.PI * (Math.sqrt(((earthRadius + num) ** 3)/GM));
        return Math.round(answer)
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        let alt = arr[i].avgAlt;
        delete arr[i].avgAlt
        arr[i].orbitalPeriod = x(alt);
        
        console.log(arr[i])
    }



    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);



// *****************
//}
// *****************