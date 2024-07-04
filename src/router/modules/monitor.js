/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const monitorRouter = {
  path: '/monitor',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Monitor',
  alwaysShow: true,
  meta: {
    title: '查询系统',
    icon: 'eye-open'
  },
  children: [
    {
      path: 'basisSpread',
      component: () => import('@/views/components-demo/avatar-upload'),
      name: 'basisSpread',
      meta: { title: '基差监控', icon: 'nested' }
    },
    {
      path: 'etfVolatility',
      component: () => import('@/views/monitor/etfVolatility'),
      name: 'etfVolatility',
      meta: { title: 'etf波动率', icon: 'stock' }
    },
    {
      path: 'indexVolatility',
      component: () => import('@/views/components-demo/markdown'),
      name: 'indexVolatility',
      meta: { title: '股指波动率', icon: 'stock' }
    },
    {
      path: 'commodityVolatility',
      component: () => import('@/views/components-demo/json-editor'),
      name: 'commodityVolatility',
      meta: { title: '商品波动率', icon: 'stock' }
    },
    {
      path: 'usData',
      component: () => import('@/views/components-demo/split-pane'),
      name: 'usData',
      meta: { title: '美国数据', icon: 'international' }
    }
  ]
}

export default monitorRouter
