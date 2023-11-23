			var selectedRow = null;
	
			function openForm() {
				document.getElementById("myAForm").style.display = "block";
			}
	
			function closeForm() {
				document.getElementById("myAForm").style.display = "none";
			}

			function resetForm() {
            document.getElementById('announceID').value = '';
            document.getElementById('descID').value = '';
            document.getElementById('Date').value = '';
            document.getElementById('location').value = '';
            document.getElementById('assignedID').value = '';
            selectedRow = null;
        }

		function submitForm() {
            var announceID = document.getElementById("announceID").value;
			var descID = document.getElementById("descID").value;
			var Date = document.getElementById("Date").value;
			var location = document.getElementById("location").value;
			var assignedID = document.getElementById("assignedID").value;

			if (!announceID || !descID || !Date || !location || !assignedID) {
                alert("Please fill in all fields.");
                return;
            }

            if (selectedRow) {
                updateTableRow(selectedRow, announceID, descID, Date, location, assignedID);
			} else {
                addNewRow(announceID, descID, Date, location, assignedID);
			}
			
			resetForm();
            closeForm();
		}

		function addNewRow(announceID, descID, Date, location, assignedID) {
            var table = document.getElementById("myTab");
            var newRow = table.insertRow(table.rows.length);
            var cells = [announceID, descID, Date, location, assignedID];

            for (var i = 0; i < cells.length; i++) {
                var cell = newRow.insertCell(i);
                cell.innerHTML = cells[i];
            }

            var actionCell = newRow.insertCell(cells.length);
            actionCell.innerHTML = '<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>';
        }
		
		function updateTableRow(row, announceID, descID, Date, location, assignedID) {
            var cells = [announceID, descID, Date, location, assignedID];

            for (var i = 0; i < cells.length; i++) {
                row.cells[i].innerHTML = cells[i];
            }
        }

        function onEdit(td) {
            selectedRow = td.parentElement.parentElement;
            document.getElementById('announceID').value = selectedRow.cells[0].innerHTML;
            document.getElementById('descID').value = selectedRow.cells[1].innerHTML;
            document.getElementById('Date').value = selectedRow.cells[2].innerHTML;
            document.getElementById('location').value = selectedRow.cells[3].innerHTML;
            document.getElementById('assignedID').value = selectedRow.cells[4].innerHTML;
            openForm();
        }

        function onDelete(td) {
            if (confirm('Do you want to delete this record?')) {
                row = td.parentElement.parentElement;
                document.getElementById('myTab').deleteRow(row.rowIndex);
                resetForm();
            }
        }