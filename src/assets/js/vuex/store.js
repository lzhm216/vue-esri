'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import loS from '../../../service/loStorage'

// 在使用vuex之前使用，先初始化相关数据
const init = [
  {name: 'isLogin', value: 'true', type: false},
  {name: 'themeType', value: 'blue', type: false},
  {name: 'userName', value: '', type: false},
  {name: 'userPassword', value: '', type: false}
]

loS.initData(init)

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: loS.getItem('isLogin', false),
    themeType: loS.getItem('themeType', true),
    userName: loS.getItem('userName', true),
    userPassword: loS.getItem('userPassword', true)
  },
  mutations: {
    checkLogin (state, code) {
      localStorage.setItem('isLogin', code, false)
      state.isLogin = loS.getItem('isLogin', false)
    },
    setTheme (state, code) {
      loS.setItem('themeType', code, false)
      state.themeType = loS.getItem('themeType', true)
    },
    setUName (state, code) {
      loS.setItem('userName', code, false)
      state.userName = loS.getItem('userName', true)
    },
    setUPassd (state, code) {
      loS.setItem('userPassword', code, false)
      state.userPassword = loS.getItem('userPassword', true)
    }
  }

})

export default store
