const projects = [
	{
		nr: '001',
		name: 'Picboy 픽보이',
		link: 'https://picboy.co.kr/',
		file: '/assets/css/images/picboy.gif'
	},
	{
		nr: '002',
		name: '당근나라',
		link: 'https://github.com/yalla12/market-service.git',
		file: 'assets/css/images/carret.png'
	}
];

const app = document.getElementById('app');
projects.forEach(project => {
	const title = `${project.name} - #${project.nr}`;
    const imgURL = project.file;
	const projectEl = document.createElement('a');
	projectEl.classList.add('project');
	projectEl.href = project.link;
	projectEl.target = '_blank';

	projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
		<p>
			${title}
		</p>
    `;

	app.appendChild(projectEl);
});
