import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import WelcomePage from './components/welcome_page';
import StopwatchPage from './components/stopwatch_page';

export default class App extends React.Component{
  state = { 
    route: 'welcome',
  }
  pageComponents = { welcome: WelcomePage, stopwatch: StopwatchPage }

  get currentPageComponent(){
    if (this.state.route === 'welcome'){
      return <WelcomePage navigateTo = {this.navigateTo}/>
    }
    else if (this.state.route === 'stopwatch'){
      return <StopwatchPage navigateTo = {this.navigateTo}/>
    }
    return <Text>Page not found</Text>
    //return null; //return pageNotFound would be better
  }

    
  navigateTo=(route) => this.setState({ route});

  render(){
    return(
      <SafeAreaView>
        {this.currentPageComponent}
      </SafeAreaView>
    );
  }
}



