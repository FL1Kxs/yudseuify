

// let randomTextcolor = document.querySelector('.color');
// let score = document.querySelector('.span');
// let start = document.querySelector('.startGame');
// let arrowColors = ['red', 'green', 'yellow', 'blue']
// let rgbColors = ['rgb(255, 0, 0)', 'rgb(0, 128, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)']

// let buttons = document.querySelectorAll('.button')

// let random = Math.floor(Math.random() * arrowColors.length)
// let counter = 0


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function colorButtons(e) {

//         let colors = window.getComputedStyle(e.target).backgroundColor

//         switch (colors) {
//             case 'rgb(255, 0, 0)':
//                 if (colors === 'red') {
//                        randomTextcolor.innerHTML === 'red' {
//                         score.innerHTML = ++counter
//                         randomButtonColor()
//                     } else {
//                         score.innerHTML = --counter
//                         randomButtonColor()
//                     }

//                 }
//                 break;
//             case 'colors':
//                 if (colors === 'rgb(0, 128, 0)') {
//                     if (randomTextcolor.innerHTML === 'green') {
//                         score.innerHTML = ++counter
//                         randomButtonColor()
//                     } else {
//                         score.innerHTML = --counter
//                         randomButtonColor()
//                     }

//                 }              
//                 break;
//                 case 'colors':
//                     if (colors === 'rgb(0, 0, 255)') {
//                         if (randomTextcolor.innerHTML === ' yellow') {
//                             score.innerHTML = ++counter
//                             randomButtonColor()
//                         } else {
//                             score.innerHTML = --counter
//                             randomButtonColor()
//                         }
    
//                     }
//                     break;
//                     case 'colors':
//                         if (colors === 'rgb(255, 255, 0') {
//                             if (randomTextcolor.innerHTML === 'blue') {
//                                 score.innerHTML = ++counter
//                                 randomButtonColor()
//                             } else {
//                                 score.innerHTML = --counter
//                                 randomButtonColor()
//                             }
        
//                         }
//                         break;
//         }





//     })
// }

// function randomButtonColor() {
//     let random = Math.floor(Math.random() * arrowColors.length)
//     randomTextcolor.innerHTML = arrowColors[random]
// }



// start.addEventListener('click', function startGame() {
//     randomTextcolor.innerText = arrowColors[random];
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].disabled = false
//     }
// })








// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function colorButtons() {
//         let random = Math.floor(Math.random() * arrowColors.length)
//         console.log(window.getComputedStyle(buttons[i]).backgroundColor)
//     })
// }

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function colorButtons() {
//         let random = Math.floor(Math.random() * arrowColors.length)
//         console.log(window.getComputedStyle(buttons[i]).backgroundColor)
//         buttons[i] === ['rgb(255, 0, 0)','rgb(0, 128, 0)','rgb(0, 0, 255)','rgb(255, 255, 0)']
//     })
// }













let input = document.querySelector('input')
let btn = document.querySelector('button')
let bd = document.querySelector('body')
btn.addEventListener('click', () => {
    bd.style.backgroundColor = input.value
})














