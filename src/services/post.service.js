export default {
    data(){
        return{
            posts: [],
            post: {},
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
                const response = await this.axios.get(`${ENDPOINT}/posts`)
                this.posts = response.data
            }catch(error){
                console.error(error)
            }
        },
        async getPostById(id){
            try{
                const response = await this.axios.get(`${ENDPOINT}/posts/${id}`)
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
        }
    }
}