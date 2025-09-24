// Sample data
const apps = [
  {
    name: "PixelMaster",
    icon: "image",
    iconColor: "text-violet-500",
    description: "Advanced image editing and composition",
    category: "Creative",
    recent: true,
    new: false,
    progress: 100,
  },
  {
    name: "VectorPro",
    icon: "brush",
    iconColor: "text-orange-500",
    description: "Professional vector graphics creation",
    category: "Creative",
    recent: true,
    new: false,
    progress: 100,
  },
  {
    name: "VideoStudio",
    icon: "video",
    iconColor: "text-pink-500",
    description: "Cinematic video editing and production",
    category: "Video",
    recent: true,
    new: false,
    progress: 100,
  },
  {
    name: "MotionFX",
    icon: "sparkles",
    iconColor: "text-blue-500",
    description: "Stunning visual effects and animations",
    category: "Video",
    recent: false,
    new: false,
    progress: 100,
  },
  {
    name: "PageCraft",
    icon: "layers",
    iconColor: "text-red-500",
    description: "Professional page design and layout",
    category: "Creative",
    recent: false,
    new: false,
    progress: 100,
  },
  {
    name: "UXFlow",
    icon: "layout-grid",
    iconColor: "text-fuchsia-500",
    description: "Intuitive user experience design",
    category: "Design",
    recent: false,
    new: true,
    progress: 85,
  },
  {
    name: "PhotoLab",
    icon: "camera",
    iconColor: "text-teal-500",
    description: "Advanced photo editing and organization",
    category: "Photography",
    recent: false,
    new: false,
    progress: 100,
  },
  {
    name: "DocMaster",
    icon: "file-text",
    iconColor: "text-red-600",
    description: "Document editing and management",
    category: "Document",
    recent: false,
    new: false,
    progress: 100,
  },
  {
    name: "WebCanvas",
    icon: "code",
    iconColor: "text-emerald-500",
    description: "Web design and development",
    category: "Web",
    recent: false,
    new: true,
    progress: 70,
  },
  {
    name: "3DStudio",
    icon: "box",
    iconColor: "text-indigo-500",
    description: "3D modeling and rendering",
    category: "3D",
    recent: false,
    new: true,
    progress: 60,
  },
  {
    name: "FontForge",
    icon: "type",
    iconColor: "text-amber-500",
    description: "Typography and font creation",
    category: "Typography",
    recent: false,
    new: false,
    progress: 100,
  },
  {
    name: "ColorPalette",
    icon: "palette",
    iconColor: "text-purple-500",
    description: "Color scheme creation and management",
    category: "Design",
    recent: false,
    new: false,
    progress: 100,
  },
];

const recentFiles = [
  {
    name: "Brand Redesign.pxm",
    app: "PixelMaster",
    modified: "2 hours ago",
    icon: "image",
    iconColor: "text-violet-500",
    shared: true,
    size: "24.5 MB",
    collaborators: 3,
  },
  {
    name: "Company Logo.vec",
    app: "VectorPro",
    modified: "Yesterday",
    icon: "brush",
    iconColor: "text-orange-500",
    shared: true,
    size: "8.2 MB",
    collaborators: 2,
  },
  {
    name: "Product Launch Video.vid",
    app: "VideoStudio",
    modified: "3 days ago",
    icon: "video",
    iconColor: "text-pink-500",
    shared: false,
    size: "1.2 GB",
    collaborators: 0,
  },
  {
    name: "UI Animation.mfx",
    app: "MotionFX",
    modified: "Last week",
    icon: "sparkles",
    iconColor: "text-blue-500",
    shared: true,
    size: "345 MB",
    collaborators: 4,
  },
  {
    name: "Magazine Layout.pgc",
    app: "PageCraft",
    modified: "2 weeks ago",
    icon: "layers",
    iconColor: "text-red-500",
    shared: false,
    size: "42.8 MB",
    collaborators: 0,
  },
  {
    name: "Mobile App Design.uxf",
    app: "UXFlow",
    modified: "3 weeks ago",
    icon: "layout-grid",
    iconColor: "text-fuchsia-500",
    shared: true,
    size: "18.3 MB",
    collaborators: 5,
  },
  {
    name: "Product Photography.phl",
    app: "PhotoLab",
    modified: "Last month",
    icon: "camera",
    iconColor: "text-teal-500",
    shared: false,
    size: "156 MB",
    collaborators: 0,
  },
];

