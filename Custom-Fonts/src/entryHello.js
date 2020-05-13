import './index.scss'
import HelloButton from './hello/hello.js'
import Handing from './common/handing.js'
import _ from 'lodash'

const handing = new Handing();
handing.render(_.upperFirst('hello'));

const helloButton = new HelloButton();
helloButton.render();
