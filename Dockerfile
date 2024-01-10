
# 빌드 스테이지
FROM node:latest as build

WORKDIR /app

# 소스 코드 복사
COPY . .

# 의존성 설치 및 애플리케이션 빌드
RUN npm install
RUN npm run build

# 실행 스테이지
FROM nginx:1.21

# 빌드 스테이지에서 빌드한 애플리케이션 파일 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
