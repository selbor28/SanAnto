function toLC() {
	document.getElementById('lc').value = document.getElementById('lc').value.toLowerCase();
	let myString = document.getElementById('lc').value.toLowerCase();
	console.log(myString);
	return myString;
}
function toUC() {
	document.getElementById('uc').value = document.getElementById('uc').value.toUpperCase();
	let myString = document.getElementById('uc').value.toUpperCase();
	return myString;
}
function isEmailAddr(elem) {
	var str = elem.value;
	var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
	if (!str.match(re)) {
		alert("E-mail is invalid!");
		return false;
	} else {
		return true;
	}
}

function cleardb() {
	document.getElementById("clients").reset();
}
function clearbdb() {
        document.getElementById("bclients").reset();
}
function clearidb() {
	document.getElementById("inventory").reset();
}
function clookup(str) {
	if (str == "") {
		document.getElementById("results").innerHTML = "";
		return;
	}
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		document.getElementById("results").innerHTML = this.responseText;
		}
		xhttp.open("GET", "clientlookup.php?q="+str);
		xhttp.send();
};



function generateInvoice() {
	const customer = document.getElementById("bName").value;
        const name = document.getElementById("cName").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zipcode = document.getElementById("zipcode").value;
	const jobSummary = document.getElementById("description").value;

	orderData = {
		customer: customer,
		name: name,
		address: address,
		city:	city,
		state:	state,
		zipcode: zipcode,
		jobSummary: jobSummary,
	};

	const chkIfInvoiceCreated = document.getElementById("invoiceOrder");

	if (chkIfInvoiceCreated) {
        const tableContent = document.querySelectorAll(".parts");
        const tableCostContent = document.querySelectorAll(".cost");
        const tableQtyContent = document.querySelectorAll(".qty");

		function clearTable(tableId) {
        	const table = document.getElementById(tableId);
	 
		 if (!table) {
	   	 console.error(`Table with ID "${tableId}" not found!`);
	   	 return; // Exit if table not found
	  	 }
	  	 table.innerHTML = bodyTable;
		 }

		const tableId = "invoiceTable";
		clearTable(tableId);

		getTableContent(tableContent,tableCostContent,tableQtyContent);

		} else {

		createOrder(orderData);
		}
	}
