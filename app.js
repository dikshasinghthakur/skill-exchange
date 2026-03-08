// =====================================================
// SkillSwap — Local Skill Exchange Platform
// =====================================================

// ==================== SEED DATA ====================
const CATEGORIES = [
  { id: 'cooking', name: 'Cooking', icon: '\u{1F373}' },
  { id: 'music', name: 'Music', icon: '\u{1F3B5}' },
  { id: 'coding', name: 'Coding & Tech', icon: '\u{1F4BB}' },
  { id: 'languages', name: 'Languages', icon: '\u{1F30D}' },
  { id: 'fitness', name: 'Fitness & Wellness', icon: '\u{1F4AA}' },
  { id: 'art', name: 'Art & Crafts', icon: '\u{1F3A8}' },
  { id: 'gardening', name: 'Gardening', icon: '\u{1F331}' },
  { id: 'academics', name: 'Academics', icon: '\u{1F4DA}' },
  { id: 'photography', name: 'Photography', icon: '\u{1F4F7}' },
  { id: 'sports', name: 'Sports', icon: '\u26BD' },
];

const USERS = [
  {
    id: 1, name: 'Maya Chen', location: 'Downtown',
    bio: 'Passionate home cook and mindfulness enthusiast. Love sharing Asian cuisine recipes and meditation techniques with anyone eager to learn.',
    skillsOffered: [
      { name: 'Asian Cooking', category: 'cooking', level: 'Advanced' },
      { name: 'Meditation', category: 'fitness', level: 'Intermediate' },
    ],
    skillsWanted: [
      { name: 'Guitar', category: 'music' },
      { name: 'Photography', category: 'photography' },
    ],
    verified: true, barterOnly: false, rating: 4.9, reviews: 24, joinDate: '2025-06-15', avatarColor: '#6C63FF',
  },
  {
    id: 2, name: 'James Wilson', location: 'Westside',
    bio: 'Software developer by day, musician by night. Happy to teach Python basics or jam on guitar. Always looking to expand my cooking skills.',
    skillsOffered: [
      { name: 'Guitar', category: 'music', level: 'Advanced' },
      { name: 'Python Programming', category: 'coding', level: 'Expert' },
    ],
    skillsWanted: [
      { name: 'Cooking', category: 'cooking' },
      { name: 'Spanish', category: 'languages' },
    ],
    verified: true, barterOnly: true, rating: 4.8, reviews: 18, joinDate: '2025-07-20', avatarColor: '#FF6584',
  },
  {
    id: 3, name: 'Priya Patel', location: 'Eastborough',
    bio: 'Certified yoga instructor and passionate gardener. I believe in holistic wellness and growing your own food. Would love to learn digital skills.',
    skillsOffered: [
      { name: 'Yoga', category: 'fitness', level: 'Expert' },
      { name: 'Organic Gardening', category: 'gardening', level: 'Advanced' },
    ],
    skillsWanted: [
      { name: 'Painting', category: 'art' },
      { name: 'Web Development', category: 'coding' },
    ],
    verified: true, barterOnly: false, rating: 5.0, reviews: 31, joinDate: '2025-05-10', avatarColor: '#00B894',
  },
  {
    id: 4, name: 'Carlos Rivera', location: 'Midtown',
    bio: 'Native Spanish speaker and amateur photographer. Love capturing street life and teaching my language. Trying to get healthier!',
    skillsOffered: [
      { name: 'Spanish', category: 'languages', level: 'Native' },
      { name: 'Street Photography', category: 'photography', level: 'Intermediate' },
    ],
    skillsWanted: [
      { name: 'Cooking', category: 'cooking' },
      { name: 'Fitness Training', category: 'fitness' },
    ],
    verified: false, barterOnly: false, rating: 4.7, reviews: 12, joinDate: '2025-08-05', avatarColor: '#FDCB6E',
  },
  {
    id: 5, name: 'Sarah Kim', location: 'Northside',
    bio: 'Classical pianist and passionate baker. Nothing beats the joy of making sourdough from scratch. Looking to start a garden and learn web design.',
    skillsOffered: [
      { name: 'Piano', category: 'music', level: 'Advanced' },
      { name: 'Sourdough Baking', category: 'cooking', level: 'Intermediate' },
    ],
    skillsWanted: [
      { name: 'Gardening', category: 'gardening' },
      { name: 'Web Design', category: 'coding' },
    ],
    verified: true, barterOnly: true, rating: 4.9, reviews: 15, joinDate: '2025-09-12', avatarColor: '#E17055',
  },
  {
    id: 6, name: 'David Okafor', location: 'Riverside',
    bio: 'Woodworker and retired math teacher. I craft custom furniture and love helping students with calculus. Interested in picking up an instrument.',
    skillsOffered: [
      { name: 'Woodworking', category: 'art', level: 'Expert' },
      { name: 'Math Tutoring', category: 'academics', level: 'Expert' },
    ],
    skillsWanted: [
      { name: 'Music', category: 'music' },
      { name: 'German', category: 'languages' },
    ],
    verified: true, barterOnly: false, rating: 4.8, reviews: 22, joinDate: '2025-04-01', avatarColor: '#45B7D1',
  },
  {
    id: 7, name: 'Emma Thompson', location: 'Arts District',
    bio: 'Watercolor artist and French tutor. I studied in Paris and love sharing both the language and painting techniques. Always hungry to learn new recipes!',
    skillsOffered: [
      { name: 'Watercolor Painting', category: 'art', level: 'Advanced' },
      { name: 'French', category: 'languages', level: 'Fluent' },
    ],
    skillsWanted: [
      { name: 'Cooking', category: 'cooking' },
      { name: 'Yoga', category: 'fitness' },
    ],
    verified: false, barterOnly: true, rating: 4.6, reviews: 9, joinDate: '2025-10-01', avatarColor: '#DDA0DD',
  },
  {
    id: 8, name: 'Raj Sharma', location: 'Tech Park',
    bio: 'Full-stack developer and chess enthusiast. I build beautiful websites and teach strategic thinking through chess. Want to explore hands-on crafts.',
    skillsOffered: [
      { name: 'Web Design', category: 'coding', level: 'Expert' },
      { name: 'Chess', category: 'sports', level: 'Advanced' },
    ],
    skillsWanted: [
      { name: 'Photography', category: 'photography' },
      { name: 'Woodworking', category: 'art' },
    ],
    verified: true, barterOnly: false, rating: 4.7, reviews: 14, joinDate: '2025-07-01', avatarColor: '#96CEB4',
  },
  {
    id: 9, name: 'Lina M\u00FCller', location: 'University Area',
    bio: 'German language teacher and knitting hobbyist. I make cozy scarves and teach German from beginner to advanced. Would love to learn baking and fitness.',
    skillsOffered: [
      { name: 'German', category: 'languages', level: 'Native' },
      { name: 'Knitting', category: 'art', level: 'Intermediate' },
    ],
    skillsWanted: [
      { name: 'Baking', category: 'cooking' },
      { name: 'Fitness Training', category: 'fitness' },
    ],
    verified: true, barterOnly: true, rating: 4.9, reviews: 20, joinDate: '2025-06-20', avatarColor: '#FFB347',
  },
  {
    id: 10, name: 'Marcus Johnson', location: 'Southgate',
    bio: 'Former college basketball player now coaching youth. Also a BBQ pitmaster on weekends. Want to learn coding and maybe pick up a new language.',
    skillsOffered: [
      { name: 'Basketball Coaching', category: 'sports', level: 'Expert' },
      { name: 'BBQ & Grilling', category: 'cooking', level: 'Advanced' },
    ],
    skillsWanted: [
      { name: 'Coding', category: 'coding' },
      { name: 'French', category: 'languages' },
    ],
    verified: false, barterOnly: false, rating: 4.5, reviews: 8, joinDate: '2025-11-01', avatarColor: '#E84393',
  },
  {
    id: 11, name: 'Aisha Hassan', location: 'Old Town',
    bio: 'Arabic calligrapher and henna artist. I create beautiful designs for events and teach the art form. Hoping to learn piano and start gardening.',
    skillsOffered: [
      { name: 'Arabic Calligraphy', category: 'art', level: 'Expert' },
      { name: 'Henna Art', category: 'art', level: 'Advanced' },
    ],
    skillsWanted: [
      { name: 'Piano', category: 'music' },
      { name: 'Gardening', category: 'gardening' },
    ],
    verified: true, barterOnly: false, rating: 4.8, reviews: 16, joinDate: '2025-08-15', avatarColor: '#FD79A8',
  },
  {
    id: 12, name: 'Tom Chen', location: 'Innovation Hub',
    bio: 'Maker and tinkerer. I run a small 3D printing workshop and teach robotics to kids. Interested in traditional arts and learning an instrument.',
    skillsOffered: [
      { name: '3D Printing', category: 'coding', level: 'Advanced' },
      { name: 'Robotics', category: 'coding', level: 'Intermediate' },
    ],
    skillsWanted: [
      { name: 'Calligraphy', category: 'art' },
      { name: 'Guitar', category: 'music' },
    ],
    verified: false, barterOnly: true, rating: 4.6, reviews: 11, joinDate: '2025-09-25', avatarColor: '#74B9FF',
  },
];

