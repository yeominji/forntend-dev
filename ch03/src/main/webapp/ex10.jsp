<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>float를 이용한 메뉴 </title>
<style type="text/css">
* { margin:0; padding:0 }

ul.nothing, ul.something {
	width:500px;
	margin:100px auto 0 auto;
	font-size: 12px;
	color: #333;
	list-style:none;
	border:1px solid #ddd;
}

ul.nothing li {
	text-align: center;
	width:50px;
	border:1px solid #999;
    font-weight:bold;
    
    float: left; 
    margin-left: 10px;
}


</style>
</head>

<body>
<ul class="nothing">
    <li>메뉴1</li>
    <li>메뉴2</li>
    <li>메뉴3</li>
    <li>메뉴4</li>
    <li>메뉴5</li>
</ul>


</body>
</html>
