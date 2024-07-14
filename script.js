function createTable() {
    //Write your code here
	let numRow= parseInt(prompt("Input number of rows"));
	let numCol= parseInt(prompt("Input number of columns"));

	let table=document.getElementById("myTable");
	table.style.border="1px solid black";
	
	
	for(let i=0; i<numRow; i++){
		let row=document.createElement("tr");
		row.className="tr"
		for(let j=0; j<numCol; j++){
			let col=document.createElement("td");
			col.style.border="1px solid black";
			col.className="td"
			col.innerHTML=`Row-${i} Column-${j}`
			row.append(col);
		}
		table.append(row);
	}
}
