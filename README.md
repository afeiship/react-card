# react-card
> Card for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-card
```

## update
```shell
npm update @feizheng/react-card
```

## properties
| Name       | Type   | Required | Default | Description                                   |
| ---------- | ------ | -------- | ------- | --------------------------------------------- |
| className  | string | false    | -       | The extended className for component.         |
| active     | bool   | false    | -       | If the card is active.                        |
| disabled   | bool   | false    | -       | If the card is not enable.                    |
| hoverable  | bool   | false    | -       | If the card can hover and with :hover effect. |
| clickable  | bool   | false    | -       | If the card can click with :active effect.    |
| shadowable | bool   | false    | true    | If the card show with shadow.                 |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-card/dist/style.scss";

  // customize your styles:
  $react-card-options: ()
  ```
2. import js
  ```js
  import ReactCard from '@feizheng/react-card';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactCard>
            <img
              src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg"
              width="100%"
            />
          </ReactCard>

          <ReactCard hoverable clickable>
            <p>
              少年时，想碰到一个聂小倩，拼了性命爱一场，天亮前带着她的魂魄远走他乡。
            </p>
            <p>
              青年时，想碰到一个白素贞，家大业大，要啥有啥，吃完软饭一抹嘴，还有人负责把她关进雷峰塔。
            </p>
            <p>
              中年时，想要一个田螺姑娘，温婉可人，红袖添香，半夜写累了，让她变回原形，加干辣椒、花椒、姜、蒜片爆炒，淋入香油，起锅装盘。
            </p>
          </ReactCard>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-card/


## license
Code released under [the MIT license](https://github.com/afeiship/react-card/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-card
[version-url]: https://npmjs.org/package/@feizheng/react-card

[license-image]: https://img.shields.io/npm/l/@feizheng/react-card
[license-url]: https://github.com/afeiship/react-card/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-card
[size-url]: https://github.com/afeiship/react-card/blob/master/dist/react-card.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-card
[download-url]: https://www.npmjs.com/package/@feizheng/react-card
