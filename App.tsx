import React, {useState, useEffect} from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import {ImageSliders} from './components/ImageSlider.js'


const ImageSlider: React.FC = () => {
  const images = [
    require('./assets/Untitled.png'),
    require('./assets/vevetes.png'),
    require('./assets/iphone.png'),
    require('./assets/Frame1sato.png'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

   const [currentIndex1, setCurrentIndex1] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(intervalId); 
  }, [currentIndex]); 

  const nextSlide1 = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <View style={styles.sliderContainer}>
      <Image source={images[currentIndex]} style={styles.imageNext} />
      <TouchableOpacity style={styles.buttonImageNext} onPress={nextSlide }>
        <Image style={styles.imgNext} source={require('./assets/icons8-maior-que-30.png')} />
      </TouchableOpacity>
    </View>
  );
};


export default function App() {
  const [emailField, setEmailField] = useState('');
  const [email, setEmail] = useState('');
  const [passwordField, setPasswordField] = useState<string>('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [cpfField, setCpfField] = useState<string>('');
  const [name, setName] = useState('');
  const [nameField, setNameField] = useState<string>('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordField, setNewPasswordField] = useState<string>('');
  const [confiPassword, setConfiPassword] = useState('');
  const [confiPasswordField, setConfiPasswordField] = useState<string>('');
  const [singUp, setSingUp] = useState('');
  const [singUpField, setSingUpField] = useState<string>('');
  const [home, setHome] = useState('');
  const [homeField, setHomeField] = useState<string>('');
  const [singIn, setSingIn] = useState('');
  const [singInField, setSingInField] = useState<string>('');
  const [numBer, setNumber] = useState('');
  const [numberField, setNumberField] = useState<string>('');
  const [birth, setbirth] = useState('');
  const [birthField, setBirthField] = useState<string>('');
  const [pix, setPix] = useState('');
  const [pixField, setPixField] = useState<string>('');
  const [pagar, setPagar] = useState('');
  const [pagarField, setPagarField] = useState<string>('');
  const [confirPagar, setConfirPagar] = useState('');
  const [confirPagarField, setConfirPagarField] = useState<string>('');
  const [recarga, setRecarga] = useState('');
  const [recargaField, setRecargaField] = useState<string>('');



  const handleForgotButton = () => {
    setPassword('newPassword');
    setSingIn('0');
    setSingUp('0');
  };

  //Função do botao Entrar
  const handleLoginButton = () => {
    setSingIn('0');
    setPassword('0');
    setSingUp('0');
    setPassword('0');
    if (emailField == '1') {
      setEmail(emailField);
      setCpf(cpfField);
      setPassword(passwordField);
    } else {
      alert('Dados incorretos ou usuário não cadastrado.');
    }
  };

  const handleConfirmeButton = () => {
    setPassword('0');
    setSingUp('0');
    if (nameField != '' && emailField != '' && cpfField != '') {
      setName(nameField);
      setEmail(emailField);
      setCpf(cpfField);
    } else {
      alert('Não encontramos essa conta tente novamente');
    }
  };

  //Função do Cadastre-se
  const handleSignUpButton = () => {
    setSingUp('singUp');
    setPassword('0');
    setSingIn('0');
  };

  const handleSingInButton = () => {
    setSingIn('singIn');
    setPassword('0');
    setSingUp('0');
    setPassword('0');
  };

  const handleNewPasswordButton = () => {
    if (newPasswordField === confiPasswordField) {
      alert('Nova Senha Confirmada Com Sucesso');
      setEmail('');
      setPassword('');
    }
  };

  const handleVolteButton = () => {
    setEmail('');
    setPassword('');
    setSingUp('0');
    setSingIn('0');
    setPix('0');
    setPagar('0')
    setPix('0');
    setRecarga('0');
    setConfirPagar('')
    setPagar('')
  };

  const handleSingUpmeButton = () => {
    if (nameField != '' && emailField != '' && cpfField != '' && numberField != '') {
      alert('Conta Criada com Sucesso');
      setEmail('');
      setPassword('');
      setSingUp('0');
      setSingIn('0');
    } else {
      alert('Tente novamente');
    }
  };

  const handlePixButton = () => {
    setSingIn('0');
    setPassword('0');
    setSingUp('0');
    setPassword('0');
    setEmail('0')
    setPix('pix');
  };

  const handleRecargaButton = () => {
    setSingIn('0');
    setPassword('0');
    setSingUp('0');
    setPassword('0');
    setEmail('0')
    setPix('0');
    setRecarga('recarga')
  };

  const handleQrButton = () => {
  };

  const handlePagarButton = () => {
    if(pagarField != ''){
      setPagar(pagarField);
      setPix('0')
    }else{
      alert('Tente Novamente')
    }
  };

  const handlePagarConfiButton = () => {
    alert(`Pix feito com Sucesso de R$${confirPagarField}`)
    setEmail('1')
    setConfirPagar('')
    setPagar('')
  };

  return (
    <ScrollView style={styles.scrollview}>
      {email == '' && password == '' && (
        <>
          <View style={styles.container}>
            <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />

            <ImageSlider/> {ImageSliders}

            <View style={styles.inputSaldo}>
              <TouchableOpacity style={styles.buttonSingIn} onPress={handleSingInButton}>
                <Text style={styles.buttonText}>ENTRAR</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonSingUp} onPress={handleSignUpButton}>
                <Text style={styles.buttonText}>CADASTRE-SE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      {email == '1' && (
        <>
          <ScrollView>
            <View style={styles.container}>
              <TouchableOpacity onPress={handleVolteButton}>
                <Image style={styles.volte} source={require('./assets/icons8-undo-96.png')} />
              </TouchableOpacity>
              <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />
              <Text style={styles.h2}>Seja Bem Vindo a Sua Conta</Text>
              <View style={styles.saldo}>
                <Text style={styles.total}>Saldo</Text>
                <Text style={styles.total1}>1.000.000</Text>
              </View>

              <View style={styles.saldo}>
                <Text style={styles.total}>Criptos</Text>
                <Text style={styles.total1}>1 BND</Text>
              </View>
              
              <View style={styles.containerPix}>
                <View style={styles.pixButton}>
                  <TouchableOpacity  onPress={handlePixButton}>
                    <Image style={styles.pixButtonImage} source={require('./assets/icons8-foto-100.png')} />
                    <Text style={styles.pixText}>PIX</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.recargaButton}>
                    <TouchableOpacity  onPress={handleRecargaButton}>
                      <Image style={styles.pixButtonImage} source={require('./assets/icons8-pagamento-de-recarga-100.png')} />
                      <Text style={styles.recargaText}>RECARGA</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.qrButton}>
                    <TouchableOpacity  onPress={handleQrButton}>
                      <Image style={styles.qrButtonImage} source={require('./assets/icons8-qr-code-60.png')} />
                      <Text style={styles.qrText}>RECEBER</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
          </ScrollView>
        </>
      )}
      {password == 'newPassword' && (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleVolteButton}>
              <Image style={styles.volte} source={require('./assets/icons8-undo-96.png')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />
            <Text style={styles.h2}>Esqueçeu sua senha </Text>

            <View style={styles.inputSaldo}>
              <View style={styles.inputArea}>
                <Text style={styles.inputNewpassword}>Nome Completo</Text>
                <TextInput
                  style={styles.inputFieldNewpassword}
                  placeholder="Digite seu Nome Comapleto"
                  placeholderTextColor="#83006F"
                  value={nameField}
                  onChangeText={(t) => setNameField(t)}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.inputFieldNewpassword1}
                  placeholder="Exemplo@gmail.com"
                  placeholderTextColor="#83006F"
                  value={emailField}
                  onChangeText={(t) => setEmailField(t)}
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>CPF</Text>
                <TextInput
                  style={styles.inputFieldNewpassword}
                  placeholder="000.000.000-00"
                  placeholderTextColor="#83006F"
                  value={cpfField}
                  onChangeText={(t) => setCpfField(t)}
                  autoCapitalize="none"
                />
              </View>

              <TouchableOpacity style={styles.button} onPress={handleConfirmeButton}>
                <Text style={styles.buttonText}>Comfirme</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

      {name != '' && email != '' && cpf != '' && (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleVolteButton}>
              <Image style={styles.volte} source={require('./assets/icons8-undo-96.png')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />
            <Text style={styles.h2}>Crie Sua Nova Senha</Text>

            <View style={styles.inputSaldo}>
              <View style={styles.inputArea}>
                <Text style={styles.inputNewpassword}>Nova Senha</Text>
                <TextInput
                  style={styles.inputFieldNewpassword}
                  placeholder="********"
                  placeholderTextColor="#83006F"
                  value={newPasswordField}
                  onChangeText={(t) => setNewPasswordField(t)}
                  autoCapitalize="none"
                  secureTextEntry
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>Confirmar Senha</Text>
                <TextInput
                  style={styles.inputFieldConfirNewpassword}
                  placeholder="********"
                  placeholderTextColor="#83006F"
                  value={confiPasswordField}
                  onChangeText={(t) => setConfiPasswordField(t)}
                  autoCapitalize="none"
                  secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleNewPasswordButton}>
                  <Text style={styles.buttonText}>Confirme</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}
      {singUp == 'singUp' && (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleVolteButton}>
              <Image style={styles.volte} source={require('./assets/icons8-undo-96.png')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />
            <Text style={styles.h2}>Cadastre-se Aqui</Text>

            <View style={styles.inputSaldo}>
              <View style={styles.inputArea}>
                <Text style={styles.inputNewpassword}>Nome Completo</Text>
                <TextInput
                  style={styles.inputFieldNewpassword}
                  placeholder="Digite seu Nome Completo"
                  placeholderTextColor="#83006F"
                  value={nameField}
                  onChangeText={(t) => setNameField(t)}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.inputFieldNewpassword1}
                  placeholder="Exemplo@gmail.com"
                  placeholderTextColor="#83006F"
                  value={emailField}
                  onChangeText={(t) => setEmailField(t)}
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>CPF</Text>
                <TextInput
                  style={styles.inputFieldNewpassword}
                  placeholder="000.000.000-00"
                  placeholderTextColor="#83006F"
                  value={cpfField}
                  onChangeText={(t) => setCpfField(t)}
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>Numero</Text>
                <TextInput
                  style={styles.inputFieldNewpassword1}
                  placeholder="(00) 0000-0000"
                  placeholderTextColor="#83006F"
                  value={numberField}
                  onChangeText={(t) => setNumberField(t)}
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>Data de Nascimento</Text>
                <TextInput
                  style={styles.inputFieldNewpassword1}
                  placeholder="00/00/0000"
                  placeholderTextColor="#83006F"
                  value={birthField}
                  onChangeText={(t) => setBirthField(t)}
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>Senha</Text>
                <TextInput
                  style={styles.inputFieldNewpassword1}
                  placeholder="********"
                  placeholderTextColor="#83006F"
                  value={passwordField}
                  onChangeText={(t) => setPasswordField(t)}
                  autoCapitalize="none"
                  secureTextEntry
                />
              </View>

              <TouchableOpacity style={styles.buttonSING} onPress={handleSingUpmeButton}>
                <Text style={styles.buttonText}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

      {singIn == 'singIn' && (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleVolteButton}>
              <Image style={styles.volte} source={require('./assets/icons8-undo-96.png')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />
            <Text style={styles.h1}>Login</Text>
            <Text style={styles.h2}>Bem vindo(a)! caso tenha conta digite</Text>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Exemplo@gmail.com"
                placeholderTextColor="#83006F"
                value={emailField}
                onChangeText={(t) => setEmailField(t)}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>CPF</Text>
              <TextInput
                style={styles.inputField}
                placeholder="000.000.000-00"
                placeholderTextColor="#83006F"
                value={cpfField}
                onChangeText={(t) => setCpfField(t)}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput
                style={styles.inputField}
                placeholder="**********"
                secureTextEntry
                placeholderTextColor="#83006F"
                value={passwordField}
                onChangeText={(t) => setPasswordField(t)}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.aditionals}>
              <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
                <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.signUpArea}>
              <Text style={styles.signUpText}>Não tem conta?</Text>
              <TouchableOpacity onPress={handleSignUpButton}>
                <Text style={styles.signUpBtnText}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerArea}>
              <Text style={styles.footerText}>Criado por Ruan Almeida</Text>
            </View>
          </View>
        </>
      )}
      {pix == 'pix' && (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleVolteButton}>
              <Image style={styles.volte} source={require('./assets/icons8-undo-96.png')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />
            <Text style={styles.h1}>Área Pix</Text>
            <Text style={styles.h2}>Vai fazer um pix pra Quem ?</Text>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Pagar com Pix</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Chave-Aleatoria/Numero/Email"
                placeholderTextColor="#83006F"
                value={pagarField}
                onChangeText={(t) => setPagarField(t)}
                autoCapitalize="none"
              />
            </View>

            <TouchableOpacity style={styles.buttonPix} onPress={handlePagarButton}>
              <Text style={styles.buttonText}>Pagar</Text>
            </TouchableOpacity>

          </View>
        </>
        
      )}
      {pagar != '' && (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleVolteButton}>
              <Image style={styles.volte} source={require('./assets/icons8-undo-96.png')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />
            <Text style={styles.h1}>Confirmação do Valor</Text>
            
            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Valor do Pix</Text>
              <TextInput
                style={styles.inputField}
                placeholder="0,00"
                placeholderTextColor="#83006F"
                value={confirPagarField}
                onChangeText={(t) => setConfirPagarField(t)}
                autoCapitalize="none"
              />
            </View>
          
            <TouchableOpacity style={styles.buttonPix} onPress={handlePagarConfiButton}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>

          </View>
        </> 
      )}

      {recarga == 'recarga' && (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleVolteButton}>
              <Image style={styles.volte} source={require('./assets/icons8-undo-96.png')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />
            <Text style={styles.h1}>Área Pix</Text>
            <Text style={styles.h2}>Vai fazer um pix pra Quem ?</Text>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Pagar com Pix</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Chave-Aleatoria/Numero/Email"
                placeholderTextColor="#83006F"
                value={pagarField}
                onChangeText={(t) => setPagarField(t)}
                autoCapitalize="none"
              />
            </View>

            <TouchableOpacity style={styles.buttonPix} onPress={handleRecargaButton}>
              <Text style={styles.buttonText}>Pagar</Text>
            </TouchableOpacity>

          </View>
        </>
        
      )}
      {pagar != '' && (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleVolteButton}>
              <Image style={styles.volte} source={require('./assets/icons8-undo-96.png')} />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('./assets/RN-BANK-removebg-preview.png')} />
            <Text style={styles.h1}>Confirmação do Valor</Text>
            
            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Valor do Pix</Text>
              <TextInput
                style={styles.inputField}
                placeholder="0,00"
                placeholderTextColor="#83006F"
                value={confirPagarField}
                onChangeText={(t) => setConfirPagarField(t)}
                autoCapitalize="none"
              />
            </View>
          
            <TouchableOpacity style={styles.buttonPix} onPress={handleRecargaButton}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>

          </View>
        </> 
      )}
    </ScrollView>
  );
}