document.addEventListener('DOMContentLoaded', (event) => {
    
    if (document.body.innerHTML.trim() === '') {
       
        var para = document.createElement('p');
        
       success"
        para.textContent = 'DOM load success';
        
        
        document.body.appendChild(para);
    }
});