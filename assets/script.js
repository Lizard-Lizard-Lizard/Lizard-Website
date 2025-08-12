// DOM Elements
const lizard = document.querySelector('.lizard');
const notification = document.getElementById('notification');
const wishlistBtn = document.getElementById('wishlistBtn');
const discordBtn = document.getElementById('discordBtn');
const discordCard = document.querySelector('.discord-community');
const steamCard = document.querySelector('.steam-release');
const imprintBtn = document.getElementById('imprintBtn');
const imprintModal = document.getElementById('imprintModal');
const closeImprintModal = document.getElementById('closeImprintModal');
const privacyBtn = document.getElementById('privacyBtn');
const privacyModal = document.getElementById('privacyModal');
const closePrivacyModal = document.getElementById('closePrivacyModal');



// Initialize page
function initPage() {
    setupEventListeners();
    startLizardAnimation();
    
    showNotification('Welcome to Lizard Lizard Lizard! Coming soon to Steam! 🦎');
}

// Setup event listeners
function setupEventListeners() {
    // Lizard interaction
    if (lizard) {
        lizard.addEventListener('click', handleLizardClick);
    }
    
    // Wishlist button
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', handleWishlistClick);
    }
    
    // Discord button
    if (discordBtn) {
        discordBtn.addEventListener('click', handleDiscordClick);
    }
    
    // Discord card
    if (discordCard) {
        discordCard.addEventListener('click', handleDiscordClick);
    }
    
    // Steam card
    if (steamCard) {
        steamCard.addEventListener('click', handleSteamClick);
    }
    
    // Imprint modal
    if (imprintBtn) {
        imprintBtn.addEventListener('click', handleImprintClick);
    }
    
    if (closeImprintModal) {
        closeImprintModal.addEventListener('click', () => closeModal(imprintModal));
    }
    
    // Privacy modal
    if (privacyBtn) {
        privacyBtn.addEventListener('click', handlePrivacyClick);
    }
    
    if (closePrivacyModal) {
        closePrivacyModal.addEventListener('click', () => closeModal(privacyModal));
    }
    
    // Close modals when clicking outside
    if (imprintModal) {
        imprintModal.addEventListener('click', (e) => {
            if (e.target === imprintModal) {
                closeModal(imprintModal);
            }
        });
    }
    
    if (privacyModal) {
        privacyModal.addEventListener('click', (e) => {
            if (e.target === privacyModal) {
                closeModal(privacyModal);
            }
        });
    }
    

}

// Handle lizard click
function handleLizardClick(e) {
    // Add some fun interaction
    lizard.style.transform = 'scale(1.1) rotate(5deg)';
    setTimeout(() => {
        lizard.style.transform = '';
    }, 200);
    
    showNotification('The lizard is getting excited! 🦎');
}

// Handle wishlist button click
function handleWishlistClick() {
    showNotification('Wishlist feature coming soon! Follow us for updates! ❤️');
}

// Handle discord button click
function handleDiscordClick() {
    window.open('https://discord.lizards.dev', '_blank');
    showNotification('Opening Discord server! 🎮');
}

// Handle steam card click
function handleSteamClick() {
    showNotification('Steam page coming soon! Wishlist will be available soon! 🎮');
}

// Handle imprint button click
function handleImprintClick(e) {
    e.preventDefault();
    imprintModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Handle privacy button click
function handlePrivacyClick(e) {
    e.preventDefault();
    privacyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Start lizard animation
function startLizardAnimation() {
    if (lizard) {
        // Add some subtle animation
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every few seconds
                lizard.style.filter = 'hue-rotate(90deg)';
                setTimeout(() => {
                    lizard.style.filter = '';
                }, 500);
            }
        }, 3000);
    }
}

// Show notification
function showNotification(message) {
    if (notification) {
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
