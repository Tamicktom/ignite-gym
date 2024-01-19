//* Libraries imports
import { VStack, Image, Text, Center, Heading, Box, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

//* Components imports
import { Input } from "@components/Input";
import { Button } from "@components/Button";

//* Local imports
import LogoSvg from "@assets/logo.svg"
import BackgroundImg from "@assets/background.png";

//* Types imports
import type { AuthNavigatorRoutesProps } from "@routes/auth.routes";

const signupSchema = yup.object({
  name: yup.string().required('Informe seu nome'),
  email: yup.string().email('E-mail inválido').required('Informe seu e-mail'),
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Informe sua senha'),
  password_confirmation: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Confirme sua senha').oneOf([yup.ref('password')], 'As senhas devem ser iguais')
}).required();

type FormDataProps = yup.InferType<typeof signupSchema>;

export function Signup() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    resolver: yupResolver(signupSchema)
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
                errorMessage={form.formState.errors.name?.message}
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
                errorMessage={form.formState.errors.email?.message}
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
                errorMessage={form.formState.errors.password?.message}
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
                errorMessage={form.formState.errors.password_confirmation?.message}
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