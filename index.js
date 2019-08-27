
/*	String -> String
	Generates a hyphenated, lower case, URL-safe
	version of the given string, using '-' as a 
	delimiter if none is given. */
const format = function(s, delim) {
	// remove all non-word/non-space characters
	s = s.replace(/[^\s\w]/g, '');

	// replace all excess whitespace with a single space
	s = s.replace(/\s+/g, ' ');

	// remove any hanging spaces from front or back of string
	s = s.replace(/(^\s|\s$)/gm, '');

	// normalize to lower case
	s = s.toLowerCase();

	// split into word tokens and join with delimiter character (either passed as arg or default)
	return s.split(' ').join(delim || '-');
}

module.exports = format;