// Pre-seeded conversations
const CONVERSATIONS = [
  {
    id: 1, participants: [1, 2], // Maya & James
    messages: [
      { from: 2, text: "Hi Maya! I saw you're looking for guitar lessons. I'd love to trade for some cooking tips!", time: '2026-03-06T10:00:00' },
      { from: 1, text: "Hey James! That sounds perfect. I've been wanting to learn guitar for ages. What kind of cooking are you interested in?", time: '2026-03-06T10:05:00' },
      { from: 2, text: "I'm really into Asian cuisine — stir fry, ramen, that kind of thing. Would you be up for a weekly swap?", time: '2026-03-06T10:10:00' },
      { from: 1, text: "Absolutely! How about Saturdays? I can do a cooking session in the morning and guitar lesson in the afternoon?", time: '2026-03-06T10:15:00' },
      { from: 2, text: "That works great! Let's start this Saturday. I'll bring my spare acoustic for you to practice on.", time: '2026-03-06T10:20:00' },
    ],
  },
  {
    id: 2, participants: [1, 7], // Maya & Emma
    messages: [
      { from: 7, text: "Hi Maya! I noticed you teach Asian cooking. I'd love to learn — I can offer French lessons or painting in return!", time: '2026-03-05T14:00:00' },
      { from: 1, text: "Hi Emma! French sounds wonderful. I've always wanted to learn. When are you free?", time: '2026-03-05T14:30:00' },
      { from: 7, text: "I'm flexible on weekday evenings. Shall we try Wednesday?", time: '2026-03-05T15:00:00' },
    ],
  },
  {
    id: 3, participants: [1, 4], // Maya & Carlos
    messages: [
      { from: 4, text: "Hey! I'd love to learn some cooking basics. I can teach you photography composition in exchange.", time: '2026-03-04T09:00:00' },
      { from: 1, text: "That's exactly what I need! I've been wanting to improve my food photography for my blog.", time: '2026-03-04T09:15:00' },
    ],
  },
];

