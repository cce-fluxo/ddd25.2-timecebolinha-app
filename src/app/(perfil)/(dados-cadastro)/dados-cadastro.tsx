import { TextInput, View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { atualizarUsuario } from "@/src/lib/api";

// o único redirecionamento aqui é pra tela de criar convênio, que ainda não foi criada, então vou esperar pra ver a estrutura de qm for fazer pra codar esse redirecionamento e nn atrapalhar, quer dizer, isso além do redirecionamento da header, que eu vou fazer 

export default function dadosCadastro(){
    const router = useRouter()
    const params = useLocalSearchParams()
    const [nome, setNome] = useState(String(params.nome ?? ''))
    const [email, setEmail] = useState(String(params.email ?? ''))
    const [celular, setCelular] = useState(String(params.celular ?? ''))
    const [cpf, setCpf] = useState(String(params.cpf ?? ''))
    function formatarData(valor: string): string {
    if (!valor || valor.includes('/')) return valor; // já formatado
    const d = new Date(valor);
    return `${String(d.getUTCDate()).padStart(2, '0')}/${String(d.getUTCMonth() + 1).padStart(2, '0')}/${d.getUTCFullYear()}`;
  }
    const [nascimento, setNascimento] = useState(formatarData(String(params.nascimento ?? '')))

    const [editandoNome, setEditandoNome] = useState(false)
    const [editandoEmail, setEditandoEmail] = useState(false)
    const [editandoCelular, setEditandoCelular] = useState(false)
    const [editandoCpf, setEditandoCpf] = useState(false)
    const [editandoNascimento, setEditandoNascimento] = useState(false)

        return(
        <View style={{flex:1}}>
            <TouchableOpacity onPress={()=> router.push("/(perfil)/perfil")}>
            <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../assets/images/DadosCadastroApp.png')}></Image>
            </TouchableOpacity>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
            {/* a parte da imagem de perfil vai ficar aqui em baixo */}
            <View className="flex justify-center items-center mt-10 -ml-2">

             <View className="w-12 h-12  bg-indigo-600 rounded-full justify-center items-center gap-0.5 flex-row">
                <Text className="text-white font-lato-bold text-2xl">{nome?.split(' ')[0]?.charAt(0).toUpperCase()}</Text>
                <Text className="text-white font-lato-bold text-2xl">{nome?.split(' ')[1]?.charAt(0).toUpperCase()}</Text>
                {/*usei a função split pra pegar as inicias de nome e sobrenome do usuário */}
             </View>
             
            </View>

            <View className="flex">
                <Text className="text-indigo-700 ml-10 mt-7">Dados pessoais</Text>
            </View>

            <View className="flex flex-col justify-start ml-3 mt-3.5 mx-4 items-stretch border border-gray-400 rounded-xl">
                {/* coluna com os textos */}
                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">Nome completo</Text>
                {editandoNome
                ? <TextInput className="ml-4 border-b border-indigo-400" value={nome} 
                    onChangeText={setNome} onBlur={async () => 
                        {
                            setEditandoNome(false)
                            await atualizarUsuario(Number(params.id), {no_usuario:nome})
                        }
                        
                } autoFocus />
                    : <Text className="ml-4">{nome}</Text>
                          }
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <TouchableOpacity onPress={()=> setEditandoNome(true)}>
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                    </TouchableOpacity>
                </View>
                </View>

                {/* final da primeira parte do retângulão do meio */}

                <View className="w-full h-0.5 bg-gray-300"></View>

                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">Email</Text>
                {editandoEmail
                    ? <TextInput className="ml-4 border-b border-indigo-400" value={email} 
                    onChangeText={setEmail} onBlur={async () => {
                        setEditandoEmail(false);
                        await atualizarUsuario(Number(params.id) , {email_usuario: email})
                    }} autoFocus keyboardType="email-address"
                    autoCapitalize="none" />
                              : <Text className="ml-4">{email}</Text>
                          }
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <TouchableOpacity onPress={()=> setEditandoEmail(true)}>
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                    </TouchableOpacity>
                </View>
                </View>

                {/* data de nascimento */}

                <View className="w-full h-0.5 bg-gray-300"></View>

                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">Data de nascimento</Text>
                {editandoNascimento
                ? <TextInput className="ml-4 border-b border-indigo-400" value={nascimento} onChangeText={setNascimento} onBlur={async() => {
                    setEditandoNascimento(false);
                    await atualizarUsuario(Number(params.id), {data_nascimento: nascimento})
                }} autoFocus keyboardType="numeric" />
                    : <Text className="ml-4">{nascimento}</Text>
            }
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <TouchableOpacity onPress={()=> setEditandoNascimento(true)}>
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                    </TouchableOpacity>
                </View>
                </View>

                <View className="w-full h-0.5 bg-gray-300"></View>

                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">Número de celular</Text>
                {editandoCelular
                ? <TextInput className="ml-4 border-b border-indigo-400" value={celular} onChangeText={setCelular} onBlur={async()=>{
                    setEditandoCelular(false);
                    await atualizarUsuario(Number(params.id), {nu_celular: celular})
                }} autoFocus keyboardType="phone-pad" />
                : <Text className="ml-4">{celular}</Text>
            }
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <TouchableOpacity onPress={()=> setEditandoCelular(true)}>
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                    </TouchableOpacity>
                </View>
                </View>

                <View className="w-full h-0.5 bg-gray-300"></View>

                {/* cpf */}

                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">CPF</Text>
                {editandoCpf
                              ? <TextInput className="ml-4 border-b border-indigo-400" value={cpf} 
                            onChangeText={setCpf} onBlur={async() => {
                                setEditandoCpf(false);
                                await atualizarUsuario(Number(params.id), {cpf:cpf})
                            }} autoFocus keyboardType="numeric" />
                              : <Text className="ml-4">{cpf}</Text>
                          }
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <TouchableOpacity onPress={()=> setEditandoCpf(true)}>
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            {/*então, como ainda não tem a tela do convênio não vou mexer nessa parada por enquanto */}
                <Text className="mt-5 ml-8 text-indigo-700">Convênio Médico</Text>

                <View className="flex flex-col overflow-hidden justify-start ml-3 mt-3.5 mx-4 items-stretch border border-gray-400 rounded-xl"> 
                    {/* esse overflow-hidden coloca o backgorund dentro da caixinha dele */}
                <View className="-ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-black ml-8 mt-2">Amil</Text>
                <Text className="w-15 ml-8 text-gray-500 text-sm">00/00/00</Text>
                <Text className="w-15 ml-8 text-gray-500 text-sm">019032367-09</Text>
                <View className="relative">
                    <View className="flex-row justify-end mr-1 absolute -top-6 right-0">                                                
                    <Image style={{width:25, height:25}} resizeMode="contain"                                                       
                    source={require('../../../../assets/images/BotaoDeEditar.png')} />
                    </View>
                    <View className="w-[94%] ml-5 h-0.5 bg-indigo-500"></View>
                    <View className="flex px-3 py-5 h-2 w-full justify-center items-center text-indigo-700 gap-2 self-stretch bg-white border border-indigo-500">
                        <TouchableOpacity
                        onPress={()=> console.log('clicou')}
                        className="bg-white w-[80%] ml-2 px-4 py-2 rounded-lg">
                            <Text className="text-indigo-500 font-bold text-center">Adicionar Convênio</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View> 
                    </View>
                </View>
    )
}