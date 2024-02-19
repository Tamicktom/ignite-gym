//* Libraries imports
import { VStack, Image, Text, Center, Heading, Box, ScrollView, Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//* Components imports
import { Input } from "@components/Input";
import { Button } from "@components/Button";

//* Styles imports
import LogoSvg from "@assets/logo.svg"
import BackgroundImg from "@assets/background.png";

//* Hooks imports
import { useSignUp, signUpSchema, type SignUpProps } from "@hooks/mutations/useSignUp";

//* Types imports
import type { AuthNavigatorRoutesProps } from "@routes/auth.routes";

//* Local imports
import { AppError } from "@utils/AppError";

export function Signup() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    resolver: yupResolver(signUpSchema),
  });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const signUp = useSignUp();

  function handleSignUp(data: SignUpProps) {
    const castedData = signUpSchema.cast(data);

    signUp.mutate(castedData, {
      onSuccess: () => {
        console.log('SignUp success');
        Toast.show({
          title: 'Cadastro realizado com sucesso',
          duration: 3000,
          bgColor: 'green.500',
          placement: 'top',
        });
      },
      onError: (error) => {
        if (error instanceof AppError) {
          Toast.show({
            title: error.message,
            duration: 3000,
            bgColor: 'red.500',
            placement: 'top',
          });
        } else {
          Toast.show({
            title: 'Erro ao realizar o cadastro. Tente novamente mais tarde.',
            duration: 3000,
            bgColor: 'red.500',
            placement: 'top',
          });
        }
      },
    });
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

          <Box pt={8} w="full">
            <Button
              label="Criar e acessar"
              onPress={form.handleSubmit(handleSignUp)}
            />
          </Box>
        </Center>

        <Center pt={12}>
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