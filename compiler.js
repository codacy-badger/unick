function compiler(){
	var code = document.getElementsByName("input")[0].value;
	//commands: + - @not ?and %or ~xor ^xand #output
	var stack = [];
	var i = 0;
	var result = [];
	while (i < code.length) {
		switch (code[i]) {
			case "+":
				stack.push(true);
				break;
			case "-":
				stack.pop();
				break;
			case "?":
				stack.push(stack.pop() && stack.pop());
				break;
			case "@":
				stack.push(!stack.pop());
				break;
			case "%":
				stack.push(stack.pop() || stack.pop());
				break;
			case "#":
				result.push(stack.pop());
				break;
			default:
				throw new Error("Unidentified character: \'" + code[i] + "\', at char #" + i);
				break;
		}
		i += 1
	}
	document.getElementsByName("output")[0].innerHTML = result;
}
