
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
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://localhost/~uxp/gplus_sort.js';})();
}
