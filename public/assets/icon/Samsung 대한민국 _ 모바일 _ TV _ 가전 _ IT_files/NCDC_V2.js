if(void 0===ncdcIsUrlSended)var ncdcIsUrlSended=!1;if(void 0===ncdcNPayCheckLoaded)var ncdcNPayCheckLoaded=!1;if(void 0===ncdc3TransferOk)var ncdc3TransferOk=!1;if(void 0===nc_load_shopimg_complete)var nc_load_shopimg_complete=!1;if(void 0===neov_is_analyzed_ok)var neov_is_analyzed_ok=!1;is_ncdc_response_ok=!1;try{"14184"==NeoclickConversionAccountID&&(NeoclickConversionAccountID="14184|19294")}catch(c){}try{"14207"==NeoclickConversionAccountID&&(NeoclickConversionAccountID="14207|19062")}catch(c){}try{"14184|19294"==NeoclickConversionAccountID&&(NeoclickConversionAccountID="14184|19294|21826")}catch(c){}try{"14207|19062"==NeoclickConversionAccountID&&(NeoclickConversionAccountID="14207|19062|21825")}catch(c){}try{"20965"==NeoclickConversionAccountID&&(NeoclickConversionAccountID="20965|22026")}catch(c){}if(ncdcT=Number(NeoclickConversionDctSv.substr(5,1)),ncdcG=0,ncdcA=0,ncdcP=Number(NeoclickConversionDctSv.substr(NeoclickConversionDctSv.indexOf("amount=")+"amount=".length,100).replace(/[^0-9]/g,"")),isNaN(ncdcP)&&(ncdcP=0),ncdcOrderID=NeoclickConversionDctSv.substr(NeoclickConversionDctSv.indexOf("orderID=")+"orderID=".length,NeoclickConversionDctSv.indexOf(",amount=")-(NeoclickConversionDctSv.indexOf("orderID=")+"orderID=".length)),ncdcC=NeoclickConversionAccountID.replace(/\,/g,""),""!=ncdcC&&ncdcC&&!isNaN(ncdcT)){if(""==ncdcP&&3==ncdcT)try{ncdcP=String(document.getElementById("mk_totalprice").innerHTML).replace(/[^0-9]/g,"")}catch(c){}if(""==ncdcP&&3==ncdcT)try{ncdcP=document.getElementsByClassName("price_last")[0].innerHTML.replace(/[^0-9]/g,"")}catch(c){}if((""==ncdcP||"0"==ncdcP)&&3==ncdcT)try{ncdcP=document.getElementsByClassName("price_total")[0].innerHTML.replace(/[^0-9]/g,"")}catch(c){}if(""==ncdcP&&3==ncdcT&&(14733==ncdcC||10710==ncdcC))try{var patt=/\<\/strong\>\<span\>([0-9\,]{1,})/g;ncdcP=patt.exec(document.getElementById("order_layer_detail").innerHTML)[1].replace(/[^0-9]/g,"")}catch(c){}if(""==ncdcP&&3==ncdcT&&8075==ncdcC)try{patt=/\<strong\>([0-9\,]{1,})/g;ncdcP=patt.exec(document.getElementById("order").innerHTML)[1].replace(/[^0-9]/g,"")}catch(c){}if(""==ncdcP&&3==ncdcT&&8066==ncdcC)try{patt=/\<strong\>([0-9\,]{1,})/g;ncdcP=patt.exec(document.getElementById("contents").innerHTML)[1].replace(/[^0-9]/g,"")}catch(c){}if(""==ncdcP&&3==ncdcT&&20106==ncdcC)try{patt=/([0-9\,]{1,})/g;ncdcP=patt.exec($("#order_price").children(".pointBg").children().eq(1).html())[1].replace(/[^0-9]/g,"")}catch(c){}try{""!=ncdcP&&0==isNaN(Number(ncdcP))&&Number(ncdcP<=10)&&(ncdcP="")}catch(c){}if("undefined"==typeof notautoload){NCDC_LOAD();var ncdcRnd=Math.floor(1e7*Math.random())+1}"undefined"!=typeof NeoclickConversionInnAccountNum&&"undefined"!=typeof NeoclickConversionInnAccountCode&&NC_LOAD_NEOV_DMP(NeoclickConversionInnAccountNum,NeoclickConversionInnAccountCode),"9926"==NeoclickConversionAccountID&&NC_LOAD_NEOV_DMP("895","615c0fef47e704c512000000")}try{NC_LOAD_PLUS_CONVERSION_SCRIPT()}catch(c){}function NCDC_LOAD(c,n,e,o){try{var t=void 0!==n?n:ncdcT,r=void 0!==e?e:ncdcP;r>99999999&&(r=0)}catch(c){}try{if("3"==t){if(ncdc3TransferOk)return;ncdc3TransferOk=!0}var d=Math.floor(1e7*Math.random())+1,i=new Image,a=document.location.href.substr(0,150);if(void 0!==o&&(ncdcOrderId=o),""!=ncdcOrderID&&"undefined"!=ncdcOrderID&&"0"!=ncdcOrderID&&(a=ncdcOrderID+"|"+a),"18464"==ncdcC)return!1;i.src="https://ckp.ncclick.co.kr/NCDC_ConversionImg.asp?ncdcCode="+ncdcC+"&ncdcType="+t+"&ncdcGender="+ncdcG+"&ncdcAge="+ncdcA+"&ncdcPrice="+r+"&ncdcUrl="+encodeURIComponent(a)+"&ncdcQuery=&rnd="+d,"function"==typeof c&&c()}catch(c){}try{if(!ncdcIsUrlSended&&(2==t||3==t)){try{navigator.userAgent.indexOf("Android")>0&&"NCDC_Android"}catch(c){}try{navigator.userAgent.indexOf("iPhone")>0&&"NCDC_iPhone"}catch(c){}(i=new Image).src="https://pixel.mmnneo.com/collect?url="+encodeURIComponent(location.href)+"&domain="+encodeURIComponent(location.hostname)+"&ck="+ncdcC+"&platform=neo",ncdcIsUrlSended=!0}}catch(c){}}function NC_LOAD_PLUS_CONVERSION_SCRIPT(){try{if("undefined"==typeof nc_load_plus_conversion_complete&&(nc_load_plus_conversion_complete={1:!1,2:!1,3:!1}),0==nc_load_plus_conversion_complete[ncdcT]&&(nc_load_plus_conversion_complete[ncdcT]=!0,void 0!==document.body)){var c=Math.floor(1e7*Math.random())+1,n=document.createElement("script");n.src="https://ckp.ncclick.co.kr/NCDC_plus_conversion.asp?nckey="+ncdcC+"&DctSv="+encodeURIComponent(NeoclickConversionDctSv)+"&"+c,n.type="text/javascript",document.body.appendChild(n)}}catch(c){}}function NcEventListener(c,n,e){c.addEventListener?c.addEventListener(n,e,!1):c.attachEvent?c.attachEvent("on"+n,e):c["on"+n]=e}function NC_LOAD_SHOPIMG_URL(c,n){try{if(!nc_load_shopimg_complete&&(nc_load_shopimg_complete=!0,void 0!==n)){var e=document.createElement("script");e.src="//ck.ncclick.co.kr/clientScripts/"+c,e.id="NC_SHOPIMG_URL",e.type="text/javascript",n.appendChild(e)}}catch(c){}}function NC_LOAD_ANALYZE_SCRIPT(){try{if(void 0!==neov_is_analyzed_ok&&neov_is_analyzed_ok)return;neov_is_analyzed_ok=!0}catch(c){}try{navigator.userAgent.indexOf("Android")>0&&"NCDC_Android"}catch(c){}try{navigator.userAgent.indexOf("iPhone")>0&&"NCDC_iPhone"}catch(c){}try{if(!ncdcIsUrlSended){Math.floor(1e7*Math.random());(new Image).src="https://pixel.mmnneo.com/collect?url="+encodeURIComponent(location.href)+"&domain="+encodeURIComponent(location.hostname)+"&platform=neo&ck="+ncdcC,ncdcIsUrlSended=!0}}catch(c){}}function NC_LOAD_NEOV_DMP(c,n){!function(c,n,e,o,t){var r=n.createElement(e);r.type="text/javascript",r.async=!0,r.src="https://avd.innity.net/"+o+"/container_"+t+".js";var d=n.getElementsByTagName(e)[0];d.parentNode.insertBefore(r,d)}(window,document,"script",c,n)}NcEventListener(window,"load",function(c){try{"9926"==ncdcC&&NC_LOAD_SHOPIMG_URL("N9926.js",document.body)}catch(c){}var n=0;try{if("object"==typeof NeoclickConversionRetarketingArr&&6==NeoclickConversionRetarketingArr.length&&"Y"==NeoclickConversionRetarketingArr[5])if(NeoclickConversionRetarketingArr[0].indexOf("<!-")>0||NeoclickConversionRetarketingArr[1].indexOf("<!-")>0||NeoclickConversionRetarketingArr[2].indexOf("<!-")>0||NeoclickConversionRetarketingArr[3].indexOf("<!-")>0||NeoclickConversionRetarketingArr[4].indexOf("<!-")>0);else{n=Math.floor(1e7*Math.random())+1;try{(new Image).src="https://pixel.mmnneo.com/collect_product?ck="+ncdcC+"&host="+encodeURIComponent(location.hostname)+"&url="+encodeURIComponent(location.href)+"&tit="+encodeURIComponent(NeoclickConversionRetarketingArr[0])+"&pid="+encodeURIComponent(NeoclickConversionRetarketingArr[1])+"&img="+encodeURIComponent(NeoclickConversionRetarketingArr[2])+"&cate="+encodeURIComponent(NeoclickConversionRetarketingArr[4])+"&price="+encodeURIComponent(NeoclickConversionRetarketingArr[3])+"&rnd="+encodeURIComponent(n)}catch(c){}}}catch(c){}try{if(!e&&document.getElementsByClassName("npay_btn_pay").length>0){var e=!0;document.getElementsByClassName("npay_btn_pay")[0].addEventListener("click",function(){var c=Math.floor(1e7*Math.random())+1,n="undefined"!=typeof NeoclickConversionRetarketingArr?encodeURIComponent(NeoclickConversionRetarketingArr[3]):0;(new Image).src="https://ckp.ncclick.co.kr/NCDC_ConversionImg.asp?ncdcCode="+ncdcC+"&ncdcType=4&ncdcGender="+ncdcG+"&ncdcAge="+ncdcA+"&ncdcPrice="+n+"&ncdcUrl="+encodeURIComponent(document.location.href.substr(0,200))+"&ncdcQuery=&rnd="+c})}}catch(c){}try{1==ncdcT&&NC_LOAD_ANALYZE_SCRIPT()}catch(c){}});