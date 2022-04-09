function setCookie(name,value)
{
	window.localStorage.setItem(name,value);
}
function getCookie(name)
{
	return window.localStorage.getItem(name);
}	
function delCookie(name)
{
	window.localStorage.removeItem(name);
}
function delAllCookies()
{
	localStorage.clear();
	/*
	for(var item in localStorage)
	{
		window.localStorage.removeItem(item);
	}
	*/
	//location.reload();
}
const getJSONString = function(obj) { return JSON.stringify(obj, null, 2);}
function getRaw()
{
	return getJSONString(localStorage);
}

function addCookie(name)
{
	var qty=getCookie(name)
	if(qty==null) setCookie(name,1)
	else
	{
		qty=parseInt(qty)+1;
		setCookie(name,qty);
	}
}
