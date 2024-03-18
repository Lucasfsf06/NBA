
let stars_2 = 
	document.getElementsByClassName("star_2");
let output_2 = 
	document.getElementById("output_2");


function grade_2(n) {
	remove_2();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one_2";
		else if (n == 2) cls = "two_2";
		else if (n == 3) cls = "three_2";
		else if (n == 4) cls = "four_2";
		else if (n == 5) cls = "five_2";
		stars_2[i].className = "star_2 " + cls;
	}
	output_2.innerText = "Rating is: " + n + "/5";
}

function remove_2() {
	let i = 0;
	while (i < 5) {
		stars_2[i].className = "star_2";
		i++;
	}
}
