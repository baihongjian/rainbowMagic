'use strict';

var WebFontConfig = {
    classes: false,
    custom: {
        families: [
            'Jeju Hallasan',
            'KoPub Batang',
            'Nanum Gothic',
            'Nanum Gothic Coding',
            'Nanum Myeongjo',
            'Nanum Pen Script',
        ],
        urls: ['/css/fonts.css']
    },
    timeout: 50000,
    active: function() {
        window.fontLoaded = true;
        if (typeof Entry === 'object' && Entry.dispatchEvent) {
            Entry.dispatchEvent('fontLoaded');
        }
    },
    inactive: function() { console.log('font load failed'); },
    fontinactive: function(name, fvd) { console.log(name, fvd); }
};
