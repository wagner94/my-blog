const postsSchema = require('./posts')

const resolvers = [
    postsSchema.resolvers
]
    
const typeDefs = [
    postsSchema.shema
]

module.exports = {
    resolvers,
    typeDefs
}