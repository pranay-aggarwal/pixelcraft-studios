// --- Page 5 ---
// --- Review Data ---
const reviews = [
    {
        text: "PixelCraft Studios brought clarity to our marketing chaos. Their seamless, intuitive approach made a real difference in our outreach.",
        author: "Aarav Mehta",
        role: "Marketing Lead at TechNova",
        avatar: "Assets/reviews/client1.png"
    },
    {
        text: "The team at PixelCraft Studios delivered fast, accurate, and flexible solutions for our campaigns. Highly recommended!",
        author: "Priya Sharma",
        role: "Founder, Artify",
        avatar: "Assets/avatar2.jpg"
    },
    {
        text: "Why limit yourself? Their multi-model approach delivers top-tier expertise for building, scaling, and exploring new markets.",
        author: "Rohan Gupta",
        role: "Growth Strategist",
        avatar: "Assets/avatar3.jpg"
    },
    {
        text: "PixelCraft Studios understands what modern businesses need and delivers it with style. I absolutely loved working with them.",
        author: "Simran Kaur",
        role: "CEO, Kaur Creations",
        avatar: "Assets/avatar4.jpg"
    },
    {
        text: "Their webdev solutions made automation easy for our team. The results were beyond our expectations.",
        author: "Vikram Singh",
        role: "Operations Manager",
        avatar: "Assets/avatar5.jpg"
    }
];
// --- Carousel Logic ---
let currentIndex = 0;
const reviewsWrapper = document.querySelector('.reviews-wrapper');
function renderReviews() {
    if (!reviewsWrapper) return;
    reviewsWrapper.innerHTML = '';
    const visible = [currentIndex - 1, currentIndex, currentIndex + 1];
    visible.forEach(idx => {
        let i = (idx + reviews.length) % reviews.length;
        const review = reviews[i];
        const card = document.createElement('div');
        card.className = 'review-card' + (i === currentIndex ? ' active' : '');
        card.innerHTML = `
            <span class="review-quote">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 34c0-7.732 6.268-14 14-14V8C13.85 8 4 17.85 4 30c0 6.627 5.373 12 12 12 3.314 0 6-2.686 6-6s-2.686-6-6-6zm21 0c0-7.732 6.268-14 14-14V8C34.85 8 25 17.85 25 30c0 6.627 5.373 12 12 12 3.314 0 6-2.686 6-6s-2.686-6-6-6z" fill="#e81cff"/>
                </svg>
            </span>
            <div class="review-text">${review.text}</div>
            <div class="review-footer">
                <img class="review-avatar" src="${review.avatar}" alt="${review.author}">
                <div class="review-author-role">
                    <div class="review-author">${review.author}</div>
                    <div class="review-role">${review.role}</div>
                </div>
            </div>
        `;
        reviewsWrapper.appendChild(card);
    });
    gsap.fromTo('.review-card', {opacity: 0, y: 40}, {opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power2.out"});
}
document.getElementById('review-prev').onclick = () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    renderReviews();
};
document.getElementById('review-next').onclick = () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    renderReviews();
};
if (reviewsWrapper) renderReviews();