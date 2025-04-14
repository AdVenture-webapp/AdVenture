// Mock data for Indian influencers
const mockInfluencers = [
    // Instagram Influencers
    {
        id: 1,
        name: "Kusha Kapila",
        handle: "@kushakapila",
        platform: "instagram",
        category: "Comedy",
        location: "Mumbai",
        followers: "3.2M",
        avgLikes: "250K",
        engagement: "7.8%",
        price: "₹80,000 - ₹1,20,000",
        cover: "https://search.brave.com/images?q=kushakapila",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Digital content creator, comedian, and actress known for her relatable comedy sketches.",
        demographics: {
            age: {
                "13-17": 10,
                "18-24": 45,
                "25-34": 35,
                "35+": 10
            },
            gender: {
                female: 68,
                male: 32
            },
            locations: [
                { name: "Mumbai", percentage: 35 },
                { name: "Delhi", percentage: 20 },
                { name: "Bangalore", percentage: 15 },
                { name: "Other", percentage: 30 }
            ]
        },
        postRate: "₹80,000 - ₹1,00,000",
        storyRate: "₹50,000 - ₹70,000",
        videoRate: "₹1,20,000 - ₹1,50,000",
        responseTime: "24-48 hours"
    },
    {
        id: 2,
        name: "Dolly Singh",
        handle: "@dollysingh",
        platform: "instagram",
        category: "Comedy",
        location: "Delhi",
        followers: "1.8M",
        avgLikes: "180K",
        engagement: "10.2%",
        price: "₹50,000 - ₹80,000",
        cover: "https://source.unsplash.com/random/600x400/?funny",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        bio: "Content creator known for her hilarious characters and relatable comedy content.",
        demographics: {
            age: {
                "13-17": 15,
                "18-24": 50,
                "25-34": 25,
                "35+": 10
            },
            gender: {
                female: 72,
                male: 28
            },
            locations: [
                { name: "Delhi", percentage: 40 },
                { name: "Mumbai", percentage: 15 },
                { name: "Punjab", percentage: 15 },
                { name: "Other", percentage: 30 }
            ]
        },
        postRate: "₹50,000 - ₹70,000",
        storyRate: "₹30,000 - ₹50,000",
        videoRate: "₹80,000 - ₹1,00,000",
        responseTime: "24 hours"
    },
    {
        id: 3,
        name: "Komal Pandey",
        handle: "@komalpandeyofficial",
        platform: "instagram",
        category: "Fashion",
        location: "Mumbai",
        followers: "1.5M",
        avgLikes: "120K",
        engagement: "8.5%",
        price: "₹1,00,000 - ₹1,50,000",
        cover: "https://source.unsplash.com/random/600x400/?fashion",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        bio: "Fashion influencer known for her unique styling and DIY fashion hacks.",
        demographics: {
            age: {
                "13-17": 20,
                "18-24": 55,
                "25-34": 20,
                "35+": 5
            },
            gender: {
                female: 85,
                male: 15
            },
            locations: [
                { name: "Mumbai", percentage: 30 },
                { name: "Delhi", percentage: 20 },
                { name: "Bangalore", percentage: 15 },
                { name: "Other", percentage: 35 }
            ]
        },
        postRate: "₹1,00,000 - ₹1,20,000",
        storyRate: "₹60,000 - ₹80,000",
        videoRate: "₹1,50,000 - ₹2,00,000",
        responseTime: "48 hours"
    },
    {
        id: 4,
        name: "Jasleen Royal",
        handle: "@jasleenroyal",
        platform: "instagram",
        category: "Music",
        location: "Mumbai",
        followers: "1.2M",
        avgLikes: "90K",
        engagement: "7.5%",
        price: "₹70,000 - ₹1,00,000",
        cover: "https://source.unsplash.com/random/600x400/?music",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        bio: "Singer, songwriter and musician known for her soulful voice and original compositions.",
        demographics: {
            age: {
                "13-17": 15,
                "18-24": 40,
                "25-34": 35,
                "35+": 10
            },
            gender: {
                female: 60,
                male: 40
            },
            locations: [
                { name: "Mumbai", percentage: 25 },
                { name: "Delhi", percentage: 20 },
                { name: "Punjab", percentage: 20 },
                { name: "Other", percentage: 35 }
            ]
        },
        postRate: "₹70,000 - ₹90,000",
        storyRate: "₹40,000 - ₹60,000",
        videoRate: "₹1,00,000 - ₹1,50,000",
        responseTime: "48-72 hours"
    },
    {
        id: 5,
        name: "Ranveer Allahbadia",
        handle: "@beerbiceps",
        platform: "instagram",
        category: "Fitness",
        location: "Mumbai",
        followers: "2.5M",
        avgLikes: "150K",
        engagement: "6.2%",
        price: "₹1,50,000 - ₹2,00,000",
        cover: "https://source.unsplash.com/random/600x400/?fitness",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Fitness enthusiast, podcaster, and entrepreneur helping people transform their lives.",
        demographics: {
            age: {
                "13-17": 10,
                "18-24": 35,
                "25-34": 45,
                "35+": 10
            },
            gender: {
                female: 30,
                male: 70
            },
            locations: [
                { name: "Mumbai", percentage: 30 },
                { name: "Delhi", percentage: 25 },
                { name: "Bangalore", percentage: 15 },
                { name: "Other", percentage: 30 }
            ]
        },
        postRate: "₹1,50,000 - ₹1,80,000",
        storyRate: "₹80,000 - ₹1,00,000",
        videoRate: "₹2,00,000 - ₹2,50,000",
        responseTime: "24-48 hours"
    },

    // YouTube Creators
    {
        id: 6,
        name: "BB Ki Vines",
        handle: "@bbkivines",
        platform: "youtube",
        category: "Comedy",
        location: "Delhi",
        subscribers: "25M",
        avgViews: "5M",
        engagement: "8.5%",
        price: "₹3,00,000 - ₹5,00,000",
        cover: "https://source.unsplash.com/random/600x400/?youtuber",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        bio: "One of India's most popular comedy channels with hilarious sketches and characters.",
        demographics: {
            age: {
                "13-17": 25,
                "18-24": 45,
                "25-34": 20,
                "35+": 10
            },
            gender: {
                female: 45,
                male: 55
            },
            locations: [
                { name: "Delhi", percentage: 25 },
                { name: "Mumbai", percentage: 15 },
                { name: "UP", percentage: 15 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "N/A",
        storyRate: "N/A",
        videoRate: "₹3,00,000 - ₹5,00,000",
        responseTime: "1 week"
    },
    {
        id: 7,
        name: "Technical Guruji",
        handle: "@technicalguruji",
        platform: "youtube",
        category: "Tech",
        location: "Dubai (Indian)",
        subscribers: "22M",
        avgViews: "2M",
        engagement: "6.8%",
        price: "₹2,50,000 - ₹4,00,000",
        cover: "https://source.unsplash.com/random/600x400/?technology",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        bio: "Leading tech reviewer in Hindi, covering smartphones, gadgets and tech news.",
        demographics: {
            age: {
                "13-17": 15,
                "18-24": 40,
                "25-34": 35,
                "35+": 10
            },
            gender: {
                female: 20,
                male: 80
            },
            locations: [
                { name: "Delhi", percentage: 20 },
                { name: "UP", percentage: 18 },
                { name: "Bihar", percentage: 15 },
                { name: "Other", percentage: 47 }
            ]
        },
        postRate: "N/A",
        storyRate: "N/A",
        videoRate: "₹2,50,000 - ₹4,00,000",
        responseTime: "1-2 weeks"
    },
    {
        id: 8,
        name: "Mumbiker Nikhil",
        handle: "@mumbikernikhil",
        platform: "youtube",
        category: "Travel",
        location: "Mumbai",
        subscribers: "3.5M",
        avgViews: "500K",
        engagement: "9.2%",
        price: "₹1,00,000 - ₹1,50,000",
        cover: "https://source.unsplash.com/random/600x400/?travel",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        bio: "Biker and travel vlogger exploring India on his motorcycle with engaging storytelling.",
        demographics: {
            age: {
                "13-17": 10,
                "18-24": 35,
                "25-34": 45,
                "35+": 10
            },
            gender: {
                female: 25,
                male: 75
            },
            locations: [
                { name: "Mumbai", percentage: 30 },
                { name: "Delhi", percentage: 15 },
                { name: "Bangalore", percentage: 10 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "N/A",
        storyRate: "N/A",
        videoRate: "₹1,00,000 - ₹1,50,000",
        responseTime: "1 week"
    },
    {
        id: 9,
        name: "Kabita's Kitchen",
        handle: "@kabitaskitchen",
        platform: "youtube",
        category: "Food",
        location: "Assam",
        subscribers: "8.2M",
        avgViews: "1.5M",
        engagement: "12.5%",
        price: "₹80,000 - ₹1,20,000",
        cover: "https://source.unsplash.com/random/600x400/?food",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        bio: "Popular home chef sharing simple and delicious Indian recipes in Hindi.",
        demographics: {
            age: {
                "13-17": 10,
                "18-24": 30,
                "25-34": 45,
                "35+": 15
            },
            gender: {
                female: 85,
                male: 15
            },
            locations: [
                { name: "North East", percentage: 25 },
                { name: "Delhi", percentage: 15 },
                { name: "UP", percentage: 15 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "N/A",
        storyRate: "N/A",
        videoRate: "₹80,000 - ₹1,20,000",
        responseTime: "2 weeks"
    },
    {
        id: 10,
        name: "Flying Beast",
        handle: "@flyingbeast320",
        platform: "youtube",
        category: "Vlog",
        location: "Delhi",
        subscribers: "7.5M",
        avgViews: "2M",
        engagement: "15.8%",
        price: "₹2,00,000 - ₹3,00,000",
        cover: "https://source.unsplash.com/random/600x400/?vlog",
        avatar: "https://randomuser.me/api/portraits/men/66.jpg",
        bio: "Commercial pilot turned vlogger sharing his daily life, travel and aviation content.",
        demographics: {
            age: {
                "13-17": 15,
                "18-24": 40,
                "25-34": 35,
                "35+": 10
            },
            gender: {
                female: 35,
                male: 65
            },
            locations: [
                { name: "Delhi", percentage: 30 },
                { name: "UP", percentage: 20 },
                { name: "Haryana", percentage: 15 },
                { name: "Other", percentage: 35 }
            ]
        },
        postRate: "N/A",
        storyRate: "N/A",
        videoRate: "₹2,00,000 - ₹3,00,000",
        responseTime: "1 week"
    },

    // TikTok Stars
    {
        id: 11,
        name: "Jannat Zubair",
        handle: "@jannatzubair29",
        platform: "tiktok",
        category: "Entertainment",
        location: "Mumbai",
        followers: "35M",
        avgLikes: "3M",
        engagement: "18.5%",
        price: "₹1,50,000 - ₹2,00,000",
        cover: "https://source.unsplash.com/random/600x400/?bollywood",
        avatar: "https://randomuser.me/api/portraits/women/66.jpg",
        bio: "Actress and social media star with massive following among young audiences.",
        demographics: {
            age: {
                "13-17": 40,
                "18-24": 45,
                "25-34": 10,
                "35+": 5
            },
            gender: {
                female: 75,
                male: 25
            },
            locations: [
                { name: "Mumbai", percentage: 25 },
                { name: "Delhi", percentage: 15 },
                { name: "UP", percentage: 15 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "₹1,50,000 - ₹1,80,000",
        storyRate: "₹80,000 - ₹1,00,000",
        videoRate: "₹2,00,000 - ₹2,50,000",
        responseTime: "48 hours"
    },
    {
        id: 12,
        name: "Faisal Shaikh (Mr. Faisu)",
        handle: "@faisu_07",
        platform: "tiktok",
        category: "Entertainment",
        location: "Mumbai",
        followers: "28M",
        avgLikes: "2.5M",
        engagement: "15.2%",
        price: "₹1,20,000 - ₹1,80,000",
        cover: "https://source.unsplash.com/random/600x400/?dance",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
        bio: "Popular TikTok star known for his dance videos and stylish looks.",
        demographics: {
            age: {
                "13-17": 35,
                "18-24": 50,
                "25-34": 10,
                "35+": 5
            },
            gender: {
                female: 80,
                male: 20
            },
            locations: [
                { name: "Mumbai", percentage: 30 },
                { name: "Delhi", percentage: 15 },
                { name: "UP", percentage: 15 },
                { name: "Other", percentage: 40 }
            ]
        },
        postRate: "₹1,20,000 - ₹1,50,000",
        storyRate: "₹70,000 - ₹90,000",
        videoRate: "₹1,80,000 - ₹2,20,000",
        responseTime: "48 hours"
    },
    {
        id: 13,
        name: "Arishfa Khan",
        handle: "@arishfakhan",
        platform: "tiktok",
        category: "Entertainment",
        location: "Mumbai",
        followers: "20M",
        avgLikes: "1.8M",
        engagement: "12.8%",
        price: "₹80,000 - ₹1,20,000",
        cover: "https://source.unsplash.com/random/600x400/?actress",
        avatar: "https://randomuser.me/api/portraits/women/77.jpg",
        bio: "Actress and social media influencer with young fan following.",
        demographics: {
            age: {
                "13-17": 45,
                "18-24": 40,
                "25-34": 10,
                "35+": 5
            },
            gender: {
                female: 85,
                male: 15
            },
            locations: [
                { name: "Mumbai", percentage: 25 },
                { name: "Delhi", percentage: 15 },
                { name: "UP", percentage: 15 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "₹80,000 - ₹1,00,000",
        storyRate: "₹50,000 - ₹70,000",
        videoRate: "₹1,20,000 - ₹1,50,000",
        responseTime: "48-72 hours"
    },
    {
        id: 14,
        name: "Gima Ashi",
        handle: "@gima.ashi",
        platform: "tiktok",
        category: "Dance",
        location: "Punjab",
        followers: "15M",
        avgLikes: "1.2M",
        engagement: "10.5%",
        price: "₹60,000 - ₹90,000",
        cover: "https://source.unsplash.com/random/600x400/?punjabi",
        avatar: "https://randomuser.me/api/portraits/women/88.jpg",
        bio: "Punjabi dancer and content creator known for her energetic dance videos.",
        demographics: {
            age: {
                "13-17": 30,
                "18-24": 50,
                "25-34": 15,
                "35+": 5
            },
            gender: {
                female: 70,
                male: 30
            },
            locations: [
                { name: "Punjab", percentage: 40 },
                { name: "Delhi", percentage: 15 },
                { name: "Haryana", percentage: 10 },
                { name: "Other", percentage: 35 }
            ]
        },
        postRate: "₹60,000 - ₹80,000",
        storyRate: "₹40,000 - ₹50,000",
        videoRate: "₹90,000 - ₹1,20,000",
        responseTime: "48 hours"
    },
    {
        id: 15,
        name: "Riyaz Aly",
        handle: "@riyaz.14",
        platform: "tiktok",
        category: "Entertainment",
        location: "Mumbai",
        followers: "40M",
        avgLikes: "4M",
        engagement: "20.5%",
        price: "₹2,00,000 - ₹3,00,000",
        cover: "https://source.unsplash.com/random/600x400/?teenager",
        avatar: "https://randomuser.me/api/portraits/men/88.jpg",
        bio: "One of India's most followed TikTok stars with massive engagement.",
        demographics: {
            age: {
                "13-17": 50,
                "18-24": 40,
                "25-34": 8,
                "35+": 2
            },
            gender: {
                female: 85,
                male: 15
            },
            locations: [
                { name: "Mumbai", percentage: 25 },
                { name: "Delhi", percentage: 15 },
                { name: "UP", percentage: 15 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "₹2,00,000 - ₹2,50,000",
        storyRate: "₹1,00,000 - ₹1,50,000",
        videoRate: "₹3,00,000 - ₹4,00,000",
        responseTime: "24-48 hours"
    },

    // Additional influencers
    {
        id: 16,
        name: "Niharika NM",
        handle: "@niharika_nm",
        platform: "instagram",
        category: "Lifestyle",
        location: "Bangalore",
        followers: "1.3M",
        avgLikes: "100K",
        engagement: "8.2%",
        price: "₹70,000 - ₹1,00,000",
        cover: "https://source.unsplash.com/random/600x400/?lifestyle",
        avatar: "https://randomuser.me/api/portraits/women/99.jpg",
        bio: "Lifestyle content creator sharing fashion, travel and daily life in Bangalore.",
        demographics: {
            age: {
                "13-17": 15,
                "18-24": 50,
                "25-34": 30,
                "35+": 5
            },
            gender: {
                female: 75,
                male: 25
            },
            locations: [
                { name: "Bangalore", percentage: 35 },
                { name: "Mumbai", percentage: 15 },
                { name: "Delhi", percentage: 10 },
                { name: "Other", percentage: 40 }
            ]
        },
        postRate: "₹70,000 - ₹90,000",
        storyRate: "₹50,000 - ₹60,000",
        videoRate: "₹1,00,000 - ₹1,50,000",
        responseTime: "48 hours"
    },
    {
        id: 17,
        name: "Amit Bhadana",
        handle: "@amitbhadana",
        platform: "youtube",
        category: "Comedy",
        location: "Delhi",
        subscribers: "24M",
        avgViews: "8M",
        engagement: "22.5%",
        price: "₹3,50,000 - ₹5,00,000",
        cover: "https://source.unsplash.com/random/600x400/?comedy",
        avatar: "https://randomuser.me/api/portraits/men/99.jpg",
        bio: "India's most subscribed individual YouTuber known for his hilarious comedy videos.",
        demographics: {
            age: {
                "13-17": 25,
                "18-24": 50,
                "25-34": 20,
                "35+": 5
            },
            gender: {
                female: 40,
                male: 60
            },
            locations: [
                { name: "Delhi", percentage: 25 },
                { name: "UP", percentage: 20 },
                { name: "Haryana", percentage: 15 },
                { name: "Other", percentage: 40 }
            ]
        },
        postRate: "N/A",
        storyRate: "N/A",
        videoRate: "₹3,50,000 - ₹5,00,000",
        responseTime: "1-2 weeks"
    },
    {
        id: 18,
        name: "Sakshi Sindwani",
        handle: "@sakshisindwani",
        platform: "instagram",
        category: "Fashion",
        location: "Delhi",
        followers: "800K",
        avgLikes: "60K",
        engagement: "9.5%",
        price: "₹50,000 - ₹80,000",
        cover: "https://source.unsplash.com/random/600x400/?fashionblogger",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        bio: "Body positive fashion influencer promoting inclusive fashion and self-love.",
        demographics: {
            age: {
                "13-17": 10,
                "18-24": 55,
                "25-34": 30,
                "35+": 5
            },
            gender: {
                female: 90,
                male: 10
            },
            locations: [
                { name: "Delhi", percentage: 30 },
                { name: "Mumbai", percentage: 15 },
                { name: "Bangalore", percentage: 10 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "₹50,000 - ₹70,000",
        storyRate: "₹30,000 - ₹50,000",
        videoRate: "₹80,000 - ₹1,20,000",
        responseTime: "48 hours"
    },
    {
        id: 19,
        name: "Ashish Chanchlani",
        handle: "@ashishchanchlani",
        platform: "instagram",
        category: "Comedy",
        location: "Mumbai",
        followers: "4.5M",
        avgLikes: "400K",
        engagement: "12.8%",
        price: "₹1,50,000 - ₹2,00,000",
        cover: "https://source.unsplash.com/random/600x400/?funny",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        bio: "Popular comedian and content creator known for his hilarious sketches and characters.",
        demographics: {
            age: {
                "13-17": 20,
                "18-24": 50,
                "25-34": 25,
                "35+": 5
            },
            gender: {
                female: 55,
                male: 45
            },
            locations: [
                { name: "Mumbai", percentage: 25 },
                { name: "Delhi", percentage: 15 },
                { name: "UP", percentage: 15 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "₹1,50,000 - ₹1,80,000",
        storyRate: "₹80,000 - ₹1,00,000",
        videoRate: "₹2,00,000 - ₹2,50,000",
        responseTime: "48 hours"
    },
    {
        id: 20,
        name: "Nisha Madhulika",
        handle: "@nishamadhulika",
        platform: "youtube",
        category: "Food",
        location: "UP",
        subscribers: "10M",
        avgViews: "1.2M",
        engagement: "15.5%",
        price: "₹1,00,000 - ₹1,50,000",
        cover: "https://source.unsplash.com/random/600x400/?indianfood",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
        bio: "Popular home chef sharing vegetarian Indian recipes in Hindi with detailed instructions.",
        demographics: {
            age: {
                "13-17": 5,
                "18-24": 25,
                "25-34": 50,
                "35+": 20
            },
            gender: {
                female: 90,
                male: 10
            },
            locations: [
                { name: "UP", percentage: 25 },
                { name: "Delhi", percentage: 15 },
                { name: "MP", percentage: 15 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "N/A",
        storyRate: "N/A",
        videoRate: "₹1,00,000 - ₹1,50,000",
        responseTime: "2 weeks"
    },
    {
        id: 21,
        name: "Sejal Kumar",
        handle: "@sejalkumar",
        platform: "instagram",
        category: "Fashion",
        location: "Delhi",
        followers: "1.1M",
        avgLikes: "80K",
        engagement: "8.5%",
        price: "₹60,000 - ₹90,000",
        cover: "https://source.unsplash.com/random/600x400/?fashionista",
        avatar: "https://randomuser.me/api/portraits/women/34.jpg",
        bio: "Fashion and lifestyle content creator known for her relatable style and travel content.",
        demographics: {
            age: {
                "13-17": 15,
                "18-24": 55,
                "25-34": 25,
                "35+": 5
            },
            gender: {
                female: 85,
                male: 15
            },
            locations: [
                { name: "Delhi", percentage: 30 },
                { name: "Mumbai", percentage: 15 },
                { name: "Bangalore", percentage: 10 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "₹60,000 - ₹80,000",
        storyRate: "₹40,000 - ₹50,000",
        videoRate: "₹90,000 - ₹1,20,000",
        responseTime: "48 hours"
    },
    {
        id: 22,
        name: "Technical Sagar",
        handle: "@technicalsagar",
        platform: "youtube",
        category: "Tech",
        location: "Haryana",
        subscribers: "5.2M",
        avgViews: "800K",
        engagement: "10.8%",
        price: "₹1,20,000 - ₹1,80,000",
        cover: "https://source.unsplash.com/random/600x400/?technology",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
        bio: "Tech educator creating content about ethical hacking, cybersecurity and technology in Hindi.",
        demographics: {
            age: {
                "13-17": 15,
                "18-24": 45,
                "25-34": 35,
                "35+": 5
            },
            gender: {
                female: 15,
                male: 85
            },
            locations: [
                { name: "Haryana", percentage: 25 },
                { name: "Delhi", percentage: 20 },
                { name: "UP", percentage: 15 },
                { name: "Other", percentage: 40 }
            ]
        },
        postRate: "N/A",
        storyRate: "N/A",
        videoRate: "₹1,20,000 - ₹1,80,000",
        responseTime: "1 week"
    },
    {
        id: 23,
        name: "Dolly Singh",
        handle: "@dollysingh",
        platform: "tiktok",
        category: "Comedy",
        location: "Delhi",
        followers: "12M",
        avgLikes: "1.5M",
        engagement: "14.5%",
        price: "₹80,000 - ₹1,20,000",
        cover: "https://source.unsplash.com/random/600x400/?comedy",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        bio: "Comedian and content creator known for her hilarious characters and relatable content.",
        demographics: {
            age: {
                "13-17": 25,
                "18-24": 55,
                "25-34": 15,
                "35+": 5
            },
            gender: {
                female: 75,
                male: 25
            },
            locations: [
                { name: "Delhi", percentage: 30 },
                { name: "Mumbai", percentage: 15 },
                { name: "Punjab", percentage: 15 },
                { name: "Other", percentage: 40 }
            ]
        },
        postRate: "₹80,000 - ₹1,00,000",
        storyRate: "₹50,000 - ₹70,000",
        videoRate: "₹1,20,000 - ₹1,50,000",
        responseTime: "48 hours"
    },
    {
        id: 24,
        name: "Madan Gowri",
        handle: "@madan.gowri",
        platform: "instagram",
        category: "Education",
        location: "Chennai",
        followers: "2.8M",
        avgLikes: "150K",
        engagement: "7.5%",
        price: "₹90,000 - ₹1,30,000",
        cover: "https://source.unsplash.com/random/600x400/?education",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        bio: "Social media journalist creating informative content about current affairs and social issues.",
        demographics: {
            age: {
                "13-17": 10,
                "18-24": 35,
                "25-34": 45,
                "35+": 10
            },
            gender: {
                female: 40,
                male: 60
            },
            locations: [
                { name: "Tamil Nadu", percentage: 40 },
                { name: "Kerala", percentage: 15 },
                { name: "Karnataka", percentage: 10 },
                { name: "Other", percentage: 35 }
            ]
        },
        postRate: "₹90,000 - ₹1,10,000",
        storyRate: "₹60,000 - ₹80,000",
        videoRate: "₹1,30,000 - ₹1,80,000",
        responseTime: "48-72 hours"
    },
    {
        id: 25,
        name: "MostlySane",
        handle: "@mostly.sane",
        platform: "instagram",
        category: "Comedy",
        location: "Mumbai",
        followers: "2.3M",
        avgLikes: "180K",
        engagement: "9.5%",
        price: "₹1,00,000 - ₹1,50,000",
        cover: "https://source.unsplash.com/random/600x400/?comedian",
        avatar: "https://randomuser.me/api/portraits/women/56.jpg",
        bio: "Comedian and actress creating relatable comedy content about everyday situations.",
        demographics: {
            age: {
                "13-17": 15,
                "18-24": 50,
                "25-34": 30,
                "35+": 5
            },
            gender: {
                female: 70,
                male: 30
            },
            locations: [
                { name: "Mumbai", percentage: 30 },
                { name: "Delhi", percentage: 15 },
                { name: "Bangalore", percentage: 10 },
                { name: "Other", percentage: 45 }
            ]
        },
        postRate: "₹1,00,000 - ₹1,20,000",
        storyRate: "₹70,000 - ₹90,000",
        videoRate: "₹1,50,000 - ₹2,00,000",
        responseTime: "48 hours"
    }
];

// Simulate API delay
const simulateNetworkDelay = () => new Promise(resolve => 
    setTimeout(resolve, Math.random() * 500 + 200)
);

// Fetch influencers with filters
export async function fetchInfluencers(platform, query = '', filters = {}) {
    await simulateNetworkDelay();
    
    let results = [...mockInfluencers];
    
    // Apply platform filter
    if (platform && platform !== 'all') {
        results = results.filter(i => i.platform === platform);
    }
    
    // Apply search query
    if (query) {
        const q = query.toLowerCase();
        results = results.filter(i => 
            i.name.toLowerCase().includes(q) || 
            i.handle.toLowerCase().includes(q) ||
            i.category.toLowerCase().includes(q) ||
            i.location.toLowerCase().includes(q)
        );
    }
    
    // Apply category filter
    if (filters.category && filters.category !== 'all') {
        results = results.filter(i => i.category.toLowerCase() === filters.category);
    }
    
    // Apply location filter
    if (filters.location && filters.location !== 'all') {
        results = results.filter(i => i.location.toLowerCase().includes(filters.location));
    }
    
    // Apply sorting
    if (filters.sortBy) {
        switch (filters.sortBy) {
            case 'engagement':
                results.sort((a, b) => parseFloat(b.engagement) - parseFloat(a.engagement));
                break;
            case 'followers':
                results.sort((a, b) => {
                    const aFollowers = a.followers ? parseFloat(a.followers) : parseFloat(a.subscribers);
                    const bFollowers = b.followers ? parseFloat(b.followers) : parseFloat(b.subscribers);
                    return bFollowers - aFollowers;
                });
                break;
            case 'price':
                results.sort((a, b) => {
                    const aPrice = parseFloat(a.price.split(' - ')[0].replace('₹', '').replace(',', ''));
                    const bPrice = parseFloat(b.price.split(' - ')[0].replace('₹', '').replace(',', ''));
                    return aPrice - bPrice;
                });
                break;
            default: // 'popular'
                results.sort((a, b) => b.id - a.id); // Sort by newest first
        }
    }
    
    // Apply pagination
    if (filters.page && filters.limit) {
        const start = (filters.page - 1) * filters.limit;
        const end = start + filters.limit;
        results = results.slice(start, end);
    }
    
    return results;
}

// Fetch single influencer by ID
export async function fetchInfluencerById(id, platform) {
    await simulateNetworkDelay();
    return mockInfluencers.find(i => i.id === parseInt(id) && i.platform === platform);
}