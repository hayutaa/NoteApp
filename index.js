let notes = [];

function addNote() {
  const title = document.getElementById('noteTitle').value;
  const content = document.getElementById('noteContent').value;

  if (title && content) {
    const note = { title, content };
    notes.push(note);
    renderNotes();
    clearForm();
  } else {
    alert ("Enter a Note")
  }
}

function renderNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';
  
    notes.forEach(function(note, index) {
      const noteItem = document.createElement('li');
      
      noteItem.innerHTML = 
        '<strong>' + note.title + '</strong>: ' + note.content + 
        ' <button onclick="deleteNote(' + index + ')">-</button>';
      
      noteList.appendChild(noteItem);
    });
  }

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

function clearForm() {
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteContent').value = '';
}
