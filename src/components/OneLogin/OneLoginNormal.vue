<template>
    <div class="one_login_quick">
        <form @submit.prevent="normalLogin">
            <div class="one_login_quick_input_container">
                <div class="one_login_quick_input_phoneNumber">
                    <input v-model="username" type="tel" placeholder="请输入手机号或邮箱">
                    <button>X</button>
                </div>
                <div class="one_login_quick_input_password">
                    <input v-model="password" type="password" placeholder="请输入密码">
                </div>
            </div>
            <p class="error_msg"></p>
            <button type="submit" class="submit" @click="normalLogin">登录</button>  
            <p class="tip_msg"></p>         
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapActions} from 'vuex'

    export default {
        name: 'OneLoginQuick',
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions([login]),
            normalLogin() {
                this.login({})
            }
        },
        mouted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .one_login_quick {
        margin: 0 .27rem;

        .one_login_quick_input_container {
            width: 100%;
            border-radius: .05rem;
            background: #fff;
            border: 1px solid #eee;

            .one_login_quick_input_phoneNumber {
                border-bottom: 1px solid #eee;

                button {
                    display: block;
                    color: #fff;
                    background: #eee;
                    border-radius: 50%;
                    position: absolute;
                    border: none;
                    width: .2rem;
                    height: .2rem;
                    top: .1rem;
                    right: .2rem;
                }
            }
            .one_login_quick_input_phoneNumber, .one_login_quick_input_password {
                width: 100%;
                height: .42rem;
                padding: .02rem;
                position: relative;

                .verification_code {
                    width: .9rem;
                    height: .4rem;
                    line-height: .4rem;
                    text-align: center;
                    position: absolute;
                    right: 5px;
                    top: 2px;
                    font-size: .14rem;
                    color: #999;
                }

                input {
                    float: left;
                    width: 60%;
                    padding: .13rem .16rem;
                    height: .16rem;
                    border: none;
                    outline: none;
                    color: #333;
                    font-size: .14rem;
                }
                input::-webkit-input-placeholder {
                    color: #777;
                    font-size: .14rem;
                }
            }
        }

        .error_msg {
            margin: 0;
            height: .2rem;
            line-height: .2rem;
            color: #ef522e;
        }
        .submit {
            width: 100%;
            height: .45rem;
            line-height: .45rem;
            color: #fafafa;
            background: #88ccf6;
            font-size: .17rem;
            border: 0;
            border-radius: .04rem;
            text-align: center;
        }
        .tip_msg {
            margin-top: .12rem;
            color: #999;
            height: .14rem;
            font-size: .11rem;
            text-align: center;
        }
    }
</style>
