window.toggleCourse = function(courseId) { 
    const courseTopics = document.getElementById(courseId);
    if (!courseTopics) return;

    const courseHeader = courseTopics.previousElementSibling;

    document.querySelectorAll('.course-topics').forEach(topics => { 
        if (topics.id !== courseId) { 
            topics.classList.remove('active'); 
            if (topics.previousElementSibling) {
                topics.previousElementSibling.classList.remove('active');
            }
        } 
    });

    courseTopics.classList.toggle('active'); 
    if (courseHeader) {
        courseHeader.classList.toggle('active');
    }
};
window.showContent = function (filename) {
    const contentArea = document.getElementById("content-area");

    if (filename.endsWith('.pdf')) {
        contentArea.innerHTML = `<iframe src="${filename}" width="100%" height="800px" style="border: none;"></iframe>`;
    } else {
        fetch(filename)
            .then(response => response.text())
            .then(html => {
                contentArea.innerHTML = html;
            })
            .catch(error => {
                console.error("Virhe ladattaessa sisältöä:", error);
                contentArea.innerHTML = "<p>Sisällön lataaminen epäonnistui.</p>";
            });
    }
};
