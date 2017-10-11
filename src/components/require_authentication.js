import React,{Component} from 'react';
import {connect} from 'react-redux';
export default function(ComposedComponent){
    class Authentication extends Component{
        static contextTypes={
            router:React.PropTypes.object//static 可以直接调用
        }
        componentWillMount(){
            if (!this.props.authenticated){
                this.context.router.push('/');
            }
        
        }
        componentWillUpdate(nextProps){
            if (!nextProps.authenticated){
                this.context.router.push('/');
            }
        }
        render(){
            console.log(this.context)//不同level传递的
            return <ComposedComponent {...this.props}/>
        }
    }
    function mapStateToProps(state){
        return {
            authenticated:state.authenticated
        }
    }
    return connect(mapStateToProps)(Authentication);
}