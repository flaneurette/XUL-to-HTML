	
	function lexer() {
		
			var xulelements = {
			"<.*xml version=\"1.0\" \?>" : "",	
			"<.*xml-(.*)>" : "",
			"<.*xml version(.*)>" : "",
			"<!DOCTYPE(.*)>" : "<!DOCTYPE HTML>",
			"<window(.*)" : "<head>\n<title></title>\n</head>\n<body ",
			"</window>" : "</body>\n</html>",
			"xmlns:html=\"http://www.w3.org/1999/xhtml\"" : "",
			"xmlns=\"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul\"" : "",
			"xmlns=\"https://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul\"" : "",
			"persist=\".*\"" : "",
			"chrome://" : "./",
			"<script(.*)>" : "<script$1></script>",
			"<overlay" : "<div id=\"overlay\" " ,
			"</overlay>" : "",
			"<menu " : "<ul class=\"menu\" ",
			"<menuitem " : "<li class=\"menuitem\" ",
			"<menuseparator />" : "<li class=\"menuseperator\"></li>",
			"<menupopup" : "<div id=\"dropdown\" " ,
			"</menupopup>" : "</div>",
			"<menubar" : "<div id=\"menubar\"",
			"<menulist" : "<div id=\"menulist\"",
			"</menulist>" : "</div>",
			"</menu>" : "</div>",
			"</menubar>" : "</div>",
			"<vbox" : "<div class\"vbox\"",
			"</vbox>" : "</div>",
			"<hbox" : "<div class=\"hbox\"",
			"</hbox>" : "</div>",
			"<tabpanels" : "<div class=\"tabpanels\"",
			"<tabpanel" : "<div class=\"tabpanel\"",
			"<tabbox" : "<div class=\"tabbox\"",
			"<tabs" : "<div class=\"tabs\"",
			"</tabpanels>" : "</div>",
			"</tabpanel>" : "</div>",
			"</tabbox>" : "</div>",
			"</tabs>" : "</div>",
			"<grippy />" : "<div class=\"grippy\"></div>",
			"<tree" : "<div class=\"tree\"",
			"</tree>" : "</div>",
			"<treecols>" : "<div class=\"treecols\"></div>",
			"</treecols>" : "</div>",
			"<treecol" : "<div class=\"treecol\"",
			"<treechildren" : "<div class=\"treechildren\"",
			"</treechildren>" : "</div>",
			"<groupbox" : "<div class=\"groupbox\"",
			"</groupbox>" : "</div>",
			"<splitter" : "div class=\"splitter\"",
			"</splitter>" : "</div>",
			"<spring" : "<div class=\"spring\"",
			"<findbar" : "<input",
			"<textbox" : "<input",
			"<richlistbox" : "<div class=\"richlistbox\"",
			"</richlistbox>" : "</div>",
			"<richlistitem>" : "<div class=\"richlistitem\">",
			"</richlistitem>" : "</div>",
			"<tab" : "<div class=\"tab\"",
			"</tab>" : "</div>",
			"flex=\"" : "id=\"flex",
			"oncommand" : "onclick",
			"<box" : "<div class=\"box\"",
			"</box>" : "</div>",
			"fixed=\"false\"" : "",
			"fixed=\"true\"" : ""
		};
	
		var sourcecode = document.getElementById('xulsource').value;
			for (var v in xulelements) {
				sourcecode = sourcecode.replace(new RegExp(v, "gim"), xulelements[v]);
			}
		document.getElementById('xulsource').value = sourcecode;
		
		writeFrame('iframe',sourcecode);
	}
	
	function writeFrame(id,data) {
		document.getElementById('data').innerHTML = data;
	}
	

	
	