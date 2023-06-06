const username = prompt("Who are you");

if (username == "Admin") {
  const password = prompt("What's your password ??");
  {
    if (password == "codecamp#5") {
      alert("ยินดีต้อนรับ");
    } else if (password == null) {
      alert("ยกเลิก");
    } else if (password == "") {
      alert("ยกเลิก");
    } else if (password != "codecamp#5") {
      alert("รหัสผ่านผิด");
    }
  }
} else if (username == null) {
  alert("ยกเลิก");
} else if (username == "") {
  alert("ยกเลิก");
} else if (username != "1") {
  alert("ฉันไม่รู้จักคุณ");
}
