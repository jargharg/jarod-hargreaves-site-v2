// Add page types here and map to site urls they are located
// This ensures clicking preview in Prismic takes the user to the correct page

export const DOCUMENT_TYPES = {
  homepage: 'homepage',
  contentPage: 'contentPage',
  legalPage: 'legalPage',
  projectIndex: 'projectIndex',
  project: 'project',
}

const HOMEPAGE_DOC_TYPES = [
  DOCUMENT_TYPES.homepage,
  DOCUMENT_TYPES.globals,
]

export default function (doc) {
  if (doc.isBroken) {
    return null
  }

  if (HOMEPAGE_DOC_TYPES.includes(doc.type)) {
    return '/'
  }

  if (doc.type === DOCUMENT_TYPES.contentPage) {
    return `/${doc.uid}/`
  }

  if (doc.type === DOCUMENT_TYPES.legalPage) {
    return `/legal/${doc.uid}/`
  }

  if (doc.type === DOCUMENT_TYPES.projectIndex) {
    return '/projects/'
  }

  if (doc.type === DOCUMENT_TYPES.project) {
    return `/projects/${doc.uid}/`
  }

  return null
};
