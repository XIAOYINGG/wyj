import { combineReducers } from 'redux'
import foo from './foo/index'
import singleton from './singleton/index'
import lookParty from './lookParty/index'
import listenParty from './listenParty/index'
import learnParty from './learnParty/index'

const index = combineReducers({
    foo,
    singleton,
    lookParty,
    listenParty,
    learnParty
});

export default index