import type { NavItem, SidebarNavItem } from './nav'
import type { LocaleOptions } from './i18n'

export interface ProjectsConfig {
  mainNav: NavItem[]
  sidebarNav: SidebarNavItem[]
}

export interface DocPageProps {
  params: {
    slug: string[]
    locale: LocaleOptions
  }
}
