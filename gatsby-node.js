const remark = require("remark")
const remarkHTML = require("remark-html")

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === "MarkdownRemark") {
    const teamcards = node.frontmatter.teamcards
    const blobitems = node.frontmatter.blobitems
    const relatedStoryNl = node.frontmatter.relatedStoryNl
    const relatedStoryEn = node.frontmatter.relatedStoryEn
    if (teamcards) {
      teamcards.map(card => (card.bio = htmlify(card.bio)))
    }
    if (blobitems) {
      blobitems.map(blob => (blob.description = htmlify(blob.description)))
    }
    if (relatedStoryNl) {
      node.frontmatter.relatedStoryNl = htmlify(relatedStoryNl)
    }
    if (relatedStoryEn) {
      node.frontmatter.relatedStoryEn = htmlify(relatedStoryEn)
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
