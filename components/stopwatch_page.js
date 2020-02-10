import React from 'react';
import {View, Text} from 'react-native';
import Button from './common/button';

export default class StopwatchPage extends React.Component{
    state = {
        secondsPassed: 0,
        stopwatchRunning: false,
    }

    timerId = null

    componentWillUnmount = () => {
        clearTimeout(this.timerId);
    }
    
    toggleStopwatch = () =>{
        if(this.state.stopwatchRunning){
            //start
            this.timerId = setInterval(
                () => this.setState((state)=>{
                    const newState = {...state};
                    newState.secondsPassed = state.secondsPassed+1
                    return newState;
                }), 1000);
                
                this.setState({
                    stopwatchRunning: false,
                });
            }
        else{
            this.setState((state)=>{
                stopwatchRunning= false
            })
            //stop
            
        }
    }

    render(){
        const {navigateTo } = this.props;
        return(
            <View>
                <Text> {this.timerId}</Text>
                <Button title = "Toggle On/Off" 
                    onPress={this.toggleStopwatch}/>
                <Button title = "Go to welcome" 
                    onPress={() => navigateTo('welcome')}/>
            </View>
        );
    }
}

