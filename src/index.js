module.exports = function check(str, bracketsConfig) {
  // your solution
	for (var d = /(\[|\(|\{)[^\[\(\{]*?$/,
		e = {
			"(": /\([^\}\]]*?\)/,
			"[": /\[[^\)\}]*?\]/,
			"{": /\{[^\)\]]*?\}/,
		}, b, c = !0; c;)
		b = str, str = str.replace(d, function (str, b)
		{
			return str.replace(e[b], "")
		}), b == str && (c = !1);
	return !/[\[\]\(\)\{\}]/.test(str)
}
