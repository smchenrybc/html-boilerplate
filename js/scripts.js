$.fn.myCustomMethod = function() {
  console.log("This is a custom jQuery method!");
  return this; // Maintain chainability
};

// Usage:
$(".box").myCustomMethod();
