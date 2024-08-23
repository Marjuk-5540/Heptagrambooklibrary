document.addEventListener("DOMContentLoaded", function() {
    const pdfItems = document.querySelectorAll('.pdf-item');
    const downloadButtons = document.querySelectorAll('.download-btn');

    // Scrolling animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    pdfItems.forEach(item => {
        observer.observe(item);
    });

    // Passcode prompt for downloads
   downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const passcode = prompt("Enter the passcode to download the PDF:");
            if (passcode === 'tyghvb') {
                const pdfUrl = this.getAttribute('data-pdf');
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.download = ''; // Trigger download with the same file name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link); // Clean up
            } else {
                alert("VulVal password .Vag foinni 👍😆");
            }
        });
    });
});
