# Full-Stack-JWT-Example
JWT token kullanımını öğrenmek için geliştirdiğim Full Stack uygulama.<br>
Bu uygulamada Node.js ile geliştirdiğim basit bir REST API aracılığı ile Frontend tarafında kullanıcı girişi ve kullanıcı doğrulaması yaptım.<br>

## Çalıştırmak İçin
```
git clone https://github.com/ogzcode/Full-Stack-JWT-Example.git

cd ./JWT-Frontend
npm install
npm run dev

cd ./JWT-REST-API
npm install
npm start
```

## Kullandığım Teknolojiler
> Backend
* Node.js
* expess
* jsonwebtoken

> Frontend
* React
* Vite
* Bootstarp
* universal-cookie
* React Router

### Öğrendiklerim
* Arka uçtan alınan token in cookie olarak saklanması
* Context API aracılığı ile global kullanıcı yönetimi
* react-router ile kullanıcı yönlendirme 
* Node.js ile jwt token oluşturma ve bunun REST API ile kullanılması
* Korumalı rotalar oluşturma
* cookie ekleme ve silme
