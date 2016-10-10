/*
 * Tests to see if string contains all unique chars.
 * @param {String} str - The string to be checked for uniqueness
 * @returns {Boolean} true if string has only unique chars. false if a duplicate exists
 */
function hasUniqueChars(str) {
	//can't have unique characters if string length is greater than the # of possible characters
	if (str.length > 256) {
		return false;
	}
	for (var i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]) || str.lastIndexOf(str[i]) !== i) {
			return false;
		}
	}
	return true;
}


function isUnique(str) {
	var char_set = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);
	for (var i = 0; i < str.length; i++) {
		  if (char_set[str[i].charCodeAt(0)]) {
	      	  return false;
	      }
	    char_set[str[i].charCodeAt(0)] = true;
	}
	return true;
}