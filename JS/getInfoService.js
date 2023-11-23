			var selectedRow = null;
	
			function openForm() {
				document.getElementById("mySForm").style.display = "block";
			}
	
			function closeForm() {
				document.getElementById("mySForm").style.display = "none";
			}

			function resetForm() {
            document.getElementById('serviceID').value = '';
            document.getElementById('serviceName').value = '';
            document.getElementById('serviceDesc').value = '';
            document.getElementById('servicePrice').value = '';
            selectedRow = null;
        }

		function submitForm() {
            var serviceID = document.getElementById("serviceID").value;
			var serviceName = document.getElementById("serviceName").value;
			var serviceDesc = document.getElementById("serviceDesc").value;
			var servicePrice = document.getElementById("servicePrice").value;

			if (!serviceID || !serviceName || !serviceDesc || !servicePrice) {
                alert("Please fill in all fields.");
                return;
            }

            if (selectedRow) {
                updateTableRow(selectedRow, serviceID, serviceName, serviceDesc, servicePrice);
			} else {
                addNewRow(serviceID, serviceName, serviceDesc, servicePrice);
			}
			
			resetForm();
            closeForm();
		}

		function addNewRow(serviceID, serviceName, serviceDesc, servicePrice) {
            var table = document.getElementById("myTab");
            var newRow = table.insertRow(table.rows.length);
            var cells = [serviceID, serviceName, serviceDesc, servicePrice];

            for (var i = 0; i < cells.length; i++) {
                var cell = newRow.insertCell(i);
                cell.innerHTML = cells[i];
            }

            var actionCell = newRow.insertCell(cells.length);
            actionCell.innerHTML = '<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>';
        }
		
		function updateTableRow(row, serviceID, serviceName, serviceDesc, servicePrice) {
            var cells = [serviceID, serviceName, serviceDesc, servicePrice];

            for (var i = 0; i < cells.length; i++) {
                row.cells[i].innerHTML = cells[i];
            }
        }

        function onEdit(td) {
            selectedRow = td.parentElement.parentElement;
            document.getElementById('serviceID').value = selectedRow.cells[0].innerHTML;
            document.getElementById('serviceName').value = selectedRow.cells[1].innerHTML;
            document.getElementById('serviceDesc').value = selectedRow.cells[2].innerHTML;
            document.getElementById('servicePrice').value = selectedRow.cells[3].innerHTML;
            openForm();
        }

        function onDelete(td) {
            if (confirm('Do you want to delete this record?')) {
                row = td.parentElement.parentElement;
                document.getElementById('myTab').deleteRow(row.rowIndex);
                resetForm();
            }
        }

	