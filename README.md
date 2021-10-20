# korean-name-generator

3 글자로 된 랜덤한 한글 이름을 생성해준다.

코드에 대한 설명은 https://haandol.github.io/2020/03/07/search-keyword-correction.html 참조.

## 설치 및 사용법

```bash
$ npm install
$ npm run build
```

```html
// on html
<script src="./build/namer.js"></script>
<script>
    var name = namer.generate();
    console.log(name);
</script>
```
