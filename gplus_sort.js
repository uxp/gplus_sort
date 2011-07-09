
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

	function sortStreamArray(streamArray) {
		// mergesort...
		if (streamArray.length <= 1) {
			return streamArray;
		};

		var left = [];
		var right = [];
		var middle = [];
		var result = [];

		if (streamArray.length % 2 == 0) {
		  middle = streamArray[streamArray.length / 2];
		} else {
			middle = streamArray[(streamArray.length + 1) / 2];
		};

		for (var i = 0; i <= streamArray.indexOf(middle); i++) {
			left[i] = streamArray[i];
			left = left.filter(function(element, index, array) {return (element != null);});
		};
		for (var i = streamArray.indexOf(middle); i <= streamArray.length; i++) {
			right[i] = streamArray[i];
			right = right.filter(function(element, index, array) {return (element != null);});
		};
		left = sortStreamArray(left);
		right = sortStreamArray(right);
		result = result.concat(sortStreamArray(left), sortStreamArray(right));

		return result;
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
			if (sortedData.length != data.length) { console.log("ERROR: data returned malformed from sorting"); return false; };

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
