const reverseSeq = n => {
  let hasil = []
  for(let angka = n;angka >= 1;angka--){
    hasil.push(angka)
  }
  return hasil;
};

reverseSeq(7)