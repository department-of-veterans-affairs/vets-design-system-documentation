// Unique ID for the target page
const PAGE_ID = 'whats-new';

// Fetch date that updates from running ./update-whats-new
const LAST_UPDATED = '{{ site.data.changelogs.last_updated }}';

// LocalStorage key
const STORAGE_KEY = `lastVisit-${PAGE_ID}`;

// On What's New page visit, updated timestamp of last visited
if (window.location.pathname === '/about/whats-new') {
  localStorage.setItem(STORAGE_KEY, new Date().toISOString());
}

// Get timestamp of last visit (if any)
const lastSeen = localStorage.getItem(STORAGE_KEY);

// Compare timestamps
const shouldShowBadge = !lastSeen || new Date(lastSeen) < new Date(LAST_UPDATED);

// Show or hide the badge
if (shouldShowBadge) {
  document.getElementById('whatsNewBadge')?.classList.remove('hidden');
}
