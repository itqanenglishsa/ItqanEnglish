/**
 * 🔒 نظام الحماية والأمان المتقدم - منصة إتقان English (دورة 500 مفردة Vocab) © 2026
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
    // 🛡️ دالة توليد معرف الجهاز المستقر (Device ID)
    // =========================================================
    const getDeviceId = () => {
        let deviceId = localStorage.getItem('itqan_device_id');
        if (!deviceId) {
            deviceId = 'dev_' + crypto.randomUUID();
            localStorage.setItem('itqan_device_id', deviceId);
        }
        return deviceId;
    };

    // طرد الأجهزة المتعددة
    const enforceSingleSession = async (userId) => {
        const currentDevice = getDeviceId();
        
        let { data: profile, error } = await supabaseClient
            .from('profiles')
            .select('current_device_id')
            .eq('id', userId)
            .single();

        if (error || !profile) return;

        // إذا لم يكن هناك جهاز مسجل (أول دخول)، يتم تسجيل الجهاز الحالي
        if (!profile.current_device_id) {
            await supabaseClient
                .from('profiles')
                .update({ current_device_id: currentDevice })
                .eq('id', userId);
            return;
        }

        // إذا كان الجهاز الحالي مختلف عن المسجل في قاعدة البيانات -> طرد
        if (profile.current_device_id !== currentDevice) {
            alert("🛑 تنبيه أمني: تم فتح هذا الحساب من جهاز أو متصفح آخر! سيتم تسجيل خروجك لحماية المحتوى.");
            await supabaseClient.auth.signOut();
            localStorage.clear();
            window.location.replace("https://itqanenglishsa.github.io/ItqanEnglish/no-access.html");
        }
    };

    // =========================================================
    // 🚦 تشغيل حارس البوابة
    // =========================================================
    const initAuthGuard = async () => {
        // انتظار تحميل مكتبة Supabase الخارجية من الـ HTML
        let attempts = 0;
        while (!window.supabase && attempts < 100) {
            await new Promise(resolve => setTimeout(resolve, 50));
            attempts++;
        }

        if (!window.supabase) {
            console.error("فشل تحميل مكتبة Supabase");
            return;
        }

        supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
        const { data: { session }, error } = await supabaseClient.auth.getSession();

        // [الحماية 1]: إعادة توجيه غير المشتركين فوراً لصفحة عدم المصادقة
        if (!session || error) {
            window.location.replace("https://itqanenglishsa.github.io/ItqanEnglish/no-access.html");
            return;
        }

        // [الحماية 2]: التحقق من الجهاز لمنع مشاركة الحسابات
        const userId = session.user.id;
        await enforceSingleSession(userId);

        // ✅ إظهار محتوى الكورس فقط بعد النجاح في جميع الفحوصات الأمنية
        document.body.style.setProperty('display', 'block', 'important');

        // فحص دوري كل 20 ثانية
        setInterval(async () => {
            await enforceSingleSession(userId);
        }, 20000);
    };

    // تشغيل نظام التحقق
    initAuthGuard();

    // =========================================================
    // 🔒 وظائف منع النسخ وأدوات المطور
    // =========================================================
    
    // 1. تعطيل القائمة اليمنى
    document.addEventListener('contextmenu', e => e.preventDefault(), false);

    // 2. حظر اختصارات لوحة المفاتيح
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (عرض المصدر) / Ctrl+S (حفظ)
        if (e.ctrlKey && ['u', 'U', 's', 'S'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
    }, false);

    // 3. منع تحديد النصوص والنسخ والسحب
    document.addEventListener('selectstart', e => e.preventDefault(), false);
    document.addEventListener('copy', e => e.preventDefault(), false);
    document.addEventListener('dragstart', e => e.preventDefault(), false);

})();
