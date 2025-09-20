// ===== Week 7 Assignment JavaScript =====
// Demonstrating scope, parameters, return values, and animation triggers

/**
 * Function to calculate the perimeter of a rectangle
 * - Demonstrates use of parameters and return values
 */
function calculatePerimeter(length, width) {
  let perimeter = 2 * (length + width); // local variable (function scope)
  return perimeter;
}

/**
 * Function that triggers the box animation
 */
function animateBox() {
  const box = document.getElementById("box");

  // Remove previous animation (so it can replay)
  box.classList.remove("animate");

  // Trigger reflow and re-add animation
  setTimeout(() => {
    box.classList.add("animate");
  }, 50);

  // Example usage of function with return value
  let result = calculatePerimeter(10, 5);
  console.log("Perimeter of rectangle: " + result);
}

// Add event listener to button
document.getElementById("animateBtn").addEventListener("click", animateBox);
