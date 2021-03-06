module.exports = {
  // 表示当前目录为根目录
  root: true,
  // 启用ESLint监测的环境
  env: {
    node: true
  },
  // ESLint种基础配置需要继承的配置
  extends: ['eslint:recommended'],
  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 需要修改的启用规则及其各自的错误级别
  /**
   * "off" -> 0, 关闭规则
   * "warn" -> 1, 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" -> 2, 开启规则，使用错误级别的错误：error (当被触发时，程序退出)
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
