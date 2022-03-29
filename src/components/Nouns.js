import React,{Component} from 'react';

class Nouns extends Component {
    constructor(props){
        super(props);

        this.state={
            nounText:'designer',
            nounColor: '#DF1695'
        }
    }

   
    componentDidMount(){
      let nouns = ["designer", "dreamer", "nerd"],
          colors = ['#DF1695', "#16DFDF", "#DFBF16"],
          intervalDurationMs = 2000,
          currentIndex = 0,
          maxNumTimes = -1,
          numTimesRan = 0;
          
          
      let interval = setInterval(function() {
          if (maxNumTimes !== 0) {
              this.setState({
                  nounText: nouns[currentIndex],
                  nounColor: colors[currentIndex],
              });
              currentIndex++;
              if (currentIndex > nouns.length-1) {
                  if (maxNumTimes === -1) {
                      currentIndex = 0;
                  } else {
                      numTimesRan++;
                      if (numTimesRan === maxNumTimes) {
                          clearInterval(interval);
                      } else {
                          currentIndex = 0;
                      }
                  }
              }
          } else {
              clearInterval(interval);
          }
      }.bind(this), intervalDurationMs);
  }
    render(){
        return(
            <span className='noun' style={{ color: this.state.nounColor }}>
                {this.state.nounText}
            </span>
        )
    }
}

export default Nouns;