const projects = [
  {
    name: "Website Redesign",
    description: "Complete overhaul of company website",
    progress: 75,
    dueDate: "June 15, 2025",
    members: 4,
    files: 23,
  },
  {
    name: "Mobile App Launch",
    description: "Design and assets for new mobile application",
    progress: 60,
    dueDate: "July 30, 2025",
    members: 6,
    files: 42,
  },
  {
    name: "Brand Identity",
    description: "New brand guidelines and assets",
    progress: 90,
    dueDate: "May 25, 2025",
    members: 3,
    files: 18,
  },
  {
    name: "Marketing Campaign",
    description: "Summer promotion materials",
    progress: 40,
    dueDate: "August 10, 2025",
    members: 5,
    files: 31,
  },
];

const tutorials = [
  {
    title: "Mastering Digital Illustration",
    description: "Learn advanced techniques for creating stunning digital art",
    duration: "1h 45m",
    level: "Advanced",
    instructor: "Sarah Chen",
    category: "Illustration",
    views: "24K",
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Essential principles for creating intuitive user interfaces",
    duration: "2h 20m",
    level: "Intermediate",
    instructor: "Michael Rodriguez",
    category: "Design",
    views: "56K",
  },
  {
    title: "Video Editing Masterclass",
    description: "Professional techniques for cinematic video editing",
    duration: "3h 10m",
    level: "Advanced",
    instructor: "James Wilson",
    category: "Video",
    views: "32K",
  },
  {
    title: "Typography Essentials",
    description: "Create beautiful and effective typography for any project",
    duration: "1h 30m",
    level: "Beginner",
    instructor: "Emma Thompson",
    category: "Typography",
    views: "18K",
  },
  {
    title: "Color Theory for Designers",
    description: "Understanding color relationships and psychology",
    duration: "2h 05m",
    level: "Intermediate",
    instructor: "David Kim",
    category: "Design",
    views: "41K",
  },
];

const communityPosts = [
  {
    title: "Minimalist Logo Design",
    author: "Alex Morgan",
    likes: 342,
    comments: 28,
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    time: "2 days ago",
  },
  {
    title: "3D Character Concept",
    author: "Priya Sharma",
    likes: 518,
    comments: 47,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    time: "1 week ago",
  },
  {
    title: "UI Dashboard Redesign",
    author: "Thomas Wright",
    likes: 276,
    comments: 32,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    time: "3 days ago",
  },
  {
    title: "Product Photography Setup",
    author: "Olivia Chen",
    likes: 189,
    comments: 15,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
    time: "5 days ago",
  },
];

// DOM elements
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const sidebarToggle = document.getElementById("sidebarToggle");
const closeMobileMenu = document.getElementById("closeMobileMenu");
const themeToggle = document.getElementById("themeToggle");
const themeColorPicker = document.getElementById("themeColorPicker");
const themeColorModal = document.getElementById("themeColorModal");

// State
let sidebarOpen = true;
let mobileMenuOpen = false;
let activeTab = "home";
const expandedItems = {};
let currentTheme = getSystemTheme();
let currentColor = localStorage.getItem("themeColor") || "indigo";

function getSystemTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme;
  }

  // Detect system preference
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
}

// Initialize the app
function init() {
  setupEventListeners();
  initializeTheme();
  initializeThemeColor();
  renderContent();
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }
}

