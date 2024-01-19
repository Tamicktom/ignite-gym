//* Libraries imports
import { VStack, Image, Text, Center, Heading, Box, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form';

//* Components imports
import { Input } from "@components/Input";
import { Button } from "@components/Button";

//* Local imports
import LogoSvg from "@assets/logo.svg"
import BackgroundImg from "@assets/background.png";

//* Types imports
import type { AuthNavigatorRoutesProps } from "@routes/auth.routes";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export function Signup() {
  const form = useForm<FormDataProps>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignUp(data: FormDataProps) {
    console.log(data);
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          // height="100%"
          // width="100%"
          position="absolute"
        />
        <Center py={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" pb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Controller
            control={form.control}
            name="name"
            render={(props) => (
              <Input
                placeholder="Nome"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={props.field.onChange}
                onBlur={props.field.onBlur}
                value={props.field.value}
              />
            )}
          />

          <Controller
            control={form.control}
            name="email"
            render={(props) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={props.field.onChange}
                onBlur={props.field.onBlur}
                value={props.field.value}
              />
            )}
          />

          <Controller
            control={form.control}
            name="password"
            render={(props) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={props.field.onChange}
                onBlur={props.field.onBlur}
                value={props.field.value}
              />
            )}
          />

          <Controller
            control={form.control}
            name="password_confirmation"
            render={(props) => (
              <Input
                placeholder="Confirmação de senha"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={props.field.onChange}
                onBlur={props.field.onBlur}
                value={props.field.value}
                onSubmitEditing={form.handleSubmit(handleSignUp)}
                returnKeyType="send"
              />
            )}
          />

          <Box pt={6} w="full">
            <Button
              label="Criar e acessar"
              onPress={form.handleSubmit(handleSignUp)}
            />
          </Box>
        </Center>

        <Center pt={24}>
          <Button
            label="Voltar para o login"
            variant="outline"
            onPress={() => navigation.navigate('SignIn')}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}