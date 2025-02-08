// scripts.js

// Navigation Handling
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-section');

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            link.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            // Show the target section
            document.getElementById(target).classList.add('active');
        });
    });

    // Load Exam Dates
    loadExamDates();

    // Load Faculty Information
    loadFaculty();

    // Load Notes
    loadNotes();
});


// scripts.js

// Function to load exam dates dynamically
function loadExamDates() {
    const examDates = [
        { course: 'First Spell of Instructions', date: '22.07.2024 to 14.09.2024' },
        { course: 'CRC Meeting-1', date: '31.08.2024' },
        { course: 'First Mid Term Examination', date: '16.09.2024 to 21.09.2024' },
        { course: 'Second Spell of Instructions', date: '23.09.2024 to 09.10.2024' },
        { course: 'Dussehra Holidays', date: '10.10.2024 to 15.10.2024' },
        { course: 'Continuation of Second Spell of Instructions', date: '16.10.2024 to 26.11.2024' }, // Fixed typo
        { course: 'CRC Meeting-2', date: '13.11.2024' },
        { course: 'Second Mid Term Examination', date: '27.11.2024 to 03.12.2024' },
        { course: 'Preparations & Practical Examinations', date: '04.12.2024 to 10.12.2024' }, // Fixed typo
        { course: 'End Semester Examinations', date: '11.12.2024 to 24.12.2024' },
        // Add more courses as needed
    ];

    const examsTable = document.getElementById('exams-table');

    examDates.forEach(exam => {
        const row = document.createElement('tr');

        const courseCell = document.createElement('td');
        courseCell.textContent = exam.course;
        row.appendChild(courseCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = exam.date; // Directly display the date string
        row.appendChild(dateCell);

        examsTable.appendChild(row);
    });
}

// Call the function to load the exam dates
loadExamDates();

// Function to load faculty information dynamically
function loadFaculty() {
    const faculty = [
        {
            name: 'HARIBABU',
            department: 'BSH',
        
            phone: '8985168988'
        },
        {
            name: 'RAJITHA',
            department: ' CSM',
            
            phone: '8978689163'
        },
        {
            name: 'D.SWETHA',
            department: 'CSE(AI&ML)',
            
            phone: '9652440879'
        },
        
        {
            name: 'N.SUNDEEP KUMAR',
            department: 'CSM',
    
            phone: '9966493661'
        },
        {
            name: 'DR. G.REKHA',
            department: 'CSE(AI&ML)',
            
            phone: '9966989861'
        },
        
        // Add more faculty members as needed
    ];

    const facultyList = document.getElementById('faculty-list');

    faculty.forEach(member => {
        const facultyDiv = document.createElement('div');
        facultyDiv.classList.add('faculty-member');

        const name = document.createElement('h3');
        name.textContent = member.name;
        facultyDiv.appendChild(name);

        const dept = document.createElement('p');
        dept.textContent = `Department: ${member.department}`;
        facultyDiv.appendChild(dept);

        

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;
        facultyDiv.appendChild(phone);

        facultyList.appendChild(facultyDiv);
    });
}

// Function to load notes dynamically
function loadNotes() {
    const notes = [
        { title: 'DM UNIT-1', file: 'Discrete mathematics unit -1notes.pdf' },
        { title: 'DM UNIT-2', file: '' },
        { title: 'DM UNIT-3', file: '' },
        { title: 'DM UNIT-4', file: 'notes/genetics.pdf' },
        { title: 'DM UNIT-5', file: 'notes/data_structures.pdf' },

        { title: 'ATCD UNIT-1', file: 'ATCD UNIT1 NOTES R23 CSM 2-2.pdf' },
        { title: 'ATCD UNIT-2', file: '' },
        { title: 'ATCD UNIT-3', file: 'notes/organic_chemistry.pdf' },
        { title: 'ATCD UNIT-4', file: 'notes/genetics.pdf' },
        { title: 'ATCD UNIT-5', file: 'notes/data_structures.pdf' },

        { title: 'DBMS UNIT-1', file: 'OPERATING SYSTEMS.pdf' },
        { title: 'DBMS UNIT-2', file: 'SE Unit2 notes.pdf' },
        { title: 'DBMS UNIT-3', file: 'notes/organic_chemistry.pdf' },
        { title: 'DBMS UNIT-4', file: 'notes/genetics.pdf' },
        { title: 'DBMS UNIT-5', file: 'notes/data_structures.pdf' },

        { title: 'AI UNIT-1 PART 1', file: 'AI unit 1 notes.pdf' },
        { title: 'AI UNIT-1 PART 2', file: 'AI chapter 1 part 2 notes.pdf' },
        { title: 'AI UNIT-3', file: 'notes/organic_chemistry.pdf' },
        { title: 'AI UNIT-4', file: 'notes/genetics.pdf' },
        { title: 'AI UNIT-5', file: 'notes/data_structures.pdf' },

        { title: 'JAVA UNIT-1', file: 'Unit 1 & 2.pdf' },
        { title: 'JAVA UNIT-2', file: 'Unit 1 & 2.pdf' },
        { title: 'JAVA UNIT-3', file: 'Unit-3 Exception Handling_Multi threading.pdf' },
        { title: 'JAVA UNIT-4', file: 'Unit-4 Collection Framework(Generics) and IO streams.pdf' },
        { title: 'JAVA UNIT-5', file: 'notes/data_structures.pdf' },



        // Add more notes as needed
    ];

    const notesList = document.getElementById('notes-list');

    notes.forEach(note => {
        const listItem = document.createElement('li');

        const noteTitle = document.createElement('span');
        noteTitle.textContent = note.title;

        const downloadLink = document.createElement('a');
        downloadLink.href = note.file;
        downloadLink.textContent = 'Download';
        downloadLink.target = '_blank';
        downloadLink.rel = 'noopener noreferrer';

        listItem.appendChild(noteTitle);
        listItem.appendChild(downloadLink);

        notesList.appendChild(listItem);
    });
}






// Function to load Important Questions
function loadImportantQuestions() {
    const importantQuestions = [
        { title: 'Download Important Questions - ', link: '' },
        { title: 'Download Important Questions - ', link: '' },
        { title: 'Download Important Questions - ', link: '' },
        { title: 'Download Important Questions - ', link: '' },
        { title: 'Download Important Questions - ', link: '' },
        { title: 'Download Important Questions - ', link: '' },
        { title: 'Download Important Questions - ', link: '' },



        // Add more important questions as needed
    ];

    const questionsList = document.getElementById('important-questions-list');


    importantQuestions.forEach(question => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${question.link}" target="_blank" rel="noopener noreferrer">${question.title}</a>`;
        questionsList.appendChild(listItem);
    });
}
// Initialize the General Notes section when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadImportantQuestions();
});


// Function to load Question Papers
function loadQuestionPapers() {
    const questionPapers = [
        { title: 'Download Question Paper - previous JAVA', link: 'AprilMay-2023.pdf' },
        { title: 'Download Question Paper - previous JAVA', link: 'AugustSeptember-2022.pdf' },
        {title: 'Download Question Paper - previous DM', link: 'AprilMay-2023.pdf' },
        { title: 'Download Question Paper - previous DM', link: 'March-2022.pdf' },
        { title: 'Download Question Paper - previous AI', link: 'JanuaryFebruary-2023.pdf' },
        { title: 'Download Question Paper - previous AI', link: 'FebruaryMarch-2022.pdf' },
        {title: 'Download Question Paper - previous AI', link: 'JulyAugust-2022.pdf' },
        { title: 'Download Question Paper - previous DBMS', link: 'dbmsJanuaryFebruary-2023 (2).pdf' },
        

        // Add more question papers as needed
    ];

    const papersList = document.getElementById('question-papers-list');

    questionPapers.forEach(paper => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${paper.link}" target="_blank" rel="noopener noreferrer">${paper.title}</a>`;
        papersList.appendChild(listItem);
    });
}
// Initialize the General Notes section when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadQuestionPapers();
});



function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

