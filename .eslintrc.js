// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    // 'vue'
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  globals: {
    '__DEV__': false
  },
  // add your custom rules here
  /**
   * @param off - 0 关闭规则
   * @param warn - 1 开启警告规则
   * @param error - 2 开启错误规则
  */
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'semi': [2, 'always'],
    // 句子结尾强制使用分号
    'semi-style': ['error', 'last'],
    // 强制使用逗号结尾
    'comma-dangle': ['error', 'only-multiline'],
    'comma-style': [
      'error',
      'last',
      {
        'exceptions': {
          'ArrayExpression': false,
          'ObjectExpression': false
        }
      }
    ],
    // allow async-await
    'generator-star-spacing': 0,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // // disallow reassignment of function parameters
    // // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // // allow optionalDependencies
    // 'import/no-extraneous-dependencies': ['error', {
    //   optionalDependencies: ['test/unit/index.js']
    // }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
