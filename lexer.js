
	function lexer() {
		
			var xulelements = {
			"chrome://" : "./",
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
			"flex=\"" : "class=\"flex",
			"oncommand" : "onclick",
			"<box" : "<div class=\"box\"",
			"</box>" : "</div>",
			"fixed=\"false\"" : "",
			"fixed=\"true\"" : ""
		};
	
		var sourcecode = document.getElementById('xulsource').value;
			for (var v in xulelements) {
				sourcecode = sourcecode.replace(new RegExp(v, "g"), xulelements[v]);
			}
		document.getElementById('xulsource').value = sourcecode;
	}