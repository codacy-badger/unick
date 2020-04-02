function compiler(){
	var code = document.getElementsByName("input")[0].value;
	//commands: + - @not ?and %or ~xor ^xand #output
	var stack = [];
	var i = 0;
	var result = [];
	while (i < code.length) {
		var char = code[i];
		switch (char) {
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
				throw new Error("Unidentified character: \'" + char + "\', at char #" + (i + 1));
		}
		i += 1;
	}
	var dom = document.getElementsByName("output")[0];
	dom.innerHTML = result;
}
