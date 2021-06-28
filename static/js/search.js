document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById('tet').addEventListener("click", function() {
			loadXMLDoc('../index.xml');
	});
});
function loadXMLDoc(url)
{
	
var xmlhttp;
var html = '';
var x,xx,i;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	var count = 0;
	html = '<table class="table table-bordered"><thead><tr><th scope="col" class="mb-2">#</th><th scope="col" class="mb-2">标题</th><th scope="col" class="mb-5">链接</th></tr></thead><tbody>';
	var keyword = document.getElementById('keyword').value.toLowerCase();
	if (keyword == ""){
			html = '<h2>No Input!</h2>';
	}else{
		x=xmlhttp.responseXML.documentElement.getElementsByTagName("item");
		for (i=0;i<x.length;i++)
		{
		  xx=x[i].getElementsByTagName("title");
		  {
			try
			  {
			  var judge = xx[0].firstChild.nodeValue.toLowerCase();

			  var key = xx[0].firstChild.nodeValue;

			  var posturl = x[i].getElementsByTagName("link")[0].firstChild.nodeValue;

			  }
			catch (er)
			  {
			  console.log(er);  
			  continue;
			  }
			}
		  if(judge.indexOf(keyword)!=-1){
			  html += '<tr><th scope="row">' + count + '</th><td>' + key + '</td><td><a href="' + posturl + '">' + posturl + '</a></td></tr>';
			  count = count + 1;
		     }
		}
			html += '</tbody></table>';
			if(count == 0){
				html = '<h2>Not Found!</h2>'
			}
		
		}
		document.getElementById('result').innerHTML=html;
	}else{
		document.getElementById('result').innerHTML='Searching';
	}
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
