# 비상기어 호스팅 & 배포 가이드 🌐

이 프로젝트를 전 세계 어디서나 접속할 수 있도록 무료로 배포하는 방법입니다.

---

## 🛠 배포 전 준비사항
배포하기 전에 반드시 프로젝트가 정상적으로 빌드되는지 확인해야 합니다.

1. 터미널 열기
2. `cd client`
3. `npm run build` 실행
4. `dist` 폴더가 정상적으로 생성되는지 확인

---

## 🚀 방법 1: Vercel (추천 ⭐⭐⭐)
가장 빠르고 전문적인 배포 방법입니다.

1. **[Vercel](https://vercel.com/)**에 접속하여 GitHub 개발자 계정으로 로그인합니다.
2. **Import Project**를 클릭하고 이 프로젝트의 저장소를 선택합니다.
3. **Project Settings**에서 다음과 같이 설정합니다:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `client` (이게 가장 중요합니다!)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Deploy** 버튼을 누르면 약 1분 안에 배포가 완료됩니다.

---

## 🚀 방법 2: Netlify (가장 쉬운 수동 배포)
GitHub 연동이 어렵다면 이 방법을 사용하세요.

1. 터미널에서 `cd client` 후 `npm run build`를 입력하여 프로젝트를 빌드합니다.
2. **[Netlify](https://app.netlify.com/drop)** 사이트에 접속합니다.
3. 내 컴퓨터의 `client/dist` 폴더를 화면 중앙의 점선 영역으로 드래그합니다.
4. 즉시 배포 URL이 생성됩니다.

---

## 🚀 방법 3: GitHub Pages
GitHub 저장소 환경설정에서 바로 배포하는 방법입니다.

1. `client/package.json`에 `"homepage": "https://parkkeonkyu.github.io/AiShift"`을 추가합니다.
2. `gh-pages` 패키지 설치: `npm install gh-pages --save-dev`
3. `package.json`의 `scripts`에 다음 추가:
   - `"predeploy": "npm run build"`
   - `"deploy": "gh-pages -d dist"`
4. 터미널에서 `npm run deploy` 실행

---

## 💡 주의사항 (중요!)
이 프로젝트는 **React Router**를 사용하고 있습니다. 
배포 후 페이지를 새로고침했을 때 **404 에러**가 난다면 다음 설정을 추가해야 합니다:

### Vercel/Netlify의 경우
`client/public/_redirects` 파일을 만들고 아래 내용을 한 줄 넣으세요:
```text
/*  /index.html  200
```

배포가 완료되면 이제 전 세계 어디서든 **비상기어** 쇼핑몰에 접속할 수 있습니다! 🎉
