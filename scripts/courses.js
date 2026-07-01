// courses.js
// Renders the Plan of Study course cards dynamically, supports filtering
// by department, and computes a running credit total with reduce().

// EDIT ME: update `completed` to true/false for each course you have
// actually finished, and adjust the list if your certificate differs.
const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Block-based and text-based introduction to programming logic.',
    technology: ['JavaScript'],
    completed: true,
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 3,
    certificate: 'Web and Computer Programming',
    description: 'Introduction to the World Wide Web and design principles using HTML and CSS.',
    technology: ['HTML', 'CSS'],
    completed: true,
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Continuation of CSE 110 focused on functions, parameters, and structured logic.',
    technology: ['JavaScript', 'Python'],
    completed: true,
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 3,
    certificate: 'Web and Computer Programming',
    description: 'Adds JavaScript and the DOM to build dynamic, interactive web pages.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true,
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 3,
    certificate: 'Web and Computer Programming',
    description: 'Object-oriented programming concepts including classes and inheritance.',
    technology: ['C#'],
    completed: false,
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Web Frontend Development I',
    credits: 3,
    certificate: 'Web and Computer Programming',
    description: 'API data, dynamic content, and responsive layout techniques.',
    technology: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    completed: false,
  },
  {
    subject: 'CSE',
    number: 212,
    title: 'Programming with Data Structures',
    credits: 3,
    certificate: 'Web and Computer Programming',
    description: 'Data structures and algorithms including searching and sorting.',
    technology: ['C#'],
    completed: false,
  },
  {
    subject: 'WDD',
    number: 330,
    title: 'Web Frontend Development II',
    credits: 3,
    certificate: 'Web and Computer Programming',
    description: 'Advanced frontend frameworks and component-based architecture.',
    technology: ['JavaScript', 'Frameworks'],
    completed: false,
  },
];

const courseList = document.getElementById('courseList');
const creditTotal = document.getElementById('creditTotal');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderCourses(filter = 'all') {
  const filtered = filter === 'all'
    ? courses
    : courses.filter(course => course.subject === filter);

  courseList.innerHTML = filtered.map(course => `
    <div class="course-card ${course.completed ? 'completed' : ''}">
      ${course.completed ? '<span class="completed-stamp">Completed</span>' : ''}
      <p class="course-code">${course.subject} ${course.number}</p>
      <h3 class="course-title">${course.title}</h3>
      <p class="course-credits">${course.credits} credits</p>
    </div>
  `).join('');

  const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);
  creditTotal.textContent = totalCredits;
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderCourses(button.dataset.filter);
  });
});

renderCourses();
