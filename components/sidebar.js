const MySidebar = {
  props: ["items", "current"],
  template: `
    <aside class="main-sidebar">
        <div class="sidebar-section">
            <h2 class="category-title">Documents</h2>
            <ul>
                <li v-for="item in items"
                    :key="item" 
                    :class="{ active: item === current }"
                    @click="$emit('change-page', item)">
                    {{ item }}
                </li>
            </ul>
        </div>

        <div class="sidebar-section">
            <h2 class="category-title">API Reference</h2>
            <ul>
                <li v-for="api in apiItems" :key="api.id" 
                    :class="{ active: currentPage === api.id }"
                    @click="$emit('update-page', api.id)">
                    {{ api.name }}
                </li>
            </ul>
        </div>
    </aside>
    `,
};
