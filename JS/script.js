document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const profileButtonBtnElem = document.querySelector('.profile_button-btn');
    const shareElem = document.querySelector('.share');

    const escapeHandler = (event) => {
        if (event.code == 'Escape') {
            shareElem.classList.remove('share_active');
            profileButtonBtnElem.classList.remove('btn_active');
            profileButtonBtnElem.classList.remove('btn_active');
        }
    };

    const openShere = () => {
        profileButtonBtnElem.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('btn_active')) {
                shareElem.classList.remove('share_active');
                profileButtonBtnElem.classList.remove('btn_active');
                document.removeEventListener('keydown', escapeHandler);
            } else {
                shareElem.classList.add('share_active');
                profileButtonBtnElem.classList.add('btn_active');
                document.addEventListener('keydown', escapeHandler);
            }
        });
    };

    const closeShere = () => {
        document.addEventListener('click', (event) => {
            const target = event.target;
            if (!target.closest('.share_active') && !target.closest('.profile_button-btn')) {
                shareElem.classList.remove('share_active');
                profileButtonBtnElem.classList.remove('btn_active');
                document.removeEventListener('keydown', escapeHandler);
            }
        });
    };

    openShere();
    closeShere();
});
