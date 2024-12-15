// Sign Up and Sign In Modal Functionality
const signupBtn = document.getElementById('signupBtn');
const signupModal = document.getElementById('signupModal');
const closeSignupModal = document.getElementById('closeSignupModal');
const toggleFormBtn = document.getElementById('toggleFormBtn');
const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');

// Open Sign Up Modal
signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

// Close Sign Up Modal
if (closeSignupModal) {
    closeSignupModal.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });
}

// Close Modal on Outside Click
window.addEventListener('click', (event) => {
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Toggle between Sign Up and Sign In forms
if (toggleFormBtn) {
    toggleFormBtn.addEventListener('click', () => {
        const isSigningIn = signinForm.style.display === 'block';
        signupForm.style.display = isSigningIn ? 'block' : 'none';
        signinForm.style.display = isSigningIn ? 'none' : 'block';
        toggleFormBtn.textContent = isSigningIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In";
    });
}

// Camera Rent Button Functionality
const cameraRentBtn = document.getElementById('cameraRentBtn');
if (cameraRentBtn) {
    cameraRentBtn.addEventListener('click', () => {
        alert('Thank you for choosing the Camera! Your request is being processed.');
    });
}

// General Rent Buttons (Optional for other gadgets)
const rentBtns = document.querySelectorAll('.rent-btn');
rentBtns.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Thank you for choosing this gadget! Your request is being processed.');
    });
});

  