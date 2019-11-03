'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };      
  }
  // 3MpXeAcEaaDWo2iVswTpxqvLaza66Tmf8Dd

  render() {
    if (this.state.liked) {
        
        WavesKeeper.signAndPublishTransaction({
        type: 16,
        data: {
             fee: {
                 "tokens": "0.05",
                 "assetId": "WAVES"
             },
             dApp: '3MqCRi5ebPjXxEz8QB1MwTJQX5Nuv1QASAX',
             call: {
             		function: 'enrollEmpPay',
             		args: [{
                    type: "string",
                    value: document.getElementById("enroll_emp_addr").value 
                },{
                    type: "string",
                    value: document.getElementById("enrol_emp_id").value
                }, {
                    type: "integer",
                    value: document.getElementById("enrol_emp_salary").value
                }, {
                    type: "string",
                    value: document.getElementById("enrol_emp_description").value
                }]
             	}, payment: [{assetId: "WAVES", tokens: 2}]
        }
   }).then((tx) => {
        console.log("Ура! Я выполнил скрипт!!!");
   }).catch((error) => {
        console.error("Что-то пошло не так", error);
   });
      
      
        
        
        
      
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Enroll'
    );
  }
}



class LikeButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false }; 
       
      
  }
   

  render() {
    if (this.state.liked) {
        
        WavesKeeper.signAndPublishTransaction({
        type: 16,
        data: {
          fee: {
              "tokens": "0.05",
              "assetId": "WAVES"
          },
          dApp: '3MqCRi5ebPjXxEz8QB1MwTJQX5Nuv1QASAX',
          call: {
              function: 'reviseEmpPay',
              args: [{
                type: "string",
                value: document.getElementById("revise_emp_addr").value 
            }, {
                type: "integer",
                value: document.getElementById("revise_emp_salary").value
            }, {
                type: "string",
                value: document.getElementById("revise_emp_description").value
            }]
            }, payment: [{assetId: "WAVES", tokens: 2}]
    }
   }).then((tx) => {
        console.log("Ура! Я выполнил скрипт!!!");
   }).catch((error) => {
        console.error("Что-то пошло не так", error);
   });
      
      
        
        
        
      
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Revise'
    );
  }
}




 


// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

const domContainer3 = document.querySelector('#enrollreactbtn');
ReactDOM.render(e(LikeButton), domContainer3);
 
const domContainer2 = document.querySelector('#revisereactbtn');
ReactDOM.render(e(LikeButton2), domContainer2);