import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import * as Yup from 'yup';
import BotaoPadrao from '../../components/BotaoPadrao';
import HeaderLogin from '../../components/HeaderLogin';
import { InputBar } from '../../components/InputsCadastro';
import { criarPaciente } from '../../lib/api';
import * as path from 'node:path';

const registerSchema = Yup.object().shape({

  rg: Yup.string()
    .min(5, 'RG inválido')
    .required('RG é obrigatório'),

  nome: Yup.string()
    .min(2, 'Nome muito curto')
    .required('Nome é obrigatório'),

  sobrenome: Yup.string()
    .min(2, 'Sobrenome muito curto')
    .required('Sobrenome é obrigatório'),

  dia: Yup.number()
    .typeError('Inválido')
    .min(1, 'Inválido')
    .max(31, 'Inválido')
    .required('Obrigatório'),

  mes: Yup.number()
    .typeError('Inválido')
    .min(1, 'Inválido')
    .max(12, 'Inválido')
    .required('Obrigatório'),

  ano: Yup.number()
    .typeError('Inválido')
    .min(1900, 'Inválido')
    .max(new Date().getFullYear(), 'Inválido')
    .required('Obrigatório'),

  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),

  cpf: Yup.string()
    .matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, 'CPF inválido')
    .required('CPF é obrigatório'),

  celular: Yup.string()
    .matches(/^\(?\d{2}\)?[\s-]?9?\d{4}-?\d{4}$/, 'Número inválido')
    .required('Celular é obrigatório'),

  senha: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('Senha é obrigatória'),

  confirmarSenha: Yup.string()
    .oneOf([Yup.ref('senha')], 'As senhas não coincidem')
    .required('Confirme sua senha'),
});

const initialValues = {
  rg: '',
  nome: '',
  sobrenome: '',
  dia: '',
  mes: '',
  ano: '',
  email: '',
  cpf: '',
  celular: '',
  senha: '',
  confirmarSenha: '',
};

