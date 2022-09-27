# User Service - Online Course

## Architecure

![Architecture Microservices](https://res.cloudinary.com/dniq91ewn/image/upload/v1664261583/BWA%20Microservices/Group_10_oznnju.png)

- This API is a service to handle and provide or store media data like course image, user image, etc.
- Using ExpressJS Framework, Sequelize ORM, MySQL Database, and another package you can check in the package.json
- You can use third party like S3, Google Cloud Storage, Digital Ocean Object Storage to store the media
- API Documentation: https://documenter.getpostman.com/view/18696549/2s83f1Kbbi

# Service Flow

<img title="service flow" alt="service flow" src="https://res.cloudinary.com/dniq91ewn/image/upload/v1664261583/BWA%20Microservices/Group_8_hwr7k9.png">

## Services

| Api Gateway | User Service | Course Service | Payment Service |
| --- | --- | --- | --- |
| [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664273697/BWA%20Microservices/68747470733a2f2f696b2e696d6167656b69742e696f2f746174616e676465762f6f6e6c696e652d636f757273652f41737365745f385f62743434435147485f7a2e706e67_hasy54.webp)](https://github.com/itsmee3223/online-course-api-gateway) | [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255818/BWA%20Microservices/Asset_3_cn6ASO3xsi7_qqf4rz.webp)](https://github.com/itsmee3223/user-service-online-course) | [![Course Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255894/BWA%20Microservices/Asset_2_7ZFU6kkrO_zyo2j4.webp)](https://github.com/itsmee3223/course-service-online-courese)| [![Payment Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255912/BWA%20Microservices/Asset_1_M1tYLXCSBX_l44c4w.webp)](https://github.com/itsmee3223/payment-service-online-course)

## Frontend
| Frontpage | Memberpage |
| --- | --- |
| [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664283770/BWA%20Microservices/Rlogical-Blog-Images-thumbnail_dxonbd_1_yok05a.png)](https://microservices-bwa-frontend.vercel.app/) | [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664284639/BWA%20Microservices/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027_1_s4jcmv.png)](https://micro-react-memberpage.vercel.app/login) | 
| [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664284408/BWA%20Microservices/GitHub-Mark-modified_1_fn5dks.png)](https://github.com/itsmee3223/frontend-online-course) | [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664284408/BWA%20Microservices/GitHub-Mark-modified_1_fn5dks.png)](https://github.com/itsmee3223/memberpage-online-course) |
