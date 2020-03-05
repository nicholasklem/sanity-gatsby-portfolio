export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6178f7fef58d8af84f7829',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rzbko4te',
                  apiId: '95f8261f-852f-4daa-91a6-43783996a006'
                },
                {
                  buildHookId: '5e6178f870bcd887cea3cef1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vtbeq217',
                  apiId: '0797ba2a-f2ed-4418-82d4-f178902fae5f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vtbeq217.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
