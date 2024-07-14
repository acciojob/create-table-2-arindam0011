function createTable() {
    //Write your code here
	let num= parseInt(prompt("input number of rows"));

	let table=document.createElement("table");
	table.style.border="1px solid black";
	
	for(let i=0; i<num; i++){
		let row=document.createElement("tr");
		for(let j=0; j<3; j++){
			let col=document.createElement("td");
			col.style.border="1px solid black";
			col.innerHTML=`Row-${i} Column-${j}`
			row.append(col);
		}
		table.append(row);
	}

	document.body.prepend(table);
  
}
