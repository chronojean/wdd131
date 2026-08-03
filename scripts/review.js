function updateReviewCount() {
    const reviewCountDisplay = document.getElementById("review-count");

    if (reviewCountDisplay) {
        // Retrieve current count from localStorage or initialize to 0
        let reviewCount = parseInt(localStorage.getItem("numReviews") || "0", 10);

        // Increment count for this submission
        reviewCount += 1;

        // Save updated count back to localStorage
        localStorage.setItem("numReviews", reviewCount.toString());

        // Render count to page
        reviewCountDisplay.textContent = reviewCount;
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateReviewCount);
} else {
    updateReviewCount();
}
