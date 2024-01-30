// Function to create a Promise that resolves with a random number or rejects.
function createPromise() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation with setTimeout.
    setTimeout(() => {
      // Generate a random number.
      let num = Math.random();
      if (num < 0.5) {
        // If the number is less than 0.5, resolve the Promise.
        console.log('Promise resolved with number:', num);
        resolve(num);
      } else {
        // If the number is 0.5 or greater, reject the Promise.
        console.log('Promise rejected with number:', num);
        reject(new Error('Number too large: ' + num));
      }
    }, 1000); // Wait for 1 second before executing the function inside setTimeout.
  });
}

// Function to test Promise chaining.
function testPromises() {
  createPromise()
    .then((result) => {
      // Log the result of the resolved Promise.
      console.log('Result:', result);
      // Return the result doubled.
      return result * 2;
    })
    .then((doubledResult) => {
      // Log the doubled result.
      console.log('Doubled Result:', doubledResult);
      // Return the doubled result doubled again.
      return doubledResult * 2;
    })
    .then((quadrupledResult) => {
      // Log the quadrupled result.
      console.log('Quadrupled Result:', quadrupledResult);
    })
    .catch((error) => {
      // Log any errors that occur during the Promise chain.
      console.error('Error occurred:', error.message);
    })
    .finally(() => {
      // Log a message indicating that the finally() block is executed regardless of Promise resolution.
      console.log('Finally block executed regardless of Promise resolution.');
    });
}

// Execute the testPromises function when the window loads.
window.onload = () => {
  console.log('Async operation initiated...');
  testPromises();
  console.log('...after Async operation initiated');
};
