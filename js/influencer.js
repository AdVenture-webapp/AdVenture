import { fetchInfluencerById } from './api.js';

// DOM Elements
const influencerName = document.getElementById('influencerName');
const influencerHandle = document.getElementById('influencerHandle');
const influencerLocation = document.getElementById('influencerLocation');
const influencerCategory = document.getElementById('influencerCategory');
const platformBadge = document.getElementById('platformBadge');
const followerCount = document.getElementById('followerCount');
const engagementRate = document.getElementById('engagementRate');
const avgRate = document.getElementById('avgRate');
const demographicsGrid = document.getElementById('demographicsGrid');
const locationList = document.getElementById('locationList');
const bookingForm = document.getElementById('bookingForm');
const influencerBio = document.getElementById('influencerBio');
const profileLink = document.getElementById('profileLink');
const postRate = document.getElementById('postRate');
const storyRate = document.getElementById('storyRate');
const videoRate = document.getElementById('videoRate');
const responseTime = document.getElementById('responseTime');

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Get influencer ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const influencerId = urlParams.get('id');
    const platform = urlParams.get('platform');
    
    if (influencerId && platform) {
        await loadInfluencer(influencerId, platform);
    } else {
        // Redirect to home page if no ID provided
        window.location.href = 'index.html';
    }
    
    // Setup form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
});

// Load influencer data
async function loadInfluencer(id, platform) {
    try {
        demographicsGrid.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner" aria-hidden="true"></div>
                <p>Loading demographics...</p>
            </div>
        `;
        
        locationList.innerHTML = '<li>Loading locations...</li>';
        
        const influencer = await fetchInfluencerById(id, platform);
        
        if (!influencer) {
            throw new Error('Influencer not found');
        }
        
        // Update page title
        document.title = `${influencer.name} | AdVenture`;
        
        // Update influencer info
        influencerName.textContent = influencer.name;
        influencerHandle.textContent = influencer.handle;
        influencerLocation.textContent = influencer.location;
        influencerCategory.textContent = influencer.category;
        influencerBio.textContent = influencer.bio;
        
        // Update platform badge
        platformBadge.className = `platform-badge ${influencer.platform}`;
        platformBadge.innerHTML = `
            <i class="fab fa-${influencer.platform}"></i>
            ${influencer.platform.charAt(0).toUpperCase() + influencer.platform.slice(1)}
        `;
        
        // Update profile link
        if (influencer.platform === 'instagram') {
            profileLink.href = `https://instagram.com/${influencer.handle.replace('@', '')}`;
        } else if (influencer.platform === 'youtube') {
            profileLink.href = `https://youtube.com/${influencer.handle.replace('@', '')}`;
        } else if (influencer.platform === 'tiktok') {
            profileLink.href = `https://tiktok.com/${influencer.handle.replace('@', '')}`;
        }
        
        // Update stats
        if (influencer.platform === 'youtube') {
            followerCount.textContent = influencer.subscribers;
        } else {
            followerCount.textContent = influencer.followers;
        }
        engagementRate.textContent = influencer.engagement;
        avgRate.textContent = influencer.price;
        
        // Update campaign rates
        postRate.textContent = influencer.postRate;
        storyRate.textContent = influencer.storyRate;
        videoRate.textContent = influencer.videoRate;
        responseTime.textContent = influencer.responseTime;
        
        // Update demographics
        if (influencer.demographics) {
            demographicsGrid.innerHTML = '';
            
            // Age demographics
            for (const [ageRange, percentage] of Object.entries(influencer.demographics.age)) {
                const ageItem = document.createElement('div');
                ageItem.className = 'demo-item';
                ageItem.innerHTML = `
                    <div class="demo-label">Age ${ageRange}</div>
                    <div class="demo-value">${percentage}%</div>
                `;
                demographicsGrid.appendChild(ageItem);
            }
            
            // Gender demographics
            for (const [gender, percentage] of Object.entries(influencer.demographics.gender)) {
                const genderItem = document.createElement('div');
                genderItem.className = 'demo-item';
                genderItem.innerHTML = `
                    <div class="demo-label">${gender.charAt(0).toUpperCase() + gender.slice(1)}</div>
                    <div class="demo-value">${percentage}%</div>
                `;
                demographicsGrid.appendChild(genderItem);
            }
            
            // Top locations
            locationList.innerHTML = '';
            influencer.demographics.locations.forEach(location => {
                const locationItem = document.createElement('li');
                locationItem.innerHTML = `
                    <span>${location.name}</span>
                    <span>${location.percentage}%</span>
                `;
                locationList.appendChild(locationItem);
            });
        }
    } catch (error) {
        console.error('Error loading influencer:', error);
        demographicsGrid.innerHTML = `
            <div class="error-state">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Failed to load influencer data</p>
                <button onclick="window.location.reload()" class="btn-secondary">Retry</button>
            </div>
        `;
    }
}

// Handle booking form submission
function handleBookingSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const campaignType = document.getElementById('campaignType').value;
    const budget = document.getElementById('budget').value;
    const timeline = document.getElementById('timeline').value;
    const campaignDetails = document.getElementById('campaignDetails').value;
    const influencer = influencerName.textContent;
    
    // Validate budget
    if (budget < 5000) {
        alert('Minimum budget is ₹5,000');
        return;
    }
    
    // In a real app, you would send this data to a server
    const confirmation = `
        Booking request submitted!
        
        Influencer: ${influencer}
        Campaign: ${getCampaignName(campaignType)}
        Budget: ₹${budget}
        Timeline: ${getTimelineName(timeline)}
        Details: ${campaignDetails || 'Not specified'}
        
        Our team will contact you within 24 hours to confirm the booking.
    `;
    
    alert(confirmation);
    
    // Reset form
    bookingForm.reset();
}

// Helper function to get campaign name
function getCampaignName(value) {
    const options = {
        post: 'Instagram Post',
        story: 'Instagram Story',
        reel: 'Instagram Reel',
        video: 'Dedicated Video',
        longterm: 'Long-term Partnership'
    };
    return options[value] || value;
}

// Helper function to get timeline name
function getTimelineName(value) {
    const options = {
        '1week': 'Within 1 week',
        '2week': '1-2 weeks',
        'month': 'Within 1 month',
        'flexible': 'Flexible'
    };
    return options[value] || value;
}