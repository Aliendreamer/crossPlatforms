import 'package:flutter/material.dart';
import 'screens/login_screen.dart';

class App extends StatelessWidget {
  const App({Key key}) : super(key: key);

  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'log me',
        home: Scaffold(
          body: LoginScreen(),
        ));
  }
}
