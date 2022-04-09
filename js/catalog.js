let catalog=
[
	{"code":"item1","name":"ORIJEN Cat & Kitten","image":"item1.png", "price":65.99},
	{"code":"item2","name":"GREENIES™ Dental Chews","image":"item2.png", "price":4.48},
	{"code":"item3","name":"ZIWI Peak","image":"item3.png", "price":62.77}
];

function storecart()
{
	var flag=false,cart="",userid=getCookie("whoami")+"cart";
	for(var i=0;i<catalog.length;i++)
	{
		var qty=getCookie(catalog[i].code);
		if(qty>=1)
		{
			cart=cart+(catalog[i].code+":"+qty+"-");
			flag=true;
		}
	}
	if(flag==true)
	{
		cart=cart.substring(0,cart.length-1);
		setCookie(userid,cart);
	}
}

function loadcart()
{
	var cart=getCookie("whoami");
	if(cart!=null)
	{
		cart=cart+"cart";
		var items=getCookie(cart);
		if(items!=null)
		{
			items=items.split("-");
			for(var i=0;i<items.length;i++)
			{
				var item=items[i].split(":");
				setCookie(item[0],item[1],item[2]);
			}
		}
	}
}
