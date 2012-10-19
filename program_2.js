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

var haoni = function (disc, src, aux, dst) {
	if (disc > 0) {
		haoni(disc - 1, src, dst, aux);
		document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
		haoni(disc - 1, aux, src, dst);
	}
};

haoni(3, 'Src', 'Aux', 'Dst');

var walk_the_DOM = function walk(node, func) {
	func(node);
	node = node.firstChild;
	while (node) {
		walk(node, func);
		node = node.nextSibling;
	}
};
var getElementsByAttribute = function(attr, value) {
	var results = [];
	
	walk_the_DOM(document.body, function (node) {
		var actual = node.nodeType === 1 && node.getAttribute(attr);
		if (typeof actual === 'string' && 
		      (actual === value || typeof value !== 'string')) 
		{
		      	results.push(node);
		}
	});
	return results;
};

var res = getElementsByAttribute("class", "test");

/*
for (i = 0; i < res.length; i++) {
	document.writeln(res[i].nodeName);
}
*/
// res = ["first",2,3,4,5,6];
for (i in res) {
	document.writeln(res[i].nodeName);
}

var factorial = function factorial(i, a) {
	// document.writeln(a);
	a = a || 1;
	// document.writeln(a);
	if (i < 2) {
		return a;
	}
	return factorial(i - 1, a * i);
};

document.writeln(factorial(4));

var foo = function () {
	var a = 3, b = 5;
	var bar = function () {
		var b = 7, c = 11;
		a += b + c;
	};
	bar();
};

var myObject = function () {
	var value = 0;
	return {
		increment : function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue : function () {
			return value;
		}
	}
}();

myObject.increment(2);
document.writeln(myObject.getValue());

var quo = function (status) {
	return {
		get_status : function () {
			return status;
		}
	};
};

var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};

fade(document.body);

var add_the_handlers = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i++) {
			/* nodes[i].onclick = function(e) {
			alert(i);
			*/
			nodes[i].onclick = function (i) {
				return function (e) {
					alert(i + " " + e);
				};
			}(i);
	}
};

add_the_handlers(getElementsByAttribute("class", "test"));
	      