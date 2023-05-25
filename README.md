# Home Test

## ติดตั้ง

ดาวน์โหลด [Node.js](https://nodejs.org/en).

```bash
git clone https://github.com/Sundew6166/MEDcuryTest.git

npm install

npm install react-bootstrap bootstrap

npm install json-server

npm install axios

npm i react-router-dom
```
### RUN

```bash
cd MEDcuryTest

npx json-server --watch db.json

npm start
```
#### การทำงาน

- หน้าปฏิทินการทำงาน แสดง slot การทํางานที่ว่าง และที่ถูกจอง สามารถเลือก option การแสดงได้ดังนี้
  - เลือก dropdown ของหมอที่ต้องการดู
  - เลือกวันเดือนปีเริ่มต้น และสิ้นสุดได้ แต่ dropdown จะต้องเป็น value ทั้งหมด เท่านั้น 
  - ปุ่มรีเฟรชรายการจะเปลี่ยนเป็นแสดงรายการทั้งหมด
  - ปุ่มในช่องสถานะที่เป็นปุ่มสีแดง หรือปุ่ม "ไม่ว่าง" สามารถกดเพื่อยกเลิกรายการนัดได้
  - ปุ่มในช่องสถานะที่เป็นปุ่มสีเขียว หรือปุ่ม "ว่าง" สามารถกดเพื่อไปยังหน้านัดหมอ
- หน้ารายการนัดคนไข้ ต้องกรอก ID ของหมอเพื่อเรียกดูรายการนัดทั้งหมด
- หน้านัดหมอ คนไข้จะต้องกรอกเบอร์โทรศัพท์ และ PIN ที่มีในฐานข้อมูลเพื่อทำการนัดหมอ

##### คำสั่งการเรียกข้อมูล

GET ข้อมูลการทำงานที่ว่าง และไม่ว่าง
```bash
http://localhost:3000/bookingList
```

GET ข้อมูลของหมอ
```bash
http://localhost:3000/doctors
```

GET ข้อมูลของคนไข้
```bash
http://localhost:3000/patients
```

GET ข้อมูลของคนไข้ และส่ง params ที่เป็นเบอร์โทรศัพท์ และ PIN
```bash
http://localhost:3000/patients/?tel=0810000001&pin=111111
```

GET ข้อมูลของหมอแต่ละคน และส่ง params ที่เป็น id หมอ และสถานะที่ถูกนัดแล้ว
```bash
http://localhost:3000/bookingList/?ID_doctor=001&status=false
```

POST บันทึกข้อมูลการนัดหมอ
```bash
http://localhost:3000/bookingList
```

PUT ยกเลิกข้อมูลการนัดหมอ
```bash
http://localhost:3000/bookingList/8
```

###### อธิบายเพิ่มเติม

> ไม่มีการเชื่อม Relation ของข้อมูล
> จากโจทย์ที่กำหนดการทำงานของ API ข้อที่ 1 ผู้จัดทำเห็นว่าข้อมูลได้ถูกเรียกมาแสดงทั้งหมดอยู่แล้วจึงไม่ได้ทำตามที่กำหนด แต่เปลี่ยนเป็นการกรองข้อมูลที่เรียกมาตั้งแต่ต้นตามที่ผู้ใช้ได้เลือกวันเริ่มต้น และสิ้นสุดแทน
> จากโจทย์ที่กำหนดการทำงานของ API ข้อที่ 2 การนัดหมอนั้นเป็นเพียงการบันทึกข้อมูลธรรมดา ไม่มีการเลือกหมอ วัน เวลา ผู้จัดทำได้กำหนดไว้ทั้งหมด แต่ผู้จัดทำได้ทำการส่งเบอร์โทร และ PIN เพื่อไป Get ข้อมูลคนไข้กลับมา หากมีข้อมูลจึงจะทำการกดปุ่ม "นัดหมอ" ได้
> จากโจทย์ที่กำหนดการทำงานของ API ข้อที่ 3 การยกเลิกนัดผู้จัดทำไม่ได้ทำการตรวจสอบใดๆ ดังนั้นไม่ว่าใครก็สามารถยกเลิกนัดของผู้อื่นได้ และผู้จัดทำกำหนดการยกเลิกเป็นการเปลี่ยนสถานะไม่ให้แสดงเท่านั้น ไม่ได้เป็นการลบข้อมูล
> จากโจทย์ที่กำหนดการทำงานของ API ข้อที่ 4 การเรียกดูสรุปการจองของหมอแต่ละคน ผู้จัดทำได้กำหนดการเรียกข้อมูลโดยส่ง ID ของหมอ และ สถานะการจองที่ไม่ว่าง หรือ เรียกข้อมูลการนัดหมอโดยเฉพาะ
