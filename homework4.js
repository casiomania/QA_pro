function paritycheck(total) {
  let evenCount = 0;
  let oddCount  = 0;

  for (let i = 0; i < total; i++) {
    const number    = Math.floor(Math.random() * 991) + 10;
    const lastDigit = Number.parseInt(String(number).slice(-1), 10);

    if (lastDigit % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const evenPercent = (evenCount / total * 100).toFixed(2);
  const oddPercent  = (oddCount  / total * 100).toFixed(2);

  console.log(`Кількість згенерованих чисел: ${total}`);
  console.log(`Парних чисел:                 ${evenCount}`);
  console.log(`Непарних чисел:               ${oddCount}`);
  console.log(`${evenPercent}% парних чисел до ${oddPercent}% непарних`);
}

paritycheck(1000);
