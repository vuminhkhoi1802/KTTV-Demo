import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

class SearchInput extends Component {
	state = {
		text: ''
	};

	handleChangeText = text => {
		this.setState({ text });
	};

	handleSubmitEditing = () => {
		if (!this.state.text) return;

		this.props.onSubmit(this.state.text);
		this.setState({ text: '' });
	};

	render() {
		return (
			<View style={styles.searchBar}>
				<TextInput
					value={this.state.text}
					autoCorrect={false}
					placeholder={this.props.placeholder}
					placeholderTextColor="#ffffff"
					underlineColorAndroid="transparent"
					style={styles.textInput}
					clearButtonMode="always"
					onChangeText={this.handleChangeText}
					onSubmitEditing={this.handleSubmitEditing}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	searchBar: {
		flex: 1,
		paddingTop: 10
	},
	textInput: {
		width: 300,
		height: 40,
		marginTop: 10,
		backgroundColor: '#666666',
		marginHorizontal: 20,
		paddingHorizontal: 10,
		alignSelf: 'center',
		color: '#ffffff'
	}
});

export default SearchInput;
