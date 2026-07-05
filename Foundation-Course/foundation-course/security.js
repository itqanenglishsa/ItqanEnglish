/**
 * 🔒 نظام الحماية والأمان المتقدم - منصة إتقان English © 2026
 * تم التطوير لحماية المحتوى التعليمي ومنع الدخول غير المصرح به ومشاركة الحسابات.
 */

(function () {
    'use strict';

    // =========================================================
    // ⚙️ إعداد وتكوين اتصال Supabase
    // =========================================================
    const supabaseUrl = 'https://jacylpaxxgubvhofpuup.supabase.co'; 
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphY3lscGF4eGd1YnZob2ZwdXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MjQwNzcsImV4cCI6MjA5ODUwMDA3N30.1AkiNkVi8uuJZgnwvRdKM_EF7RG5QjGE1if0ow0s6SU';
    let supabaseClient = null;

    // =========================================================
    // 🛡️ دالت توليد بصمة الجهاز (Device Fingerprint)
    // =========================================================
    const generateDeviceFingerprint = async () => {
        const navigatorInfo = window.navigator.userAgent + window.navigator.language;
        const screenInfo = window.screen.width + "x" + window.screen.height + window.screen.colorDepth;
        
        const msgBuffer = new TextEncoder().encode(navigatorInfo + screenInfo);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    };

    // طرد الأجهزة المتعددة
    const enforceSingleSession = async (userId) => {
        const currentDevice = await generateDeviceFingerprint();
        
        let { data: profile, error } = await supabaseClient
            .from('profiles') // تأكدي أن اسم جدول المستخدمين لديكِ هو profiles أو عدليه هنا
            .select('current_device_id')
            .eq('id', userId)
            .single();

        if (error || !profile) return;

        if (!profile.current_device_id) {
            await supabaseClient.from('profiles').update({ current_device_id: currentDevice }).eq('id', userId);
            return;
        }

        if (profile.current_device_id !== currentDevice) {
            alert("🛑 تنبيه أمني: تم فتح هذا الحساب من جهاز أو متصفح آخر! سيتم تسجيل خروجك لحماية المحتوى.");
            await supabaseClient.auth.signOut();
            localStorage.clear();
            window.location.href = "../login.html";
        }
    };

    // =========================================================
    // 🚦 تشغيل حارس البوابة (التحقق من الدفع والاشتراك الحقيقي)
    // =========================================================
    const initAuthGuard = async () => {
        // انتظام انتظار تحميل مكتبة Supabase الخارجية من الـ HTML
        while (!window.supabase) {
            await new Promise(resolve => setTimeout(resolve, 50));
        }

        supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
        const { data: { session }, error } = await supabaseClient.auth.getSession();

        // [الحماية 1]: طرد غير المشتركين (الروابط المنسوخة)
        if (!session || error) {
            document.documentElement.innerHTML = `
                <html dir="rtl">
                <head><meta charset="utf-8"><title>الوصول غير مصرح به</title></head>
                <body style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; text-align:center; font-family:sans-serif; background:#f8fafc; margin:0; padding:20px;">
                    <h2 style="color:#ef4444; margin-bottom:8px;">عذراً، الوصول غير مصرح به! 🛑</h2>
                    <p style="color:#64748b; font-size:1.1rem;">يجب عليك تسجيل الدخول والاشتراك في الكورس أولاً لتتمكن من تصفح المحتوى.</p>
                    <a href="../login.html" style="margin-top:16px; padding:10px 20px; background:#214ecf; color:#fff; text-decoration:none; border-radius:6px; font-weight:bold; display:inline-block;">الانتقال لصفحة تسجيل الدخول</a>
                </body>
                </html>
            `;
            setTimeout(() => { window.location.href = "../login.html"; }, 3000);
            return;
        }

        // [الحماية 2]: التحقق من بصمة الجهاز لمنع مشاركة الحسابات
        const userId = session.user.id;
        await enforceSingleSession(userId);
        
        // فحص دوري كل 20 ثانية بالطرد اللحظي الحي
        setInterval(async () => {
            await enforceSingleSession(userId);
        }, 20000);
    };

    // تشغيل نظام التحقق
    initAuthGuard();

    // =========================================================
    // 🔒 وظائف الحماية القديمة (منع النسخ والـ Debugger)
    // =========================================================
    
    // 1. تعطيل النقر الأيمن تماماً
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);

    // 2. حظر اختصارات لوحة المفاتيح الحساسة
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.keyCode === 73 || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
    }, false);

    // 3. منع تحديد النصوص والنسخ برمجياً داخل المنصة
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    }, false);

    document.addEventListener('copy', function (e) {
        e.preventDefault();
    }, false);

    // 4. مصيدة أدوات المطورين (Debugger Loop)
    setInterval(function () {
        (function () {
            return false;
        }['constructor']('debugger')());
    }, 200);

    // 5. حظر سحب وإفلات العناصر والصور
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
    }, false);

})();