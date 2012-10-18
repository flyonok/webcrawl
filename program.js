document.writeln("hello,world<br/>");
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

var empty_object = {};

var stooge = {
    "first-name" : "Jerome",
    "last-name" : "Howard"
};


var flight = {
    airline : "Oceanic",
    number : 815,
    departure : {
        IATA : "SYD",
        time : "2004-09-22 14:55",
        city : "Sydney"
    },
    arrival : {
        IATA : "LAX",
        time : "2004-09-23 10:42",
        city : "Los Angeles"
    }
};

document.writeln(stooge["first-name"] + "<br/>");
document.writeln(flight.departure.IATA + "<br/>");
document.writeln(stooge["middle-name"] + "<br/>");

stooge["first-name"] = "Jerome";
document.writeln(stooge["first-name"] + "<br/>");

stooge["middle-name"] = "middle-name";
document.writeln(stooge["middle-name"] + "<br/>");

stooge.nickname = 'Curly';

flight.equipment = {
    model : "Boeing 777"
};

if (Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () { };
        F.prototype = o;
        return new F();
    };
}

var another_stooge = Object.beget(stooge);
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

document.writeln("test<br/>");
document.writeln(another_stooge["first-name"] + "<br/>");
document.writeln(stooge['first-name']);

document.writeln(typeof flight.number + "<br/>");
document.writeln(typeof flight.airline + "<br/>");

//var name;
//for (name in another_stooge) {
//	if (typeof another_stooge[name] !== 'function') {
//	document.writeln(name + ":" + another_stooge[name]);
//	}
//}

