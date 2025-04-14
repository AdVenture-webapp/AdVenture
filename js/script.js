import { fetchInfluencers } from './api.js';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const platformTabs = document.querySelectorAll('.tab-btn');
const platformFilter = document.getElementById('platformFilter');
const categoryFilter = document.getElementById('categoryFilter');
const locationFilter = document.getElementById('locationFilter');
const sortSelect = document.getElementById('sortSelect');
const influencerGrid = document.getElementById('influencerGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// State
let currentPlatform = 'all';
let currentQuery = '';
let currentFilters = {
    category: 'all',
    location: 'all',
    sortBy: 'popular'
};
let currentPage = 1;
const influencersPerPage = 9;
let isLoading = false;

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await loadInfluencers();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Add debounced search
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch();
        }, 500);
    });
    
    // Platform tabs
    platformTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            platformTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentPlatform = tab.dataset.platform;
            currentPage = 1;
            loadInfluencers();
        });
    });
    
    // Filters
    platformFilter.addEventListener('change', () => {
        currentPlatform = platformFilter.value;
        currentPage = 1;
        loadInfluencers();
    });
    
    categoryFilter.addEventListener('change', () => {
        currentFilters.category = categoryFilter.value;
        currentPage = 1;
        loadInfluencers();
    });
    
    locationFilter.addEventListener('change', () => {
        currentFilters.location = locationFilter.value;
        currentPage = 1;
        loadInfluencers();
    });
    
    sortSelect.addEventListener('change', () => {
        currentFilters.sortBy = sortSelect.value;
        currentPage = 1;
        loadInfluencers();
    });
    
    // Load more
    loadMoreBtn.addEventListener('click', () => {
        if (!isLoading) {
            currentPage++;
            loadInfluencers(false);
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = navLinks.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
            
            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (isExpanded) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }
}

// Handle search
function handleSearch() {
    currentQuery = searchInput.value.trim();
    currentPage = 1;
    loadInfluencers();
}

// Load influencers
async function loadInfluencers(clear = true) {
    if (isLoading) return;
    
    isLoading = true;
    try {
        if (clear) {
            influencerGrid.innerHTML = `
                <div class="loading-spinner">
                    <div class="spinner" aria-hidden="true"></div>
                    <p>Loading influencers...</p>
                </div>
            `;
        } else {
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = 'Loading...';
        }
        
        const influencers = await fetchInfluencers(
            currentPlatform,
            currentQuery,
            {
                ...currentFilters,
                page: currentPage,
                limit: influencersPerPage
            }
        );
        
        if (clear) {
            renderInfluencers(influencers);
        } else {
            appendInfluencers(influencers);
        }
        
        if (influencers.length < influencersPerPage) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading influencers:', error);
        showError('Failed to load influencers. Please try again.');
    } finally {
        isLoading = false;
        loadMoreBtn.disabled = false;
        loadMoreBtn.textContent = 'Load More Influencers';
    }
}

// Show error message
function showError(message) {
    influencerGrid.innerHTML = `
        <div class="error-state">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
            <button onclick="window.location.reload()" class="btn-secondary">Retry</button>
        </div>
    `;
}

// Create influencer card element
function createInfluencerCard(influencer) {
    const card = document.createElement('article');
    card.className = 'influencer-card';
    card.setAttribute('data-influencer-id', influencer.id);
    card.setAttribute('aria-label', `Influencer ${influencer.name}`);
    
    // Platform badge
    const platformBadge = `
        <span class="influencer-badge ${influencer.platform}" aria-label="${influencer.platform} influencer">
            <i class="fab fa-${influencer.platform}"></i>
            ${influencer.platform.charAt(0).toUpperCase() + influencer.platform.slice(1)}
        </span>
    `;
    
    // Stats based on platform
    const statsHtml = influencer.platform === 'youtube' ? `
        <div class="card-stats">
            <div class="card-stat">
                <div class="value">${influencer.subscribers}</div>
                <div class="label">Subscribers</div>
            </div>
            <div class="card-stat">
                <div class="value">${influencer.avgViews}</div>
                <div class="label">Avg. Views</div>
            </div>
            <div class="card-stat">
                <div class="value">${influencer.engagement}</div>
                <div class="label">Engagement</div>
            </div>
        </div>
    ` : `
        <div class="card-stats">
            <div class="card-stat">
                <div class="value">${influencer.followers}</div>
                <div class="label">Followers</div>
            </div>
            <div class="card-stat">
                <div class="value">${influencer.avgLikes}</div>
                <div class="label">Avg. Likes</div>
            </div>
            <div class="card-stat">
                <div class="value">${influencer.engagement}</div>
                <div class="label">Engagement</div>
            </div>
        </div>
    `;
    
    card.innerHTML = `
        <div class="card-cover" style="background-image: url('${influencer.cover}')" role="img" aria-label="${influencer.name}'s cover image">
            ${platformBadge}
            <div class="card-avatar" style="background-image: url('${influencer.avatar}')" aria-label="${influencer.name}'s profile picture"></div>
        </div>
        <div class="card-body">
            <h3>${influencer.name}</h3>
            <p class="handle">${influencer.handle}</p>
            <p class="category">${influencer.category} • ${influencer.location}</p>
            ${statsHtml}
            <div class="card-price">
                Rate: <span class="price">${influencer.price}</span> per post
            </div>
            <a href="influencer.html?id=${influencer.id}&platform=${influencer.platform}" class="btn-primary">View Profile</a>
        </div>
    `;
    
    return card;
}

// Render influencers
function renderInfluencers(influencers) {
    if (influencers.length === 0) {
        influencerGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No influencers found matching your criteria.</p>
                <button onclick="clearFilters()" class="btn-secondary">Clear filters</button>
            </div>
        `;
        return;
    }
    
    const fragment = document.createDocumentFragment();
    influencers.forEach(influencer => {
        fragment.appendChild(createInfluencerCard(influencer));
    });
    
    influencerGrid.innerHTML = '';
    influencerGrid.appendChild(fragment);
}

// Append influencers (for load more)
function appendInfluencers(influencers) {
    if (influencers.length === 0) {
        loadMoreBtn.style.display = 'none';
        return;
    }
    
    const fragment = document.createDocumentFragment();
    influencers.forEach(influencer => {
        fragment.appendChild(createInfluencerCard(influencer));
    });
    
    influencerGrid.appendChild(fragment);
}

// Clear all filters
window.clearFilters = function() {
    currentPlatform = 'all';
    currentQuery = '';
    currentFilters = {
        category: 'all',
        location: 'all',
        sortBy: 'popular'
    };
    currentPage = 1;
    
    // Reset UI elements
    searchInput.value = '';
    platformFilter.value = 'all';
    categoryFilter.value = 'all';
    locationFilter.value = 'all';
    sortSelect.value = 'popular';
    
    platformTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.platform === 'all') {
            tab.classList.add('active');
        }
    });
    
    loadInfluencers();
};

// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
        
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.classList.add('fa-minus');
            icon.classList.remove('fa-plus');
        } else {
            answer.style.maxHeight = null;
            icon.classList.add('fa-plus');
            icon.classList.remove('fa-minus');
        }
    });
});