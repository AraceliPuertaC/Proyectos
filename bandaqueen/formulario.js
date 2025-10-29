 

 
 
 function saveComment() {
            const name = document.getElementById('name').value;
            const comment = document.getElementById('comment').value;
            
            if (name && comment) {
                
                const newComment = {
                    name: name,
                    text: comment,
                    date: new Date().toLocaleString()
                };
                
               
                let comments = JSON.parse(localStorage.getItem('comments')) || [];
              
                comments.unshift(newComment); 
                
              
                localStorage.setItem('comments', JSON.stringify(comments));
                
             
                document.getElementById('name').value = '';
                document.getElementById('comment').value = '';
                
                
                loadComments();
            } else {
                alert('Por favor completa ambos campos');
            }
        }
        
        
        function loadComments() {
            const commentsList = document.getElementById('comments-list');
            commentsList.innerHTML = '<h2>Comentarios anteriores</h2>';
            
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            
            if (comments.length === 0) {
                commentsList.innerHTML += '<p>No hay comentarios aún. ¡Sé el primero!</p>';
                return;
            }
            
            comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.className = 'comment';
                commentElement.innerHTML = `
                    <div class="comment-author">${comment.name}</div>
                    <div class="comment-date">${comment.date}</div>
                    <div class="comment-text">${comment.text}</div>
                `;
                commentsList.appendChild(commentElement);
            });
        }
        
        document.addEventListener('DOMContentLoaded', loadComments);