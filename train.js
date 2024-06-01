// *F-TASK: 

// Shunday findDoublers function tuzing, unga faqat bitta string argument
// pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi


function similarWords(a) {
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] === a[j]) {
          return true;
        }
      }
    }
    return false;
  }
  
  
  console.log(similarWords("hello"));
  