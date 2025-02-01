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
    fetch(filename)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content-area").innerHTML = html;
        })
        .catch(error => {
            console.error("Virhe ladattaessa sisältöä:", error);
            document.getElementById("content-area").innerHTML = "<p>Sisällön lataaminen epäonnistui.</p>";
        });
};
