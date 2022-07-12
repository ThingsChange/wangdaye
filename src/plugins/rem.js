/**
 *
 * @author  晴云
 * @create 2022-06-24 9:35
 * @note 干什么的呢？
 **/

import { getRem, getScreenWidth } from '@/helper/utils';
// eslint-disable-next-line
(function (doc, win) {
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = () => {
        const docEl = document.documentElement;
        const clientWidth = getScreenWidth();
        if (!clientWidth) return;
        docEl.style.fontSize = `${getRem()}px`;
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
