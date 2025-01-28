function toggleCourse(courseId) {
    const courseTopics = document.getElementById(courseId);
    const courseHeader = courseTopics.previousElementSibling;
    
    // Sulje muut avoimet valikot
    document.querySelectorAll('.course-topics').forEach(topics => {
        if (topics.id !== courseId && topics.classList.contains('active')) {
            topics.classList.remove('active');
            topics.previousElementSibling.classList.remove('active');
        }
    });
    
    courseTopics.classList.toggle('active');
    courseHeader.classList.toggle('active');
}

function showContent(topicId) {
    const contentArea = document.getElementById('content-area');
    
    // Tässä voit määritellä kunkin aiheen sisällön
    const content = {
        'fy1-topic1': `
            <h2>Mittaaminen ja SI-järjestelmä</h2>
            <p>Tässä osiossa käsitellään fysikaalisten suureiden mittaamista ja SI-järjestelmän perussuureita...</p>
            <!-- Lisää sisältöä tarpeen mukaan -->
        `,
        'fy1-topic2': `
            <h2>Graafinen mallintaminen</h2>
            <p>Tässä osiossa opetellaan tekemään ja tulkitsemaan fysikaalisia kuvaajia...</p>
        `,
        // Lisää muiden aiheiden sisällöt samalla tavalla
    };
    
    contentArea.innerHTML = content[topicId] || '<p>Sisältöä ei löytynyt.</p>';
}