// Event listeners
function setupEventListeners() {
  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", () => {
    toggleMobileMenu();
  });

  // Sidebar toggle (desktop)
  sidebarToggle.addEventListener("click", () => {
    toggleSidebar();
  });

  // Close mobile menu
  closeMobileMenu.addEventListener("click", () => {
    toggleMobileMenu();
  });

  // Mobile overlay click
  mobileOverlay.addEventListener("click", () => {
    toggleMobileMenu();
  });

  // Tab buttons
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      switchTab(button.dataset.tab);
    });
  });

  // Expandable nav items
  document.querySelectorAll("[data-expandable]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleNavItem(button.dataset.expandable);
    });
  });

  // Filter buttons
  document.addEventListener("click", (e) => {
    if (e.target.matches(".filter-buttons .btn")) {
      const parent = e.target.closest(".filter-buttons");
      parent
        .querySelectorAll(".btn")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
    }
  });

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    toggleTheme();
  });

  themeColorPicker.addEventListener("click", () => {
    themeColorModal.classList.add("active");
  });

  themeColorModal.addEventListener("click", (e) => {
    if (e.target === themeColorModal) {
      themeColorModal.classList.remove("active");
    }
  });

  document.querySelectorAll(".color-option").forEach((option) => {
    option.addEventListener("click", () => {
      setThemeColor(option.dataset.color);
      themeColorModal.classList.remove("active");
    });
  });

  if (window.matchMedia) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          currentTheme = e.matches ? "dark" : "light";
          document.documentElement.setAttribute("data-theme", currentTheme);
        }
      });
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;

  if (mobileMenuOpen) {
    sidebar.classList.add("mobile-open");
    mobileOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    sidebar.classList.remove("mobile-open");
    mobileOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Toggle sidebar (desktop)
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;

  if (sidebarOpen) {
    sidebar.classList.remove("hidden");
    mainContent.classList.remove("sidebar-hidden");
  } else {
    sidebar.classList.add("hidden");
    mainContent.classList.add("sidebar-hidden");
  }
}

// Switch tabs
function switchTab(tabName) {
  activeTab = tabName;

  // Update tab buttons
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");

  // Update tab content
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.getElementById(`${tabName}-tab`).classList.add("active");
}

// Toggle nav item expansion
function toggleNavItem(itemName) {
  expandedItems[itemName] = !expandedItems[itemName];

  const navItem = document
    .querySelector(`[data-expandable="${itemName}"]`)
    .closest(".nav-item");
  const submenu = document.getElementById(`${itemName}-submenu`);

  if (expandedItems[itemName]) {
    navItem.classList.add("expanded");
    submenu.style.display = "block";
  } else {
    navItem.classList.remove("expanded");
    submenu.style.display = "none";
  }
}

// Render content
function renderContent() {
  renderRecentApps();
  renderRecentFiles();
  renderActiveProjects();
  renderCommunityPosts();
  renderNewApps();
  renderAllApps();
  renderFilesTable();
  renderProjectsGrid();
  renderTemplatesGrid();
  renderFeaturedTutorials();
  renderPopularCourses();
  renderLearningPaths();

  setTimeout(() => {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  }, 100);
}

// Render recent apps
function renderRecentApps() {
  const container = document.getElementById("recentApps");
  const recentApps = apps.filter((app) => app.recent);

  container.innerHTML = recentApps
    .map(
      (app) => `
        <div class="card">
            <div class="card-header">
                <div class="app-header">
                    <div class="app-icon">
                        <i data-lucide="${app.icon}" class="${app.iconColor}"></i>
                    </div>
                    <button class="star-button">
                        <i data-lucide="star"></i>
                    </button>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${app.name}</h3>
                <p class="card-description">${app.description}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline" style="width: 100%;">Open</button>
            </div>
        </div>
    `
    )
    .join("");
}

