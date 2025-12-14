// src/index.js
import './styles.css';
import characterImage from './assets/character.png';  // импортируем картинку

document.addEventListener('DOMContentLoaded', () => {
  const totalCells = 16;
  let currentPosition = null;
  let moveCount = 0;  // добавим счетчик перемещений
  
  const gameBoard = document.getElementById('gameBoard');
  
  // Создаем клетки 4x4
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.textContent = i + 1;
    gameBoard.append(cell);
  }
  
  // Создаем персонажа с КАРТИНКОЙ
  const character = document.createElement('img');
  character.src = characterImage;  // используем импортированную картинку
  character.alt = 'Персонаж';
  character.className = 'character';
  character.id = 'gameCharacter';
  
  // Функция для размещения персонажа в случайной позиции
  function placeCharacterAtRandomPosition() {
    if (currentPosition !== null) {
      const currentCell = document.querySelector(`.cell[data-index="${currentPosition}"]`);
      if (currentCell) {
        currentCell.classList.remove('active');
      }
    }
    
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * totalCells);
    } while (newPosition === currentPosition);
    
    currentPosition = newPosition;
    
    const newCell = document.querySelector(`.cell[data-index="${currentPosition}"]`);
    if (newCell) {
      newCell.appendChild(character);
      newCell.classList.add('active');
    }
    
    moveCount++;
    console.log(`Перемещение ${moveCount}: клетка ${currentPosition + 1}`);
  }
  
  // Начальное размещение персонажа
  placeCharacterAtRandomPosition();
  
  // Запускаем автоматическое перемещение каждую секунду
let intervalId = setInterval(() => {
    placeCharacterAtRandomPosition();
}, 1000);

// Когда нужно остановить интервал
clearInterval(intervalId);
});