function objToString(object) {
	// console.log(object);
	// console.log("convert object to string");
	if (!object) return "null";

	var str = "{\n";
	for (var k in object) {
		str += k + ":" + (isObject(object[k]) ? objToString(object[k]) : object[k]) + "\n";
	}

	str += "}";
	// console.log(str);
	return str;
}

function isObject(object) {
	return typeof object === "object";
}

module.exports = {
	objToString(obj) {
		return objToString(obj);
	},
};
