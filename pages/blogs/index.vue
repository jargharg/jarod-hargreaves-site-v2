<template>
  <article class="py-10">
    <div class="container mb-10">
      <Heading level="2" class="text-lg md:text-xl mb-4">
        {{ doc.title }}
      </Heading>

      <BodyText :prose="false">
        <prismic-rich-text :field="doc.intro" />
      </BodyText>
    </div>

    <ArticleGrid
      :filters="doc.blogTags"
      filter-name="blogTag"
      type="blogArticle"
    />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'
import { mapPrismicContentRelationships } from '~/helpers/prismicMappers'

export default {
  async setup () {
    const graphQuery = `
      {
        blogIndex {
          ...blogIndexFields
          blogTags {
            blogTag {
              title
            }
          }
        }
      }
    `

    const dataMapFunction = data => ({
      ...data,
      blogTags: mapPrismicContentRelationships(data.blogTags),
    })

    const doc = await getDocumentFromPrismic('blogIndex', {
      graphQuery,
      dataMapFunction,
    })

    return { doc }
  },
}
</script>
