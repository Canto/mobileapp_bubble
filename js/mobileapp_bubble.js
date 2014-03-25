//<![CDATA[

var IOS = (navigator.userAgent.match('iPhone') != null || navigator.userAgent.match('iPod') != null) || (navigator.userAgent.match('iPad') != null);
var Android = (navigator.userAgent.match('Android') != null);

function check_installedApp(url,marketurl,type)
{
    var iframe = jQuery('#appinstallcheck').getElementsByTagName('iframe');
    if(IOS && type == "ios")
    {
        //window.location.href = url;
        jQuery('#appinstallcheck').innerHTML = '<iframe src="'+url+'" width="0" height="0" frameborder="0"></iframe>';
        setTimeout(function(){
            if(iframe.length > 0)
            {
                jQuery('#appinstallcheck').removeChild(iframe[0]);
            }
            else
            {
                jQuery('#mApp_bubble').animate(
                    {'bottom': '10'},
                    500
                );
                jQuery('#mApp_bubble').children('a').attr('src',marketurl);
            }
        }, 1000);
    }
    else if(Android && type == "android")
    {
        jQuery('#appinstallcheck').innerHTML = '<iframe src="'+url+'" width="0" height="0" frameborder="0"></iframe>';
        setTimeout(function(){
            if(iframe.length > 0)
            {
                jQuery('#appinstallcheck').removeChild(iframe[0]);
            }
            else
            {
                jQuery('#mApp_bubble').animate(
                    {'bottom': '10'},
                    500
                );
                jQuery('#mApp_bubble').children('a').attr('src',marketurl);
            }
        }, 1000);
    }
}
//]]>