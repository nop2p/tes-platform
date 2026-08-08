# ตั้งค่า Firebase Firestore สำหรับ TES

เอกสารนี้ทำครั้งเดียว เพื่อให้ผู้ดูแลเห็น Log การสอบจากผู้ใช้ทุกคนบนเว็บไซต์ Vercel

## 1. สร้าง Firebase Project

1. เปิด [Firebase Console](https://console.firebase.google.com/)
2. คลิก **Create a project**
3. ตั้งชื่อ เช่น `tes-platform`
4. Google Analytics จะเปิดหรือไม่เปิดก็ได้สำหรับระบบนี้
5. รอจนสร้าง Project เสร็จ แล้วคลิก **Continue**

## 2. ลงทะเบียน Web App และนำค่า Config ไปใช้

1. ที่หน้า Project Overview คลิกไอคอน `</>` (Web)
2. ตั้งชื่อ App เช่น `TES Web`
3. ไม่ต้องเลือก Firebase Hosting เพราะเว็บไซต์อยู่บน Vercel แล้ว
4. คลิก **Register app**
5. Firebase จะแสดง `firebaseConfig` ให้คัดลอกค่าแต่ละตัว
6. ในโฟลเดอร์โปรเจกต์ ให้คัดลอก `.env.example` เป็น `.env.local`
7. วางค่าจาก Firebase ลงใน `.env.local` เช่น

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

ค่าเหล่านี้เป็น Web configuration จึงใช้ชื่อ `NEXT_PUBLIC_` ได้ แต่ห้ามใส่รหัสผ่านหรือ Service Account ในไฟล์นี้

## 3. เปิด Cloud Firestore

1. เมนูซ้ายเลือก **Build > Firestore Database**
2. คลิก **Create database**
3. เลือก **Production mode**
4. เลือก Region ที่อยู่ใกล้ผู้ใช้ที่สุด เช่น Singapore หากมีให้เลือก
5. คลิก **Enable**

## 4. เปิด Firebase Authentication

1. เมนูซ้ายเลือก **Build > Authentication**
2. คลิก **Get started**
3. แท็บ **Sign-in method** ให้เปิด `Anonymous`
4. เปิด `Email/Password` ด้วย
5. ที่แท็บ **Users** คลิก **Add user** เพื่อสร้างอีเมลและรหัสผ่านสำหรับผู้ดูแล
6. คลิกผู้ใช้ที่เพิ่งสร้าง แล้วคัดลอกค่า **User UID** เก็บไว้

`Anonymous` ใช้สร้างตัวตนชั่วคราวให้ผู้เข้าสอบแต่ละ Browser เพื่อให้เขียน Log ได้ โดยไม่ต้องสมัครสมาชิก

## 5. สร้างสิทธิ์ผู้ดูแล

1. กลับไปที่ **Firestore Database > Data**
2. คลิก **Start collection**
3. ตั้ง Collection ID เป็น `admins`
4. ตั้ง Document ID เป็น **User UID** ของผู้ดูแลจากข้อ 4
5. เพิ่ม Field ชื่อ `role`, Type `string`, Value `admin`
6. คลิก **Save**

## 6. ตั้งค่า Firestore Security Rules

1. ที่ **Firestore Database > Rules**
2. เปิดไฟล์ `firestore.rules` ที่อยู่ในโปรเจกต์นี้
3. คัดลอกเนื้อหาทั้งหมดไปแทน Rules เดิม
4. คลิก **Publish**

Rules นี้ทำให้ผู้เข้าสอบสร้าง Log ได้เฉพาะของตัวเอง, แก้หรือลบไม่ได้ และอ่าน Log รวมได้เฉพาะ User ที่อยู่ใน `admins/{uid}`

## 7. ติดตั้ง Firebase SDK และทดสอบในเครื่อง

ใน Terminal ภายในโฟลเดอร์โปรเจกต์ ให้รัน:

```bash
npm install
npm run dev
```

ทำแบบทดสอบให้จบหนึ่งครั้ง แล้วเปิด `http://localhost:3000/admin`
เข้าสู่ระบบด้วยอีเมลผู้ดูแลที่สร้างใน Firebase Authentication

## 8. ตั้งค่า Environment Variables บน Vercel

1. เปิด Vercel Dashboard แล้วเลือกโปรเจกต์ `tes-platform`
2. ไปที่ **Settings > Environment Variables**
3. เพิ่มตัวแปรทั้ง 6 ตัวจาก `.env.local`
4. เลือก Environment เป็น **Production**, **Preview**, และ **Development**
5. กด Save ทุกตัว
6. Deploy ใหม่ หรือ push โค้ดขึ้น GitHub เพื่อให้ Vercel Deploy ใหม่

## 9. ทดสอบบนเว็บไซต์จริง

1. เปิดเว็บไซต์ Vercel และทำแบบทดสอบให้จบหรือรอจนหมดเวลา
2. เปิด `/admin`
3. Login ด้วยบัญชีผู้ดูแล
4. ตรวจว่ารายการใหม่ปรากฏในหน้า "รายละเอียดการสอบล่าสุด"

## หมายเหตุด้านความน่าเชื่อถือ

ระบบนี้เก็บผลรวมส่วนกลางได้และป้องกันการแก้/ลบ Log หลังบันทึก แต่ผู้เข้าสอบที่มีความรู้ด้านเทคนิคยังอาจพยายามส่งข้อมูลปลอมจาก Browser ได้ หากจะใช้เป็นผลสอบทางการ ควรเพิ่ม Firebase App Check และระบบยืนยันตัวตนผู้เข้าสอบในขั้นถัดไป
