import { combineReducers } from 'redux'
import foo from './foo/index'
import singleton from './singleton/index'
import lookParty from './lookParty/index'
import listenParty from './listenParty/index'
import learnParty from './learnParty/index'
import followParty from './followParty/index'
import liveDetail from './liveDetail/index'
import Comments from './comments/index'

const index = combineReducers({
    foo,
    singleton,
    lookParty,
    listenParty,
    learnParty,
    followParty,
    liveDetail,
    Comments

});

export default index