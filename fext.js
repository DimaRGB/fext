;(function(Function) {

	Function.prototype.fext = function(bF) {
		var aF = this;
		var aS = aF.toString();
		var bS = bF.toString();

		var aC = extractCode(aS);
		var bC = extractCode(bS);

		return wrapCode(aC + bC);
	}

	function extractCode(fS) {
		var i1 = fS.indexOf('{') + 1;
		var i2 = fS.indexOf('}');
		return fS.slice(i1, i2).trim();
	}

	function wrapCode(fC) {
		return 'function() {' + fC + '}';
	}

})(Function);
