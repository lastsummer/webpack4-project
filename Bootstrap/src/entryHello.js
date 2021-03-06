import HelloButton from './hello/hello.js'
import Handing from './common/handing.js'
import _ from 'lodash'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const handing = new Handing();
handing.render(_.upperFirst('hello'));

const helloButton = new HelloButton();
helloButton.render();
