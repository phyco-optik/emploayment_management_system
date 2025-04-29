        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const hamburger = document.getElementById('navbarHamburger');
            const sidebar = document.getElementById('sidebar');
            
            hamburger.addEventListener('click', function() {
                sidebar.classList.toggle('active');
                this.classList.toggle('active');
            });
            
            // Sidebar navigation
            const menuItems = document.querySelectorAll('.menu__item');
            menuItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all items
                    menuItems.forEach(i => i.classList.remove('active'));
                    
                    // Add active class to clicked item
                    this.classList.add('active');
                    
                    // Get the page to load
                    const page = this.getAttribute('data-page');
                    
                    // Update content area
                    const contentArea = document.getElementById('mainContent');
                    contentArea.innerHTML = `
                        <div class="content__loader">
                            <div class="loader"></div>
                        </div>
                    `;
                    
                    // Simulate loading (in a real app, this would fetch the content)
                    setTimeout(() => {
                        contentArea.innerHTML = `
                            <div class="dashboard">
                                <h1><i class="fas fa-${getPageIcon(page)}"></i> ${capitalizeFirstLetter(page)}</h1>
                                <p>This is the ${page} page content. In a real application, this would be loaded dynamically.</p>
                                ${generatePageContent(page)}
                            </div>
                        `;
                    }, 500);
                });
            });
            
            // Helper functions
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            
            function getPageIcon(page) {
                const icons = {
                    'dashboard': 'tachometer-alt',
                    'employees': 'users',
                    'departments': 'building',
                    'attendance': 'calendar-check',
                    'reports': 'chart-bar',
                    'settings': 'cog'
                };
                return icons[page] || 'file';
            }
            
            function generatePageContent(page) {
                const contents = {
                    'employees': `
                        <div class="stats-grid">
                            <div class="stat-card">
                                <i class="fas fa-user-plus"></i>
                                <div>
                                    <h3>15</h3>
                                    <p>New This Month</p>
                                </div>
                            </div>
                            <div class="stat-card">
                                <i class="fas fa-user-graduate"></i>
                                <div>
                                    <h3>42</h3>
                                    <p>On Training</p>
                                </div>
                            </div>
                        </div>
                    `,
                    'departments': `
                        <div class="stats-grid">
                            <div class="stat-card">
                                <i class="fas fa-code"></i>
                                <div>
                                    <h3>25</h3>
                                    <p>IT Department</p>
                                </div>
                            </div>
                            <div class="stat-card">
                                <i class="fas fa-chart-line"></i>
                                <div>
                                    <h3>18</h3>
                                    <p>Marketing</p>
                                </div>
                            </div>
                        </div>
                    `,
                    'default': `
                        <div class="stat-card">
                            <i class="fas fa-info-circle"></i>
                            <p>Page-specific content will be displayed here when implemented.</p>
                        </div>
                    `
                };
                return contents[page] || contents['default'];
            }
        });
