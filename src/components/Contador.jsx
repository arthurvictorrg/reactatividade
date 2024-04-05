import React, { useState } from 'react';
import { View, Text, Button } from 'react-native-web';

const Contador = () => {
    const [state, setState] = useState(0);

    return (
        <View>
            <h3>Primeira Atividade</h3>
            <Text>Valor atual: {state}</Text>
            <Button
                onPress={() => setState(state + 1)}
                title="Incrementar"
            />
            <Button
                onPress={() => setState(state - 1)}
                title="Decrementar"
            />
        </View>
    );
}

export default Contador;
