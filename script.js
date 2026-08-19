// 1. የ HTML ኤለመንቶችን መያዝ (ከ HTML ID ጋር እንዲመሳሰል ተ አስተካክሏል)
let countDisplay = document.getElementById('count');
let plusBtn = document.getElementById('increment'); // HTML ላይ increment ስለሆነ
let minusBtn = document.getElementById('decrement'); // HTML ላይ decrement ስለሆነ
let resetBtn = document.getElementById('reset'); // HTML ላይ reset ስለሆነ

// 2. ከዚህ በፊት ሴቭ የተደረገ ቁጥር ካለ ከ localStorage መውሰድ
let savedCount = localStorage.getItem('myNumber');

// ሴቭ የተደረገ ቁጥር ካለ እሱን መውሰድ፤ ከሌለ በ 0 መጀመር
let count = savedCount ? parseInt(savedCount) : 0;
countDisplay.textContent = count;

// 3. ቁጥር ሲጨምር (+) ሴቭ ማድረግ
plusBtn.addEventListener('click', function() {
  count++;
  countDisplay.textContent = count;
  localStorage.setItem('myNumber', count);
});

// 4. ቁጥር ሲቀነስ (-) ሴቭ ማድረግ
minusBtn.addEventListener('click', function() {
  count--;
  countDisplay.textContent = count;
  localStorage.setItem('myNumber', count);
});

// 5. Reset አዝራር ሲነካ ወደ 0 መመለስ
resetBtn.addEventListener('click', function() {
  count = 0;
  countDisplay.textContent = count;
  localStorage.setItem('myNumber', count);
});