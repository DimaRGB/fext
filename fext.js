;(function(Function) {

	Function.prototype.concat = function(bF) {
		var aF = this;
		var aS = aF.toString();
		var bS = bF.toString();
		var aC = extractCode(aS);
		var bC = extractCode(bS);
		eval('var f = ' + wrapCode(aC + bC));

		var aP = properties({}, aF);
		var bP = properties({}, bF);

		f = properties(f, aP);
		f = properties(f, bP);

		return f;

		// support functions
		function extractCode(fS) {
			var i1 = fS.indexOf('{') + 1;
			var i2 = fS.indexOf('}');
			return fS.slice(i1, i2);
		}

		function wrapCode(fC) {
			return 'function() {' + fC + '}';
		}

		function properties(a, b) {
			for( var key in b )
				a[key] = b[key];
			return a;
		}
	}

})(Function);
