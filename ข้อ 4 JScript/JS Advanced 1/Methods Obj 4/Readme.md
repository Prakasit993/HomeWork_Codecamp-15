## CodeCamp #15

### นาย ประกาศิต กางถิ่น

---

#### โจทย์การบ้านที่ทำ

- ให้ Object ชื่อ ladder มี
  method ขึ้น และ ลง

> let ladder = {
>
> step: 0,
>
> up() {
>
> this.step++;
>
> },
>
> down() {
>
> this.step--;
>
> },
>
> showStep: function() { // shows the current step
>
> alert( this.step );
>
> }
>
> };

- Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

> ladder.up();
>
> ladder.up();
>
> ladder.down();
>
> ladder.showStep(); // 1

- ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

> ladder.up().up().down().showStep(); // 1
