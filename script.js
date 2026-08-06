// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get ALL buttons with class "btn-buy-now"
    const buyBtns = document.querySelectorAll('.btn-buy-now');
    
    // Loop through each button
    buyBtns.forEach(function(button) {
        
        // Add click event to each button
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior
            
            // Get the page from data-page attribute
            const page = this.getAttribute('data-page');
            
            // Optional: Show loading state
            const originalText = this.textContent;
            this.textContent = 'Redirecting...';
            this.disabled = true;
            
            // Redirect to the specified page
            window.location.href = page;
            
            // Note: The code below won't run because of redirect
            // But if you want to restore button (for demo purposes)
            // setTimeout(function() {
            //     button.textContent = originalText;
            //     button.disabled = false;
            // }, 2000);
        });
        
    });
    
});
