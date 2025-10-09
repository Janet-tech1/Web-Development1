let editingIndex = null;

let students = JSON.parse(localStorage.getItem("students"));
if (!students) {
    students = [];
}
let studentImage = ""; 


function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}


function tracker(pageId, btn = null) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (pageId === "students") renderStudents();
}


function login() {
  let username = document.getElementById("username").value.trim();
  if (username === "") {
    alert("Please enter your name!");
    return;
  }

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("welcomeBox").style.display = "block";
  document.getElementById("welcomeMessage").innerText = `Welcome, ${username} 👋`;
}

// Open Add/Edit Student Modal
function addStudents(index = null) {
  editingIndex = index;
  document.getElementById("addStudents").style.display = "flex";

  if (index !== null) {
    // Editing existing student
    let s = students[index];
    document.getElementById("studentName").value = s.name;
    document.getElementById("studentClass").value = s.className;
    document.getElementById("subject1").value = s.subject1;
    document.getElementById("score1").value = s.score1;
    document.getElementById("subject2").value = s.subject2;
    document.getElementById("score2").value = s.score2;
    document.getElementById("subject3").value = s.subject3;
    document.getElementById("score3").value = s.score3;

    if (s.photo) {
      studentImage = s.photo;
      document.getElementById("previewPhoto").src = s.photo;
      document.getElementById("previewPhoto").style.display = "inline-block";
    } else {
      studentImage = "";
      document.getElementById("previewPhoto").style.display = "none";
    }
  } else {
    // Adding new student
    document.querySelectorAll("#addStudents input").forEach(i => i.value = "");
    studentImage = "";
    document.getElementById("previewPhoto").style.display = "none";
  }
}

// Close Modal
function closePage() { 
  document.getElementById("addStudents").style.display = "none"; 
}

// Save Student
function saveStudent() {
  let name = document.getElementById("studentName").value.trim();
  let className = document.getElementById("studentClass").value.trim();
  let s1 = document.getElementById("subject1").value.trim();
  let sc1 = Number(document.getElementById("score1").value);
  let s2 = document.getElementById("subject2").value.trim();
  let sc2 = Number(document.getElementById("score2").value);
  let s3 = document.getElementById("subject3").value.trim();
  let sc3 = Number(document.getElementById("score3").value);

  if (!name || !className) { 
    alert("Please fill required fields"); 
    return; 
  }

  let student = { 
    name, className, 
    subject1: s1, score1: sc1, 
    subject2: s2, score2: sc2, 
    subject3: s3, score3: sc3,
    photo: studentImage || (editingIndex !== null ? students[editingIndex].photo : "")
  };

  if (editingIndex === null) {
    students.push(student);
  } else {
    students[editingIndex] = student;
    editingIndex = null;
  }

  saveToLocalStorage();
  closePage();
  renderStudents();

  // Reset image after save
  studentImage = "";
  document.getElementById("previewPhoto").style.display = "none";
}

// Delete Student
function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    saveToLocalStorage();
    renderStudents();
  }
}

// Render Student Table
function renderStudents() {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";
  students.forEach((s, i) => {
    let avg = ((s.score1 + s.score2 + s.score3) / 3).toFixed(1);
    let perf = avg >= 70 ? '<span class="excellent">Excellent</span>' :
               avg >= 50 ? '<span class="good">Good</span>' :
               '<span class="needs-help">Needs Help</span>';

    table.innerHTML += `
      <tr>
        <td><img src="${s.photo || 'default.png'}" style="width:50px;height:50px;border-radius:50%;"></td>
        <td>${s.name}</td>
        <td>${s.className}</td>
        <td>${s.subject1}</td><td>${s.score1}</td>
        <td>${s.subject2}</td><td>${s.score2}</td>
        <td>${s.subject3}</td><td>${s.score3}</td>
        <td>${avg}</td><td>${perf}</td>
        <td>
          <button class="edit-btn" onclick="addStudents(${i})">Edit</button>
          <button class="delete-btn" onclick="deleteStudent(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// Search Students by name
function searchStudents() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  document.querySelectorAll("#studentTable tr").forEach(row => {
    let name = row.cells[1].innerText.toLowerCase(); // name column (not photo)
    row.style.display = name.includes(input) ? "" : "none";
  });
}

// Image upload preview
document.getElementById("studentPhoto").addEventListener("change", function(event){
  const file = event.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      studentImage = e.target.result; // Save Base64
      document.getElementById("previewPhoto").src = studentImage;
      document.getElementById("previewPhoto").style.display = "inline-block";
    };
    reader.readAsDataURL(file);
  }
});

// Load data on page load
window.onload = function () {
  renderStudents();
};
