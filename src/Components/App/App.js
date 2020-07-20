import React from "react";
import {Route, Switch, withRouter} from "react-router";
import styles from './App.module.scss'
import './Transitions.css'
import {connect} from "react-redux";
import {compose} from "redux";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import styled from "styled-components";

import HeaderContainer from "../Header/HeaderContainer";
import Sidebar from "../Sidebar/Sidebar";
import HeroContainer from "../Hero/HeroContainer";
import OrderContainer from "../Order/OrderContainer";
import ConstructorContainer from "../Constructor/ConstructorContainer";
import {fetchAllProducts} from "../../Actions/action";
import ProductsLayoutContainer from "../Layout/ProductsLayoutContainer";
import BasketContainer from "../Basket/BasketContainer";
import {BasketSection} from "../../Styles/StyledComponents/Basket/styledBaskedPage";


const Container = styled.div`
max-width:1882px;
margin:0 auto;
overflow-y:${({location}) => location.pathname === "/PastaPizza/" || location.pathname === "/PastaPizza" || location.pathname.includes("/order") || location.pathname.includes("/constructor") ? "hidden" : "visible"};
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowBasket: false,
            isShowConfirm: false
        };
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location !== prevProps.location) {
            this.basketState(false);
        }
    }

    basketState = (isShow) => {
        this.setState({
            isShowBasket: isShow,
        })
    };
    confirmState = (isShow) => {
        this.setState({
            isShowConfirm: isShow
        })
    };


    render() {
        const {location} = this.props;
        return (
            <Container location={location}>
                <div className={styles.app}>
                    <div className={styles.header}>
                        <HeaderContainer basketState={this.basketState}/>
                    </div>
                    <div className={styles.sidebar}>
                        <Sidebar/>
                    </div>
                    <div className={styles.hero}>
                        <SwitchTransition location={location}>
                            <CSSTransition key={location.key} timeout={1000} delay={300} classNames={'animPages'}>
                                <Switch>
                                    <Route path={'/products/:product?'}
                                           render={() => <ProductsLayoutContainer/>}/>
                                </Switch>
                            </CSSTransition>
                        </SwitchTransition>
                        <Switch>
                            <Route path={'/PastaPizza'} component={HeroContainer} exact={true}/>
                            <Route path={'/constructor/:category?'}
                                   render={() => <ConstructorContainer basketState={this.basketState}/>}/>
                            <Route path={'/order/:id?'}
                                   render={() => <OrderContainer basketState={this.basketState}/>}/>
                        </Switch>
                    </div>
                    <div>
                        <BasketSection children={<BasketContainer basketState={this.basketState}
                                                                  isShowConfirm={this.state.isShowConfirm}
                                                                  confirmState={this.confirmState}/>}
                                       isShowBasket={this.state.isShowBasket}/>
                    </div>
                </div>
            </Container>

        )
    }
}

export default compose(
    connect(null, {fetchAllProducts}),
    withRouter
)(App)
