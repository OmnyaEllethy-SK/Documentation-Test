import type { ProjectsConfig } from '@/lib/opendocs/types/Projects'

export const projectsConfig: ProjectsConfig = {
  mainNav: [
    {
      href: '/projects',
      title: {
        en: 'Projects',
        pt: 'Projects',
      },
    },
  ],

  sidebarNav: [
    {
      title: {
        en: 'Project List',
        pt: 'lista de projetos',
      },
      items: [
        {
          href: '/projects/project-A',
          title: {
            en: 'Project A',
            pt: 'Projeto A',
          },
          items: [
         /*   {
              href: '/projects/project-A/overview',
              title: {
                en: 'Overview',
                pt: 'visão geral',
              },
            },
            {
              href: '/projects/project-A/environments',
              title: {
                en: 'Environments',
                pt: 'ambiente',
              },
            },*/
          ],
        },
        {
          href: '/projects/Project-B',
          title: {
            en: 'Project B',
            pt: 'Projeto B',
          },
          items: [],
        },
      ],
    },
  ],
} as const