//nested function of generate invoice
	function createOrder(data) {
	var newOrder = document.createElement("div");
	newOrder.setAttribute("id","invoiceOrder");
	newOrder.setAttribute("class","wrapper");
	var newOrderWrap = document.createElement("div");
	newOrderWrap.setAttribute("id", "invoiceWrapper");
	var invoiceHeader = document.createElement("div");
	invoiceHeader.setAttribute("id","invoiceHeader");
	invoiceHeader.setAttribute("class","invoiceHeader");
	var tsDiv = document.createElement("div");
	tsDiv.setAttribute("id", "timeStamp");
	tsDiv.setAttribute("class", "invoiceHeader");
	var customer = document.createElement("div");
	customer.setAttribute("id","customer");
	var customerName = document.createElement("div");
	customerName.setAttribute("id","customerName");
	var address = document.createElement("div");
	address.setAttribute("id","address");
	var city = document.createElement("div");
	city.setAttribute("id","city");
	var state = document.createElement("div");
	state.setAttribute("id","state");
	var zipcode = document.createElement("div");
	zipcode.setAttribute("id","zipcode");
 	var bodyOrder = document.createElement("div");
	bodyOrder.setAttribute("class", "bodyOrder");
	var jobSummary = document.createElement("div");
	jobSummary.setAttribute("id","jobSummary");
	var signature = document.createElement("div");
	signature.setAttribute("id", "signature");
	var footerOrder = document.createElement("footer");
	footerOrder.setAttribute("class", "footerOrder");
	footerOrder.style.bottom = "0";
	newOrder.appendChild(invoiceHeader);
	newOrder.appendChild(tsDiv)
	newOrder.appendChild(newOrderWrap);
	newOrderWrap.appendChild(customer);
	newOrderWrap.appendChild(customerName);
	newOrderWrap.appendChild(address);
	newOrderWrap.appendChild(city);
	newOrderWrap.appendChild(state);
	newOrderWrap.appendChild(zipcode);
	newOrder.appendChild(bodyOrder);
	newOrder.appendChild(jobSummary);
	newOrder.appendChild(signature);
	newOrder.appendChild(footerOrder);
	let tsInvoice = new Date();
	let tsTime = tsInvoice.toLocaleDateString();
	const content = "<p>Invoice<br>Selbor Tech</br>Reynaldo Robles</br>Phone:(210)488-5030</p>";
	const footer = "<center><h6>SanAnto.Net Reynaldo Robles Phone:(210)488-5030 email: rey.robles72@gmail.com</h6></center>"
	const bodyTable = "<table id='invoiceTable'><tr class='invoiceRow'><th>Description</th><th>Qty</th><th>Unit Price</th><th>Amount</th></tr>"
	const signatureContent = "Customer Signature:____________________________________________"
	window.bodyTable = bodyTable;
	invoiceHeader.innerHTML = content;
	tsDiv.innerHTML = '<h4>Date:</h4>' + tsInvoice;
	customer.innerHTML = '<h4>Bill To:</h4>' + data.customer;
	customerName.innerHTML = data.name;
	address.innerHTML = data.address;
	city.innerHTML = data.city;
	state.innerHTML = data.state;
	zipcode.innerHTML = data.zipcode + '<br>';
	bodyOrder.innerHTML = bodyTable;
	jobSummary.innerHTML = data.jobSummary;
	signature.innerHTML = signatureContent;
	footerOrder.innerHTML = footer;
	document.body.appendChild(newOrder);
//nested function of createOrder
	        function addTableRow(tableId, dataArray) {
                const table = document.getElementById('invoiceTable');
                const newRow = document.createElement('tr');

                for (let i = 0; i < dataArray.length; i++) {
                const  newCell = document.createElement('td');
                newCell.textContent = dataArray[i];
                newRow.appendChild(newCell);
                }
                table.appendChild(newRow);
                }

        	const tableContent = document.querySelectorAll(".parts");
      		const tableCostContent = document.querySelectorAll(".cost");
        	const tableQtyContent = document.querySelectorAll(".qty");

        	getTableContent(tableContent,tableCostContent,tableQtyContent);
//nested function of addTableRow
		function getTableContent(parts,cost,qty) {
                const result = [];
                for (let i = 0;i < parts.length; i++) {
                        result.push(parts[i].value);
                        result.push(cost[i].value);
                        result.push(qty[i].value);
			var total = ((cost[i].value)*(qty[i].value));
                        const tableId = 'invoiceTable';
                        const rowData = [parts[i].value, cost[i].value, qty[i].value, total];
                        addTableRow(tableId, rowData);
                }
		window.getTableContent = getTableContent;

                console.log(result);
//nested function of getTableContent
		function getTableColumnTotal(tableId, columnIndex) {
		const table = document.getElementById(tableId); 

			let total = 0;

 				if (!table) {
  				  console.error(`Table with ID "${tableId}" not found!`);
 				   return total; // Return 0 if table not found
  				}

 		 // Get all table rows (excluding header if present)
		  const rows = table.querySelectorAll("tr"); // Modify selector if header is not in a tbody

		    rows.forEach(row=> {
		    const cell = row.children[columnIndex]; // Access cell based on columnIndex
		    const cellValue = parseFloat(cell.textContent); // Parse value as number

 		   // Check if value is a valid number
		    if (!isNaN(cellValue)) {
		      total += cellValue;
  			  } else {
    		  console.warn(`Non-numeric value found in column ${columnIndex} at row ${row.rowIndex + 1} (ignoring)`);
    			}
 			 });

 		 return total;
		}


const tableId = "invoiceTable";
const totalColumnIndex = 3; // Assuming column index 1 (second column)
const columnTotal = getTableColumnTotal(tableId, totalColumnIndex);
window.columnTotal = columnTotal;
window.tableId = tableId;
console.log(`Total for column ${totalColumnIndex + 1}:`, columnTotal);

return result;

}

function addTotal(tableId,columnTotal) {
	const table = document.getElementById(tableId);
        const newRow = document.createElement('tr');
	newRow.setAttribute = ("class", "total");
	var tableContent = [];
	tableContent = ['','','<b>Total</b>',columnTotal];
	for (i=0;i<tableContent.length;i++) {
	const newCell = document.createElement('td');
	newCell.innerHTML = tableContent[i];
	newRow.appendChild(newCell);
	}	
	table.appendChild(newRow);
	console.log("Total Added");


}
addTotal(tableId,columnTotal);


}

//	        const tableContent = document.querySelectorAll(".parts");
//         {
//                const row = document.creatElement("tr");
//                const cell = document.createElement("td");
//                cell.textContent = part.value;
//                row.appendChild(cell);
//                table.appendChild(row);
//        }

//	console.log(data.customer);





$(document).ready(function() {
      $("#fName").keyup(function() {
        var fName = $(this).val();
        // Send AJAX request to search.php
        $.ajax({
          url: "search.php",
          type: "POST",
          data: { fName: fName },
          success: function(response) {
            $("#results").html(response);
    }
          });
        });
    });


function addParts() {
	const invoice = document.getElementById("partsContainer");
	const parts = document.querySelectorAll(".parts");
	const clonePart = parts[0].cloneNode(true);
	clonePart.setAttribute("class", "parts");
	clonePart.value = "";
	invoice.appendChild(clonePart);
	const cost = document.querySelectorAll(".cost");
	const cloneCost = cost[0].cloneNode(true);
	cloneCost.setAttribute("class", "cost");
	cloneCost.value = "";
	invoice.appendChild(cloneCost);
	const qty = document.querySelectorAll(".qty");
	const cloneQty = qty[0].cloneNode(true);
	cloneQty.setAttribute("class", "qty");
	cloneQty.value = "";
	invoice.appendChild(cloneQty);
	console.log(parts);
	return;
}

