import React from 'react';
		import {StyleSheet, Text, View} from 'react-native';

		function App(): React.JSX.Element {
		  return (
			<View style={styles.Body}>
			  <Text style={styles.Title}>Universidad Técnica Nacional</Text>
			  <Text style={styles.SubTitle}>Introducción a React-Native</Text>
			</View>
		  );
		}

		const styles = StyleSheet.create({
		  Body: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		  },
		  Title: {
			fontSize: 22,
			fontWeight: '600',
			color: '#12155B',
		  },
		  SubTitle: {
			fontSize: 18,
			fontWeight: '500',
			color: '#000000',
		  },
		});

		export default App;	