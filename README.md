# تطبيق الأستاذي – أندرويد

مشروع Android Studio جاهز: يغلّف ملف `app/src/main/assets/index.html` داخل WebView.

## طريقة 1: Android Studio
1. File > Open > اختر مجلد المشروع، وانتظر Gradle Sync.
2. Build > Build APK(s) > ستجد الملف في `app/build/outputs/apk/debug/app-debug.apk`.

## طريقة 2: بدون تثبيت أي شيء (GitHub)
ارفع المجلد كاملاً إلى مستودع GitHub جديد > تبويب Actions > Build APK >
بعد انتهائه نزّل `alustadhi-apk` من Artifacts وثبّت الـ APK على الهاتف.

## لتحديث التطبيق لاحقاً
استبدل `app/src/main/assets/index.html` بالنسخة الجديدة وأعد البناء.
