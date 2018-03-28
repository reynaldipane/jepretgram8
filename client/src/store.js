import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeUser: {
      userId: localStorage.getItem('userid') || ``,
      token: localStorage.getItem('token') || ``,
      email: localStorage.getItem('email') || ``,
      name: localStorage.getItem('name') || ``
    },
    arrAllPost: [],
    arrUserPost: [],
    activePost: {}
  },
  getters: {
    getActiveUser: state => {
      return state.activeUser
    },
    getArrUserPost: state => {
      return state.arrUserPost
    },
    getArrAllPost: state => {
      return state.arrAllPost
    },
    getActivePost: state => {
      return state.activePost
    }
  },
  mutations: {
    setActiveUser (state, payload) {
      state.activeUser = payload
    },
    setArrUserPost (state, payload) {
      state.arrUserPost = payload
    },
    setActivePost (state, payload) {
      state.activePost = payload
    },
    setArrAllPost (state, payload) {
      state.arrAllPost = payload
    }
  },
  actions: {
    signIn (context, payload) {
      return axios.post('http://localhost:3000/api/users/signin', {
        username_email: payload.username_email,
        password: payload.password
      })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('userid', response.data.data.id)
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('email', response.data.data.email)
            localStorage.setItem('name', response.data.data.name)
            const objNewLoginUser = {
              userId: localStorage.getItem('userid'),
              token: localStorage.getItem('token'),
              email: localStorage.getItem('email'),
              name: localStorage.getItem('name')
            }
            context.commit('setActiveUser', objNewLoginUser)
            alert('Login Success')
          } else {
            alert('Login Failed, please check your username or password')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    signOut (context) {
      localStorage.removeItem('userid')
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      context.state.activeUser.userid = ``
      context.state.activeUser.token = ``
      context.state.activeUser.email = ``
    },
    signUp (context, payload) {
      return axios.post('http://localhost:3000/api/users/signup', {
        username: payload.username,
        password: payload.password,
        name: payload.name,
        email: payload.email,
        gender: payload.gender
      })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('userid', response.data.data.id)
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('email', response.data.data.email)
            localStorage.setItem('name', response.data.data.name)
            const objNewLoginUser = {
              userId: localStorage.getItem('userid'),
              token: localStorage.getItem('token'),
              email: localStorage.getItem('email'),
              name: localStorage.getItem('name')
            }
            context.commit('setActiveUser', objNewLoginUser)
            alert('Sign Up Success, Happy Writing !')
          } else {
            alert('sign up error')
          }
        })
        .catch(err => {
          alert(`sign up error ${err}`)
        })
    },
    upload (context, payload) {
      payload.formData.set('image', payload.file[0])
      payload.formData.set('caption', payload.caption)
      payload.formData.set('user_id', context.state.activeUser.userId)

      return axios({
        method: 'post',
        url: 'http://localhost:3000/api/posts/upload',
        data: payload.formData,
        config: {headers: { 'Content-Type': 'multipart/form-data' }}
      })
        .then(function (response) {
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    getAllPost (context, payload) {
      axios({
        method: 'get',
        url: `http://localhost:3000/api/posts`
        // config: {headers: { 'Content-Type': 'multipart/form-data' }}
      })
        .then(function (posts) {
          context.commit('setArrAllPost', posts.data.data)
        })
        .catch(function (posts) {
          console.log(posts)
        })
    },
    getUserPost (context, payload) {
      axios({
        method: 'get',
        url: `http://localhost:3000/api/posts/${context.state.activeUser.userId}`
        // config: {headers: { 'Content-Type': 'multipart/form-data' }}
      })
        .then(function (posts) {
          context.commit('setArrUserPost', posts.data.data)
        })
        .catch(function (posts) {
          console.log(posts)
        })
    },
    getPostById (context, payload) {
      axios({
        method: 'get',
        url: `http://localhost:3000/api/posts/detailpost/${payload}`
        // config: {headers: { 'Content-Type': 'multipart/form-data' }}
      })
        .then(function (post) {
          context.commit('setActivePost', post.data.data)
        })
        .catch(function (posts) {
          console.log(posts)
        })
    },
    updatePostById (context, payload) {
      axios({
        method: 'put',
        url: `http://localhost:3000/api/posts/${payload._id}`,
        data: {
          caption: payload.caption
        }
        // config: {headers: { 'Content-Type': 'multipart/form-data' }}
      })
        .then(function (post) {
          alert('Your Post Caption has been updated !')
        })
        .catch(function (posts) {
          console.log(posts)
        })
    },
    deletePostById (context, payload) {
      axios({
        method: 'delete',
        url: `http://localhost:3000/api/posts/${payload}`
        // config: {headers: { 'Content-Type': 'multipart/form-data' }}
      })
        .then(function (post) {
          alert('Post Deleted !')
        })
        .catch(function (posts) {
          console.log(posts)
        })
    },
    likePost (context, payload) {
      axios({
        method: 'post',
        url: `http://localhost:3000/api/posts/upvote`,
        data: {
          userId: payload.userId,
          postId: payload.postId
        }
        // config: {headers: { 'Content-Type': 'multipart/form-data' }}
      })
        .then(() => {
          console.log('Liked')
        })
        .catch((err) => {
          console.log(`Like failed ${err}`)
        })
    }
  }
})

export default store
