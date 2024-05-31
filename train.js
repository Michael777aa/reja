// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"



function qaytarish(a) {
  let reverseA = '';
  for (let i = a.length - 1; i >= 0; i--) {
    reverseA += a[i];
  }
  return reverseA;
}


console.log(qaytarish("hello"));
