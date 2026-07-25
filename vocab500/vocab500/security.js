/**
 * 🔒 نظام الحماية والأمان المتقدم - منصة إتقان English (دورة 500 مفردة Vocab) © 2026
 */

(function () {
    'use strict';

    const supabaseUrl = 'https://jacylpaxxgubvhofpuup.supabase.co'; 
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphY3lscGF4eGd1YnZob2ZwdXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MjQwNzcsImV4cCI6MjA5ODUwMDA3N30.1AkiNkVi8uuJZgnwvRdKM_EF7RG5QjGE1if0ow0s6SU';
    let supabaseClient = null;

    // 🎨 عرض صفحة منع الوصول (تظهر فقط للزائر غير المسجل)
    const showAccessDeniedPage = () => {
        document.documentElement.innerHTML = `
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>الوصول غير مصرح به | إتقان English</title>
        </head>
        <body style="display:flex !important; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; text-align:center; font-family:system-ui, -apple-system, sans-serif; background:#f8fafc; margin:0; padding:20px; box-sizing:border-box;">
            
            <div style="background:#ffffff; padding:40px 30px; border-radius:16px; box-shadow:0 10px 25px -5px rgba(0, 0, 0, 0.05); max-width:420px; width:100%;">
                <img src="forfun.PNG" alt="Access Denied" onerror="this.style.display='none'" style="width:140px; height:auto; margin-bottom:20px; border-radius:12px;">

                <h2 style="color:#ef4444; margin-top:0; margin-bottom:12px; font-size:1.4rem; font-weight:700;">
                    عذراً، الوصول غير مصرح به! 🛑
                </h2>

                <p style="color:#475569; font-size:1rem; line-height:1.6; margin-bottom:24px;">
                    يجب عليك تسجيل الدخول والاشتراك في كورس الفوكاب أولاً لتتمكن من تصفح المحتوى.
                </p>

                <a href="https://itqanenglishsa.github.io/ItqanEnglish/" 
                   style="display:inline-block; width:100%; padding:12px 20px; background:#214ecf; color:#ffffff; text-decoration:none; border-radius:8px; font-weight:600; font-size:1rem; box-sizing:border-box;">
                    الانتقال للصفحة الرئيسية
                </a>
            </div>

        </body>
        </html>
        `;
    };

    const getDeviceId = () => {
        let deviceId = localStorage.getItem('itqan_device_id');
        if (!deviceId) {
            deviceId = 'dev_' + crypto.randomUUID();
            localStorage.setItem('itqan_device_id', deviceId);
        }
        return deviceId;
    };

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

    const initAuthGuard = async () => {
        let attempts = 0;
        while (!window.supabase && attempts < 100) {
            await new Promise(resolve => setTimeout(resolve, 50));
            attempts++;
        }

        if (!window.supabase) return;

        supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
        const { data: { session }, error } = await supabaseClient.auth.getSession();

        // 🛑 إذا لم يكن مسجلاً: إظهار صفحة الحماية فوراً
        if (!session || error) {
            showAccessDeniedPage();
            return;
        }

        // 🔒 التحقق من الجهاز
        const userId = session.user.id;
        await enforceSingleSession(userId);

        // ✅ هنا المربط: إظهار المحتوى فقط بعد إتمام الفحص بنجاح
        document.body.style.setProperty('display', 'block', 'important');

        // فحص دوري كل 20 ثانية
        setInterval(async () => {
            await enforceSingleSession(userId);
        }, 20000);
    };

    initAuthGuard();

    // حظر الاختصارات والقائمة اليمنى
    document.addEventListener('contextmenu', e => e.preventDefault(), false);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); return false; }
        if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) { e.preventDefault(); return false; }
        if (e.ctrlKey && ['u', 'U', 's', 'S'].includes(e.key)) { e.preventDefault(); return false; }
    }, false);

    document.addEventListener('selectstart', e => e.preventDefault(), false);
    document.addEventListener('copy', e => e.preventDefault(), false);
    document.addEventListener('dragstart', e => e.preventDefault(), false);

})();
