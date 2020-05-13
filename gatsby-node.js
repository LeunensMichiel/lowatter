const remark = require("remark")
const remarkHTML = require("remark-html")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)

  if (node.internal.type === "MarkdownRemark") {
    const teamcards = node.frontmatter.teamcards
    const blobitems = node.frontmatter.blobitems
    const steps = node.frontmatter.steps
    const relatedStoryNl = node.frontmatter.relatedStoryNl
    const relatedStoryEn = node.frontmatter.relatedStoryEn
    const relatedStoryFr = node.frontmatter.relatedStoryFr
    if (teamcards) {
      teamcards.map(card => (card.bio = htmlify(card.bio)))
    }
    if (blobitems) {
      blobitems.map(blob => (blob.description = htmlify(blob.description)))
    }
    if (steps) {
      steps.map(step => (step.description = htmlify(step.description)))
    }
    if (relatedStoryNl) {
      node.frontmatter.relatedStoryNl = htmlify(relatedStoryNl)
    }
    if (relatedStoryEn) {
      node.frontmatter.relatedStoryEn = htmlify(relatedStoryEn)
    }
    if (relatedStoryFr) {
      node.frontmatter.relatedStoryFr = htmlify(relatedStoryFr)
    }
    return node
  }
}

const htmlify = item => {
  return remark()
    .use(remarkHTML)
    .processSync(item)
    .toString()
}