// Pre-seeded bookings
const BOOKINGS = [
  { id: 1, userId: 1, partnerId: 2, skill: 'Guitar \u2194 Asian Cooking', date: '2026-03-14', time: '10:00 AM', status: 'confirmed' },
  { id: 2, userId: 1, partnerId: 7, skill: 'French \u2194 Asian Cooking', date: '2026-03-12', time: '6:00 PM', status: 'confirmed' },
  { id: 3, userId: 1, partnerId: 4, skill: 'Photography \u2194 Cooking Basics', date: '2026-03-15', time: '2:00 PM', status: 'pending' },
  { id: 4, userId: 1, partnerId: 3, skill: 'Yoga \u2194 Meditation', date: '2026-03-10', time: '8:00 AM', status: 'confirmed' },
  { id: 5, userId: 1, partnerId: 11, skill: 'Henna Art Intro', date: '2026-03-20', time: '11:00 AM', status: 'pending' },
];

// ==================== STATE ====================
const state = {
  currentUser: USERS[0], // Logged in as Maya Chen
  currentPage: 'home',
  searchQuery: '',
  categoryFilter: 'all',
  selectedConversation: null,
  bookingTab: 'upcoming',
  calendarMonth: new Date(2026, 2), // March 2026
  mobileMenuOpen: false,
};

// ==================== INITIALIZATION ====================
function init() {
  renderNav();
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const page = hash.split('/')[0];
  state.currentPage = page;
  updateActiveNav();
  renderPage();
}

function renderNav() {
  const nav = document.getElementById('navbar');
  const pages = [
    { id: 'home', label: 'Home', icon: '\u{1F3E0}' },
    { id: 'browse', label: 'Browse Skills', icon: '\u{1F50D}' },
    { id: 'matchmaker', label: 'Matchmaker', icon: '\u2728' },
    { id: 'messages', label: 'Messages', icon: '\u{1F4AC}' },
    { id: 'bookings', label: 'Bookings', icon: '\u{1F4C5}' },
    { id: 'safety', label: 'Safety Guide', icon: '\u{1F6E1}' },
  ];
  nav.innerHTML = `
    <div class="nav-brand"><span class="logo">\u26A1</span> SkillSwap</div>
    <div class="nav-links">
      ${pages.map(p => `<a href="#${p.id}" class="nav-link" data-page="${p.id}">${p.label}</a>`).join('')}
    </div>
    <div class="nav-user">
      <div class="avatar-small" style="background:${state.currentUser.avatarColor}">${getInitials(state.currentUser.name)}</div>
    </div>
    <button class="hamburger" onclick="toggleMobileMenu()">\u2630</button>
    <div class="mobile-menu" id="mobileMenu">
      ${pages.map(p => `<a href="#${p.id}" class="nav-link" data-page="${p.id}" onclick="closeMobileMenu()">${p.icon} ${p.label}</a>`).join('')}
    </div>
  `;
}

function updateActiveNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === state.currentPage);
  });
}

function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  document.getElementById('mobileMenu').classList.toggle('open', state.mobileMenuOpen);
}
function closeMobileMenu() {
  state.mobileMenuOpen = false;
  document.getElementById('mobileMenu').classList.remove('open');
}

function renderPage() {
  const app = document.getElementById('app');
  switch (state.currentPage) {
    case 'home': app.innerHTML = renderHome(); break;
    case 'browse': app.innerHTML = renderBrowse(); break;
    case 'matchmaker': app.innerHTML = renderMatchmaker(); break;
    case 'messages': app.innerHTML = renderMessages(); break;
    case 'bookings': app.innerHTML = renderBookings(); break;
    case 'safety': app.innerHTML = renderSafety(); break;
    default: app.innerHTML = renderHome();
  }
  attachPageEvents();
  // Trigger animations after render
  setTimeout(() => {
    animateStats();
  }, 100);
}

