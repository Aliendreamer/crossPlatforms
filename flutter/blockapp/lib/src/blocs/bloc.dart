import 'dart:async';
import "validators.dart";
import "package:rxdart/rxdart.dart";

class Block with Validators {
  final _emailController = BehaviorSubject<String>();
  final _passwordController = BehaviorSubject<String>();

  Function(String) get changeMail => _emailController.sink.add;
  Function(String) get changePassword => _passwordController.sink.add;
  Stream<String> get email => _emailController.stream.transform(validateEmail);
  Stream<String> get password =>
      _passwordController.stream.transform(validatePassword);

  Stream<bool> get submitValid =>
      Observable.combineLatest2(email, password, (e, p) => true);

  submit() {
    final validEmail = _emailController.value;
    final validPassword = _passwordController.value;
    print('email $validEmail password: $validPassword');
  }

  Future<void> dispose() async {
    _emailController.close();
    _passwordController.close();
  }
}
