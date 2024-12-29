<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daily Work Schedule (DWS) Management</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f4f7;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #333;
      color: white;
      padding: 15px 20px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header h1 {
      margin: 0;
    }
    .logout-btn {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
    }
    .main-content {
      margin-top: 80px;
      padding: 40px;
      text-align: center;
    }
    .card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin: 20px;
      padding: 20px;
      display: inline-block;
      width: 250px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .card:hover {
      transform: scale(1.05);
    }
    .card h2 {
      margin-top: 10px;
      color: #333;
    }
    .search-container {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 15px;
    }
    .search-input {
      padding: 10px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    .search-btn {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }
    .export-btns {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 15px;
    }
    .export-btn {
      padding: 10px 20px;
      background-color: #2196F3;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>

<header>
  <h1>DWS Management</h1>
  <button class="logout-btn" onclick="alert('Logging out...')">Log Out</button>
</header>

<div class="main-content">
  <div class="card" onclick="alert('Creating DWS...')">
    <h2>Create DWS</h2>
  </div>

  <div class="card" onclick="alert('Managing DWS...')">
    <h2>Manage DWS</h2>
  </div>

  <div class="card" onclick="alert('Exporting as PDF...')">
    <h2>Export as PDF</h2>
  </div>

  <div class="card" onclick="alert('Exporting as Excel...')">
    <h2>Export as Excel</h2>
  </div>

  <!-- Manage DWS Section -->
  <div class="manage-dws-container" style="display: none;">
    <div class="search-container">
      <input type="text" class="search-input" placeholder="Search by Structure/ TQ/ SI No./ DWS No." id="searchInput">
      <button class="search-btn" onclick="alert('Search function working...')">Search</button>
    </div>

    <div class="export-btns">
      <button class="export-btn" onclick="alert('Exporting filtered data as PDF...')">Export as PDF</button>
      <button class="export-btn" onclick="alert('Exporting filtered data as Excel...')">Export as Excel</button>
    </div>
  </div>
</div>

<script>
  // Toggle the visibility of Manage DWS
  document.querySelector('.card:nth-child(2)').onclick = function() {
    alert('Managing DWS...');
    const manageDwsSection = document.querySelector('.manage-dws-container');
    manageDwsSection.style.display = manageDwsSection.style.display === 'none' ? 'block' : 'none';
  };

  // Handle the log-out button functionality
  document.querySelector('.logout-btn').onclick = function() {
    alert('Logging out...');
    // Implement actual logout functionality here
  };
</script>

</body>
</html>