// ==================== ANIMATION FUNCTIONS ====================

function animateStats() {
  const stats = document.querySelectorAll('.stat-num');
  stats.forEach((stat, index) => {
    const target = parseInt(stat.textContent);
    let current = 0;
    const increment = target / 50; // 50 steps for smooth animation
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        stat.textContent = target;
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(current);
      }
    }, 30 + (index * 50)); // Stagger the animations
  });
}

// ==================== PAGE RENDERERS ====================

function renderHome() {
  const featured = USERS.filter(u => u.verified).slice(0, 4);
  const categoryCounts = {};
  USERS.forEach(u => {
    u.skillsOffered.forEach(s => {
      categoryCounts[s.category] = (categoryCounts[s.category] || 0) + 1;
    });
  });

  return `<div class="page">
    <div class="hero">
      <h1>Share What You Know,<br>Learn What You Love</h1>
      <p>Connect with people in your community to exchange skills. Teach cooking, learn guitar, trade coding lessons for yoga — the possibilities are endless.</p>
      <div class="search-box">
        <input type="text" placeholder="Search for a skill... (e.g. guitar, cooking, yoga)" id="heroSearch">
        <button onclick="heroSearch()">Search</button>
      </div>
    </div>

    <div class="stats-bar">
      <div class="stat" style="--i: 0"><div class="stat-num">${USERS.length}</div><div class="stat-label">Active Members</div></div>
      <div class="stat" style="--i: 1"><div class="stat-num">${USERS.reduce((a, u) => a + u.skillsOffered.length, 0)}</div><div class="stat-label">Skills Shared</div></div>
      <div class="stat" style="--i: 2"><div class="stat-num">${CATEGORIES.length}</div><div class="stat-label">Categories</div></div>
      <div class="stat" style="--i: 3"><div class="stat-num">${BOOKINGS.filter(b => b.status === 'confirmed').length}</div><div class="stat-label">Sessions Booked</div></div>
    </div>

    <h2 class="section-title">Explore Skill Categories</h2>
    <div class="categories-grid">
      ${CATEGORIES.map((c, i) => `
        <div class="category-card" onclick="browseCategory('${c.id}')" style="--i: ${i}">
          <span class="category-icon">${c.icon}</span>
          <div class="category-name">${c.name}</div>
          <div class="category-count">${categoryCounts[c.id] || 0} skills</div>
        </div>
      `).join('')}
    </div>

    <div class="featured-section">
      <div class="section-header">
        <h2 class="section-title">Featured Members</h2>
        <a href="#browse">View all \u2192</a>
      </div>
      <div class="users-grid">
        ${featured.map((u, i) => renderUserCard(u, i)).join('')}
      </div>
    </div>
  </div>`;
}

function renderBrowse() {
  let filtered = [...USERS].filter(u => u.id !== state.currentUser.id);
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.bio.toLowerCase().includes(q) ||
      u.skillsOffered.some(s => s.name.toLowerCase().includes(q)) ||
      u.skillsWanted.some(s => s.name.toLowerCase().includes(q))
    );
  }
  if (state.categoryFilter !== 'all') {
    filtered = filtered.filter(u =>
      u.skillsOffered.some(s => s.category === state.categoryFilter) ||
      u.skillsWanted.some(s => s.category === state.categoryFilter)
    );
  }

  return `<div class="page">
    <h2 class="section-title">Browse Skills & People</h2>
    <div class="browse-controls">
      <input class="browse-search" type="text" placeholder="Search skills, people, or keywords..."
        value="${state.searchQuery}" oninput="updateSearch(this.value)" id="browseSearch">
      <button class="filter-btn ${state.categoryFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">All</button>
      ${CATEGORIES.map(c => `
        <button class="filter-btn ${state.categoryFilter === c.id ? 'active' : ''}"
          onclick="setFilter('${c.id}')">${c.icon} ${c.name}</button>
      `).join('')}
    </div>
    <div class="results-count">${filtered.length} member${filtered.length !== 1 ? 's' : ''} found</div>
    <div class="users-grid">
      ${filtered.length ? filtered.map(u => renderUserCard(u)).join('') :
        '<div class="empty-state"><span class="empty-icon">\u{1F50D}</span><p>No members found matching your search.</p></div>'}
    </div>
  </div>`;
}

