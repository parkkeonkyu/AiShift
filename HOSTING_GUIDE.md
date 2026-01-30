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

### 💡 주의사항 (중요!)
이 프로젝트는 **React Router**를 사용하고 있으며, Windows 환경에서 배포 시 Git 경로 인식 오류가 발생할 수 있습니다.

#### 1. 새로고침 시 404 에러 방지
`App.jsx`에서 `HashRouter`를 사용하도록 설정해 두었습니다. 주소창에 `/#/`가 붙는 것은 정상입니다.

#### 2. 'spawn git ENOENT' 오류 해결
Windows 터미널에서 `git`을 찾지 못하는 경우를 대비해, `package.json`의 배포 스크립트를 다음과 같이 강화해 두었습니다:
```json
"deploy": "cmd /c \"set PATH=%PATH%;C:\\Program Files\\Git\\cmd && gh-pages -d dist\""
```
이제 다시 `npm run deploy`를 실행하시면 정상적으로 배포됩니다.

