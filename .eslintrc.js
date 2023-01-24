module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'quotes': ['error', 'single'], // 싱글 쿼터 사용
    'consistent-return': 'off',
    'quote-props': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'no-unused-vars': 'warn', // 사용 안 한 변수 경고 중복
    // '@typescript-eslint/no-unused-vars': 'warn', // 사용 안 한 변수는 경고
    'jsx-a11y/control-has-associated-label': 'off', // 상호 작용하는 엘리먼트에 label을 넣는다
    'react/no-array-index-key': 'off', // key값으로 index를 사용할 수 있다.
    'comma-dangle': 'off', // 마지막에 , 을 넣어주지 않는다.
    'arrow-body-style': 'off', // 화살표 함수 안에 return을 사용할 수 있다.
    'react/no-unescaped-entities': 'off', // 문자열 내에서 " ' > } 허용
    'react/prop-types': 'off', // proptypes를 사용하지 않는다.
    'object-curly-newline': 'off', // { 다음 줄 바꿈을 강제로 사용하지 않는다.
    'react/jsx-one-expression-per-line': 'off', // 한 라인에 여러 개의 JSX를 사용할 수 있다.
    'implicit-arrow-linebreak': 'off', // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다.
    'no-shadow': 'off', // 파일 내에서 중복 이름을 사용할 수 있다.
    'operator-linebreak': 'off', // 연산자 다음 줄 바꿈을 사용할 수 있다.
    'react/react-in-jsx-scope': 'off', // jsx를 사용하여도 React를 꼭 import 하지 않아도 된다.
    'react/jsx-props-no-spreading': 'off', // props를 스프레드 할 수 있다.
    'jsx-a11y/anchor-is-valid': 'off', // next js에서는 a에 href없이 사용
    'global-require': 'off', // 함수 내에서 require 사용 가능
    'import/prefer-default-export': 'off', // export default 권장
    'no-param-reassign': 'off', // param assign 하지 않기
    'jsx-a11y/label-has-associated-control': 'off',
    'no-invalid-css': 'off',
    'react/jsx-curly-newline': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-return-await': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-indent': 'off',
    'indent': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'array-callback-return': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-expressions': 'off',
    'space-in-parens': 'off',
    'react/jsx-closing-tag-location': 'off',
    'no-trailing-spaces': 'off',
    'react/self-closing-comp': 'off',
    'react/button-has-type': 'off',
    'no-alert': 'off',
    'react/no-danger': 'off',
    'no-tabs': 'off',
    'max-len': 'off',
    'no-use-before-define': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-tag-spacing': 'off',
    'eol-last': 'off',
    'import/no-duplicates': 'off',
    'react/require-default-props': 'off',
    'no-confusing-arrow': 'off',
    'jsx-a11y/alt-text': 'off',
    'eqeqeq': 'off',
    'import/order': 'off',
    'react/jsx-boolean-value': 'off',
    'no-useless-concat': 'off',
    'no-empty-pattern': 'off',
    'no-unneeded-ternary': 'off',
    'no-var': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }, // jsx사용 가능한 확장자 설정
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }, // import 시 확장자명은 사용하지 않는다.
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
