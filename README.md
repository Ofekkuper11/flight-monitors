# 🛩️ Flight Monitor - פרויקט מכווני טיסה

מערכת חזותית להזנת, שליחה והצגה של נתוני טיסה:  
**Altitude**, **HSI**, **ADI** – בממשק אינטראקטיבי וקל לשימוש.

---

## 🚀 טכנולוגיות בשימוש

- 🎯 Frontend: React + TypeScript + CSS
- 🧠 Backend: Node.js + Express
- 🗃️ מסד נתונים: MongoDB
- 🔗 תקשורת: REST API
- 🧪 Version Control: Git + GitHub

---

## 🧰 הוראות הרצה

### 1. הרצת השרת

```bash
cd server
npm install
npm start
```

✅ השרת יפעל בכתובת:  
[http://localhost:5000](http://localhost:5000)

---

### 2️⃣ הרצת הממשק (React)

```bash
cd client
npm install
npm start
```

✅ הדפדפן ייפתח אוטומטית על:  
[http://localhost:3000](http://localhost:3000)

---

### 3️⃣ שימוש באפליקציה

- הזן ערכי Altitude, HSI ו־ADI בטופס
- לחץ על כפתור `SEND` לשליחת הנתונים לשרת
- עבור בין מצבי תצוגה `TEXT` ו־`VISUAL` באמצעות הכפתורים העליונים

---

## 🧭 תכונות המערכת

- ✅ מחוונים ויזואליים אינטראקטיביים (HSI, Altitude, ADI)
- ✅ שליחת נתונים לשרת ושמירה ב־MongoDB
- ✅ תצוגת טקסט וגרפיקה
- ✅ ממשק משתמש ברור ורספונסיבי

---

## 📸 צילום מסך (להוסיף בהמשך)

> *(ניתן לצרף כאן קובץ PNG או GIF של הממשק בפעולה)*

---

## 👨‍💻 פותח ע״י

Ofek Kuper  
במסגרת פרויקט מיון פרויקטנטים חיל האוויר

---

## 📂 מבנה הפרויקט

```bash
flight-monitor/
├── client/        # צד לקוח - React
├── server/        # צד שרת - Node.js + Express
├── README.md
└── .gitignore
```

---

## 🛠️ פתרון בעיות נפוצות

- ❗ `npm ERR! missing script: start`  
  ודא שיש `start` בקובץ `package.json` בתיקיית `server`

- ❗ `connect ECONNREFUSED 127.0.0.1:27017`  
  ודא ש־MongoDB רץ (`mongod`)

- ❗ `TS17004: Cannot use JSX unless the '--jsx' flag is provided.`  
  הוסף `jsx: "react-jsx"` לקובץ `tsconfig.json`

---
