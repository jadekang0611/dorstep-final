# 👨‍💻 Project Proposal - DorStep

## Project Description

* There are many foreigners who go to Korea for business, education, or family related reasons.
* However, the majority of resources to find housing are built completely in Korean with no alternatives for foreigners.
* DorStep is an app that is built in English that lets users search for housing rentals based on their needs and provides them with the option to contact the owner or property manager to apply for the rental or to book a showing with minimum friction.

## Wireframes


### Initial questions are asked (4 Questions)
![Image from iOS](https://user-images.githubusercontent.com/56938630/73049828-9528fe00-3e32-11ea-9200-974aa585454b.jpg)

### Results Screen
![Image from iOS (1)](https://user-images.githubusercontent.com/56938630/73049899-dd482080-3e32-11ea-8ff2-04671c849774.jpg)

### Result Detail in modal screen
![Image from iOS (2)](https://user-images.githubusercontent.com/56938630/73049913-e3d69800-3e32-11ea-9180-1cafd64e5fac.jpg)


## User Stories

* As a user, I want to be able to filter rental listings by selecting from a series of questionaires. **(MVP)**
* As a user, I would like to click on a rental card and be shown a modal page with more details about the property. **(MVP)**
* As a user, I want to be able to click a button that displays a modal form and allows me to contact the owner or manager of the property that I'm interested in. **(MVP)**

## User Stories - beyond MVP
* As a user, I would like to register for the application so that I can keep track of the properties that I'm interested in and my site activity.
* As a user, I want to be able to securely communicate with property owners and managers through the application without needing to share my personal email address.
* As a user, I would like to be able to select the language that the website is provided in so that I can understand the site if I don't speak English.

## API

### [API for map and nearby places](https://apidocs.ncloud.com/en/ai-naver/maps_search_places/search/)

** Search Response **

```
{
  "status": "OK",
  "meta": {
    "totalCount": 128,
    "count": 5
  },
  "places": [{
    "name": "이마트 동탄점",
    "road_address": "경기도 화성시 동탄중앙로 376 화성 동탄 E-Mart",
    "jibun_address": "경기도 화성시 석우동 44",
    "phone_number": "031-647-1234",
    "x": "127.0797845",
    "y": "37.2142097",
    "distance": 62799.90499682218,
    "sessionId": "9uOP028Be9kwkY1_8Mjc"
  }, {
    "name": "이마트 서수원점",
    "road_address": "경기도 수원시 권선구 수인로 291 서수원버스터미널",
    "jibun_address": "경기도 수원시 권선구 구운동 925",
    "phone_number": "031-895-1234",
    "x": "126.9695846",
    "y": "37.2825940",
    "distance": 50804.755168386546,
    "sessionId": "TN2P028Be9kwkY1_Wi8f"
  }, {
    "name": "이마트 별내점",
    "road_address": "경기도 남양주시 순화궁로 167",
    "jibun_address": "경기도 남양주시 별내동 989",
    "phone_number": "031-550-1234",
    "x": "127.1260481",
    "y": "37.6427803",
    "distance": 44033.64576209763,
    "sessionId": "vhiP028Ba_oNbPaCq6p0"
  }, {
    "name": "이마트본사",
    "road_address": "서울특별시 성동구 뚝섬로 377",
    "jibun_address": "서울특별시 성동구 성수동2가 333-131",
    "phone_number": "02-380-5678",
    "x": "127.0528567",
    "y": "37.5401233",
    "distance": 39523.84017009966,
    "sessionId": "c_OO028BOAUY6uUl0AFp"
  }, {
    "name": "이마트 김포한강점",
    "road_address": "경기도 김포시 김포한강7로 71 이마트 김포한강점",
    "jibun_address": "경기도 김포시 구래동 6880-9",
    "phone_number": "031-990-7124",
    "x": "126.6283210",
    "y": "37.6441479",
    "distance": 624.9036267803921,
    "sessionId": "XeWQ028Be9kwkY1_GGU7"
  }],
  "errorMessage": ""
}
```

## Component Hierarchy

![Image from iOS (3)](https://user-images.githubusercontent.com/56938630/73049920-e802b580-3e32-11ea-81e7-74fd4b2738e2.jpg)