function renderMatchmaker() {
  const matches = findMatches(state.currentUser);
  return `<div class="page">
    <div class="matchmaker-header">
      <h2>\u2728 Your Skill Matches</h2>
      <p>We found people whose skills complement yours perfectly. The higher the score, the better the match!</p>
    </div>
    ${matches.length ? matches.map(m => `
      <div class="match-card">
        <div class="match-score">${m.score}%</div>
        <div class="avatar" style="background:${m.user.avatarColor}">${getInitials(m.user.name)}</div>
        <div class="match-details">
          <div class="match-name">${m.user.name} ${m.user.verified ? '<span class="verified-badge">\u2713 Verified</span>' : ''}</div>
          <div class="match-reason">${m.reason}</div>
          <div class="match-skills">
            ${m.theyOffer.map(s => `<span class="skill-tag offered">${s} \u2192 you</span>`).join('')}
            ${m.youOffer.map(s => `<span class="skill-tag wanted">you \u2192 ${s}</span>`).join('')}
          </div>
        </div>
        <div class="match-actions">
          <button class="btn btn-primary btn-sm" onclick="openMessageModal(${m.user.id})">Message</button>
          <button class="btn btn-outline btn-sm" onclick="openUserModal(${m.user.id})">Profile</button>
        </div>
      </div>
    `).join('') : '<div class="empty-state"><span class="empty-icon">\u{1F914}</span><p>No matches found yet. Add more skills to improve your matches!</p></div>'}
  </div>`;
}

function renderMessages() {
  const userConvs = CONVERSATIONS.filter(c => c.participants.includes(state.currentUser.id));
  const selectedConv = state.selectedConversation !== null
    ? userConvs.find(c => c.id === state.selectedConversation)
    : null;

  return `<div class="page">
    <h2 class="section-title" style="margin-bottom:16px">Messages</h2>
    <div class="messages-container">
      <div class="conversations-list">
        ${userConvs.map(c => {
          const otherId = c.participants.find(p => p !== state.currentUser.id);
          const other = USERS.find(u => u.id === otherId);
          const lastMsg = c.messages[c.messages.length - 1];
          const isActive = state.selectedConversation === c.id;
          return `
            <div class="conv-item ${isActive ? 'active' : ''}" onclick="selectConversation(${c.id})">
              <div class="avatar-small" style="background:${other.avatarColor}">${getInitials(other.name)}</div>
              <div>
                <div class="conv-name">${other.name}</div>
                <div class="conv-preview">${lastMsg.text.slice(0, 40)}...</div>
              </div>
              <div class="conv-time">${formatTime(lastMsg.time)}</div>
            </div>`;
        }).join('')}
      </div>
      <div class="chat-area">
        ${selectedConv ? renderChatArea(selectedConv) : '<div class="no-chat">Select a conversation to start chatting</div>'}
      </div>
    </div>
  </div>`;
}

function renderChatArea(conv) {
  const otherId = conv.participants.find(p => p !== state.currentUser.id);
  const other = USERS.find(u => u.id === otherId);
  return `
    <div class="chat-header">
      <div class="avatar-small" style="background:${other.avatarColor}">${getInitials(other.name)}</div>
      ${other.name}
      <button class="btn btn-outline btn-sm" style="margin-left:auto" onclick="openBookingModal(${other.id})">Book Session</button>
    </div>
    <div class="chat-messages" id="chatMessages">
      ${conv.messages.map(m => `
        <div class="message ${m.from === state.currentUser.id ? 'sent' : 'received'}">
          ${m.text}
          <div class="message-time">${formatTime(m.time)}</div>
        </div>
      `).join('')}
    </div>
    <div class="chat-input">
      <input type="text" placeholder="Type a message..." id="messageInput"
        onkeydown="if(event.key==='Enter')sendMessage()">
      <button onclick="sendMessage()">Send</button>
    </div>`;
}

function renderBookings() {
  const userBookings = BOOKINGS.filter(b => b.userId === state.currentUser.id || b.partnerId === state.currentUser.id);
  const now = new Date('2026-03-08');
  const upcoming = userBookings.filter(b => new Date(b.date) >= now && b.status !== 'cancelled');
  const past = userBookings.filter(b => new Date(b.date) < now || b.status === 'cancelled');
  const display = state.bookingTab === 'upcoming' ? upcoming : past;

  return `<div class="page">
    <div class="bookings-header">
      <h2 class="section-title" style="margin-bottom:0">Your Bookings</h2>
      <div class="bookings-tabs">
        <button class="tab-btn ${state.bookingTab === 'upcoming' ? 'active' : ''}" onclick="setBookingTab('upcoming')">Upcoming (${upcoming.length})</button>
        <button class="tab-btn ${state.bookingTab === 'past' ? 'active' : ''}" onclick="setBookingTab('past')">Past</button>
      </div>
    </div>
    ${display.length ? display.map(b => {
      const partner = USERS.find(u => u.id === (b.partnerId === state.currentUser.id ? b.userId : b.partnerId));
      const d = new Date(b.date);
      return `
        <div class="booking-card">
          <div class="booking-date">
            <div class="day">${d.getDate()}</div>
            <div class="month">${d.toLocaleString('default', { month: 'short' })}</div>
          </div>
          <div class="booking-info">
            <div class="booking-skill">${b.skill}</div>
            <div class="booking-with">with ${partner.name}</div>
            <div class="booking-time">${b.time}</div>
          </div>
          <span class="booking-status ${b.status}">${b.status.charAt(0).toUpperCase() + b.status.slice(1)}</span>
          ${b.status === 'pending' ? `
            <div class="booking-actions">
              <button class="btn btn-success btn-sm" onclick="confirmBooking(${b.id})">Confirm</button>
              <button class="btn btn-danger btn-sm" onclick="cancelBooking(${b.id})">Cancel</button>
            </div>
          ` : ''}
        </div>`;
    }).join('') : '<div class="empty-state"><span class="empty-icon">\u{1F4C5}</span><p>No bookings here yet.</p></div>'}

    ${renderCalendar()}
  </div>`;
}

