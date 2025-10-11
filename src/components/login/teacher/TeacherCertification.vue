<template>
  <div class="mechanism-auth-container">
    <div class="auth-content">
      <!-- 标题区域 -->
      <div class="title-section">
        <h1 class="main-title">老师认证</h1>
        <p class="sub-title">老师认证协议</p>
      </div>

      <!-- 协议内容区域 -->
      <div class="agreement-content">
        <p>本《商家入驻协议》（以下简称 “本协议”）由 [平台名称]（以下简称 “平台”）与拟入驻平台的商家（以下简称 “商家”）共同签订。为明确双方权利义务，保障交易秩序，依据相关法律法规，经协商一致，达成协议如下：
一、定义与解释
平台：指由 [平台运营主体名称] 运营的 [平台名称]，为商家提供商品或服务展示、交易撮合等服务的网络平台。
商家：指符合平台入驻条件，通过平台审核后，在平台开设店铺，销售商品或提供服务的主体。
商品或服务：指商家通过平台店铺向消费者销售的各类有形商品、无形商品或提供的服务。
二、入驻条件
商家必须是依法设立并有效存续的法人、其他组织或具有完全民事行为能力的自然人，具备从事经营活动所需的全部合法资质，包括但不限于营业执照、行业经营许可证等。
商家承诺其提供的商品或服务符合国家法律法规、行业标准及平台要求，不存在质量缺陷、侵犯他人知识产权等问题。
商家应具备良好的商业信誉和经营能力，无重大违法违规记录及不良商业信用记录。
三、双方权利与义务
（一）平台权利义务
权利
有权对商家的入驻申请进行审核，包括对商家资质、商品或服务信息、经营能力等方面的审查，并根据审核结果决定是否同意商家入驻。
有权根据平台运营需要，制定、修改平台规则、管理制度及相关政策，并通过平台公告、站内信等方式通知商家。若商家继续使用平台服务，则视为接受修改后的内容。
有权对商家在平台的经营活动进行监督管理，包括但不限于对店铺页面展示、商品或服务信息发布、交易过程、售后服务等进行检查、监督，对违反本协议或平台规则的行为采取相应处理措施。


</p>
      </div>

      <!-- 底部按钮区域 -->
      <div class="button-section">
        <el-button class="back-btn" @click="handleBack">返回</el-button>
        <el-button type="primary" class="agree-btn" @click="handleAgree">同意</el-button>
      </div>

      <!-- 底部链接 -->
      <div class="bottom-link">
        <el-link type="primary" @click="handleLogin">已认证过？去登录</el-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'

const handleBack = () => {
  ElMessage.info('返回上一页')
  // 实际项目中这里应该使用路由返回
}

const handleAgree = () => {
  ElMessage.success('已同意协议，进入下一步认证流程')
  // 实际项目中这里应该跳转到认证信息填写页面
}

const handleLogin = () => {
  ElMessage.info('跳转到登录页面')
  // 实际项目中这里应该跳转到登录页面
}
</script>

<style scoped lang="scss">


.mechanism-auth-container {
  min-height: 100vh;
  background-color: $bg-gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.auth-content {
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 800px;
  width: 100%;
}

.title-section {
  text-align: center;
  margin-bottom: 30px;
}

.main-title {
  font-size: 28px;
  font-weight: 600;
  color: $text;
  margin: 0 0 8px 0;
}

.sub-title {
  font-size: 14px;
  color: $primary;
  margin: 0;
}

.agreement-content {
  max-height: 400px;
  overflow-y: auto;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}



.agreement-content p {
  color: $text-gray;
  line-height: 1.6;
  margin-bottom: 12px;
  font-size: 14px;
}

.button-section {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;
}

.button-section .el-button { 
  width: 48%;
  height: 50px;
  font-size: 16px;
}

.back-btn {
  border: 1px solid #dcdfe6;
  padding: 12px 32px;
  font-size: 16px;
}



.back-btn:hover {
  border-color: #c0c4cc;
}

.agree-btn {
  padding: 12px 32px;
  font-size: 16px;
}



.bottom-link {
  text-align: center;
  font-size: 14px;
  color: $text-gray;
}

.bottom-link span {
  margin-right: 8px;
}
</style>