// Render recent files
function renderRecentFiles() {
  const container = document.getElementById("recentFiles");

  container.innerHTML = `
        ${recentFiles
          .slice(0, 4)
          .map(
            (file) => `
            <div class="file-item">
                <div class="file-icon">
                    <i data-lucide="${file.icon}" class="${file.iconColor}"></i>
                </div>
                <div class="file-info">
                    <div class="file-name">${file.name}</div>
                    <div class="file-meta">${file.app} • ${file.modified}</div>
                </div>
                <div class="file-actions">
                    ${
                      file.shared
                        ? `<span class="badge"><i data-lucide="users" style="width: 0.75rem; height: 0.75rem; margin-right: 0.25rem;"></i>${file.collaborators}</span>`
                        : ""
                    }
                    <button class="btn btn-ghost btn-sm">Open</button>
                </div>
            </div>
        `
          )
          .join("")}
    `;
}

// Render active projects
function renderActiveProjects() {
  const container = document.getElementById("activeProjects");

  container.innerHTML = `
        ${projects
          .slice(0, 3)
          .map(
            (project) => `
            <div class="project-item">
                <div style="width: 100%;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <h3 style="font-weight: 500;">${project.name}</h3>
                        <span class="badge">Due ${project.dueDate}</span>
                    </div>
                    <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 0.75rem;">${project.description}</p>
                    <div class="progress-container">
                        <div class="progress-header">
                            <span>Progress</span>
                            <span>${project.progress}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${project.progress}%"></div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 0.75rem; font-size: 0.875rem; color: var(--muted-foreground);">
                        <div style="display: flex; align-items: center;">
                            <i data-lucide="users" style="width: 1rem; height: 1rem; margin-right: 0.25rem;"></i>
                            ${project.members} members
                        </div>
                        <div style="display: flex; align-items: center;">
                            <i data-lucide="file-text" style="width: 1rem; height: 1rem; margin-right: 0.25rem;"></i>
                            ${project.files} files
                        </div>
                    </div>
                </div>
            </div>
        `
          )
          .join("")}
    `;
}

