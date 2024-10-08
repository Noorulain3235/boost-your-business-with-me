// script.js

const teamMembers = [
    {
        image: 'img-5-1 (1).jpg',
        name: 'John Doe',
        department: 'Marketing',
        link: '#'
    },
    {
        image: 'img-4-2 (2).jpg',
        name: 'Jane Smith',
        department: 'Development',
        link: '#'
    },
    {
        image: 'img-6-1 (3).jpg',
        name: 'Alice Johnson',
        department: 'Design',
        link: '#'
    },
    {
        image: 'img-3-6 (2).jpg',
        name: 'Bob Brown',
        department: 'SEO',
        link: '#'
    },
    {
        image: 'img-2-6 (2).jpg',
        name: 'Charlie Davis',
        department: 'Sales',
        link: '#'
    },
    {
        image: 'img-1-6 (1).jpg',
        name: 'Emily Clark',
        department: 'HR',
        link: '#'
    },
];

const teamSection = document.getElementById('team-section');

teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-card';
    
    card.innerHTML = `
        <img src="${member.image}" alt="${member.name}" class="team-image" />
        <h3 class="team-name">${member.name}</h3>
        <p class="team-department">${member.department}</p>
        <a href="${member.link}" class="team-link">View Profile</a>
    `;
    
    teamSection.appendChild(card);
});












document.getElementById("year").textContent = new Date().getFullYear();
