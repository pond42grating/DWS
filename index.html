<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All-in-One Authentication System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 800px;
        }

        h1, h3 {
            text-align: center;
        }

        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        .hidden {
            display: none;
        }

        .error {
            color: red;
            font-size: 0.9em;
        }

        .link-button {
            background: none;
            color: blue;
            border: none;
            text-decoration: underline;
            cursor: pointer;
            padding: 0;
        }

        .pending-users-list, .user-list, .audit-log {
            list-style-type: none;
            padding: 0;
        }

        .pending-user, .user-item, .audit-entry {
            padding: 10px;
            border: 1px solid #ccc;
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }

        .role-select {
            width: 150px;
        }

        .bulk-actions {
            margin: 20px 0;
        }

        .bulk-actions button {
            width: auto;
            background-color: #28a745;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Login Section -->
        <div id="loginSection">
            <h1>Login</h1>
            <input type="text" id="signinUsername" placeholder="Enter Username">
            <input type="password" id="signinPassword" placeholder="Enter Password">
            <button id="signinBtn">Sign In</button>
            <p id="signinError" class="error"></p>
            <button class="link-button" onclick="switchSection('signupSection')">Sign Up</button>
            <button class="link-button" onclick="switchSection('forgotPasswordSection')">Forgot Password</button>
        </div>

        <!-- Sign-Up Section -->
        <div id="signupSection" class="hidden">
            <h1>Sign Up</h1>
            <input type="text" id="signupUsername" placeholder="Enter Username">
            <input type="password" id="signupPassword" placeholder="Enter Password">
            <input type="password" id="signupConfirmPassword" placeholder="Confirm Password">
            <input type="text" id="signupSecretCode" placeholder="Enter Secret Code">
            <button id="signupBtn">Sign Up</button>
            <p id="signupError" class="error"></p>
            <button class="link-button" onclick="switchSection('loginSection')">Back to Login</button>
        </div>

        <!-- Forgot Password Section -->
        <div id="forgotPasswordSection" class="hidden">
            <h1>Forgot Password</h1>
            <input type="text" id="resetUsername" placeholder="Enter Username">
            <input type="text" id="resetSecretCode" placeholder="Enter Secret Code">
            <input type="password" id="resetNewPassword" placeholder="Enter New Password">
            <input type="password" id="resetConfirmPassword" placeholder="Confirm New Password">
            <button id="resetPasswordBtn">Reset Password</button>
            <p id="resetError" class="error"></p>
            <button class="link-button" onclick="switchSection('loginSection')">Back to Login</button>
        </div>

        <!-- Admin Dashboard Section -->
        <div id="adminDashboard" class="hidden">
            <h1>Admin Dashboard</h1>

            <!-- Search Users -->
            <input type="text" id="searchUser" placeholder="Search User by Username" oninput="searchUsers()">

            <!-- User Role Management -->
            <div class="bulk-actions">
                <button onclick="bulkApprove()">Bulk Approve</button>
                <button onclick="bulkReject()">Bulk Reject</button>
            </div>

            <h3>Pending User Approvals</h3>
            <ul id="pendingUsersList" class="pending-users-list"></ul>
            <h3>Total Users: <span id="totalUsersCount">0</span></h3>

            <h3>Registered Users</h3>
            <ul id="userList" class="user-list"></ul>

            <h3>Audit Logs</h3>
            <ul id="auditLog" class="audit-log"></ul>

            <button onclick="logout()">Log Out</button>
        </div>

        <!-- User Dashboard Section -->
        <div id="userDashboard" class="hidden">
            <h1>User Dashboard</h1>
            <button onclick="logout()">Log Out</button>
            <h3>Welcome to the User Dashboard</h3>
            <button id="createDWSBtn">Create DWS</button>
            <button id="manageDWSBtn">Manage DWS</button>
            <button id="searchDWSBtn">Search DWS</button>

            <div id="createDWSSection" class="hidden">
                <h3>Create DWS</h3>
                <button onclick="createDWS()">Create DWS</button>
                <p id="dwsMessage"></p>
            </div>

            <div id="manageDWSSection" class="hidden">
                <h3>Manage Your DWS</h3>
                <ul id="userDWSList"></ul>
            </div>

            <div id="searchDWSSection" class="hidden">
                <h3>Search DWS by Number</h3>
                <input type="text" id="dwsSearchNumber" placeholder="Enter DWS Number">
                <button onclick="searchDWS()">Search</button>
                <p id="dwsSearchResult"></p>
            </div>
        </div>

    </div>

    <script>
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const pendingUsers = JSON.parse(localStorage.getItem("pendingUsers")) || [];

        // Helper function to update local storage
        function updateUsers() {
            localStorage.setItem("users", JSON.stringify(users));
        }

        // Handle the "Create DWS" button
        document.getElementById("createDWSBtn").addEventListener("click", () => {
            switchSection("createDWSSection");
        });

        function createDWS() {
            const user = users.find(u => u.username === "currentUser"); // Replace "currentUser" with the logged-in user logic
            if (!user) return;

            const newDWS = {
                dwsNumber: users.length + 1,  // Unique number based on the current number of users
                createdAt: new Date(),
            };

            user.dws = user.dws || [];
            user.dws.push(newDWS);
            updateUsers();

            document.getElementById("dwsMessage").textContent = `Your DWS Number is: ${newDWS.dwsNumber}`;
        }

        // Handle the "Manage DWS" button
        document.getElementById("manageDWSBtn").addEventListener("click", () => {
            switchSection("manageDWSSection");
            loadUserDWS();
        });

        function loadUserDWS() {
            const user = users.find(u => u.username === "currentUser"); // Replace "currentUser" with logged-in user
            if (!user || !user.dws) {
                document.getElementById("userDWSList").innerHTML = "<li>No DWS created yet.</li>";
                return;
            }

            const list = document.getElementById("userDWSList");
            list.innerHTML = ""; // Clear existing list
            user.dws.forEach(dws => {
                const listItem = document.createElement("li");
                listItem.textContent = `DWS Number: ${dws.dwsNumber} - Created on: ${new Date(dws.createdAt).toLocaleDateString()}`;
                list.appendChild(listItem);
            });
        }

        // Handle the "Search DWS" button
        document.getElementById("searchDWSBtn").addEventListener("click", () => {
            switchSection("searchDWSSection");
        });

        function searchDWS() {
            const dwsNumber = document.getElementById("dwsSearchNumber").value.trim();
            const dws = findDWSByNumber(dwsNumber);

            if (dws) {
                document.getElementById("dwsSearchResult").textContent = `Found DWS Number: ${dws.dwsNumber} - Created on: ${new Date(dws.createdAt).toLocaleDateString()}`;
            } else {
                document.getElementById("dwsSearchResult").textContent = "DWS not found.";
            }
        }

        function findDWSByNumber(dwsNumber) {
            for (const user of users) {
                if (user.dws) {
                    const dws = user.dws.find(dws => dws.dwsNumber === parseInt(dwsNumber));
                    if (dws) return dws;
                }
            }
            return null;  // If DWS not found
        }

        // Switch between sections
        function switchSection(sectionId) {
            document.querySelectorAll('.container > div').forEach(div => div.classList.add('hidden'));
            document.getElementById(sectionId).classList.remove('hidden');
            clearInputs();
        }

        // Clear input fields and errors
        function clearInputs() {
            document.querySelectorAll('input').forEach(input => input.value = '');
            document.querySelectorAll('.error').forEach(error => error.textContent = '');
        }

        // Update lists, audit log, and other functionalities...
        // (remaining JavaScript functions for user management, approval, etc.)
        function updatePendingUsersList() {
            const list = document.getElementById("pendingUsersList");
            list.innerHTML = '';
            pendingUsers.forEach((user, index) => {
                const listItem = document.createElement("li");
                listItem.classList.add("pending-user");
                listItem.innerHTML = `${user.username} 
                    <button onclick="approveUser(${index})">Approve</button>
                    <button onclick="rejectUser(${index})">Reject</button>`;
                list.appendChild(listItem);
            });
        }

        function updateUserList() {
            const list = document.getElementById("userList");
            const totalUsersCount = document.getElementById("totalUsersCount");
            list.innerHTML = ''; // Clear existing user list
            users.forEach((user, index) => {
                const listItem = document.createElement("li");
                listItem.classList.add("user-item");
                listItem.innerHTML = `${user.username} 
                    <select class="role-select" onchange="changeUserRole(${index}, this.value)">
                        <option value="user" ${user.role === "user" ? "selected" : ""}>User</option>
                        <option value="admin" ${user.role === "admin" ? "selected" : ""}>Admin</option>
                    </select>
                    <button onclick="removeUser(${index})">Remove</button>`;
                list.appendChild(listItem);
            });
            totalUsersCount.textContent = users.length;
        }

        function updateAuditLog(action, username) {
            const log = { action, username, timestamp: new Date().toISOString() };
            auditLogs.push(log);
            localStorage.setItem("auditLogs", JSON.stringify(auditLogs));
            renderAuditLog();
        }

        function renderAuditLog() {
            const list = document.getElementById("auditLog");
            list.innerHTML = '';
            auditLogs.forEach(log => {
                const logItem = document.createElement("li");
                logItem.classList.add("audit-entry");
                logItem.innerHTML = `${log.timestamp}: ${log.username} - ${log.action}`;
                list.appendChild(logItem);
            });
        }

        function approveUser(index) {
            const user = pendingUsers.splice(index, 1)[0];
            user.approved = true;
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("pendingUsers", JSON.stringify(pendingUsers));
            alert("User approved!");
            updatePendingUsersList();
            updateUserList();
            updateAuditLog('Approved', user.username);
        }

        function rejectUser(index) {
            const user = pendingUsers.splice(index, 1)[0];
            localStorage.setItem("pendingUsers", JSON.stringify(pendingUsers));
            alert("User rejected!");
            updatePendingUsersList();
            updateAuditLog('Rejected', user.username);
        }

        function removeUser(index) {
            const user = users.splice(index, 1)[0];
            localStorage.setItem("users", JSON.stringify(users));
            alert(`${user.username} has been removed from the system.`);
            updateUserList();
            updateAuditLog('Removed', user.username);
        }

        function changeUserRole(index, role) {
            users[index].role = role;
            localStorage.setItem("users", JSON.stringify(users));
            updateAuditLog('Role changed', users[index].username);
        }

        function bulkApprove() {
            pendingUsers.forEach((user, index) => {
                user.approved = true;
                users.push(user);
                updateAuditLog('Bulk approved', user.username);
            });
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("pendingUsers", JSON.stringify([]));
            alert("Bulk approval successful.");
            updatePendingUsersList();
            updateUserList();
        }

        function bulkReject() {
            pendingUsers.forEach((user, index) => {
                updateAuditLog('Bulk rejected', user.username);
            });
            localStorage.setItem("pendingUsers", JSON.stringify([]));
            alert("Bulk rejection successful.");
            updatePendingUsersList();
        }

        function searchUsers() {
            const searchTerm = document.getElementById("searchUser").value.trim().toLowerCase();
            const filteredUsers = users.filter(user => user.username.toLowerCase().includes(searchTerm));
            renderFilteredUsers(filteredUsers);
        }

        function renderFilteredUsers(filteredUsers) {
            const list = document.getElementById("userList");
            list.innerHTML = ''; // Clear existing list
            filteredUsers.forEach((user, index) => {
                const listItem = document.createElement("li");
                listItem.classList.add("user-item");
                listItem.innerHTML = `${user.username} 
                    <select class="role-select" onchange="changeUserRole(${index}, this.value)">
                        <option value="user" ${user.role === "user" ? "selected" : ""}>User</option>
                        <option value="admin" ${user.role === "admin" ? "selected" : ""}>Admin</option>
                    </select>
                    <button onclick="removeUser(${index})">Remove</button>`;
                list.appendChild(listItem);
            });
        }

        function logout() {
            switchSection("loginSection");
        }

        document.getElementById("signinBtn").addEventListener("click", () => {
            const username = document.getElementById("signinUsername").value.trim();
            const password = document.getElementById("signinPassword").value.trim();

            if (!username || !password) {
                document.getElementById("signinError").textContent = "Please fill in all fields.";
                return;
            }

            if (username === "admin" && password === "admin123") {
                switchSection("adminDashboard");
                updatePendingUsersList();
                updateUserList();
                renderAuditLog();
                return;
            }

            const user = users.find(u => u.username === username && u.password === password);
            if (!user) {
                document.getElementById("signinError").textContent = "Invalid credentials.";
                return;
            }

            if (!user.approved) {
                document.getElementById("signinError").textContent = "Your account is pending admin approval.";
                return;
            }

            switchSection("userDashboard");
        });

        document.getElementById("signupBtn").addEventListener("click", () => {
            const username = document.getElementById("signupUsername").value.trim();
            const password = document.getElementById("signupPassword").value.trim();
            const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();
            const secretCode = document.getElementById("signupSecretCode").value.trim();

            if (!username || !password || !confirmPassword || !secretCode) {
                document.getElementById("signupError").textContent = "Please fill in all fields.";
                return;
            }

            if (password !== confirmPassword) {
                document.getElementById("signupError").textContent = "Passwords do not match.";
                return;
            }

            if (users.some(user => user.username === username)) {
                document.getElementById("signupError").textContent = "Username already exists.";
                return;
            }

            pendingUsers.push({ username, password, secretCode, approved: false, role: "user" });
            localStorage.setItem("pendingUsers", JSON.stringify(pendingUsers));

            alert("Sign-up successful! Awaiting admin approval.");
            switchSection("loginSection");
        });

        document.getElementById("resetPasswordBtn").addEventListener("click", () => {
            const username = document.getElementById("resetUsername").value.trim();
            const secretCode = document.getElementById("resetSecretCode").value.trim();
            const newPassword = document.getElementById("resetNewPassword").value.trim();
            const confirmPassword = document.getElementById("resetConfirmPassword").value.trim();

            if (!username || !secretCode || !newPassword || !confirmPassword) {
                document.getElementById("resetError").textContent = "Please fill in all fields.";
                return;
            }

            if (newPassword !== confirmPassword) {
                document.getElementById("resetError").textContent = "Passwords do not match.";
                return;
            }

            const user = users.find(u => u.username === username && u.secretCode === secretCode);
            if (!user) {
                document.getElementById("resetError").textContent = "Invalid username or secret code.";
                return;
            }

            user.password = newPassword;
            localStorage.setItem("users", JSON.stringify(users));

            alert("Password reset successful!");
            switchSection("loginSection");
        });
    </script>
</body>
</html>