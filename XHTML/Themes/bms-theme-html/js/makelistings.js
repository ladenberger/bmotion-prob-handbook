(function() {
    var pre = document.getElementsByTagName('pre'),
        pl = pre.length;
    for (var i = 0; i < pl; i++) {
	var content = pre[i].innerHTML
	var lines = content.split('\n');
	// remove first
	lines.splice(0,1);
	// and second line (trash from plastex)
	lines.splice(lines.length-1,1);
	content = lines.join('\n');
        pre[i].innerHTML = '<span class="line-number"></span>' + content + '<span class="cl"></span>';
        var num = pre[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < num; j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
})();