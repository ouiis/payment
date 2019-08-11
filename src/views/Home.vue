<template lang="pug">
  .container
    .payment
      h2 請選擇付款方式
      ul.payment-methods
        li.active
          a(href="javascript:void(0)")
            img(src="@/assets/images/card.png", alt="")
            span 信用卡
              br
              | 刷卡
        li
          a(href="javascript:void(0)")
            img(src="@/assets/images/shop.png", alt="")
            span 超商代碼
              br
              | 繳費
        li
          a(href="javascript:void(0)")
            img(src="@/assets/images/atm.png", alt="")
            span ATM
              br
              | 轉帳
      .payment-content
        .form-group
          label 付款人信箱
          input(type="text")
        .form-group
          label 信用卡卡號
          input(type="text")
        .form-group
          label 有效年月
          input(type="text")
        .form-group
          label 背後末三碼
          input(type="text")
    .order
      h2 我的訂單
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/_variables.scss';

.container {
  display: flex;
  justify-content: center;
  max-width: $max-width;
  padding: 90px 10px 0;
  margin: 0 auto;
}

h2 {
  position: relative;
  margin-bottom: 31px;
  font-size: 20px;
  color: #C5C5C5;
  line-height: 27px;
  text-align: center;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 1px;
    background-color: #707070;
  }
}

.payment {
  width: 586px;
  padding: 30px 74px 23px 50px;
  margin-right: 8px;
  border: 1px solid #185458;
}

.payment-methods {
  margin-bottom: 30px;
  font-size: 0;
  li {
    position: relative;
    display: inline-block;
    width: calc((100% - 38px) / 3);
    height: 104px;
    margin-right: 19px;
    border: 1px solid #185458;
    transition: all .3s;
    &.active {
      &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        width: 1px;
        height: 30px;
        background-color: #185458;
        box-shadow: 0px 0px 3px #07C0C3;
      }
    }
    &:hover,
    &.active {
      box-shadow: 0px 0px 2px #07C0C3;
      a {
        text-shadow: 0px 0px 2px #07C0C3;
      }
    }
    &:last-child {
      margin-right: 0;
    }
    a {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 18px;
      color: #07C0C3;
      img {
        width: 62px;
      }
      span {
        line-height: 24px;
        text-align: center;
        white-space: nowrap;
      }
    }
  }
}

.payment-content {
  width: 462px;
  padding-top: 26px;
  padding-bottom: 61px;
  padding-left: 128px;
  border: 1px solid #07C0C3;
  .form-group {
    width: 241px;
    margin-top: 29px;
    &:first-child {
      margin-top: 0;
    }
    label,
    input {
      display: block;
      font-size: 14px;
      line-height: 19px;
    }
    label {
      margin-bottom: 2px;
      color: #07C0C3;
    }
    input {
      padding: 4px 14px;
      color: #C5C5C5;
      background-color: transparent;
      border-bottom: 1px solid #707070;
    }
  }
}

.order {
  width: 205px;
  padding: 30px 11px 35px;
  border: 1px solid #185458;
}
</style>
