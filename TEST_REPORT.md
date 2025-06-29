# ✅ BlogForge Test Report

This document outlines the manual testing done for all core features before submission.

---

## 🧪 Functional Testing

### 1. Create Post - 4/4 PASS

- [PASS] Create post with valid title + content
- [PASS] Create post with duplicate title → shows error toast
- [PASS] Special characters in title → slug generated correctly
- [PASS] Empty title/content → blocked with error toast

### 2. View Post - 4/4 PASS

- [PASS] Posts display correctly for Users and Admin
- [PASS] View button navigates to /blog/[slug] page
- [PASS] HTML rendered cleanly
- [PASS] Meta tags show correct dynamic title and description

### 3. Edit Post 3/3 PASS

- [PASS] Edit title/content → updates in DB
- [PASS] Changing title updates slug correctly
- [PASS] Prevent empty title/content

### 4. Delete Post

- [PASS] Post deleted after confirm
- [PASS] Toast shows confirmation

---

## 🔒 Admin Authentication 4/4 PASS

- [PASS] Login with valid admin creds
- [PASS] Wrong creds blocked
- [PASS] localStorage used to store auth
- [PASS] Dashboard only visible when logged in

---

## 🌐 Responsive Design 2/2 PASS

- [PASS] Homepage and dashboard work on mobile
- [PASS] Cards stack one per row on small screens

---

## 🔗 Sharing 2/2 PASS

- [PASS] Share button copies correct blog URL
- [PASS] Toast confirms “Link copied”

---

### Summary

All critical features have been tested and are functional.  
Login credentials will be shared in Internshala chat for review access.
