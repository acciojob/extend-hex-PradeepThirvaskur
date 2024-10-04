const extendHex = (shortHex) => {
  // write your code here
	 //remove the # in shortHex
            shortHex = shortHex.replace('#','');

           // in order to repeat the character again 
            FullHex = shortHex.split('').map((char)=>char+char).join('');
          
           //in order to append the removed '#' code

           return '#'+FullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
