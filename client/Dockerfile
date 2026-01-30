# 1. Build Stage
# Node.js 환경에서 소스코드를 빌드(Build)하는 단계입니다.
FROM node:18-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사 및 설치
# 캐싱 효율을 위해 package.json만 먼저 복사합니다.
COPY package.json package-lock.json ./
RUN npm ci

# 소스코드 복사 및 빌드
COPY . .
RUN npm run build

# 2. Production Stage
# 가벼운 Nginx 웹 서버를 이용해 빌드된 결과물을 실제 서비스하는 단계입니다.
FROM nginx:alpine

# 빌드 단계(builder)에서 생성된 결과물(dist 폴더)을 Nginx의 서빙 디렉토리로 복사합니다.
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 설정 (React 라우팅을 위해 필요할 경우 추가 설정이 필요할 수 있음)
# 기본 설정만으로도 정적 파일 서빙은 가능합니다.

# 80번 포트 노출
EXPOSE 80

# Nginx 서버 실행
CMD ["nginx", "-g", "daemon off;"]
