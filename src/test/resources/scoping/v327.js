
var x = 0;
function foo() {
	x++;
	return x;
}

do {
	if (x == 5)
		continue;
	print(x);
} while(foo() < 10);

