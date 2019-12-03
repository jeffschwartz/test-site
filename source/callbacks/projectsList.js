/*
dataDependencies: projects
*/

module.exports = ({ $tag, site }) => {
    site.dataCatalog.projects.forEach(project => {
        $tag.append(`
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <p>${project.due}</p>
        `)
    });
};
