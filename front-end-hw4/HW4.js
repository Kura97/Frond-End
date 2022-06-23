// Q1: Using forEach log out each of my friends but with their name all lower-cased. Use the <str>.toLowerCase() method.
console.log("\n----------- Q1: -----------")
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});


// Q2: Create an array that has the numbers of the array numbers squared
console.log("\n----------- Q2: -----------")

const numbers = [1, 5, 8]
const numbersSquared = numbers.map(num => num ** 2 );
console.log(numbers+" --> "+numbersSquared)


//Q3: Use map to create a new array that adds the string " is awesome" to each element in the array.
console.log("\n----------- Q3: -----------")
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const instructorsNew = instructors.map(instructors => instructors + " is awesome")
console.log(instructorsNew)


//Q4: Given the array nums try to count the number of even numbers using reduce() and put it in the variable evenNumbers
console.log("\n----------- Q4: -----------")
const nums = [25, 6, 8, 3];



//Q5: Filter out all "jerks" , ALSO Put them in an array called jerks
console.log("\n----------- Q5: -----------")
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter(name =>
    {
   return name === "jerks";
 });
 console.log(jerks)



 //Q6: Using arrow methods, do the following:
    // Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4
 console.log("\n----------- Q6-1: -----------")
 numsQ6 = [8, 2, 2, 4]
let average = (numsQ6) => numsQ6.reduce((a, b) => a + b) / numsQ6.length;
console.log(average(numsQ6));


    // Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"
    console.log("\n----------- Q6-2: -----------")
    const reverse =(word => word.split("").reverse().join(""));
    console.log(reverse("caterpillar"));



// Q7 Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes." Maybe the join method will be helpful here
console.log("\n----------- Q7: -----------")
const favmovie = {
    name: "Puff the Magic Dragon",
    stars : ["Puff", "Jackie", "LivingSneezes"],
    duration : 45,
    informationmovie: function()
     {
        return (`${this.name} lasts for ${this.duration} minutes stars ${this.stars}`)
      }
  };

  console.log(favmovie.informationmovie())

  