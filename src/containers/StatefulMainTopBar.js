import { connect } from 'react-redux'

import MainTopBar from '../components/MainTopBar'

const StatefulMainTopBar = connect(
    (state, ownProps) => ({
        loader: state.singleton.loader,
        stateId: ownProps.stateId,
        loaderDelay: ownProps.loaderDelay,
        title:ownProps.title
    })
)(MainTopBar);

export default StatefulMainTopBar