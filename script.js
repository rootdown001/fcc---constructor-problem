console.log('greetings from script.js');

// *****************
//function onClickEvent() {
// *****************

function truthCheck(collection, pre) {


  let answer;
// let arr = [{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}];


for (let i in collection) {
  //console.log(collection[i])
  //console.log(collection[i][pre])

  if (collection[i][pre]) {    
    console.log("yes");
    answer = true;
  } else {
    answer = false;
    return answer
  }


} 

return answer;

}




console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"));

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));



// *****************
//}
// *****************