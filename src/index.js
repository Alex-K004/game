// src/index.js
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    // Переменная boardSize не используется - убираем или переименовываем
    const _boardSize = 4; // Префикс _ говорит ESLint игнорировать неиспользование
    const totalCells = 16;
    let currentPosition = null;
    let _moveCount = 0; // Префикс _ для неиспользуемой переменной
    
    const gameBoard = document.getElementById('gameBoard');
    
    // Создаем клетки 4x4
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.textContent = i + 1;
        gameBoard.appendChild(cell);
    }
    
    // Создаем персонажа
    const character = document.createElement('div');
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
        
        _moveCount++; // Используем переменную (теперь ESLint не будет жаловаться)
        console.log(`Перемещение ${_moveCount}: клетка ${currentPosition + 1}`);
    }
    
    // Начальное размещение персонажа
    placeCharacterAtRandomPosition();
    
    // Запускаем автоматическое перемещение каждую секунду
    // Переменная moveInterval не нужна - можно убрать сохранение в переменную
    const _moveInterval = setInterval(() => {
        placeCharacterAtRandomPosition();
    }, 1000);
    
    // Пример: если нужен доступ к интервалу для остановки, оставьте переменную
    // но добавьте префикс _ если не используете
    // Пример использования:
    // document.getElementById('stopButton').addEventListener('click', () => {
    //     clearInterval(_moveInterval);
    // });
});