// Render community posts
function renderCommunityPosts() {
  const container = document.getElementById("communityPosts");

  container.innerHTML = communityPosts
    .map(
      (post) => `
        <div class="card">
            <div style="aspect-ratio: 4/3; overflow: hidden; background: var(--muted);">
                <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </div>
            <div class="card-content" style="padding: 1rem;">
                <h3 style="font-weight: 600; margin-bottom: 0.25rem;">${post.title}</h3>
                <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 0.5rem;">by ${post.author}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                            <i data-lucide="heart" style="width: 1rem; height: 1rem; color: #ef4444;"></i>
                            ${post.likes}
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                            <i data-lucide="message-square" style="width: 1rem; height: 1rem; color: #3b82f6;"></i>
                            ${post.comments}
                        </div>
                    </div>
                    <span style="color: var(--muted-foreground);">${post.time}</span>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Render new apps
function renderNewApps() {
  const container = document.getElementById("newApps");
  const newApps = apps.filter((app) => app.new);

  container.innerHTML = newApps
    .map(
      (app) => `
        <div class="card">
            <div class="card-header">
                <div class="app-header">
                    <div class="app-icon">
                        <i data-lucide="${app.icon}" class="${
        app.iconColor
      }"></i>
                    </div>
                    <span class="badge" style="background: #f59e0b; color: white; border-color: #f59e0b;">New</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${app.name}</h3>
                <p class="card-description">${app.description}</p>
                <div class="progress-container">
                    <div class="progress-header">
                        <span>Installation</span>
                        <span>${app.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${
                          app.progress
                        }%"></div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline" style="width: 100%;">
                    ${app.progress < 100 ? "Continue Install" : "Open"}
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Render all apps
function renderAllApps() {
  const container = document.getElementById("allApps");

  container.innerHTML = apps
    .map(
      (app) => `
        <div class="card">
            <div class="card-header">
                <div class="app-header">
                    <div class="app-icon">
                        <i data-lucide="${app.icon}" class="${
        app.iconColor
      }"></i>
                    </div>
                    <span class="badge">${app.category}</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${app.name}</h3>
                <p class="card-description">${app.description}</p>
            </div>
            <div class="card-footer" style="display: flex; gap: 0.5rem;">
                <button class="btn btn-outline" style="flex: 1;">
                    ${app.progress < 100 ? "Install" : "Open"}
                </button>
                <button class="star-button" style="border: 1px solid var(--border); border-radius: var(--radius);">
                    <i data-lucide="star"></i>
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Render files table
function renderFilesTable() {
  const container = document.getElementById("filesTable");

  container.innerHTML = `
        <div class="table-header">
            <div>Name</div>
            <div>App</div>
            <div>Size</div>
            <div>Modified</div>
        </div>
        ${recentFiles
          .map(
            (file) => `
            <div class="table-row">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div class="file-icon">
                        <i data-lucide="${file.icon}" class="${
              file.iconColor
            }"></i>
                    </div>
                    <div>
                        <div style="font-weight: 500;">${file.name}</div>
                        ${
                          file.shared
                            ? `<div style="display: flex; align-items: center; font-size: 0.75rem; color: var(--muted-foreground);"><i data-lucide="users" style="width: 0.75rem; height: 0.75rem; margin-right: 0.25rem;"></i>Shared with ${file.collaborators} people</div>`
                            : ""
                        }
                    </div>
                </div>
                <div>${file.app}</div>
                <div>${file.size}</div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span>${file.modified}</span>
                    <div style="display: flex; gap: 0.25rem;">
                        <button class="icon-button" style="width: 2rem; height: 2rem;">
                            <i data-lucide="share-2" style="width: 1rem; height: 1rem;"></i>
                        </button>
                        <button class="icon-button" style="width: 2rem; height: 2rem;">
                            <i data-lucide="more-horizontal" style="width: 1rem; height: 1rem;"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
          )
          .join("")}
    `;
}

// Render projects grid
function renderProjectsGrid() {
  const container = document.getElementById("projectsGrid");

  container.innerHTML = `
        ${projects
          .map(
            (project) => `
            <div class="card">
                <div class="card-header">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 class="card-title">${project.name}</h3>
                        <span class="badge">Due ${project.dueDate}</span>
                    </div>
                    <p class="card-description">${project.description}</p>
                </div>
                <div class="card-content">
                    <div class="progress-container">
                        <div class="progress-header">
                            <span>Progress</span>
                            <span>${project.progress}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${project.progress}%"></div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 1rem; font-size: 0.875rem; color: var(--muted-foreground);">
                        <div style="display: flex; align-items: center;">
                            <i data-lucide="users" style="width: 1rem; height: 1rem; margin-right: 0.25rem;"></i>
                            ${project.members} members
                        </div>
                        <div style="display: flex; align-items: center;">
                            <i data-lucide="file-text" style="width: 1rem; height: 1rem; margin-right: 0.25rem;"></i>
                            ${project.files} files
                        </div>
                    </div>
                </div>
                <div class="card-footer" style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-outline" style="flex: 1;">Open Project</button>
                    <button class="icon-button" style="border: 1px solid var(--border); border-radius: var(--radius);">
                        <i data-lucide="share-2"></i>
                    </button>
                </div>
            </div>
        `
          )
          .join("")}
        <div class="card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; border: 1px dashed var(--border);">
            <div style="width: 3rem; height: 3rem; background: var(--muted); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <i data-lucide="plus" style="width: 1.5rem; height: 1.5rem;"></i>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 500; margin-bottom: 0.5rem;">Create New Project</h3>
            <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 1rem;">Start a new creative project from scratch or use a template</p>
            <button class="btn btn-primary">New Project</button>
        </div>
    `;
}

// Render templates grid
function renderTemplatesGrid() {
  const container = document.getElementById("templatesGrid");
  const templates = [
    {
      name: "Brand Identity",
      description: "Complete brand design package",
      color: "linear-gradient(135deg, #3b82f6, #7c3aed)",
      badge: "Popular",
    },
    {
      name: "Marketing Campaign",
      description: "Multi-channel marketing assets",
      color: "linear-gradient(135deg, #f59e0b, #ef4444)",
      badge: "New",
    },
    {
      name: "Website Redesign",
      description: "Complete website design workflow",
      color: "linear-gradient(135deg, #10b981, #0d9488)",
      badge: "Featured",
    },
    {
      name: "Product Launch",
      description: "Product launch campaign assets",
      color: "linear-gradient(135deg, #ec4899, #f43f5e)",
      badge: "Popular",
    },
  ];

  container.innerHTML = templates
    .map(
      (template) => `
        <div class="card">
            <div style="aspect-ratio: 16/9; background: ${
              template.color
            }; padding: 1.5rem; color: white; display: flex; flex-direction: column; justify-content: center;">
                <button style="width: 3.5rem; height: 3.5rem; background: var(--secondary); border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <i data-lucide="play" style="width: 1.5rem; height: 1.5rem;"></i>
                </button>
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.6)); padding: 1rem; color: white;">
                    <span class="badge" style="background: rgba(255,255,255,0.2); color: white; border: none; margin-bottom: 0.5rem;">${
                      template.badge
                    }</span>
                    <h3 style="font-size: 1.125rem; font-weight: 500;">${
                      template.name
                    }</h3>
                </div>
            </div>
            <div class="card-content" style="padding: 1rem;">
                <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 1rem;">${
                  template.description
                }</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div class="avatar" style="width: 1.5rem; height: 1.5rem; font-size: 0.75rem;">${template.name.charAt(
                          0
                        )}</div>
                        <span style="font-size: 0.875rem;">${
                          template.name
                        }</span>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Render featured tutorials
function renderFeaturedTutorials() {
  const container = document.getElementById("featuredTutorials");

  container.innerHTML = tutorials
    .slice(0, 3)
    .map(
      (tutorial) => `
        <div class="card">
            <div style="aspect-ratio: 16/9; background: linear-gradient(135deg, #6366f1, #7c3aed, #ec4899); position: relative; display: flex; align-items: center; justify-content: center;">
                <button style="width: 3.5rem; height: 3.5rem; background: var(--secondary); border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <i data-lucide="play" style="width: 1.5rem; height: 1.5rem;"></i>
                </button>
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.6)); padding: 1rem; color: white;">
                    <span class="badge" style="background: rgba(255,255,255,0.2); color: white; border: none; margin-bottom: 0.5rem;">${
                      tutorial.category
                    }</span>
                    <h3 style="font-size: 1.125rem; font-weight: 500;">${
                      tutorial.title
                    }</h3>
                </div>
            </div>
            <div class="card-content" style="padding: 1rem;">
                <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 1rem;">${
                  tutorial.description
                }</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div class="avatar" style="width: 1.5rem; height: 1.5rem; font-size: 0.75rem;">${tutorial.instructor.charAt(
                          0
                        )}</div>
                        <span style="font-size: 0.875rem;">${
                          tutorial.instructor
                        }</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; color: var(--muted-foreground);">
                        <i data-lucide="clock" style="width: 1rem; height: 1rem;"></i>
                        ${tutorial.duration}
                    </div>
                </div>
            </div>
            <div class="card-footer" style="display: flex; justify-content: space-between; align-items: center;">
                <span class="badge">${tutorial.level}</span>
                <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; color: var(--muted-foreground);">
                    <i data-lucide="eye" style="width: 1rem; height: 1rem;"></i>
                    ${tutorial.views} views
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Render popular courses
function renderPopularCourses() {
  const container = document.getElementById("popularCourses");

  container.innerHTML = `
        ${tutorials
          .slice(3, 5)
          .map(
            (tutorial) => `
            <div class="course-item">
                <div style="width: 5rem; height: 5rem; background: linear-gradient(135deg, #0d9488, #10b981); border-radius: var(--radius); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <i data-lucide="play" style="width: 2rem; height: 2rem; color: white;"></i>
                </div>
                <div style="flex: 1;">
                    <h3 style="font-weight: 500; margin-bottom: 0.25rem;">${tutorial.title}</h3>
                    <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 0.5rem;">${tutorial.description}</p>
                    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem;">
                        <span class="badge">${tutorial.level}</span>
                        <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; color: var(--muted-foreground);">
                            <i data-lucide="clock" style="width: 0.75rem; height: 0.75rem;"></i>
                            ${tutorial.duration}
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; color: var(--muted-foreground);">
                            <i data-lucide="eye" style="width: 0.75rem; height: 0.75rem;"></i>
                            ${tutorial.views} views
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn btn-ghost btn-sm">Watch Now</button>
                </div>
            </div>
        `
          )
          .join("")}
    `;
}

// Render learning paths
function renderLearningPaths() {
  const container = document.getElementById("learningPaths");
  const learningPaths = [
    {
      title: "UI/UX Design Fundamentals",
      description: "Master the basics of user interface and experience design",
      level: "Beginner",
      levelColor: "#3b82f6",
      courses: 8,
      hours: 24,
      rating: 4.8,
      progress: 30,
    },
    {
      title: "Digital Illustration Mastery",
      description: "Create stunning digital artwork and illustrations",
      level: "Intermediate",
      levelColor: "#f59e0b",
      courses: 12,
      hours: 36,
      rating: 4.9,
      progress: 0,
    },
    {
      title: "Motion Graphics & Animation",
      description: "Create professional motion graphics and animations",
      level: "Advanced",
      levelColor: "#ef4444",
      courses: 10,
      hours: 30,
      rating: 4.7,
      progress: 0,
    },
  ];

  container.innerHTML = learningPaths
    .map(
      (path) => `
        <div class="card">
            <div class="card-header">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <span class="badge" style="background: ${
                      path.levelColor
                    }; color: white; border-color: ${path.levelColor};">${
        path.level
      }</span>
                    <i data-lucide="award" style="width: 1.25rem; height: 1.25rem; color: #f59e0b;"></i>
                </div>
                <h3 class="card-title">${path.title}</h3>
                <p class="card-description">${path.description}</p>
            </div>
            <div class="card-content">
                <div style="margin-bottom: 0.5rem;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
                        <span>${path.courses} courses • ${
        path.hours
      } hours</span>
                        <span>${path.rating} ★</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${
                          path.progress
                        }%"></div>
                    </div>
                    <p style="font-size: 0.75rem; color: var(--muted-foreground); margin-top: 0.25rem;">
                        ${
                          path.progress > 0
                            ? `${path.progress}% completed`
                            : "Not started"
                        }
                    </p>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline" style="width: 100%;">
                    ${
                      path.progress > 0 ? "Continue Learning" : "Start Learning"
                    }
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Initialize theme
function initializeTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

function initializeThemeColor() {
  document.documentElement.setAttribute("data-color", currentColor);

  // Update active color option
  document.querySelectorAll(".color-option").forEach((option) => {
    option.classList.remove("active");
    if (option.dataset.color === currentColor) {
      option.classList.add("active");
    }
  });
}

// Toggle theme
function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
}

function setThemeColor(color) {
  currentColor = color;
  document.documentElement.setAttribute("data-color", currentColor);
  localStorage.setItem("themeColor", currentColor);

  // Update active color option
  document.querySelectorAll(".color-option").forEach((option) => {
    option.classList.remove("active");
    if (option.dataset.color === currentColor) {
      option.classList.add("active");
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
