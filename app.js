let totalCost = 0;
let shopping = true;

while (shopping) {
  let choice = prompt(`Welcome to our store! Please select an item:
1. Apple - $2
2. Banana - $1
3. Orange - $3
Enter the item number:`);

  if (choice === "1") {
    let value = prompt(`How Much Apple You Want:
          1.  1kg = $2
          2.  2kg = $4
          3.  3kg = $6
          Enter the kgs number
            `);
    if (value === "1") {
      totalCost += 2;
      alert("You added an 1kg Apple to your cart.");
    } else if (value === "2") {
      totalCost += 4;
      alert("You added an 2kg Apple to your cart.");
    } else if (value === "3") {
      totalCost += 6;
      alert("You added an 3kg Apple to your cart.");
    } else {
      alert("we Dont have Much stock");
    }
  } else if (choice === "2") {
    let value = prompt(`How Much Banana You Want:
            1.  1kg = $1
            2.  2kg = $2
            3.  3kg = $3
            Enter the kgs number
              `);
    if (value === "1") {
      totalCost += 1;
      alert("You added an 1kg Banana to your cart.");
    } else if (value === "2") {
      totalCost += 2;
      alert("You added an 2kg Banana to your cart.");
    } else if (value === "3") {
      totalCost += 3;
      alert("You added an 3kg Banana to your cart.");
    } else {
      alert("we Dont have Much stock");
    }
  } else if (choice === "3") {
    let value = prompt(`How Much Orange You Want:
            1.  1kg = $3
            2.  2kg = $6
            3.  3kg = $9
            Enter the kgs number
              `);
    if (value === "1") {
      totalCost += 3;
      alert("You added an 1kg Orange to your cart.");
    } else if (value === "2") {
      totalCost += 3;
      alert("You added an 2kg Orange to your cart.");
    } else if (value === "3") {
      totalCost += 9;
      alert("You added an 3kg Orange to your cart.");
    } else {
      alert("we Dont have Much stock");
    }
  } else {
    alert("Invalid choice. Please try again.");
  }

  let continueShopping = prompt(
    "Do you want to add more items? (yes/no)"
  ).toLowerCase();
  if (continueShopping !== "yes") {
    shopping = false;
  }
}

alert(`Thank you for shopping! Your total cost is $${totalCost}.`);
