

// This method takes the current position and the number of columns and return the position of the cards for the four columns.
function convertIntoFourColumnLayout(position , column){

    
    var x = position.x
    var y = position.y
   
    var currentColumns = column
    var newColumnsCount = 4

    var positionOfCard = y * currentColumns + x + 1
    
    var newX = positionOfCard % newColumnsCount
    var newY = Math.floor(positionOfCard / newColumnsCount)
    
    if (newX === 0){
        newX = 3
        newY = newY - 1
    }else{
        newX = newX - 1
    }
    //console.log("current position: ",x,y , "new position: ",newX,newY , "position: ", positionOfCard)
    return {x: newX , y : newY , w : position.w , h : position.h , i:position.i}
}

export default convertIntoFourColumnLayout