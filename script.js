function askDemo(){
 const q=document.getElementById('question').value.trim();
 const a=document.getElementById('answer');
 if(!q){a.textContent='Please enter a question.';return;}
 a.innerHTML='<b>EduGenie:</b> Great question! In the full Gemini-powered version, I would generate a detailed, student-friendly answer for:<br><br><b>'+escapeHtml(q)+'</b>';
}
function makeNotes(){
 document.getElementById('toolOutput').innerHTML='<b>Sample Notes</b><br>• Definition<br>• Key concepts<br>• Important points<br>• Example<br>• Quick revision summary';
}
function makeQuiz(){
 document.getElementById('toolOutput').innerHTML='<b>Sample Quiz</b><br>1. What is the main concept?<br>A) Option 1 &nbsp; B) Option 2 &nbsp; C) Option 3<br><br>2. Give one practical example.';
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}