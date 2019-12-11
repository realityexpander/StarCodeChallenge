//Write a Javascript program to output a diamond pattern. Program will take as input n number of rows where n must be odd. The max number of columns will be the same as the number of rows.


//   *
//  ***
// *****
//*******
// *****
//  ***
//   *
   
function diamond(numRows) {

  if (numRows % 2 == 0) {
    console.log("invalid number of rows, must be odd")
    return
  }

  let stars = ""
  let spaces = ""
  let i=0
  let j=0

  for(i=1; i<=numRows; i+= 2) {
    numSpaces = (numRows-i)/2
    spaces=""
    for(j=0; j<numSpaces; j++) {
      spaces += " "
    }

    stars=""
    for(j=0; j<i; j++) {
      stars += "*"
    }

    console.log(spaces + stars)
  }

  for(i=numRows-2; i>0; i-=2) {
    numSpaces = (numRows-i)/2
    spaces=""
    for(j=0; j<numSpaces; j++) {
      spaces += " "
    }

    stars=""
    for(j=0; j<i; j++) {
      stars += "*"
    }
    console.log(spaces + stars)
  }
}

diamond(7)
 
 
 
 
