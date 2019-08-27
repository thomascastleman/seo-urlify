
var params = {
	delim_char: '-'
};

/*	String -> String
	Generates a hyphenated, lower case, URL-safe
	version of the given string */
function format(s) {
	// remove all non-word/non-space characters
	s = s.replace(/[^\s\w]/g, '');

	// replace all excess whitespace with a single space
	s = s.replace(/\s+/g, ' ');

	// remove any hanging spaces from front or back of string
	s = s.replace(/(^\s|\s$)/gm, '');

	// normalize to lower case
	s = s.toLowerCase();

	// split into word tokens and join with delimiter character
	return s.split(' ').join(params.delim_char);
}