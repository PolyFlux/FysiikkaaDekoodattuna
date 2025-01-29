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
