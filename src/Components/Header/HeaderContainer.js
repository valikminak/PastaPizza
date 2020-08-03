import React from "react";
import Header from "./Header";
import { connect } from "react-redux";


class HeaderContainer extends React.Component {
    render() {
        const {basketState, basketCount,setShowSidebar} = this.props;
        return (
            <Header basketState={basketState} basketCount={basketCount} setShowSidebar={setShowSidebar}/>
        )
    }
}

const mapStateToProps = (state) => ({
    basketCount: state.basketReducer.length
});

export default connect(mapStateToProps, null)(HeaderContainer)
