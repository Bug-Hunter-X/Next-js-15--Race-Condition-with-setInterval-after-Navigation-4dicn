# Next.js 15 Race Condition with setInterval

This repository demonstrates a race condition in a Next.js 15 application that occurs when using `setInterval` in conjunction with navigation between pages.  The `About` page uses `setInterval` to update a counter, which can lead to unexpected behavior if the user navigates away and back to the page quickly.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Quickly navigate to the home page and then back to `/about`.  Observe the counter's behavior; it might jump unexpectedly.

## Solution
The provided solution uses `useRef` to manage the interval and ensures that it is cleared before a new one starts. This approach fixes the race condition and prevents unexpected jumps in the counter.