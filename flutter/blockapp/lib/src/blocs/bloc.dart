import 'dart:async';
import "validators.dart";

class Block with Validators {
  final _emailController = StreamController<String>();
  final _passwordController = StreamController<String>();

  Function(String) get changeMail => _emailController.sink.add;
  Function(String) get changePassword => _passwordController.sink.add;
  Stream<String> get email => _emailController.stream.transform(validateEmail);
  Stream<String> get password =>
      _passwordController.stream.transform(validatePassword);

  Future<void> dispose() async {
    _emailController.close();
    _passwordController.close();
  }
}
