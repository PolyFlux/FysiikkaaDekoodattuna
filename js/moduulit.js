function toggleTopic(topicId) { 
    const topicContent = document.getElementById(topicId);
    topicContent.classList.toggle('active');
} 

document.addEventListener("DOMContentLoaded", function() {
    // Avaa kaikki kurssimoduulit mutta pidä aiheet piilossa
    document.querySelectorAll('.course-topics').forEach(el => el.classList.remove('active'));
});

function showContent(topicId) { 
    const contentArea = document.getElementById('content-area'); 
    
    // Tässä voit määritellä kunkin aiheen sisällön 
    const content = { 
        'fy1-topic1': ` 
            <h2>Mittaaminen ja SI-järjestelmä</h2> 
            <p>Tässä osiossa käsitellään fysikaalisten suureiden mittaamista ja SI-järjestelmän perussuureita...</p> 
        `, 
        'fy1-topic2': ` 
            <h2>Graafinen mallintaminen</h2> 
            <p>Tässä osiossa opetellaan tekemään ja tulkitsemaan fysikaalisia kuvaajia...</p> 
        `, 
        'fy2-topic1': ` 
            <h2>Lämpötila ja lämpölaajeneminen</h2> 
            <p>Tässä osiossa käsitellään lämpötilan ja lämpölaajenemisen periaatteita...</p> 
        `, 
        'fy2-topic2': ` 
            <h2>Kaasujen lait</h2> 
            <p>Tässä osiossa tutkitaan kaasujen käyttäytymistä ja lakeja...</p> 
        `, 
        'fy3-topic1': ` 
            <h2>Sähkövaraus ja Coulombin laki</h2> 
            <p>Tässä osiossa käsitellään sähkövarausta ja Coulombin lakia...</p> 
        `, 
        'fy3-topic2': ` 
            <h2>Sähkökenttä ja potentiaali</h2> 
            <p>Osiossa tutkitaan sähkökentän ja potentiaalin periaatteita...</p> 
        ` 
    }; 

    contentArea.innerHTML = content[topicId] || '<p>Sisältöä ei löytynyt.</p>'; 
}
window.toggleCourse = toggleCourse;
