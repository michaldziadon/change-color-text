import React, {Component} from 'react';

    class ChangeText extends Component {


        constructor() {
            super();

            this.state = {
                colorClass: 'blue',
                headingText: 'Treść nagłówk'
            }
        }

        changeColor = (event) => {
            console.log('event');

        this.setState({colorClass: event.target.value});

            // switch (action) {
            //     case 'red':
            //         this.setState({colorClass: 'red'});
            //     break;
            //     case 'green':
            //         this.setState({colorClass: 'green'});
            //     break;
    
            //     case 'blue':
            //         this.setState({colorClass: 'blue'});
            //     break;
            //     };


        }

        changeTetxt = (event) => {
            console.log(event.target.value);
            this.setState({headingText: event.target.value})

        }

        render() {
            return (
                <div>
                    <h2 className={this.state.colorClass}>{this.state.headingText}</h2>
                    <button onClick={this.changeColor} value="red">red</button>
                    <button onClick={this.changeColor} value="green">green</button>
                    <button onClick={this.changeColor} value="blue">blue</button>

                    <input type="text" placeholder="Wpisz tekst" onChange={this.changeTetxt}/>




                </div>
            )
        }
    }


    export default ChangeText;
