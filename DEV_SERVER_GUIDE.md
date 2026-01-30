# 개발 서버 자동 시작 가이드 🚀

이 프로젝트에는 개발 서버를 자동으로 시작하는 여러 방법이 설정되어 있습니다.

---

## 📌 방법 1: VS Code 자동 시작 (추천)

### 설정 방법
1. VS Code에서 `Ctrl + Shift + P` 누르기
2. "Tasks: Manage Automatic Tasks in Folder" 입력
3. "Allow Automatic Tasks in Folder" 선택

### 사용 방법
- **자동 실행**: 이제 프로젝트 폴더를 열 때마다 개발 서버가 자동으로 시작됩니다!
- **수동 실행**: `Ctrl + Shift + P` → "Tasks: Run Task" → "Start Dev Server" 선택

---

## 📌 방법 2: 배치 파일 더블클릭

### 사용 방법
1. 프로젝트 루트에 있는 **`start-dev.bat`** 파일을 더블클릭
2. 개발 서버가 자동으로 시작됩니다
3. 브라우저에서 `http://localhost:5173` 접속

### 장점
- 가장 간단! 더블클릭만 하면 됨
- VS Code 없이도 사용 가능
- 바탕화면에 바로가기 만들기 가능

---

## 📌 방법 3: VS Code 터미널 (기본)

### 사용 방법
```bash
cd client
npm run dev
```

---

## 🎯 네트워크 접속 정보

서버가 시작되면 다음 주소로 접속할 수 있습니다:

- **로컬 (본인 PC)**: `http://localhost:5173`
- **네트워크 (모바일/다른 PC)**: `http://10.201.10.151:5173`

---

## 💡 팁

### 바탕화면 바로가기 만들기
1. `start-dev.bat` 파일 우클릭
2. "바로가기 만들기" 선택
3. 바로가기를 바탕화면으로 이동
4. 이제 바탕화면 아이콘 더블클릭으로 서버 시작! 🚀

### 포트 변경하기
`client/vite.config.js`에서 포트 번호 변경 가능:
```js
export default defineConfig({
  server: {
    port: 3000 // 원하는 포트로 변경
  }
})
```

---

**마지막 업데이트**: 2026-01-30
