// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   // addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
let steaks = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[6], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[7], '#steak', () => {
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
let potatoes = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[2], '#mashPotatoes').then(() =>{
    addFood(mashPotatoes[1], '#mashPotatoes').then(()=>{
      addFood(mashPotatoes[3], '#mashPotatoes').then(()=>{
        addFood(mashPotatoes[4], '#mashPotatoes')
      })
    })
  })
  
});

// Iteration 3 using async/await

async function makeFood(step,id) {
    // // ... your code here
    for (let i = 0; i <step.length; i++) {
      let food = await addFood(step[i],'#brusselSprouts')
    }
  }

  const eachStep = brusselSprouts
  console.log(eachStep)
  makeFood(eachStep)

// const brusselImage = new Image()
// brusselImage.src = "../images/brusselSprouts.jpg"

// const mashImage = new Image()
// mashImage.src = "../images/mashPotatoes.jpg"

// const steakImage = new Image()
// steakImage.src = "../images/steak.jpg"

// const table = document.getElementById("table")


async function alertDinner() {
  let alerta = await Promise.all(steaks, potatoes, makeFood(eachStep))
  alert('Dinner is served!')
}

alertDinner()