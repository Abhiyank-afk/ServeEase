// Handle hire button clicks
document.addEventListener('DOMContentLoaded', function() {
    const hireButtons = document.querySelectorAll('.hire-btn');
    
    hireButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const workerName = this.parentElement.querySelector('h3').textContent;
            const customerEmail = prompt('Please enter your email address:');
            
            if (customerEmail) {
                try {
                    const response = await fetch('/hire-worker', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            workerName: workerName,
                            customerEmail: customerEmail,
                            serviceType: 'Plumbing'
                        })
                    });

                    const result = await response.json();
                    alert(result.message);
                } catch (error) {
                    console.error('Error:', error);
                    alert('There was an error processing your request. Please try again.');
                }
            }
        });
    });
});
