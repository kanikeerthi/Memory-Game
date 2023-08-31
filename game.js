// const selectors = {
//     boardContainer: document.querySelector('.board-container'),
//     board: document.querySelector('.board'),
//     moves: document.querySelector('.moves'),
//     timer: document.querySelector('.timer'),
//     start: document.querySelector('button'),
//     win: document.querySelector('.win')
// }
// const state = {
//     gameStarted: false,
//     flipcards: 0,
//     totalFlips: 0,
//     totalTime: 0,
//     loop: null
// }
// const shuffle = array => {
//     const emojiArray = [...array];
//     for (let i = emojiArray.length - 1; i > 0; i--) {
//         const randomIndex = Math.floor(Math.random() * (i + 1));
//         [emojiArray[i], emojiArray[randomIndex]] = [emojiArray[randomIndex], emojiArray[i]];
//     }
//     return emojiArray;
// };
// const pickRandom = (array, items) => {
//     const emojiArray = [...array];
//     return Array.from({ length: items }, () => {
//         const randomIndex = Math.floor(Math.random() * emojiArray.length);
//         return emojiArray.splice(randomIndex, 1)[0];
//     });
// };
// const generateGame = () => {
//     const dimensions = selectors.board.getAttribute('data-dimension')

//     const emojis = ['😇', '😊', '🤭', '😍', '😙', '😍', '😙', '😎'];
//     const picks = pickRandom(emojis, (dimensions * dimensions) / 2);
//     const items = shuffle([...picks, ...picks, ...picks]);
//     const cards = `
//         <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
//             ${items.map((item, i) => `
//                 <div class="card" onclick=cardFunction(${i})>
//                     <div class="card-front"></div>
//                     <div class="card-back">${item}</div>
//                 </div>
//             `).join('')}
//        </div>
//     `
//     const parser = new DOMParser().parseFromString(cards, 'text/html')

//     selectors.board.replaceWith(parser.querySelector('.board'))
// }
// const startGame = () => {
//     state.gameStarted = true
//     selectors.start.classList.add('disabled')

//     state.loop = setInterval(() => {
//         state.totalTime++

//         selectors.moves.innerText = `${state.totalFlips} moves`
//         selectors.timer.innerText = `time: ${state.totalTime} sec`
//     }, 1000)
// }
// const flipBackCards = () => {
//     document.querySelectorAll('.card:not(.matched)').forEach(card => {
//         card.classList.remove('flipped')
//     })
//     state.flipcards = 0
// }
// const flipCard = card => {
//     state.flipcards++
//     state.totalFlips++

//     if (!state.gameStarted) {
//         startGame()
//     }

//     if (state.flipcards <= 3) {
//         card.classList.add('flipped')
//     }

//     if (state.flipcards === 3) {
//         const flipcards = document.querySelectorAll('.flipped:not(.matched)');
//         const emojiValues = [...flipcards].map(card => card.querySelector('.card-back').innerText);

//         if (emojiValues[0] === emojiValues[1] && emojiValues[1] === emojiValues[2]) {
//             flipcards.forEach(card => {
//                 card.style.border = 'none';
//                 card.style.backgroundColor = 'turquoise';
//                 card.innerHTML = '';
//                 card.classList.add('matched');
//             });
//         }

//         setTimeout(() => {
//             flipBackCards();
//         }, 1000);
//     }

//     if (!document.querySelectorAll('.card:not(.flipped)').length) {
//         setTimeout(() => {
//             selectors.boardContainer.classList.add('flipped')
//             selectors.win.innerHTML = `
//                 <span class="win-text">
//                     You won!<br />
//                     with <span class="highlight">${state.totalFlips}</span> moves<br />
//                     under <span class="highlight">${state.totalTime}</span> seconds
//                 </span>
//             `

//             clearInterval(state.loop)
//         }, 1000)
//     }
// }
// const attachEventListeners = () => {
//     document.addEventListener('click', event => {
//         const eventTarget = event.target
//         const eventParent = eventTarget.parentElement

//         if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
//             flipCard(eventParent)
//         } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
//             startGame()
//         }
//     })
// }
// generateGame()
// attachEventListeners()

