
let stars_8 = 
	document.getElementsByClassName("star_8");
let output_8 = 
	document.getElementById("output_8");


function grade_8(n) {
	remove_8();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one_8";
		else if (n == 2) cls = "two_8";
		else if (n == 3) cls = "three_8";
		else if (n == 4) cls = "four_8";
		else if (n == 5) cls = "five_8";
		stars_8[i].className = "star_8 " + cls;
	}
	output_8.innerText = "Rating is: " + n + "/5";
}

function remove_8() {
	let i = 0;
	while (i < 5) {
		stars_8[i].className = "star_8";
		i++;
	}
}
