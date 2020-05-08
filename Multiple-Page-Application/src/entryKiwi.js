import Kiwi from './image/kiwi.js'
import Handing from './common/handing.js'
import _ from 'lodash'

const handing = new Handing();
handing.render(_.upperFirst('kiwi'));

const kiwi = new Kiwi();
kiwi.render();
