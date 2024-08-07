// ==UserScript==
// @name         3rdguide tweaks
// @namespace    https://github.com/LoveRenamon/3rd_guide
// @version      2024-08-07
// @description  Override page style to aid translations
// @homepage     https://github.com/LoveRenamon/3rd_guide
// @homepageURL  https://github.com/LoveRenamon/3rd_guide
// @downloadURL  https://github.com/LoveRenamon/3rd_guide/raw/master/3rdguide.style.js
// @updateURL    https://github.com/LoveRenamon/3rd_guide/raw/master/3rdguide.style.js
// @author       Davi (Debiddo) Gooz
// @match        *3rdguide.com/web/teamnew/index
// @icon         https://www.3rdguide.com/static/web/img/filter/avatericon.png
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

let timg = {
    'https://3rdguide.com/static/web/img/clear-ico.png': 'https://github.com/LoveRenamon/3rd_guide/raw/master/img/clear-ico.png',
    'https://3rdguide.com/static/web/img/filter/help.png': 'https://github.com/LoveRenamon/3rd_guide/raw/master/img/help.png',
    'https://3rdguide.com/static/web/img/filter/mine.png': 'https://github.com/LoveRenamon/3rd_guide/raw/master/img/mine.png',
};

for (let image of document.getElementsByTagName('img')) {
    for (let query in timg) {
        if (image.src == query) {
            image.src = timg[query];
        }
    }
}

// Floating button
addGlobalStyle('.sp-btns { scale: .83 ; top: 83% !important; right: 1% !important; }');
//addGlobalStyle('.sp-btns { visibility: hidden !important; }');

// General Sizes
addGlobalStyle('.table-search .filter-item .select-item { min-width: 190px !important ; margin-right: 8px !important ; }');

// FIXME
//addGlobalStyle('.w1024 { width: unset !important ; }');
//addGlobalStyle('table.dataTable { width: 100% !important ; }');
//addGlobalStyle('.table-team-box { width: 80% !important ; max-width: 1200px !important ; }');
//addGlobalStyle('#app { background-size: contain !important ; }');

// Battlesuit name
addGlobalStyle('.table-search .filter-item .cha-item .label { min-width: 190px !important ; max-width: 200px !important ; width: auto !important ; margin-right: 12px !important ; margin-bottom: 16px !important ; border: #c4924845 !important ; border-right-width: 1px !important ; border-right-style: ridge !important ; }');
addGlobalStyle('.table-search .filter-item .cha-item .select-item { min-width: 190px !important ; height: 41px !important ; margin-right: 8px !important ; }');
addGlobalStyle('.table-search .goodwar .cha-content { min-width: 180px !important ; font-size: 14px !important ; margin-right: 12px !important ; }');
addGlobalStyle('.table-search .goodwar .cha-item { padding-top: 11px !important ; border: #c4924815 !important ; border-right-width: 1px !important ; border-bottom-style: ridge !important ; }');

// Fixes page height and avoid hide Valkyrie list
addGlobalStyle('.table-team-box .table-search { height: auto !important ; min-height: 800px !important ; max-height: 1200px !important ; }');
