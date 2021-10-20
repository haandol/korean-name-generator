# korean-name-generator

3 글자로 된 랜덤한 한글 이름을 생성해준다.

코드에 대한 설명은 https://haandol.github.io/2020/03/07/search-keyword-correction.html 참조.

> 진짜 이름같은 한글이름이 필요하면 [Faker.js](https://github.com/marak/Faker.js/) 를 사용하자.

## 설치 및 사용법

```bash
$ npm install
$ npm run build
```

```bash
$ python3 -m http.server 8000
$ open localhost:8000
```

콘솔을 확인하면 랜덤한 이름을 볼 수 있다.

```html
// on html
<script src="/build/namer.js"></script>
<script>
    var name = namer.generate();
    console.log(name);
</script>
```
