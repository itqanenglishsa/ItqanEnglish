/**
 * 🔒 نظام الحماية والأمان المتقدم - منصة إتقان English © 2026
 * تم التطوير لحماية المحتوى التعليمي لدورة (vocab500)
 */

(function () {
    'use strict';

    // =========================================================
    // ⚙️ إعداد وتكوين مفتاح الكورس واتصال Supabase
    // =========================================================
    const CURRENT_COURSE_KEY = 'vocab500'; // 🔑 مفتاح الدورة في جدول user_courses

    const supabaseUrl = 'https://jacylpaxxgubvhofpuup.supabase.co'; 
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphY3lscGF4eGd1YnZob2ZwdXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MjQwNzcsImV4cCI6MjA5ODUwMDA3N30.1AkiNkVi8uuJZgnwvRdKM_EF7RG5QjGE1if0ow0s6SU';
    let supabaseClient = null;

    // =========================================================
    // 🛡️ دالة توليد بصمة الجهاز (Device Fingerprint)
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
            .from('profiles')
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
            window.location.href = "/login.html";
        }
    };

    // =========================================================
    // 🚦 تشغيل حارس البوابة (التحقق من الدخول واشتراك vocab500)
    // =========================================================
    const initAuthGuard = async () => {
        // ✨ [ميزة المطور]: إذا كنتِ تعملين محلياً عبر Live Server، يتوقف الحارس للتعديل
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            console.log("🛠️ وضع التطوير نشط: تم إيقاف الحماية مؤقتاً لتتمكني من تعديل الكورس بحرية.");
            return;
        }

        // انتظار تحميل مكتبة Supabase الخارجية
        while (!window.supabase) {
            await new Promise(resolve => setTimeout(resolve, 50));
        }

        supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
        const { data: { session }, error } = await supabaseClient.auth.getSession();

        // [الحماية 1]: طرد غير المسجلين
        if (!session || error) {
            showUnauthorizedPage("يجب عليك تسجيل الدخول أولاً لتتمكن من تصفح المحتوى.");
            setTimeout(() => { window.location.href = "/login.html"; }, 3000);
            return;
        }

        const userId = session.user.id;

        // [الحماية 2]: التحقق من شراء الدورة المحددة (vocab500) في جدول user_courses
        const { data: purchaseData, error: purchaseError } = await supabaseClient
            .from('user_courses')
            .select('id')
            .eq('user_id', userId)
            .eq('course_key', CURRENT_COURSE_KEY)
            .single();

        if (purchaseError || !purchaseData) {
            showUnauthorizedPage(`عذراً، أنت غير مشترك في دورة (${CURRENT_COURSE_KEY})! يرجى الشراء أولاً للوصول للمحتوى.`);
            setTimeout(() => { window.location.href = "/index.html"; }, 3500);
            return;
        }

        // [الحماية 3]: التحقق من بصمة الجهاز لمنع مشاركة الحسابات
        await enforceSingleSession(userId);
        
        // فحص دوري كل 20 ثانية بالطرد اللحظي
        setInterval(async () => {
            await enforceSingleSession(userId);
        }, 20000);
    };

    const showUnauthorizedPage = (message) => {
        document.documentElement.innerHTML = `
            <html dir="rtl">
            <head><meta charset="utf-8"><title>الوصول غير مصرح به</title></head>
            <body style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; text-align:center; font-family:sans-serif; background:#f8fafc; margin:0; padding:20px;">
                <h2 style="color:#ef4444; margin-bottom:8px;">عذراً، الوصول غير مصرح به! 🛑</h2>
                <p style="color:#64748b; font-size:1.1rem;">${message}</p>
                <a href="/index.html" style="margin-top:16px; padding:10px 20px; background:#214ecf; color:#fff; text-decoration:none; border-radius:6px; font-weight:bold; display:inline-block;">الانتقال للموقع الرئيسي</a>
            </body>
            </html>
        `;
    };

    // تشغيل نظام التحقق
    initAuthGuard();

    // =========================================================
    // 🔒 وظائف الحماية القديمة (منع النسخ والـ Debugger)
    // =========================================================
    
    // 1. تعطيل النقر الأيمن
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);

    // 2. حظر اختصارات لوحة المفاتيح
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'i' || e.key === 'j' || e.keyCode === 73 || e.keyCode === 74)) {
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

    // 3. منع تحديد النصوص والنسخ
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

    // 5. حظر سحب وإفلات العناصر
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
    }, false);

})();