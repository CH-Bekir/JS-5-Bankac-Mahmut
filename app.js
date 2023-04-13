let array1 = ["Zeki", "Mehmet", "Fatma", "Halil", "Ahsen", "Zeynep", "Burak"];
let array2 = ["Halil", "Veli", "Kerim", "Zeki", "Neriman", "Fatma", "Semih"];

// array1 ve array2 birleştiriliyor:
// birlesikArray olarak atanıyor.
let birlesikArray = [...array1, ...array2];

// Birleştirilmiş array'deki isimler alfabetik olarak sıralanıyor
// siraliArray olarak atanıyor.
// bunun için  .sort() kullanılıyor
let siraliArray = birlesikArray.sort();

// Tekrar eden isimler kontrol edilerek tek sefer yazılmış hali 
// yeniArray olrak atanıyor.
let yeniArray = [];
for (let i = 0; i < siraliArray.length; i++) {
  if (siraliArray[i] !== siraliArray[i + 1]) {
    yeniArray.push(siraliArray[i]);
  }
}

// bu for dongulerını anlamıyorum oturmuyor. :(

console.log(yeniArray);

// Mutlu Son...