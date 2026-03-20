import { increment, decrement } from "@/src/store/slices/counter"
import { RootState } from "@/src/store/store"
import { router } from "expo-router"
import { View, Button, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"

export const Home = () => {
    const valorDoContador = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <View>
            <Button
                title="+"
                onPress={() => dispatch(increment())}
            />
            <Button
                title="-"
                onPress={() => dispatch(decrement())}
            />
            <Button
                title="Navega para outra tela"
                onPress={() => router.navigate("/details")}
            />
            <Text>{valorDoContador}</Text>
        </View>

    )
}