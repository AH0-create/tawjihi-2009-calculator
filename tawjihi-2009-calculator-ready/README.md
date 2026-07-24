# حاسبة معدل جيل 2009

## الملفات
- `index.html`: الموقع الكامل الجاهز لـ GitHub Pages.
- `google-apps-script.gs`: كود ربط Google Sheet.

## أولاً: رفع الموقع على GitHub

1. افتح مستودع `tawjihi-2009-calculator`.
2. اضغط **uploading an existing file**.
3. فك ضغط ملف ZIP على جهازك.
4. ارفع ملف `index.html` فقط إلى الصفحة الرئيسية للمستودع.
5. اضغط **Commit changes**.

## ثانياً: تفعيل GitHub Pages

1. افتح **Settings**.
2. من القائمة الجانبية اختر **Pages**.
3. عند Source اختر **Deploy from a branch**.
4. اختر الفرع **main** والمجلد **/(root)**.
5. اضغط **Save**.

الرابط المتوقع:
https://AH0-create.github.io/tawjihi-2009-calculator/

## ثالثاً: ربط Google Sheet

1. أنشئ Google Sheet جديد.
2. من القائمة اختر: Extensions ثم Apps Script.
3. احذف الكود الموجود والصق محتوى `google-apps-script.gs`.
4. اضغط Deploy ثم New deployment.
5. اختر النوع Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. اضغط Deploy ووافق على الصلاحيات.
9. انسخ رابط Web App الذي ينتهي بـ `/exec`.
10. افتح ملف `index.html` وابحث عن:

const SHEET_WEB_APP_URL = '';

11. ضع الرابط بين علامتي الاقتباس:

const SHEET_WEB_APP_URL = 'ضع الرابط هنا';

12. ارفع الملف المعدل إلى GitHub بدل النسخة القديمة.

بعدها أي طالب يحسب معدله ستنزل بياناته تلقائياً في ورقة اسمها `النتائج`.
