# Feature-sliced design

## 폴더 구조

* `app`
  * `global-provider`
  * `index`
  * `routes`

* `pages`
  * `bus`
    * `ui`
    * `model`
  * `announcement`
    * `ui`
    * `model`

* `widgets`
  * `announcement-widgets`
    * `ui`
    * `api`
    * `model`
  * `bus-widgets`
    * `ui`

* `features`
  * `bus-tracking`
    * `ui`
    * `model`

* `shared`
  * `ui`
  * `api`
  * `model`

fsd는 layers, slices, segments로 나뉜다. 
layers는 app, pages, widgets, features, entities, shared로 나뉜다. 이 프로젝트에서는 user, product등이 없기에 entities를 사용하지 않았다. 
app은 전역 변수 관리, 페이지 간의 라우팅을 관리한다.
pages는 전체 페이지의 ui와 라우팅을 관리한다.
widgets은 여러 작은 요소들을 합친 하나의 큰 컴포넌트를 관리한다.
features는 로직등을 관리한다.
shared는 작은 요소, 이 프로젝트에서는 버튼과 같은 작은 컴포넌트를 관리한다.

slices는 이 프로젝트에서 주로 학사공지와 버스페이지를 분리하는데 사용되었다.

segments는 ui,model,api 3개를 사용했다. ui에는 ui와 관련된 모든 것들을 넣었고, model에는 로직, 타입등을 작성했다. api폴더에는 data를 fetch하는 코드를 작성했다.


`shared`에 `ui`, `api`, `model` 3가지 폴더가 존재한다.
`ui` 폴더에는 
  - 메인 페이지 라우팅 버튼
  - 새로고침, 버스 도착 정보 버튼
  - 노선도의 아래 화살표 아이콘
  - 노선 사이의 경로 바
  - 정류장 텍스트 스타일
  - 정차 / 미정차 text
  - 릴스 헤더
  - 버스 아이콘
`api` 폴더에는 
  - 버스 정보(화랑대,별내 노선도 그리고 버스 위치)가 들어가있다.
`model` 폴더에는 
  - 메인 페이지 라우팅 버튼 로직
  - 새로고침 버튼 클릭 시 애니메이션
  - 노선도 json data type
  - 버스 위치 json data type

`api` 폴더에 announcment 데이터를 fetch하지 않은 것은 학사공지 데이터는 단 한번만 쓰이기 때문이다. 그에 반해 버스 api는 같은 코드로 url만 다르면 정상적으로 작동된다.

`features`는 
bus-tracking 
  - `ui`
  - `model`
이 구조로 폴더가 존재한다.
`ui`에는 경로 바의 렌더링을 결정하는 로직, `model`에는 버스 위치와 이름을 찾는 로직이 각각 존재한다.

`widgets`은 announcement-widgets과 bus-widgets으로 나뉜다.
전자엔 ui, api, model이 있고, 후자엔 ui가 있다.
릴스 위젯의 ui엔 헤더가 있다. 헤더에 여러 정보가 들어가기 때문에 위젯에 따로 넣었다.
api는 릴스 데이터를 불러온다.
model은 릴스의 타입을 지정한다.
버스 ui에는 flatlist로 렌더링 할 노선 하나의 컴포넌트를 shared에서 import하여 하나로 묶어준다. 또한 그렇게 묶은 노선도를 flatlist로 렌더링하는 파일도 존재한다.

`pages`엔 bus, announcement 폴더가 각각 있다.
bus엔 ui,model이 있다. ui폴더엔 widgets를 import하여 구성한 bus-page파일이 있다. 또한 tab navigator를 통해 화랑대/별내 페이지를 구분한다. model에는 버스 도착정보를 눌렀을때 아래에서 슬라이드가 나오는 로직이 있다.
announcement에도 동일하게 ui,model폴더가 있다. ui(page)는 bus와 동일하게 stack header, header, main page를 묶어서 구성한다. model에는 릴스 swipe하는 로직이 들어있다.

`app`폴더에는 3개의 파일만이 있다. Index.tsx가 routes.tsx로 가게 인도하는 역할이고, routes.tsx에는 stack.screen으로 페이지들 간의 라우팅을 관리한다. 그리고 global-provider.tsx로 날짜를 아래 구조에 뿌려준다.