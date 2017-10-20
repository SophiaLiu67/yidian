<template>
    <div class="oauth">
        <div class="oauth-title">
            <h3>一键登录</h3>
        </div>
        <div class="oauth-img">
            <a class="qq-img" href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=100468103&redirect_uri=http%3A%2F%2Fwww.yidianzixun.com%2Fhome%3Fpage%3Dindex-qq%26state%3Dyidian%26callback%3Dhttp%253A%252F%252Fwww.yidianzixun.com%252F%2523%252F%253Fid%253Dc11%2526name%253D%2525E6%2525B1%2525BD%2525E8%2525BD%2525A6"></a>
            <a class="weibo-img" href="https://api.weibo.com/oauth2/authorize?client_id=1290308714&redirect_uri=http%3A%2F%2Fwww.yidianzixun.com%2Fhome%3Fpage%3Dindex-weibo%26callback%3Dhttp%253A%252F%252Fwww.yidianzixun.com%252F%2523%252F%253Fid%253Dc11%2526name%253D%2525E6%2525B1%2525BD%2525E8%2525BD%2525A6"></a>
            <a class="xiaomi-img" href="https://account.xiaomi.com/oauth2/authorize?client_id=2882303761517118382&response_type=code&redirect_uri=http%3A%2F%2Fwww.yidianzixun.com%2Fhome%3Fpage%3Dindex-xiaomi%26callback%3Dhttp%253A%252F%252Fwww.yidianzixun.com%252F%2523%252F%253Fid%253Dc11%2526name%253D%2525E6%2525B1%2525BD%2525E8%2525BD%2525A6"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OneLoginOauth'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .oauth {
        margin-top: .5rem;

        .oauth-title:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 1px;
            width: 200%;
            background: #d8d8d8;
            transform: scale(0.5);
            -webkit-transform: scale(0.5);
            transform-origin: left top;
            -webkit-transform-origin: left top;
        }
        .oauth-title {
            height: 1px;
            margin: .08rem .27rem;
            position: relative;

            h3 {
                margin: 0;
                color: #999;
                font-size: .12rem;
                padding: 0 .1rem;
                white-space: nowrap;
                background: #fafafa;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%,-50%);
                -webkit-transform: translate(-50%,-50%);
                z-index: 9;
            }
        }

        .oauth-img {
            width: 100%;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            margin-top: .3rem;

            a {
                display: block;
                width: 33.3%;
                height: .5rem;
                background: no-repeat center;
                background-size: auto 100%;
            }
            .qq-img {
                background-image: url("//staticimg.yidianzixun.com/modules/images/mobile/login_qq_2-d84d39865f.png");
            }
            .weibo-img {
                background-image: url("//staticimg.yidianzixun.com/modules/images/mobile/login_weibo_2-4a71a2196b.png");
            }
            .xiaomi-img {
                background-image: url("//staticimg.yidianzixun.com/modules/images/mobile/login_mi_2-e6b96aae7e.png");
            }
        }
    }
</style>
