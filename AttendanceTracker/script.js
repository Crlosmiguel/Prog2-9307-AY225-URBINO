// ADMIN ACCOUNT
const ADMIN = { username: "admin", password: "admin123" };

// ERROR SOUND
const beep = new Audio("error.mp3");
beep.volume = 0.7;

// DATA
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
let isRegister = false;
let users = JSON.parse(localStorage.getItem("users")) || [];

// TOGGLE LOGIN / REGISTER
function toggleForm() {
  isRegister = !isRegister;
  document.getElementById("title").textContent = isRegister ? "Create Account" : "Login";
  document.getElementById("actionBtn").textContent = isRegister ? "Register" : "Log In";
  document.getElementById("toggle").textContent = isRegister ? "Already have an account? Login" : "No account? Create one";
  document.getElementById("message").textContent = "";
}

// LOGIN / REGISTER
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("message");
  const timeText = document.getElementById("time");

  if (user === "" || pass === "") {
    msg.style.color = "red";
    msg.textContent = "All fields required!";
    return;
  }

  // ADMIN LOGIN
  if (user === ADMIN.username && pass === ADMIN.password) {
    showDashboard();
    return;
  }

  // REGISTER MODE
  if (isRegister) {
    if (users.find(u => u.username === user)) {
      msg.style.color = "red";
      msg.textContent = "Username already exists!";
      beep.currentTime = 0;
      beep.play();
      return;
    }

    users.push({ username: user, password: pass });
    localStorage.setItem("users", JSON.stringify(users));

    msg.style.color = "lightgreen";
    msg.textContent = "Account created! You can now login.";
    toggleForm();
    return;
  }

  // NORMAL USER LOGIN
  const found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    const now = new Date();
    const timestamp = now.toLocaleString();

    msg.style.color = "#22c55e";
    msg.textContent = "Welcome, " + user;
    timeText.textContent = "Login Time: " + timestamp;

    attendance.push({ user, timestamp });
    localStorage.setItem("attendance", JSON.stringify(attendance));
    document.getElementById("downloadBtn").style.display = "block";
  } 
  else {
    msg.style.color = "#ef4444";
    msg.textContent = "Invalid username or password!";
    beep.currentTime = 0;
    beep.play();
  }
}

// SHOW ADMIN DASHBOARD
function showDashboard() {
  document.getElementById("loginCard").style.display = "none";
  const dashboard = document.getElementById("dashboard");
  dashboard.style.display = "block";

  // Populate users
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  users.forEach(u => {
    const li = document.createElement("li");
    li.textContent = u.username;
    userList.appendChild(li);
  });

  // Populate attendance
  const attendanceList = document.getElementById("attendanceList");
  attendanceList.innerHTML = "";
  attendance.forEach(a => {
    const li = document.createElement("li");
    li.textContent = ${a.user} - ${a.timestamp};
    attendanceList.appendChild(li);
  });
}

// DOWNLOAD USER ATTENDANCE
function downloadFile() {
  let text = "ATTENDANCE SUMMARY\n\n";
  attendance.forEach((a, i) => text += ${i+1}. ${a.user} - ${a.timestamp}\n);

  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "attendance_summary.txt";
  link.click();
}

// DOWNLOAD ALL RECORDS (ADMIN)
function downloadAll() {
  let text = "USERS\n";
  users.forEach(u => text += u.username + "\n");

  text += "\nATTENDANCE\n";
  attendance.forEach(a => text += a.user + " - " + a.timestamp + "\n");

  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "admin_records.txt";
  link.click();
}

// RESET ATTENDANCE (ADMIN)
function resetAttendance() {
  if (confirm("Are you sure you want to reset all attendance records?")) {
    attendance = [];
    localStorage.removeItem("attendance");
    document.getElementById("attendanceList").innerHTML = "";
    alert("Attendance records have been reset.");
  }
}

// LOGOUT ADMIN
function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginCard").style.display = "block";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("time").textContent = "";
  document.getElementById("downloadBtn").style.display = "none";
}