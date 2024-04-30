//import { useState } from 'react';
//import {
// ScrollView,
//View,
//Text,Image,TouchableOpacity,TextInput,const [cpf, setCpf] = useState('')
//  const [cpfField, setCpfField]=useState<string>('')
//} from 'react-native';
//import { styles } from './styles';

//'export default function App() {
//  'const [emailField, setEmailField] = useState<string>('');
//  'const [email, setEmail] = useState('');
//  'const [passwordField, setPasswordField] = useState<string>('');
//  'const [password, setPassword] = useState('');
  //Função do Esqueci minha senha
//  const handleForgotButton = () => {
//    setPassword('forgotPage');
//   password(setPassword);
//  };
  //Função do botao Entrar
//  const handleLoginButton = () => {
//    setEmail(emailField);
//    setPassword(passwordField);
//  };

  //Função do Cadastre-se
//  const handleSignUpButton = () => {};
//
//  return (
//    <ScrollView style={styles.scrollview}>
//      {email == '' && password == '' && (
//        <>
//          <View style={styles.container}>
//            <Image
//              style={styles.logo}
//              source={require('./assets/snack-icon.png')}
//            />
//            <Text style={styles.h1}>Sistema de Login</Text>
//            <Text style={styles.h2}>
//              Bem vindo(a)! Digite seus dados abaixo.
//            </Text>
//
//            <View style={styles.inputArea}>
//              <Text style={styles.inputLabel}>Email</Text>
//              <TextInput
//                style={styles.inputField}
//                placeholder="Digite seu email"
//                placeholderTextColor="#fff"
//                value={emailField}
//                onChangeText={(t) => setEmailField(t)}
//                autoCapitalize="none"
//                keyboardType="email-address"
//              />
//            </View>
//
//            <View style={styles.inputArea}>
//              <Text style={styles.inputLabel}>Senha</Text>
//              <TextInput
//                style={styles.inputField}
//                placeholder="**********"
//                placeholderTextColor="#fff"
//                value={passwordField}
//                onChangeText={(s) => setPasswordField(s)}
//                autoCapitalize="none"
//                secureTextEntry
//              />
//            </View>
//
//            <View style={styles.aditionals}>
//              <TouchableOpacity
//                style={styles.forgotBtnArea}
//                onPress={handleForgotButton}>
//                <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
//              </TouchableOpacity>
//            </View>
//
//            <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
//              <Text style={styles.buttonText}>Entrar</Text>
//            </TouchableOpacity>
//
//            <View style={styles.signUpArea}>
//              <Text style={styles.signUpText}>Não tem conta?</Text>
//              <TouchableOpacity onPress={handleSignUpButton}>
//                <Text style={styles.signUpBtnText}>Cadastre-se</Text>
//              </TouchableOpacity>
//            </View>
//
//            <View style={styles.footerArea}>
//              <Text style={styles.footerText}>Criado por Samuel Queiroz</Text>
//            </View>
//          </View>
//        </>
//      )}
//      {email && password != '' && (
//        <>
//          <ScrollView>
//            <View style={styles.container}>
//              <Image
//                style={styles.logo}
//                source={require('./assets/snack-icon.png')}
//              />
//              <Text style={styles.h1}>Banco do Ceará</Text>
//              <Text style={styles.h2}>Bem vindo(a) a sua conta</Text>
//              <View style={styles.inputArea}>
//                <Text style={styles.saldoArea}>Saldo: XXXXXX</Text>
//              </View>
//            </View>
//          </ScrollView>
//        </>
//      )}
//      {password == 'forgotPage' && (
//        <>
//          <Text>dwdw</Text>
//        </>
//      )}
//    </ScrollView>
//  );
//}