export default function RegisterScreen() {
    const router = useRouter();
    const [erroServidor, setErroServidor] = React.useState('')

    async function handleSubmit(values: typeof initialValues) {
       setErroServidor('')

       try{
        const resultado = await criarPaciente({
            rg:values.rg,
            usuario: {
                no_usuario: `${values.nome} ${values.sobrenome}`,
                email_usuario: values.email,
                senha_usuario: values.senha,
                cpf: values.cpf,
                nu_celular: values.celular,
                genero: 'NaoInformado',
                data_nascimento: `${values.ano}-${values.mes}-${values.dia}`
            }
        });
        router.push({
            pathname: '/(perfil)/(dados-cadastro)/dados-cadastro', // pagina que ele entrar quando o usuário se cadastrar
            params:{
                id: resultado.id_usuario,
                nome: `${values.nome} ${values.sobrenome}`,
                email: values.email,
                celular: values.celular,
                cpf: values.cpf,
                nascimento: `${values.dia}/${values.mes}/${values.ano}`
            }
        })
       } catch(errror:any){
        const mensagem = errror?.message ?? 'Erro ao criar conta. Tente novamente'
        setErroServidor(mensagem)
       }
    }

    return (
        <ScrollView className="flex-1 bg-white">  
            <View className="flex items-center justify-center h-40 w-full">
                <HeaderLogin></HeaderLogin>
            </View>
            <ScrollView
            className="flex-1"
            contentContainerClassName="px-6 pt-8 pb-12"
            >
            <Text className="text-lg font-bold text-black mb-6 ">
                Crie sua conta
            </Text>

            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={handleSubmit}
            >
                {({
                handleChange,
                handleBlur,
                handleSubmit: formikSubmit,
                values,
                errors,
                touched,
                }) => (
                <View>

                    {/* RG */}
                    <InputBar
                    placeholder="RG"
                    value={values.rg}
                    onChangeText={handleChange('rg')}
                    onBlur={handleBlur('rg')}
                    error={errors.rg}
                    touched={touched.rg}
                    keyboardType="numeric"
                    maxLength={10}
                    returnKeyType="next"
                    />

                    {/* Nome */}
                    <InputBar
                    placeholder="Nome"
                    value={values.nome}
                    onChangeText={handleChange('nome')}
                    onBlur={handleBlur('nome')}
                    error={errors.nome}
                    touched={touched.nome}
                    autoCapitalize="words"
                    returnKeyType="next"
                    />

                    {/* Sobrenome */}
                    <InputBar
                    placeholder="Sobrenome"
                    value={values.sobrenome}
                    onChangeText={handleChange('sobrenome')}
                    onBlur={handleBlur('sobrenome')}
                    error={errors.sobrenome}
                    touched={touched.sobrenome}
                    autoCapitalize="words"
                    returnKeyType="next"
                    />

                    {/* Data de nascimento — Dia / Mês / Ano */}
                    <View className="flex-row items-start mb-0">
                    <View className="flex-[2]">
                        <InputBar
                        placeholder="Dia"
                        value={values.dia}
                        onChangeText={handleChange('dia')}
                        onBlur={handleBlur('dia')}
                        error={errors.dia}
                        touched={touched.dia}
                        keyboardType="numeric"
                        maxLength={2}
                        returnKeyType="next"
                        />
                    </View>

                    <Text className="text-lg text-neutral-400 px-2 mt-3">/</Text>

                    <View className="flex-[2]">
                        <InputBar
                        placeholder="Mês"
                        value={values.mes}
                        onChangeText={handleChange('mes')}
                        onBlur={handleBlur('mes')}
                        error={errors.mes}
                        touched={touched.mes}
                        keyboardType="numeric"
                        maxLength={2}
                        returnKeyType="next"
                        />
                    </View>

                    <Text className="text-lg text-neutral-400 px-2 mt-3">/</Text>

                    <View className="flex-[3]">
                        <InputBar
                        placeholder="Ano"
                        value={values.ano}
                        onChangeText={handleChange('ano')}
                        onBlur={handleBlur('ano')}
                        error={errors.ano}
                        touched={touched.ano}
                        keyboardType="numeric"
                        maxLength={4}
                        returnKeyType="next"
                        />
                    </View>
                    </View>

                    {/* E-mail */}
                    <InputBar
                    placeholder="E-mail"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={errors.email}
                    touched={touched.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="next"
                    />

                    {/* CPF */}
                    <InputBar
                    placeholder="CPF"
                    value={values.cpf}
                    onChangeText={handleChange('cpf')}
                    onBlur={handleBlur('cpf')}
                    error={errors.cpf}
                    touched={touched.cpf}
                    keyboardType="numeric"
                    maxLength={14}
                    returnKeyType="next"
                    />

                    {/* Celular */}
                    <InputBar
                    placeholder="Número de celular"
                    value={values.celular}
                    onChangeText={handleChange('celular')}
                    onBlur={handleBlur('celular')}
                    error={errors.celular}
                    touched={touched.celular}
                    keyboardType="phone-pad"
                    maxLength={15}
                    returnKeyType="next"
                    />

                    {/* Senha */}
                    <InputBar
                    placeholder="Senha"
                    value={values.senha}
                    onChangeText={handleChange('senha')}
                    onBlur={handleBlur('senha')}
                    error={errors.senha}
                    touched={touched.senha}
                    isPassword
                    returnKeyType="next"
                    />

                    {/* Confirmar senha */}
                    <InputBar
                    placeholder="Confirmar senha"
                    value={values.confirmarSenha}
                    onChangeText={handleChange('confirmarSenha')}
                    onBlur={handleBlur('confirmarSenha')}
                    error={errors.confirmarSenha}
                    touched={touched.confirmarSenha}
                    isPassword
                    returnKeyType="done"
                    />

                    {erroServidor ? <Text className="text-red-500 text-sm mt-2">{erroServidor}</Text> : null}

                    {/*Botões Criar Conta e Voltar*/}
                    <View className="flex-1 w-full flex-row gap-4 mt-6">
                        <View className='flex-1'>
                            <BotaoPadrao texto="Voltar" tipo={3} onPress={() => router.push('/')}></BotaoPadrao>
                        </View>
                        <View className='flex-1'>
                            <BotaoPadrao texto="Criar Conta" tipo={1} onPress={()=>{
                                formikSubmit();
                                console.log('clicou');
                            }}></BotaoPadrao>
                        </View>                    
                    </View>
                </View>
                )}
            </Formik>
            </ScrollView>
        </ScrollView>
        //onPress={formikSubmit}     
    );
}