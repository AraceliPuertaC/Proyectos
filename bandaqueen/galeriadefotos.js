 // Función para abrir el modal
        function openModal(imageSrc, captionText) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('expandedImage');
            const captionTextElement = document.getElementById('imageCaption');
            
            modal.style.display = "block";
            modalImg.src = imageSrc;
            captionTextElement.innerHTML = captionText;
        }
        
        // Función para cerrar el modal
        function closeModal() {
            document.getElementById('imageModal').style.display = "none";
        }
        
        // Cerrar al hacer clic fuera de la imagen
        window.onclick = function(event) {
            const modal = document.getElementById('imageModal');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }