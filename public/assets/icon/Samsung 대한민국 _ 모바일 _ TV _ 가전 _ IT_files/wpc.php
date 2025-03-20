/*<![CDATA[*/
(function(w) {
    var wg = w.document.getElementById('wp_tg_cts');
    function doPair(url) {
        if (wg == null) { return; }
        (function(_url) {
            var frm = w.document.createElement('IFRAME');
            frm.width = '1px';
            frm.height = '1px';
            frm.style.display = 'none';
            frm.src='about:blank';
            frm.title = 'tgpairing';
            wg.appendChild(frm);

            var ifrm = (frm.contentWindow) ? frm.contentWindow : (frm.contentDocument.document ? frm.contentDocument.document : frm.contentDocument);
            ifrm.document.open();
            ifrm.document.write('<img src=\"' + _url + '\"/>');
            ifrm.document.close();

            setTimeout(function() {
                wg.removeChild(frm);
            }, 2000);
        })(url);
    }

    try {
        var links = null,
            len = links.length,
            i;
        for (i=0; i<len; i++) {
            doPair(links[i]);
        }
    } catch(e) {}
})(window);
/*]]>*/






/*<![CDATA[*/
(function(w) {
    var origin = "https:\/\/astg.widerplanet.com";
    var wg = w.document.getElementById('wp_tg_cts');
    function doPair(url) {
        if (wg == null) { return; }
        (function(_url) {
            var frm = w.document.createElement('IFRAME');
            frm.width = '1px';
            frm.height = '1px';
            frm.style.display = 'none';
            frm.src= _url;
            frm.title = 'tgpairing';
            frm.addEventListener('load', function(o) {
                try {
                    frm.contentWindow.postMessage({}, origin);
                } catch(e) {}
            });

            wg.appendChild(frm);
            setTimeout(function() {
                wg.removeChild(frm);
            }, 3000);
        })(url);
    }

    try {
        doPair("https:\/\/astg.widerplanet.com\/delivery\/storage?request_id=null\u0026wp_uid=2-f7308b25d8d8de384f120a88c5721db0-s1741091778.885218%7Cmac_osx%7Cchrome-nw6m7r\u0026qsc=17n5ad6");
    } catch(e) {}
})(window);
/*]]>*/



/*<![CDATA[*/
(function(w) {
    try {
        var identity = {
            setCookie: function(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = 'expires='+d.toUTCString();
                var domain = 'domain=.'+this.extractRootDomain(location.host);
                document.cookie = cname + '=' + cvalue + ';' + domain + ';' + expires + ';path=/';
            },
            getCookie: function(cname) {
                var name = cname + '=';
                var ca = document.cookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return '';
            },
            extractRootDomain: function (domain) {
                var splitArr = domain.split('.'),
                    arrLen = splitArr.length;

                if (arrLen > 2) {
                    //TODO: .me 와 같은 특수도메인 예외처리 필요.
                    domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
                    if (splitArr[arrLen - 1].length == 2 && splitArr[arrLen - 1].length == 2) {
                        domain = splitArr[arrLen - 3] + '.' + domain;
                    }
                }
                return domain;
            }
        };

        identity.setCookie('_wp_uid', "1-f7308b25d8d8de384f120a88c5721db0-s1741091778.885218|mac_osx|chrome-1x6r1ch", 365);

    } catch(e) {}
})(window);
/*]]>*/



