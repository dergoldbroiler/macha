import { toggle } from "./toggle.js";

const share = {
    copyLink: function(pagelink) {
        const copyText = pagelink;
        navigator.clipboard.writeText(copyText);
    },
    handleCopyLink: function() {

        const copylink = document.getElementById('copylink');
        copylink.addEventListener('click', e => {
      
            e.preventDefault();
            share.copyLink(e.target.getAttribute('data-link'));
            document.querySelector('.copied').classList.remove('d-none');
            setTimeout(function() { document.querySelector('.copied').classList.add('d-none');  toggle.closeAll(); }, 2000);
        } );
    },
    handleTelegram: function() {
        const telegram = document.getElementById('telegram');
        telegram.addEventListener('click', e => {
            e.preventDefault();
            const pagelink = e.target.getAttribute('data-link');
            const text = e.target.getAttribute('data-text');
            const telegramlink = `https://t.me/share/url?url=${pagelink}&text=${text}`;
            window.open(telegramlink, '_blank');  toggle.closeAll();
        } );
    },
    handeWhatsapp: function() {
        const whatsapp = document.getElementById('whatsapp');
        whatsapp.addEventListener('click', e => {
            e.preventDefault();
            const pagelink = e.target.getAttribute('data-link');
            const text = e.target.getAttribute('data-text');
            const whatsapplink = `https://api.whatsapp.com/send?text=${text} ${pagelink}`;
            window.open(whatsapplink, '_blank');
            toggle.closeAll();
        } );
    }
}

document.addEventListener('DOMContentLoaded', function(e) {
    share.handleCopyLink();
    share.handleTelegram();
    share.handeWhatsapp();
})