function renderCalendar() {
  const year = state.calendarMonth.getFullYear();
  const month = state.calendarMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date('2026-03-08');
  const monthName = state.calendarMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  const bookingDates = BOOKINGS
    .filter(b => b.userId === state.currentUser.id || b.partnerId === state.currentUser.id)
    .filter(b => b.status !== 'cancelled')
    .map(b => b.date);

  let cells = '';
  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(d => {
    cells += `<div class="calendar-day-header">${d}</div>`;
  });
  for (let i = 0; i < firstDay; i++) {
    const prevDate = new Date(year, month, -firstDay + i + 1).getDate();
    cells += `<div class="calendar-day other-month"><span class="day-num">${prevDate}</span></div>`;
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const isToday = today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
    const hasBooking = bookingDates.includes(dateStr);
    cells += `<div class="calendar-day ${isToday ? 'today' : ''} ${hasBooking ? 'has-booking' : ''}">
      <span class="day-num">${d}</span>
      ${hasBooking ? '<div class="booking-dot"></div>' : ''}
    </div>`;
  }

  return `
    <div class="calendar-section">
      <div class="calendar-header">
        <h3>${monthName}</h3>
        <div class="calendar-nav">
          <button onclick="changeMonth(-1)">\u2190</button>
          <button onclick="changeMonth(1)">\u2192</button>
        </div>
      </div>
      <div class="calendar-grid">${cells}</div>
    </div>`;
}

function renderSafety() {
  return `<div class="page">
    <div class="safety-hero">
      <h2>\u{1F6E1}\uFE0F Community Safety Guide</h2>
      <p>Your safety is our top priority. Follow these guidelines for a positive skill exchange experience.</p>
    </div>
    <div class="safety-cards">
      <div class="safety-card">
        <span class="safety-icon">\u{1F4CD}</span>
        <h3>Meet in Public Places</h3>
        <p>For first-time exchanges, always meet in public, well-lit locations like libraries, coffee shops, or community centers. Let someone know where you'll be.</p>
      </div>
      <div class="safety-card">
        <span class="safety-icon">\u2705</span>
        <h3>Check Verified Profiles</h3>
        <p>Look for the verified badge on profiles. Verified members have confirmed their identity. Read reviews from other community members before booking.</p>
      </div>
      <div class="safety-card">
        <span class="safety-icon">\u{1F4AC}</span>
        <h3>Communicate Clearly</h3>
        <p>Use our in-app messaging to discuss expectations, skill levels, and session details before meeting. Clear communication prevents misunderstandings.</p>
      </div>
      <div class="safety-card">
        <span class="safety-icon">\u{1F91D}</span>
        <h3>Set Clear Boundaries</h3>
        <ul>
          <li>Agree on session length and content upfront</li>
          <li>Discuss barter vs. payment terms clearly</li>
          <li>It's okay to say no or end a session early</li>
          <li>Report any uncomfortable situations</li>
        </ul>
      </div>
      <div class="safety-card">
        <span class="safety-icon">\u2B50</span>
        <h3>Leave Honest Reviews</h3>
        <p>After each session, leave a review. This helps the community identify great teachers and maintain quality. Be constructive and respectful.</p>
      </div>
      <div class="safety-card">
        <span class="safety-icon">\u{1F6A8}</span>
        <h3>Report Concerns</h3>
        <p>If you experience anything inappropriate, report it immediately. We take all reports seriously and will investigate promptly. Your safety comes first.</p>
      </div>
    </div>
  </div>`;
}

// ==================== COMPONENTS ====================

