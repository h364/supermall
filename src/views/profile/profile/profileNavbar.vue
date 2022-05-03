<template>
    <div class="profileNavbar">
        <div class="title">个人中心</div>
        <div class="submit">
            <div class="headSculpture">
                <img src="@assets/img/profile/headSculpture.png" alt="">
            </div>
            <div class="option">
                <div class="optionItem">
                    <div class="submitItem">登录/注册</div>
                    <div class="opInner">
                        <img src="@assets/img/profile/phone.png" alt="">
                        <span>暂无绑定手机号码</span>
                    </div>
                </div>
            </div>
            <div class="entry">
                <img src="@assets/img/profile/entry.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'profileNavbar'

    }
</script>

<style scoped>
    .profileNavbar {
        width: 100%;
        height: 140px;
        color: rgba(255, 255, 255, 0.7);
        background-color: var(--color-text);
    }

    .title {
        height: 60px;
        text-align: center;
        line-height: 40px;
        font-size: larger;
    }

    .submit {
        display: flex;
    }

    .submit img {
        width: 25px;
    }

    .headSculpture {
        position: relative;
        height: 60px;
        width: 60px;
        margin: 0 20px;
        background-color: #eee;
        border-radius: 50%;
        text-align: center;
    }

    .headSculpture img {
        position: absolute;
        width: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .option {
        height: 60px;
        flex: 1;
        position: relative;
    }

    .optionItem {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }

    .opInner {
        display: flex;
        align-items: center;
    }

    .submitItem {
        font-size: larger;
        margin: 0 0 10px 6px;
    }

    .entry {
        text-align: center;
        height: 60px;
        width: 60px;
        line-height: 60px;
    }
</style>