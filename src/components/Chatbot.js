import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6E48AA',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  paddingLeft: '35%',
};



class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      interest: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, interest, interestChoice} = steps;

    this.setState({ name, interest, interestChoice });
  }

  render() {
    const { name, interest, interestChoice } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Résumé</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Centres d'intérêts</td>
              <td>{interestChoice.value}</td>
            </tr>
            <tr>
              <td>Tu veux</td>
              <td>{interest.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

// end summary
class End extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      interest: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, interest, age, interestChoice} = steps;

    this.setState({ name, interest, age, interestChoice });
  }

  render() {
    const { name, interestChoice } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <p>{`Bien joué ${name.value}!`}</p>
        <p>{`Clique sur le centre d'intérêt ${interestChoice.value}`}</p>
        <p>A bientôt ma gueule !</p>
      </div>
    );
  }
}

End.propTypes = {
  steps: PropTypes.object,
};

End.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'fr' }}
          recognitionEnable={true}
          steps={[
            {
              id: '1',
              message: "Bonjour, bienvenue chez Artilect Moi c’est Richard, et toi ?",
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: `Super {previousValue}! commençons!
              Tu es plutôt intéréssé par:`,
              trigger: 'interest',
            },
            {
              id: 'interest',
              options: [
                { value: 'Apprendre de nouvelles choses', label: 'Apprendre de nouvelles choses', trigger: '5' },
                { value: 'Rejoindre un projet', label: 'Rejoindre un projet', trigger: '5' },
                { value: 'Réserver une machine', label: 'Réserver une machine', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: `Dis moi tout! Quels sont tes centres d'intérêts?`,
              trigger: 'interestChoice',
            },
            {
              id: 'interestChoice',
              options: [
                { value: 'Biologie', label: 'Biologie', trigger: '7' },
                { value: 'Electronique', label: 'Electronique', trigger: '7' },
                { value: 'Couture', label: 'Couture', trigger: '7' },
                { value: 'Drone', label: 'Drone', trigger: '7' },
                { value: 'Machines', label: 'Machines', trigger: '7' },
                { value: 'Design', label: 'Design', trigger: '7' },
                { value: 'Musique', label: 'Musique', trigger: '7' },
                { value: 'Robotique', label: 'Robotique', trigger: '7' },
                { value: 'Architecture', label: 'Design', trigger: '7' },
                { value: 'Média', label: 'Média', trigger: '7' },
              ],
              trigger:'7',
             
            },
            // {
            //   id: 'age',
            //   user: true,
            //   trigger: '7',
            //   validator: (value) => {
            //     if (isNaN(value)) {
            //       return 'value must be a number';
            //     } else if (value < 0) {
            //       return 'value must be positive';
            //     } else if (value > 120) {
            //       return `${value}? Come on!`;
            //     }

            //     return true;
            //   },
            // },
            {
              id: '7',
              message: 'Super! Voici tes réponses',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Tout est ok?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'Oui', label: 'Oui', trigger: 'validate' },
                { value: 'Non', label: 'Non', trigger: 'update-yes' },
              ],
            },

            {
              id: 'end',
              message: 'Ready?',
              trigger: 'ready',
            },
            {
              id: 'ready',
              options: [
                { value: 'Oui', label: 'Oui', trigger: 'end-message' },
                { value: 'Non', label: 'Non', trigger: 'update-yes' },
              ],
            },

            {
              id: 'update-yes',
              message: 'Que veux tu modifier?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Prénom', trigger: 'update-name' },
                { value: 'Tu veux', label: 'Tu veux', trigger: 'update-interest' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-interest',
              update: 'interest',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },
            {
              id: 'validate',
              component: <End />,
              asMessage: true,
              triger: 'update',
            },
            {
              id: 'end-message',
              message: 'Thanks! Your data was submitted successfully!',
             
            },
          ]}
       
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
