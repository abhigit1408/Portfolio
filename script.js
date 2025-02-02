function downloadResume() {
    const link = document.createElement("a");
    link.href = "assets/ABHISHEK BAMNE.pdf"; // Path to your PDF
    link.download = "ABHISHEK_BAMNE.pdf"; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}