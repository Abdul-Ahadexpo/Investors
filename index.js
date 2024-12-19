// index.js
import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const googleLoginBtn = document.getElementById("google-login");
const logoutBtn = document.getElementById("logout-btn");

googleLoginBtn.addEventListener("click", async () => {
  console.log("Login button clicked!");

  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = result.user;
    console.log("User logged in:", user);

    alert(`Logged in as ${user.email}`);

    // Redirect to investor.html after successful login
    window.location.href = "investor.html";
  } catch (err) {
    console.error("Google login error:", err.message);
    alert(`Login failed: ${err.message}`);
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
});

// ghgggggggggggggggggggggggggggggggggggg
// Maintain Authentication State Across Page Reloads
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User is signed in:", user.email);

    // Populate the username input with the user's display name
    const usernameInput = document.getElementById("username");
    if (user.displayName) {
      usernameInput.value = user.displayName;
    } else {
      usernameInput.value = user.email; // Fallback to email if displayName is not set
    }

    // Display Google account profile picture
    const userProfilePic = document.getElementById("userProfilePic");
    if (user.photoURL) {
      userProfilePic.src = user.photoURL;
      userProfilePic.classList.remove("hidden");
    }

    googleSignInBtn.classList.add("hidden");
    signOutBtn.classList.remove("hidden");
    uploadSection.classList.remove("hidden");
    loadPhotos();
  } else {
    console.log("No user is signed in.");
    googleSignInBtn.classList.remove("hidden");
    signOutBtn.classList.add("hidden");
    uploadSection.classList.add("hidden");
    const userProfilePic = document.getElementById("userProfilePic");
    userProfilePic.classList.add("hidden");
    const usernameInput = document.getElementById("username");
    usernameInput.value = "";
  }
});
