import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TelaInicial } from '../../screens/TelaInicial/index';
import { User } from '../../screens/Usuario/Index';
import { Login } from '../../screens/Login/Index';
import InicialIcon from '../../img/cadeado.png';
import InicialIcon2 from '../../img/code.png';
import InicialIcon3 from '../../img/pix.png';


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
	TelaInicial: {};
	Login: {};
	User: {};

}

export function BottomTabRoutes() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
				tabBarInactiveTintColor: '#aaa',
				tabBarActiveTintColor: '#fff'
			}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={InicialIcon}
							style={{ tintColor: color, width: 30 }}
						/>
					)
				}}
				name="TelaInicial"
				component={TelaInicial}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={InicialIcon3}
							style={{ tintColor: color, width: 30 }}
						/>
					)
				}}
				name="Login"
				component={Login}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={InicialIcon2}
							style={{ tintColor: color, width: 30 }}
						/>
					)
				}}
				name="User"
				component={User}
			/>
		</Tab.Navigator>
	);
}