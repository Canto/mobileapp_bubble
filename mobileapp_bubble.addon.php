<?php
/**
 * Created by PhpStorm.
 * User: canto87
 * Date: 2014. 3. 25.
 * Time: 15:22
 */

if(!defined('__XE__')) exit();

if($called_position == 'before_display_content')
{
	if($addon_info->Applemarket || $addon_info->Androidmarket)
	{
		Context::loadFile(array("./addons/mobileapp_bubble/js/mobileapp_bubble.js", 'head', '', ''));
		Context::loadFile(array("./addons/mobileapp_bubble/css/mobileapp_bubble.css", 'head', '', ''));
		Context::addBodyHeader('<div id="appinstallcheck"></div>');
		Context::addBodyHeader('
		<div id="mApp_bubble">
			<ul>
			<li>
			<img src="./modules/admin/tpl/img/mobiconSample.png" width="50px" height="50px" />
			</li>
			<li>
			사이트 전용 앱이 존재합니다.<br/>사이트 전용 앱을 설치 하시겠습니까?
			</li>
			</ul>
		</div>
		');
		if($addon_info->Applemarket) // if added App market of Apple
		{
			Context::addHtmlHeader('<script type="text/javascript">check_installedApp("myapp://installed",$addon_info->Applemarket,"ios")</script>');
		}
		else if($addon_info->Androidmarket) // if added App market of Android
		{
			Context::addHtmlHeader('<script type="text/javascript">check_installedApp("myapp://installed",$addon_info->Applemarket,"android")</script>');
		}
	}
}