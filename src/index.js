import { DashboardPage } from '@/pages/DashboardPage'
import { ExcelPage } from '@/pages/ExcelPage'
import '@/scss/index.scss'
import { Router } from './core/routes/Router'

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage,
})
