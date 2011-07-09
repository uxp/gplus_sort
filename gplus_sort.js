
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

	/*
	function findParentNode(startNode, parentClass) {
		var testObj = startNode.parentNode;
		var count = 0;
		while (testObj.getAttribute('class') != parentClass) {
			console.log(testObj.getAttribute('class'));
			testObj = testObj.parentNode;
			count++;
		}
		return testObj;
	}
	*/

	// Iterative Bubble Sort... recursion probably isn't the best for JS
	function sortStreamArray(data) {
		var N = data.length;
		for (var i = 0; i < N - 1; i++) {
			for (var j = i+1; j < N; j++) {
				if ( data[i] > data[j] ) {
					var q = data[j];
					data[j] = data[i];
					data[i] = q;
				}
			}
		}
		return data;
	}


	// data[i][0] = timestamp
	// data[i][1] = timestamp node
	// data[i][2] = streampost node
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
			var sortedData = sortStreamArray(data);
			if (sortedData.length != data.length) { console.log("ERROR: data returned malformed from sorting"); console.log(sortedData.length); return false; };
			sortedData.reverse();

			// rebuild stream
			var newStream = document.createElement('div');
			newStream.setAttribute('class', 'a-b-f-i-oa');

			for (var i = 0; i < sortedData.length; i++) {
				newStream.appendChild(sortedData[i][2]);
			}

			// redraw list
			$streamDiv[0].parentNode.replaceChild(newStream, $streamDiv[0]);
		}
	}

	getStreamPosts();

// javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://localhost/~uxp/gplus_sort.js';})();
}
