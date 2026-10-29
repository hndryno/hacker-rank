/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s = integer, starting point, sam house location
 *  2. INTEGER t = integer, ending location of Sam's house location
 *  3. INTEGER a = integer, location of the Apple tree
 *  4. INTEGER b = integer, location of the Apple tree
 *  5. INTEGER_ARRAY apples = distances at which each apple falls from the tree
 *  6. INTEGER_ARRAY oranges = distances at which each oranges falls from the tree
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleOnSamHouse = 0;
    let orangeOnSamHouse = 0;
    let startingPointApple = a;
    let startingPointOrange = b; 
    
    // apple
    for (let i = 0; i < apples.length; i++) {
      const appleCoordinates = startingPointApple + apples[i];
      if (appleCoordinates >= s && appleCoordinates <= t) {
        appleOnSamHouse += 1;
      } 
    }
    
    //orange
    for (let i = 0; i < oranges.length; i++) {
      const orangeCoordinates = startingPointOrange + oranges[i];
      if (orangeCoordinates >= s && orangeCoordinates <= t) {
        orangeOnSamHouse += 1;
      } 
    }

    console.log(appleOnSamHouse);
    console.log(orangeOnSamHouse);
}

countApplesAndOranges(
  5, 7, 
  1, 10, 
  [3, 4, 5], 
  [9, 12, 14]
)
