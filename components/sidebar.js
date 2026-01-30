const MySidebar = {
  props: ['items', 'current'],
  emits: ['change-page'],
  template: `
  <aside style="width: 160px; background: #f8f9fa; padding: 15px 10px; border-right: 1px solid #dee2e6;">
      <ul style="list-style: none; padding: 0; margin: 0;">
          <li v-for="item in items" 
              :key="item"
              @click="$emit('change-page', item)"
              :style="item === current ? activeStyle : itemStyle">
              {{ item }}
          </li>
      </ul>
  </aside>
  `,
  setup() {
      const itemStyle = { padding: '10px 12px', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px' };
      const activeStyle = { ...itemStyle, background: '#3498db', color: 'white', fontWeight: 'bold' };
      return { itemStyle, activeStyle };
  }
};