import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";

import COLORS from "../constants/Colors";

const Button = props => {
    return (
        <Animated.View style={props.buttonStyle}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 12,
        color: COLORS.red,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
        padding: 50,
        fontWeight: "bold"
    }
});

export default Button;