var add = function (a, b) {
    return a + b;
};


document.writeln(add(3, 4));

var myObject  = {
	value : 0,
	ref : 1,
	increment : function(inc) {
		this.value += typeof inc == 'number' ? inc : 1;
	}
};

myObject.increment(1);
myObject.increment(2);
document.writeln(myObject.value);

myObject.double = function() {
	var that = this;
	var helper = function() {
		that.value = add(that.value, that.value);
	}
	helper();
};

myObject.double();
document.writeln(myObject.value);

var Quo = function (string) {
	this.status = string;
};

Quo.prototype.get_status = function() {
	return this.status;
};

var myQuo = new Quo("Confued");
document.writeln(myQuo.get_status());

var array = [3,4];
document.writeln(add.apply(null,array));

var statusObject = {
	status : "A-OK"
};

document.writeln(Quo.prototype.get_status.apply(statusObject));

var sum = function () {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i++) {
	sum += arguments[i];
	}
	return sum;
};

document.writeln(sum(4, 8, 15, 16, 23, 42));

var add = function (a, b) {
	 if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
		name : 'TypeError',
		message : 'add needs numbers'
		};
	 };
	 return a + b;
};

var try_it = function () {
	try {
		add("seven");
	} catch (e) {
		document.writeln(e.name + ":" + e.message);
	}
};

try_it();

Function.prototype.method = function (name, func) {
	if (!this.prototype[name]) {
	this.prototype[name] = func;
	}
	return this;
};

Number.method('integer', function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

document.writeln( (-10/3).integer());

String.method('trim', function() {
	return this.replace(/^\s+|\s+$/g,"");
});

document.writeln('"' + "    neat    ".trim() + '"');