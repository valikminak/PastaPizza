import React from "react";
import Header from "./Header";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    render() {
        const {basketState, basketCount} = this.props;
        return (
            <Header basketState={basketState} basketCount={basketCount}/>
        )
    }
}

const mapStateToProps = (state) => ({
    basketCount: state.basketReducer.length
})

export default connect(mapStateToProps, null)(HeaderContainer)