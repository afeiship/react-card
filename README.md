# react-card
> Card for react.

## installation
```shell
npm install -S @feizheng/react-card
```
## properties
| property   | default | default | description |
| ---------- | ------- | ------- | ----------- |
| className  | String  | -       | -           |
| hoverable  | Boolean | false   | -           |
| clickable  | Boolean | false   | -           |
| shadowable | Boolean | true    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-card/dist/style.scss";

  // customize your styles:
  $react-card-options: ()
  ```
2. import js
  ```js
  import ReactCard from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() { }
    render() {
      return (
        <div className="app-container">
          <ReactCard>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" width="100%" />
          </ReactCard>

          <ReactCard>
            <p>少年时，想碰到一个聂小倩，拼了性命爱一场，天亮前带着她的魂魄远走他乡。</p>
            <p>青年时，想碰到一个白素贞，家大业大，要啥有啥，吃完软饭一抹嘴，还有人负责把她关进雷峰塔。</p>
            <p>中年时，想要一个田螺姑娘，温婉可人，红袖添香，半夜写累了，让她变回原形，加干辣椒、花椒、姜、蒜片爆炒，淋入香油，起锅装盘。</p>
          </ReactCard>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-card/
