import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

import type { ProjectsConfig } from '@/lib/opendocs/types/Projects'
import type { LocaleOptions } from '../types/i18n'

import { defaultLocale } from '@/config/i18n'

export function useProjectsConfig() {
  const locale = useLocale() as LocaleOptions
  const currentLocale = locale || defaultLocale

  const [projectsConfig, setProjectsConfig] = useState<{
    currentLocale: LocaleOptions
    projects: ProjectsConfig
  }>({
    currentLocale,

    projects: {
      mainNav: [],
      sidebarNav: [],
    },
  })

  useEffect(() => {
    import(`@/config/projects`).then(({ projectsConfig }) => {
      setProjectsConfig({
        currentLocale,
        projects: projectsConfig,
      })
    })
  }, [currentLocale])

  return projectsConfig
}
