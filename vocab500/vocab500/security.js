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
    // 🎨 عرض صفحة منع الوصول (Access Denied View)
    // =========================================================
    const showAccessDeniedPage = () => {
        document.documentElement.innerHTML = `
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>الوصول غير مصرح به | إتقان English</title>
        </head>
        <body style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; text-align:center; font-family:system-ui, -apple-system, sans-serif; background:#f8fafc; margin:0; padding:20px; box-sizing:border-box;">
            
            <div style="background:#ffffff; padding:40px 30px; border-radius:16px; box-shadow:0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01); max-width:420px; width:100%;">
                
                <!-- 🖼️ صورة حماية المحتوى -->
                <img src="forfun.PNG" 
                     alt="Access Denied"
                     onerror="this.style.display='none'"
                     style="width:140px; height:auto; margin-bottom:20px; border-radius:12px;">

                <!-- 🛑 عنوان التنبيـه -->
                <h2 style="color:#ef4444; margin-top:0; margin-bottom:12px; font-size:1.4rem; font-weight:700;">
                    عذراً، الوصول غير مصرح به! 🛑
                </h2>

                <!-- 📄 الرسالة النصية -->
                <p style="color:#475569; font-size:1rem; line-height:1.6; margin-bottom:24px;">
                    يجب عليك تسجيل الدخول والاشتراك في كورس الفوكاب أولاً لتتمكن من تصفح المحتوى.
                </p>

                <!-- 🔗 زر العودة للهوم بيج -->
                <a href="https://itqanenglishsa.github.io/ItqanEnglish/" 
                   style="display:inline-block; width:100%; padding:12px 20px; background:#214ecf; color:#ffffff; text-decoration:none; border-radius:8px; font-weight:600; font-size:1rem; box-sizing:border-box; transition:background 0.2s;">
                    الانتقال للصفحة الرئيسية
                </a>
            </div>

        </body>
        </html>
        `;
    };

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

        if (!profile.current_device_id) {
            await supabaseClient
                .from('profiles')
                .update({ current_device_id: currentDevice })
                .eq('id', userId);
            return;
        }

        if (profile.current_device_id !== currentDevice) {
            alert("🛑 تنبيه أمني: تم فتح هذا الحساب من جهاز أو متصفح آخر! سيتم تسجيل خروجك لحماية المحتوى.");
            await supabaseClient.auth.signOut();
            localStorage.clear();
            window.location.href = "https://itqanenglishsa.github.io/ItqanEnglish/";
        }
    };

    // =========================================================
    // 🚦 تشغيل حارس البوابة
    // =========================================================
    const initAuthGuard = async () => {
        // انتظار تحميل مكتبة Supabase
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

        // [الحماية 1]: إظهار صفحة "الوصول غير مصرح به" لغير المشتركين
        if (!session || error) {
            showAccessDeniedPage();
            return;
        }

        // [الحماية 2]: التحقق من الجهاز لمنع مشاركة الحسابات
        const userId = session.user.id;
        await enforceSingleSession(userId);
        
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
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
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
