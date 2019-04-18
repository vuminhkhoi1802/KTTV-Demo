import React from 'react';
import {
	Platform,
	View,
	Text,
	Image,
	StyleSheet,
	FlatList,
	ActivityIndicator,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { AppColors } from '@app/config';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';

export default class StationsDetailScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Tin chi tiết')
			// header: null
		};
	};

	render() {
		const widthArray = Platform.OS === 'ios' ? [100, 300] : [100, 400];

		let address;
		if (
			this.props.navigation.state.params.item.river__river_name === null ||
			this.props.navigation.state.params.item.ward === ''
		) {
			address = `${this.props.navigation.state.params.item.district__district_name}, ${this.props.navigation.state
				.params.item.province__province_name}`;
		} else {
      address = `(${this.props.navigation.state.params.item.river__river_name}) - ${this.props.navigation.state.params
        .item.ward__ward_name}, ${this.props.navigation.state.params.item.district__district_name}, ${this
        .props.navigation.state.params.item.province__province_name}`
    }
		// Declare the Table Data Arrays
		const stationData = [
			[
				'Tên trạm',
				`${this.props.navigation.state.params.item.station_code} - ${this.props.navigation.state.params.item
					.station_name} - ${this.props.navigation.state.params.item.station_type__station_type_name}`
			],
			[
				'Địa chỉ', address
			],
			[
				'Toạ độ',
				`${this.props.navigation.state.params.item.longitude} - ${this.props.navigation.state.params.item
					.latitude}`
			],
			[ 'Trạng thái', this.props.navigation.state.params.item.status ],
			[ 'Ghi chú', '' ]
		];
		const dataLoggerData = [
			[ 'Sensor', this.props.navigation.state.params.item.sensor_id ],
			[ 'Cấu hình', this.props.navigation.state.params.item.configuration ],
			[ 'Modem', this.props.navigation.state.params.item.modem ],
			[ 'Version', this.props.navigation.state.params.item.version ],
			[ 'Firmware', this.props.navigation.state.params.item.firmware ],
			[ 'Trạng thái', this.props.navigation.state.params.item.status ]
		];
		return (
			<ScrollView style={{ flex: 1 }}>
				<View style={styles.container2}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 14,
							padding: 10
						}}
					>
						Thông tin Trạm
					</Text>
					<Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
						<Rows
							data={stationData}
							textStyle={styles.subContentText}
							widthArr={[100, Dimensions.get ('window').width - 110]}

						/>
					</Table>
					<View style={styles.container2}>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 14,
								padding: 10
							}}
						>
							Thông tin DataLogger
						</Text>
						<Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
							<Rows
								data={dataLoggerData}
								textStyle={styles.subContentText}
								widthArr={[ 100, Dimensions.get('window').width - 110 ]}
							/>
						</Table>
					</View>
				</View>
			</ScrollView>
		);
		// }
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		alignItems:'center',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: 'white',
		marginTop: Platform.OS == 'ios' ? 0 : 20
		// padding: 10,
		// paddingBottom: 20
	},
	container: {
		backgroundColor: AppColors.primary,
		flex: 1,
		padding: 10,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		borderBottomWidth: 0.3
	},
	container2:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	item: {
		margin: 5,
		flexDirection: 'column',
		borderBottomColor: '#080808',
		borderBottomWidth: 0.3
		// paddingTop: 10
	},
	subItem: {
		margin: 5,
		flexDirection: 'row'
	},
	title: {
		color: AppColors.black,
		fontSize: 40,
		fontWeight: 'bold'
	},
	created_at: {
		marginTop: 10,
		color: AppColors.grey,
		fontSize: 15
	},
	content: {
		marginTop: 15,
		color: AppColors.black,
		fontSize: 22
	},
	img: {
		width: 125,
		height: 110,
		marginRight: 5,
		marginLeft: 5
	},
	backBtn: {
		color: AppColors.button,
		backgroundColor: AppColors.buttonText
	},
	text: {
		color: AppColors.black,
		fontSize: 16,
		marginTop: 5,
		marginLeft: 5
		// width: Dimensions.get("window").width - 200
	},
	contentText: {
		color: 'black',
		fontSize: 16,
		padding: 10,
		fontWeight: '700'
	},
	subContentText: {
		color: 'black',
		fontSize: 14,
		padding: 15
	},
	subContentTextV2: {
		color: 'black',
		fontSize: 14,
		width: Dimensions.get('window').width - 120,
		margin: 9
	},
	separator: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: AppColors.grey
	},
	headText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		marginTop: 20,
		paddingTop: 20
	},
	head: {
		height: 40,
		backgroundColor: '#f1f8ff'
	}
});
