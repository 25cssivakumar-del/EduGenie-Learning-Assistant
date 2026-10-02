const API_KEY = "YOUR_GEMINI_API_KEY_HERE"; // Inga unga API Key paste pannunga

async function askDemo() {
    const q = document.getElementById('question').value.trim();
    const a = document.getElementById('answer');

    if (!q) {
        a.textContent = 'Please enter a question!';
        return;
    }

    a.innerHTML = '<b>EduGenie:</b> Thinking... 🤔';

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `You are EduGenie, a helpful student learning assistant. Keep the answer clear and easy to study. Question: ${q}` }] }]
                })
            }
        );

        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            let output = data.candidates[0].content.parts[0].text;
            a.innerHTML = `<b>EduGenie:</b> ${output.replace(/\n/g, '<br>')}`;
        } else {
            a.innerHTML = '<b>EduGenie:</b> API Key error or limit reached. Please check your key.';
        }
    } catch (error) {
        console.error(error);
        a.innerHTML = '<b>EduGenie:</b> Error connecting to AI server.';
    }
}

function makeNotes() {
    const toolOutput = document.getElementById('toolOutput');
    if (toolOutput) toolOutput.innerHTML = '<b>Notes Feature:</b> Enter a topic above to generate study summaries!';
}

function makeQuiz() {
    const toolOutput = document.getElementById('toolOutput');
    if (toolOutput) toolOutput.innerHTML = '<b>Quiz Feature:</b> Enter a topic above to generate quiz questions!';
}

function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
