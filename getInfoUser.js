        var selectedRow = null;

        function openForm() {
            document.getElementById("userForm").style.display = "block";
        }

        function closeForm() {
            document.getElementById("userForm").style.display = "none";
        }

        function resetForm() {
            document.getElementById('userID').value = '';
            document.getElementById('FName').value = '';
            document.getElementById('LName').value = '';
            document.getElementById('Address').value = '';
            document.getElementById('Email').value = '';
            document.getElementById('Username').value = '';
            document.getElementById('Password').value = '';
            selectedRow = null;
        }

        function submitForm() {
            var userId = document.getElementById("userID").value;
            var FName = document.getElementById("FName").value;
            var LName = document.getElementById("LName").value;
            var Address = document.getElementById("Address").value;
            var Email = document.getElementById("Email").value;
            var Username = document.getElementById("Username").value;
            var Password = document.getElementById("Password").value;

            if (!userId || !FName || !LName || !Address || !Email || !Username || !Password) {
                alert("Please fill in all fields.");
                return;
            }

            if (selectedRow) {
                updateTableRow(selectedRow, userId, FName, LName, Address, Email, Username, Password);
            } else {
                addNewRow(userId, FName, LName, Address, Email, Username, Password);
            }

            resetForm();
            closeForm();
        }

        function addNewRow(userId, FName, LName, Address, Email, Username, Password) {
            var table = document.getElementById("myTab");
            var newRow = table.insertRow(table.rows.length);
            var cells = [userId, FName, LName, Address, Email, Username, Password];

            for (var i = 0; i < cells.length; i++) {
                var cell = newRow.insertCell(i);
                cell.innerHTML = cells[i];
            }

            var actionCell = newRow.insertCell(cells.length);
            actionCell.innerHTML = '<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>';
        }

        function updateTableRow(row, userId, FName, LName, Address, Email, Username, Password) {
            var cells = [userId, FName, LName, Address, Email, Username, Password];

            for (var i = 0; i < cells.length; i++) {
                row.cells[i].innerHTML = cells[i];
            }
        }

        function onEdit(td) {
            selectedRow = td.parentElement.parentElement;
            document.getElementById('userID').value = selectedRow.cells[0].innerHTML;
            document.getElementById('FName').value = selectedRow.cells[1].innerHTML;
            document.getElementById('LName').value = selectedRow.cells[2].innerHTML;
            document.getElementById('Address').value = selectedRow.cells[3].innerHTML;
            document.getElementById('Email').value = selectedRow.cells[4].innerHTML;
            document.getElementById('Username').value = selectedRow.cells[5].innerHTML;
            document.getElementById('Password').value = selectedRow.cells[6].innerHTML;
            openForm();
        }

        function onDelete(td) {
            if (confirm('Do you want to delete this record?')) {
                row = td.parentElement.parentElement;
                document.getElementById('myTab').deleteRow(row.rowIndex);
                resetForm();
            }
        }