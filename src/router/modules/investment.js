/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const investmentRouter = {
  path: '/investment',
  component: Layout,
  redirect: 'noRedirect',
  name: 'investment',
  alwaysShow: true,
  meta: {
    title: '投研系统',
    icon: 'screen'
  },
  children: [
    {
      path: 'netValue',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'netValue',
      meta: { title: '净值统计', icon: 'edit' }
    },
    {
      path: 'atributeAnalysis',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'atributeAnalysis',
      meta: { title: '归因分析', icon: 'form' }
    }
  ]
}

export default investmentRouter
