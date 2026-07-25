/**
 * 🔒 نظام الحماية والأمان المتقدم - منصة إتقان English (دورة 500 مفردة Vocab) © 2026
 */

(function () {
    'use strict';

    const supabaseUrl = 'https://jacylpaxxgubvhofpuup.supabase.co'; 
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphY3lscGF4eGd1YnZob2ZwdXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MjQwNzcsImV4cCI6MjA5ODUwMDA3N30.1AkiNkVi8uuJZgnwvRdKM_EF7RG5QjGE1if0ow0s6SU';
    let supabaseClient = null;

    // المسار لصفحة الحظر المباشرة داخل نفس مجلد الكورس
    const REDIRECT_PATH = "no-access.html"; 

    const getDeviceId = () => {
        let deviceId = localStorage.getItem('itqan_device_id');
        if (!deviceId) {
            deviceId = 'dev_' + crypto.randomUUID();
            localStorage.setItem('itqan_device_id', deviceId);
        }
        return deviceId;
    };

    // التحقق من الجلسة الواحدة + اشتراك الكورس
    const checkUserAccess = async (userId) => {
        const currentDevice = getDeviceId();
        
        // جلب بيانات الحساب للتأكد من الجهاز وحالة الاشتراك
        let { data: profile, error } = await supabaseClient
            .from('profiles')
            .select('current_device_id, is_subscribed_vocab') // 👈 تأكدي من اسم عامود الاشتراك في جدولك (مثلاً is_subscribed_vocab)
            .eq('id', userId)
            .single();

        if (error || !profile) return false;

        // 🛑 إذا كان الحساب غير مشترك في كورس الفوكاب
        // (ملاحظة: إذا لم يكن لديك عامود إشتراك، يمكنك حذف شرط !profile.is_subscribed_vocab)
        if (profile.is_subscribed_vocab === false) {
            return false;
        }

        // تسجيل الجهاز الأول
        if (!profile.current_device_id) {
            await supabaseClient
                .from('profiles')
                .update({ current_device_id: currentDevice })
                .eq('id', userId);
            return true;
        }

        // طرد إذا كان فتح من جهاز آخر
        if (profile.current_device_id !== currentDevice) {
            alert("🛑 تنبيه أمني: تم فتح هذا الحساب من جهاز أو متصفح آخر!");
            await supabaseClient.auth.signOut();
            localStorage.clear();
            return false;
        }

        return true;
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

        // 🛑 1. شخص فتح الرابط بدون تسجيل دخول مطلقاً (رابط مشارك)
        if (!session || error) {
            window.location.replace(REDIRECT_PATH);
            return;
        }

        // 🔒 2. شخص مسجل دخول ولكن يتم الفحص هل هو مشترك أم لا / هل الجهاز مختلف
        const userId = session.user.id;
        const hasAccess = await checkUserAccess(userId);

        if (!hasAccess) {
            window.location.replace(REDIRECT_PATH);
            return;
        }

        // ✅ مشترِك رسمي وفي جهازه المصرح -> إظهار المحتوى
        document.body.style.setProperty('display', 'block', 'important');

        // فحص دوري كل 20 ثانية
        setInterval(async () => {
            const stillValid = await checkUserAccess(userId);
            if (!stillValid) {
                window.location.replace(REDIRECT_PATH);
            }
        }, 20000);
    };

    initAuthGuard();

    // منع أدوات المطور والنسخ
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
