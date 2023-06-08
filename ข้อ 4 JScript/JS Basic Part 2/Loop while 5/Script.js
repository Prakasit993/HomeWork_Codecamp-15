let player1 = prompt("กรุณาใส่ตัวเลขที่ต้องการ ระว่าง 1 ถึง 100");

if (+player1 <= 0 || +player1 > 100) {
  alert("โปรดกรุณาใส่ตัวเลข ระหว่าง 1 ถึง 100");
} else {
  let guess;
  let player2 = 0;
  do {
    guess = prompt("คุณสามารถเดาตัวเลขที่ต้องการ ระหว่าง 1 ถึง 100");
    player2++;
    if (guess < player1) {
      alert("เพิ่มตัวเลขให้มากกว่านี้ ลองเดาใหม่อีกครั้ง");
    } else if (guess > player1) {
      alert("ลดตัวเลขให้น้อยกว่านี้ ลองเดาใหม่อีกครั้ง");
    } else {
      alert("ถูกต้อง คุณเก่งมาก");
      alert(`จำนวน ${player2} ครั้ง ที่คุณลองทาย`);
    }
  } while (guess !== player1);
}
