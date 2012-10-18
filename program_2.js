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
document.write(myObject.value);

var Quo = function (string) {
	this.status = string;
};

