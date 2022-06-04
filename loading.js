import Text from 'react-native'

export default class Loading extends React.Component{
    componentDidMount() {
        this.checkIfLoggedIn();
      }
    
      checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.props.navigation.navigate("DashboardScreen");
          } else {
            this.props.navigation.navigate("LoginScreen");
          }
        });
      };
render(){

    return(
        <Text>Loading</Text>
    )
}










}