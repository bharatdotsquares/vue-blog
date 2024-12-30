let ENDPOINT = import.meta.env.VITE_ENDPOINT
export default {
    data(){
        return{
            posts: [],
            post: {},
            tags: [],
            pagination: {
                currentPage: 1,
                itemsPerPage: 10
            },
            queryUser: {
                page: 1
            }
        }
    },
    methods: {
        async getAllPosts(){
            try{
                const response = await this.axios.get(`${ENDPOINT}`)
                console.log(response)
                this.posts = response.data.posts
            }catch(error){
                console.error(error)
            }
        },
        async getPostById(id){
            try{
                const response = await this.axios.get(`${ENDPOINT}/${id}`)
                this.post = response.data
            }catch(error){
                console.error(error)
            }
        },
        handlePageChange(page){
            this.pagination.currentPage = page
        },
        async createPost(post){
            try{
                const response = await this.axios.post(`${ENDPOINT}/posts/add`, post)
                this.post = response.data
            }catch(error){
                console.error(error)
            }
        },

        // Tags
        async getTags(){
            try{
                const response = await this.axios.get(`${ENDPOINT}/tags`)
                this.tags = response.data
            }catch(error){
                console.error(error)
            }
        },

        async getPostByTag(tag){
            try{
                const response = await this.axios.get(`${ENDPOINT}/tag/${tag}`)
                this.posts = response.data.posts
            }catch(error){
                console.error(error)
            }
        },
    }
}