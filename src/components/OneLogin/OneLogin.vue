<template>
    <div class="one_login">
        <div class="one_login_header">
            <div class="one_login_header_left" :class="{active: quickIsShow}" @click="quickIsShow=true, normalIsShow=false">
                手机号快捷登录
            </div>
            <div class="one_login_header_right" :class="{active: normalIsShow}" @click="normalIsShow=true, quickIsShow=false">
                账号密码登录
            </div>
        </div>
        <OneLoginQuick v-show="quickIsShow"></OneLoginQuick>
        <OneLoginNormal v-show="normalIsShow"></OneLoginNormal>
        <OneLoginOauth></OneLoginOauth>
    </div>
</template>

<script>
    import axios from 'axios'
    import OneLoginQuick from './OneLoginQuick'
    import OneLoginOauth from './OneLoginOauth'
    import OneLoginNormal from './OneLoginNormal'
    import router from '../../router'

    export default {
        name: 'OneLogin',
        data () {
            return {
                quickIsShow: true,
                normalIsShow: false
            }
        },
        components: {
            OneLoginQuick,
            OneLoginOauth,
            OneLoginNormal
        },
        methods: {
            // http://localhost:8080/home/q/news_list_for_channel?channel_id=best&cstart=0&cend=10&infinite=true&refresh=1&__from__=wap&docids=0HUIPCMx,0HUcNtFU,0HUQOZoT,0HUVgthG,0HTZLvvs&appid=web_yidian&_=1508298474577
            quickLogin() {
                router.push()
            }    
        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .one_login {
        font-size: 16px;
        .active {
            color: #129aee;
        }

        .one_login_header {
            width: 100%;
            height: .54rem;
            border-bottom: 1px solid #eee;
            margin-bottom: .2rem;

            div {
                width: 50%;
                height: 100%;
                line-height: .54rem;
                font-size: .14rem;
                text-align: center;
            }
            .one_login_header_left {
                float: left;
                position: relative;
            }
            .one_login_header_left:after {
                position: absolute;
                top: .07rem;
                right: 0;
                content: '';
                width: 1px;
                height: .4rem;
                background: #eee;
                /*-webkit-transform: scale(0.5);
                transform: scale(0.5);*/
            }
            .one_login_header_right {
                float: right;
            }
        }
    }
</style>