function renderUserCard(user, index = 0) {
  return `
    <div class="user-card" onclick="openUserModal(${user.id})" style="--i: ${index}">
      <div class="user-card-header">
        <div class="avatar" style="background:${user.avatarColor}">${getInitials(user.name)}</div>
        <div class="user-info">
          <div class="user-name">
            ${user.name}
            ${user.verified ? '<span class="verified-badge">\u2713 Verified</span>' : ''}
          </div>
          <div class="user-location">\u{1F4CD} ${user.location}</div>
          <div class="user-rating">\u2B50 ${user.rating} (${user.reviews} reviews)</div>
        </div>
        <span class="barter-badge ${user.barterOnly ? 'barter' : 'both'}">${user.barterOnly ? 'Barter Only' : 'Barter / Pay'}</span>
      </div>
      <div class="user-bio">${user.bio}</div>
      <div class="skills-section">
        <div class="skills-label">Offering</div>
        <div class="skill-tags">
          ${user.skillsOffered.map(s => `<span class="skill-tag offered">${s.name}</span>`).join('')}
        </div>
      </div>
      <div class="skills-section">
        <div class="skills-label">Wants to Learn</div>
        <div class="skill-tags">
          ${user.skillsWanted.map(s => `<span class="skill-tag wanted">${s.name}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

// ==================== MATCHMAKER LOGIC ====================

function findMatches(currentUser) {
  const matches = [];
  USERS.forEach(user => {
    if (user.id === currentUser.id) return;
    const theyOfferYouWant = [];
    const youOfferTheyWant = [];

    user.skillsOffered.forEach(offered => {
      currentUser.skillsWanted.forEach(wanted => {
        if (offered.category === wanted.category || offered.name.toLowerCase().includes(wanted.name.toLowerCase()) || wanted.name.toLowerCase().includes(offered.name.toLowerCase())) {
          theyOfferYouWant.push(offered.name);
        }
      });
    });

    currentUser.skillsOffered.forEach(offered => {
      user.skillsWanted.forEach(wanted => {
        if (offered.category === wanted.category || offered.name.toLowerCase().includes(wanted.name.toLowerCase()) || wanted.name.toLowerCase().includes(offered.name.toLowerCase())) {
          youOfferTheyWant.push(offered.name);
        }
      });
    });

    if (theyOfferYouWant.length || youOfferTheyWant.length) {
      const totalPossible = currentUser.skillsWanted.length + currentUser.skillsOffered.length;
      const matched = theyOfferYouWant.length + youOfferTheyWant.length;
      const score = Math.min(Math.round((matched / totalPossible) * 100 + (theyOfferYouWant.length && youOfferTheyWant.length ? 20 : 0)), 99);

      let reason = '';
      if (theyOfferYouWant.length && youOfferTheyWant.length) {
        reason = `Perfect swap! They teach you ${theyOfferYouWant.join(', ')}, you teach them ${youOfferTheyWant.join(', ')}.`;
      } else if (theyOfferYouWant.length) {
        reason = `They can teach you ${theyOfferYouWant.join(', ')}.`;
      } else {
        reason = `You can teach them ${youOfferTheyWant.join(', ')}.`;
      }

      matches.push({ user, score, reason, theyOffer: theyOfferYouWant, youOffer: youOfferTheyWant });
    }
  });

  return matches.sort((a, b) => b.score - a.score);
}

// ==================== MODALS ====================

function openUserModal(userId) {
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <button class="modal-close" onclick="closeModal()">\u00D7</button>
    <div style="text-align:center;margin-bottom:20px">
      <div class="avatar" style="background:${user.avatarColor};width:72px;height:72px;font-size:1.4rem;margin:0 auto 12px">${getInitials(user.name)}</div>
      <div class="user-name" style="justify-content:center;font-size:1.3rem">
        ${user.name} ${user.verified ? '<span class="verified-badge">\u2713 Verified</span>' : ''}
      </div>
      <div class="user-location" style="margin-bottom:4px">\u{1F4CD} ${user.location}</div>
      <div class="user-rating">\u2B50 ${user.rating} (${user.reviews} reviews) \u00B7 Joined ${formatDate(user.joinDate)}</div>
      <span class="barter-badge ${user.barterOnly ? 'barter' : 'both'}" style="margin-top:8px;display:inline-block">${user.barterOnly ? 'Barter Only' : 'Barter / Pay'}</span>
    </div>
    <p style="color:var(--text-light);margin-bottom:20px;text-align:center">${user.bio}</p>
    <div class="skills-section">
      <div class="skills-label">Skills Offered</div>
      <div class="skill-tags">
        ${user.skillsOffered.map(s => `<span class="skill-tag offered">${s.name} \u00B7 ${s.level}</span>`).join('')}
      </div>
    </div>
    <div class="skills-section" style="margin-bottom:20px">
      <div class="skills-label">Wants to Learn</div>
      <div class="skill-tags">
        ${user.skillsWanted.map(s => `<span class="skill-tag wanted">${s.name}</span>`).join('')}
      </div>
    </div>
    ${user.id !== state.currentUser.id ? `
      <div style="display:flex;gap:10px;justify-content:center">
        <button class="btn btn-primary" onclick="closeModal();openMessageModal(${user.id})">Send Message</button>
        <button class="btn btn-outline" onclick="closeModal();openBookingModal(${user.id})">Book Session</button>
      </div>
    ` : ''}
  `;
  modal.classList.remove('hidden');
}

function openMessageModal(userId) {
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  // Check if conversation exists
  let conv = CONVERSATIONS.find(c =>
    c.participants.includes(state.currentUser.id) && c.participants.includes(userId)
  );
  if (conv) {
    state.selectedConversation = conv.id;
    window.location.hash = 'messages';
    return;
  }
  // Create new conversation
  const newConv = {
    id: CONVERSATIONS.length + 1,
    participants: [state.currentUser.id, userId],
    messages: [],
  };
  CONVERSATIONS.push(newConv);
  state.selectedConversation = newConv.id;
  window.location.hash = 'messages';
}

function openBookingModal(userId) {
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  const allSkills = [...user.skillsOffered.map(s => s.name), ...state.currentUser.skillsOffered.map(s => s.name)];
  content.innerHTML = `
    <button class="modal-close" onclick="closeModal()">\u00D7</button>
    <h3 style="margin-bottom:20px">Book a Session with ${user.name}</h3>
    <div class="form-group">
      <label>Skill / Topic</label>
      <select id="bookSkill">
        ${allSkills.map(s => `<option value="${s}">${s}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label>Date</label>
      <input type="date" id="bookDate" min="2026-03-08" value="2026-03-15">
    </div>
    <div class="form-group">
      <label>Preferred Time</label>
      <div class="time-slots" id="timeSlots">
        ${['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'].map(t =>
          `<div class="time-slot" onclick="selectTimeSlot(this, '${t}')">${t}</div>`
        ).join('')}
      </div>
    </div>
    <input type="hidden" id="bookTime" value="">
    <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px" onclick="submitBooking(${userId})">Request Booking</button>
  `;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// ==================== ACTIONS ====================

function sendMessage() {
  const input = document.getElementById('messageInput');
  if (!input || !input.value.trim()) return;
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConversation);
  if (!conv) return;
  conv.messages.push({
    from: state.currentUser.id,
    text: input.value.trim(),
    time: new Date().toISOString(),
  });
  input.value = '';
  renderPage();
  // Scroll to bottom
  setTimeout(() => {
    const el = document.getElementById('chatMessages');
    if (el) el.scrollTop = el.scrollHeight;
  }, 50);
}

function selectConversation(convId) {
  state.selectedConversation = convId;
  renderPage();
  setTimeout(() => {
    const el = document.getElementById('chatMessages');
    if (el) el.scrollTop = el.scrollHeight;
  }, 50);
}

function selectTimeSlot(el, time) {
  document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('bookTime').value = time;
}

function submitBooking(userId) {
  const skill = document.getElementById('bookSkill').value;
  const date = document.getElementById('bookDate').value;
  const time = document.getElementById('bookTime').value;
  if (!time) { alert('Please select a time slot.'); return; }
  const partner = USERS.find(u => u.id === userId);
  BOOKINGS.push({
    id: BOOKINGS.length + 1,
    userId: state.currentUser.id,
    partnerId: userId,
    skill: skill,
    date: date,
    time: time,
    status: 'pending',
  });
  closeModal();
  alert(`Booking requested with ${partner.name} for ${skill} on ${formatDate(date)} at ${time}!`);
  if (state.currentPage === 'bookings') renderPage();
}

function confirmBooking(bookingId) {
  const b = BOOKINGS.find(b => b.id === bookingId);
  if (b) { b.status = 'confirmed'; renderPage(); }
}

function cancelBooking(bookingId) {
  const b = BOOKINGS.find(b => b.id === bookingId);
  if (b) { b.status = 'cancelled'; renderPage(); }
}

function setBookingTab(tab) {
  state.bookingTab = tab;
  renderPage();
}

function changeMonth(delta) {
  state.calendarMonth = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth() + delta);
  renderPage();
}

function heroSearch() {
  const val = document.getElementById('heroSearch').value;
  state.searchQuery = val;
  window.location.hash = 'browse';
}

function browseCategory(catId) {
  state.categoryFilter = catId;
  state.searchQuery = '';
  window.location.hash = 'browse';
}

function updateSearch(val) {
  state.searchQuery = val;
  renderPage();
  // Re-focus the input
  const el = document.getElementById('browseSearch');
  if (el) { el.focus(); el.setSelectionRange(val.length, val.length); }
}

function setFilter(catId) {
  state.categoryFilter = catId;
  renderPage();
}

// ==================== EVENT BINDING ====================

function attachPageEvents() {
  // Hero search enter key
  const heroInput = document.getElementById('heroSearch');
  if (heroInput) {
    heroInput.addEventListener('keydown', e => { if (e.key === 'Enter') heroSearch(); });
  }
  // Auto-scroll chat
  const chatEl = document.getElementById('chatMessages');
  if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
}

// Close modal on backdrop click
document.getElementById('modal').addEventListener('click', e => {
  if (e.target.id === 'modal') closeModal();
});

// ==================== UTILITIES ====================

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase();
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatTime(timeStr) {
  const d = new Date(timeStr);
  const now = new Date('2026-03-08T12:00:00');
  const diff = now - d;
  if (diff < 86400000) return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  if (diff < 604800000) return d.toLocaleDateString('en-US', { weekday: 'short' });
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ==================== START ====================
init();
