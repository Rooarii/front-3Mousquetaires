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
      wish: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, wish, interestChoice} = steps;

    this.setState({ name, wish, interestChoice });
  }

  render() {
    const { name, wish, interestChoice } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <div>
          <p>Si j'ai bien noté {name.value},</p>
          <p>Tu souhaites {wish.value}</p>
          <p>Et tu es intéressé par {interestChoice.value}</p>
          
        </div>
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
    const { name, wish, age, interestChoice} = steps;

    this.setState({ name, wish, age, interestChoice });
  }

  render() {
    const { name, wish, interestChoice } = this.state;
    return (
      
      <div style={{ width: '100%' }}>
        <p>{`${name.value},` }</p>
        <p>{`Pour trouver ce qu'il te faut ,vas sur l'icone ${interestChoice.value}`}</p>
        <p>{`Puis sur la section ${wish.value}`}</p>
        <p>A bientot !</p>
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
          //speechSynthesis={{ enable: true, lang: 'fr' }}
          recognitionEnable={true}
          steps={[
            // QUESTION 1
            {
              id: '1',
              message: "Bonjour, bienvenue chez Artilect ! Moi c’est Richard ! et toi ?",
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            //QUESTION 2
            {
              id: '3',
              message: `Super {previousValue}! commençons!
              Tu souhaites...`,
              trigger: 'wish',
            },
            {
              id: 'wish',
              options: [
                { value: 'Apprendre de nouvelles choses', label: 'Apprendre de nouvelles choses', trigger: 'new' },
                { value: 'Rejoindre un projet', label: 'Rejoindre un projet', trigger: 'join' },
                { value: 'Réserver une machine', label: 'Réserver une machine', trigger: 'domainChoiseForMachine' },
              ],
            },
            //QUESTION 3
            {
              id: 'new',
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

            //question 3bis
            {
              id: 'join',
              message: `Un projet, Oui ! Mais dans quel domaine ?`,
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


            {
              id: 'domainChoiseForMachine',
              message: `choisi ton domaine pour lequel tu veux louer une machine !`,
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

            {
              id: 'Machine',
              message: `Choisi ta machine`,
              trigger: 'machine',
            },


            {
              id: 'machine',
              options: [
                { value: 'Découpe laser', label: 'Découpe laser', trigger: '8' },
                { value: 'Imprimante 3D', label: 'Imprimante 3D', trigger: '8' },
                { value: 'Imprimante UV', label: 'Imprimante UV', trigger: '8' },
                { value: 'Sublimation', label: 'Sublimation', trigger: '8' },
                { value: 'Découpe Vinyle', label: 'Machines', trigger: '8' },
                { value: 'CNC', label: 'CNC', trigger: '8' },
                { value: 'Machine à coudre', label: 'Machine à coudre', trigger: '8' },
                { value: 'Recouvreuse', label: 'Recouvreuse', trigger: '8' },
                { value: 'Surjetteuse', label: 'Surjeutteuse', trigger: '8' },
                { value: 'Triple entrainement', label: 'Triple entrainement', trigger: '8' },
              ],
              trigger:'8',
             
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
              message: 'Super! Et si on faisait la point ?',
              trigger: 'review',
            },
            {
              id: '8',
              message: 'Super! Et si on faisait la point ?',
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
              message: 'Est-ce bien cela ?',
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
                { value: 'wish', label: 'Ce que je veux faire', trigger: 'update-interest' },
                { value: 'interestChoise', label: `Mon centre d'interet`, trigger: 'update-interestChoice' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-interest',
              update: 'wish',
              trigger: '7',
            },
            {
              id: 'update-interestChoice',
              update: 'interestChoice',
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
