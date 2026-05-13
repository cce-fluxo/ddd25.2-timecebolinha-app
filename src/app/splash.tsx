import { useEffect, useRef } from "react";
import {Animated, View, Text, Easing} from "react-native"
import { router } from "expo-router";
import Sorri from '../components/Sorri';
import BackgroundAzul from "../components/BackgroundAzul";
import SorrisoCentralizado from "../components/SorrisoCentralizado";
import SorrisoNoCanto from "../components/SorrisoNoCanto";
import SorrisoPiscando from "../components/SorrisoPiscando";
import SorriSync from "../components/SorriSync";
import SorriSyncBranco from "../components/SorriSyncBranco";
import SorriSyncEmCima from "../components/SorriSyncEmCima";

const elements = [
    <BackgroundAzul></BackgroundAzul>,
    <SorrisoCentralizado></SorrisoCentralizado>,
    <SorrisoPiscando></SorrisoPiscando>,
    <SorrisoCentralizado></SorrisoCentralizado>,
    <SorrisoNoCanto></SorrisoNoCanto>,
    <Sorri></Sorri>,
    <SorriSync></SorriSync>, 
    <SorriSyncBranco></SorriSyncBranco>,
    <SorriSyncEmCima></SorriSyncEmCima>
]

function AnimatedItem({children, delay} : {children : React.ReactNode; delay: number}){
    const opacity = useRef(new Animated.Value(0)).current
    const scale = useRef(new Animated.Value(1.04)).current

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1, 
                duration: 500, 
                delay, 
                easing: Easing.inOut(Easing.cubic), 
                useNativeDriver: true
            }),
            Animated.delay(300), 
            Animated.timing(opacity, {
                toValue: 0, 
                duration:500, 
                easing: Easing.inOut(Easing.cubic), 
                useNativeDriver:  true,
            }),
        ]).start();
    },[]);

    return(
        <Animated.View style={{position: 'absolute' , width: '100%' , height: '100%' , opacity, transform:[{scale}] }}>{children}</Animated.View>
    )
}

export default function splashScreen(){
    useEffect(()=> {
        const totalDuration = 7500; // tempo total que a animação vai aparecer na tela
        const timer = setTimeout(() => {
            router.replace('/login')
        }, totalDuration)
        return()=> clearTimeout(timer)
    }, [])
    return(
        <View style={{flex:1}}>
        {elements.map((element, index) => (
            <AnimatedItem key={index} delay={index*600}>{element}</AnimatedItem>
        ))}
        </View>
    )
}