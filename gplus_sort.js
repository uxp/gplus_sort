
if (document.readyState == "complete") {

	Array.prototype.compare = function(testArr) {
		if (this.length != testArr.length) return false;
		for (var i = 0; i < testArr.length; i++) {
			if (this[i].compare) {
				if (!this[i].compare(testArr[i])) return false;
			}
			if (this[i] !== testArr[i]) return false;
		}
		return true;
	}
	function getStreamPosts() {
		var $streamDiv = document.getElementsByClassName('a-b-f-i-oa');
		if (($streamDiv.length == 1) && ($streamDiv[0].children.length > 0)) {
			var data = [];
			for (var i=0; i < $streamDiv[0].children.length; i++) {
				data[i] = [];
				data[i][0] = Date.parse($streamDiv[0].children[i].getElementsByClassName('a-Ja-h a-b-h-Jb a-f-i-Ad')[0].title);
				data[i][1] = $streamDiv[0].children[i].getElementsByClassName('a-Ja-h a-b-h-Jb a-f-i-Ad')[0];
				data[i][2] = $streamDiv[0].children[i];
			}
			// sort stream

			// rebuild stream

			// redraw list
		}
	}

	getStreamPosts();

// javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://localhost/~uxp/gplus_sort.js';})();
}